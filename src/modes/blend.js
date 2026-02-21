/**
 * Blend It! Mode
 *
 * Core loop:
 * 1. Show the word image (emoji)
 * 2. Sequentially reveal each phoneme tile with its sound
 * 3. After all phonemes revealed, say the full blended word
 * 4. Child self-assesses or uses mic to check pronunciation
 */

import { renderPhonemes, renderWordImage } from '../components/phonemeDisplay.js';
import { buildWordAnimation } from '../components/wheel.js';
import { audio } from '../modules/audio.js';
import { store } from '../modules/store.js';

/** @type {import('../data/words.js').Word|null} */
let currentWord = null;
let revealedCount = 0;
let blendStartTime = 0;
let isRevealing = false;

/**
 * Set up Blend It mode for a word.
 * @param {import('../data/words.js').Word} word
 * @param {object} els  DOM element references
 */
export function setupBlend(word, els) {
  currentWord = word;
  revealedCount = 0;
  blendStartTime = Date.now();
  isRevealing = false;

  // Show image
  renderWordImage(word, els.wordEmoji, true);

  // Instruction
  els.modeInstruction.textContent = 'Listen to each sound, then blend them together!';

  // Set up phoneme row (initially all hidden)
  renderPhonemes(word, els.phonemeRow, {
    showDiacritics: true,
    revealedIndices: [],
  });

  // Mode area: blend timer / play buttons
  els.modeArea.innerHTML = `
    <div style="display:flex; flex-direction:column; align-items:center; gap:var(--space-4);">
      <button class="btn btn--primary btn--xl" id="btn-reveal-next" aria-label="Reveal next sound">
        Reveal Sound 🔊
      </button>
      <div class="blend-progress" aria-live="polite" id="blend-progress">
        Sound 0 of ${word.graphemes.length}
      </div>
    </div>
  `;

  // Show action buttons
  els.btnCheck.style.display = 'none';
  els.btnSayIt.style.display = 'none';
  els.btnSkip.style.display = '';

  // Bind reveal button
  document.getElementById('btn-reveal-next')?.addEventListener('click', () => {
    revealNextPhoneme(word, els);
  });

  // Auto-reveal if autoplay is on
  if (store.get('autoplay')) {
    setTimeout(() => revealNextPhoneme(word, els), 600);
  }
}

async function revealNextPhoneme(word, els) {
  if (isRevealing || revealedCount >= word.graphemes.length) return;
  isRevealing = true;

  revealedCount++;

  // Update phoneme display
  const revealed = Array.from({ length: revealedCount }, (_, i) => i);
  renderPhonemes(word, els.phonemeRow, {
    showDiacritics: true,
    revealedIndices: revealed,
  });

  // Play the phoneme sound
  const idx = revealedCount - 1;
  await audio.speakPhoneme(word.graphemes[idx], word.types[idx]);

  // Update progress text
  const progressEl = document.getElementById('blend-progress');
  if (progressEl) {
    progressEl.textContent = `Sound ${revealedCount} of ${word.graphemes.length}`;
  }

  // All revealed?
  if (revealedCount >= word.graphemes.length) {
    await onAllRevealed(word, els);
  }

  isRevealing = false;

  // Auto-continue if autoplay
  if (store.get('autoplay') && revealedCount < word.graphemes.length) {
    setTimeout(() => revealNextPhoneme(word, els), 400);
  }
}

async function onAllRevealed(word, els) {
  // Build the word animation
  buildWordAnimation(word, els.wordDisplay, (i) => {
    audio.playSfx('pop');
  });

  // Update phoneme row: show all with diacritics
  renderPhonemes(word, els.phonemeRow, {
    showDiacritics: true,
    showLabels: true,
    revealedIndices: null, // all
  });

  // Short pause then say the full word
  await new Promise(r => setTimeout(r, 600));
  await audio.speakWord(word.word);

  // Update mode area with self-assess buttons
  els.modeArea.innerHTML = `
    <div style="display:flex; flex-direction:column; align-items:center; gap:var(--space-4);">
      <p style="font-size:var(--font-size-lg); font-weight:700; color:var(--text);">
        Did you blend it right?
      </p>
      <div style="display:flex; gap:var(--space-4);">
        <button class="btn btn--success btn--xl" id="btn-self-yes" aria-label="Yes, I got it!">
          Yes! ✓
        </button>
        <button class="btn btn--ghost btn--xl" id="btn-self-no" aria-label="Not quite, try again">
          Not yet
        </button>
      </div>
    </div>
  `;

  // Show Say It button
  els.btnSayIt.style.display = '';

  blendStartTime = Date.now() - blendStartTime;

  document.getElementById('btn-self-yes')?.addEventListener('click', () => {
    els.onResult(true, blendStartTime);
  });

  document.getElementById('btn-self-no')?.addEventListener('click', () => {
    els.onResult(false, blendStartTime);
  });
}

/**
 * Get the current word for this mode.
 * @returns {import('../data/words.js').Word|null}
 */
export function getCurrentWord() {
  return currentWord;
}

export function cleanup() {
  currentWord = null;
  revealedCount = 0;
  isRevealing = false;
}
