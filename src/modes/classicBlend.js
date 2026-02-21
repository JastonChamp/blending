/**
 * Classic Blend Mode  (teacher demo / "previous" blending mode)
 *
 * Shows the whole word immediately with all phoneme tiles visible,
 * then auto-plays each phoneme sound in sequence and finally says
 * the complete blended word — no button-per-sound needed.
 *
 * Ideal for whole-class modelling:  teacher presses Play, children listen
 * and join in, then self-assess.
 */

import { renderPhonemes, renderWordImage } from '../components/phonemeDisplay.js';
import { audio } from '../modules/audio.js';
import { store } from '../modules/store.js';

/** @type {import('../data/words.js').Word|null} */
let currentWord = null;
let isPlaying = false;
let startTime = 0;

/**
 * Set up Classic Blend mode for a word.
 * @param {import('../data/words.js').Word} word
 * @param {object} els  DOM element references
 */
export function setupClassicBlend(word, els) {
  currentWord = word;
  isPlaying = false;
  startTime = Date.now();

  // Show word image
  renderWordImage(word, els.wordEmoji, true);

  // Instruction
  els.modeInstruction.textContent = 'Listen to each sound — then blend!';

  // Show ALL phoneme tiles immediately (all revealed)
  renderPhonemes(word, els.phonemeRow, {
    showDiacritics: true,
    showLabels: true,
    revealedIndices: null, // all visible
  });

  // Build the mode area
  _renderControls(els, word);

  // Hide check / say-it buttons; show skip
  els.btnCheck.style.display = 'none';
  els.btnSayIt.style.display = 'none';
  els.btnSkip.style.display = '';

  // Auto-play if autoplay setting is on
  if (store.get('autoplay')) {
    setTimeout(() => _playSounds(word, els), 500);
  }
}

function _renderControls(els, word, played = false) {
  els.modeArea.innerHTML = `
    <div style="display:flex; flex-direction:column; align-items:center; gap:var(--space-4);">
      <div style="display:flex; gap:var(--space-3); flex-wrap:wrap; justify-content:center;">
        <button class="btn btn--primary btn--xl" id="btn-classic-play" aria-label="Play all sounds">
          ▶ Play Sounds
        </button>
        ${played ? `
        <button class="btn btn--ghost btn--xl" id="btn-classic-again" aria-label="Play again">
          🔁 Again
        </button>
        ` : ''}
      </div>
      ${played ? `
      <div style="display:flex; gap:var(--space-4); margin-top:var(--space-2);">
        <button class="btn btn--success btn--xl" id="btn-self-yes" aria-label="Yes, I blended it!">
          Yes! ✓
        </button>
        <button class="btn btn--ghost btn--xl" id="btn-self-no" aria-label="Not quite yet">
          Not yet
        </button>
      </div>
      ` : ''}
    </div>
  `;

  document.getElementById('btn-classic-play')?.addEventListener('click', () => {
    _playSounds(word, els);
  });

  document.getElementById('btn-classic-again')?.addEventListener('click', () => {
    _playSounds(word, els);
  });

  document.getElementById('btn-self-yes')?.addEventListener('click', () => {
    els.onResult(true, Date.now() - startTime);
  });

  document.getElementById('btn-self-no')?.addEventListener('click', () => {
    els.onResult(false, Date.now() - startTime);
  });
}

async function _playSounds(word, els) {
  if (isPlaying) return;
  isPlaying = true;

  const tiles = els.phonemeRow.querySelectorAll('.phoneme-tile');

  for (let i = 0; i < word.graphemes.length; i++) {
    // Highlight current tile
    tiles.forEach((t, ti) => t.classList.toggle('active', ti === i));

    // Play this phoneme's audio
    await audio.speakPhoneme(word.graphemes[i], word.types[i]);
    await _delay(300);
  }

  // Remove highlights
  tiles.forEach(t => t.classList.remove('active'));

  // Brief pause then say the full blended word
  await _delay(300);
  await audio.speakWord(word.word);

  isPlaying = false;

  // Show assessment buttons after first play
  _renderControls(els, word, true);
  els.btnSayIt.style.display = '';
}

const _delay = ms => new Promise(r => setTimeout(r, ms));

/** @returns {import('../data/words.js').Word|null} */
export function getCurrentWord() {
  return currentWord;
}

export function cleanup() {
  currentWord = null;
  isPlaying = false;
}
