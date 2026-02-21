/**
 * Classic Blend Mode  (teacher demo / "previous" blending mode)
 *
 * Shows the whole word immediately with all phoneme tiles visible,
 * then auto-plays each phoneme sound in sequence and finally says
 * the complete blended word — no button-per-sound needed.
 *
 * Ideal for whole-class modelling:  teacher presses Play, children listen
 * and join in, then self-assess.
 *
 * Includes a category selector so the teacher can freely choose which
 * word group to practise (Short A, Digraphs, Blends, etc.).
 */

import { renderPhonemes, renderWordImage } from '../components/phonemeDisplay.js';
import { audio } from '../modules/audio.js';
import { store } from '../modules/store.js';
import { WORD_GROUPS, GROUP_ORDER } from '../data/words.js';

/** @type {import('../data/words.js').Word|null} */
let currentWord = null;
let isPlaying = false;
let startTime = 0;

/**
 * Set up Classic Blend mode for a word.
 * @param {import('../data/words.js').Word} word
 * @param {object} els  DOM element references + callbacks
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

  // Build the mode area (category picker + play controls)
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

// ── Category selector ─────────────────────────────────────────────────────

function _buildGroupOptions() {
  const savedGroup = store.get('currentGroup') || '';
  const allSelected = !savedGroup ? 'selected' : '';
  const options = [`<option value="" ${allSelected}>🔤 All Words</option>`];
  for (const key of GROUP_ORDER) {
    const g = WORD_GROUPS[key];
    const sel = savedGroup === key ? 'selected' : '';
    options.push(`<option value="${key}" ${sel}>${g.icon} ${g.label}</option>`);
  }
  return options.join('');
}

// ── Controls rendering ────────────────────────────────────────────────────

function _renderControls(els, word, played = false) {
  els.modeArea.innerHTML = `
    <div class="classic-blend-wrap">

      <!-- Category selector -->
      <div class="category-row">
        <label class="category-label" for="classic-group-select">Category:</label>
        <select id="classic-group-select" class="category-select" aria-label="Choose word category">
          ${_buildGroupOptions()}
        </select>
      </div>

      <!-- Play buttons -->
      <div class="classic-btn-row">
        <button class="btn btn--primary btn--xl" id="btn-classic-play" aria-label="Play all sounds">
          ▶ Play Sounds
        </button>
        ${played ? `
        <button class="btn btn--ghost btn--xl" id="btn-classic-again" aria-label="Play again">
          🔁 Again
        </button>
        ` : ''}
      </div>

      <!-- Self-assessment (after first play) -->
      ${played ? `
      <div class="classic-assess-row">
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

  // Category change → notify app to reload with new group
  document.getElementById('classic-group-select')?.addEventListener('change', (e) => {
    const group = e.target.value || null;
    store.set('currentGroup', group);
    els.onGroupChange?.(group);
  });

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

// ── Playback ──────────────────────────────────────────────────────────────

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
