/**
 * Giri Stories — Story browser and reader
 *
 * Shows a library of decodable phonics stories organised by level.
 * Each story can be read independently or read aloud using TTS,
 * with paragraph-level highlighting as each line is spoken.
 */

import { STORIES, LEVEL_META } from '../data/stories.js';

const BASE = import.meta.env.BASE_URL;

/** Mascot image path for a given state key */
function mascotSrc(state) {
  const MAP = {
    neutral:   'giri-neutral.png',
    celebrate: 'giri-celebrate.png',
    confetti:  'giri-celebrate-confetti.png',
    clap:      'giri-clap-frame.png',
    encourage: 'giri-encourage.png',
    holdCard:  'giri-hold-card.png',
    pointLeft: 'giri-point-left.png',
    pointRight:'giri-point-right.png',
    thinking:  'giri-thinking.png',
    trophy:    'giri-trophy.png',
    whiteboard:'giri-whiteboard.png',
  };
  return `${BASE}images/mascot/${MAP[state] ?? MAP.neutral}`;
}

// ── Module state ──────────────────────────────────────────────────────────────

let _container  = null;
let _onGoHome   = null;
let _activeLevel = 1;
let _speaking   = false;
let _currentView = 'browse'; // 'browse' | 'read'

// ── Public API ────────────────────────────────────────────────────────────────

/**
 * Attach the story module to its DOM container.
 * Must be called once before showBrowser().
 * @param {HTMLElement} container
 * @param {Function}    onGoHome  – called when user taps the header back arrow
 */
export function initStoryMode(container, onGoHome) {
  _container = container;
  _onGoHome  = onGoHome;
}

/** Render the level-tab browser. Call after initStoryMode(). */
export function showBrowser() {
  _stopTTS();
  _currentView = 'browse';
  _renderBrowser();
}

/** Stop TTS and reset internal state (call when leaving the stories screen). */
export function cleanupStoryMode() {
  _stopTTS();
  _currentView = 'browse';
}

// ── Browser view ──────────────────────────────────────────────────────────────

function _renderBrowser() {
  const levelMeta = LEVEL_META[_activeLevel - 1];
  const stories   = STORIES.filter(s => s.level === _activeLevel);

  const tabsHtml = LEVEL_META.map(m => /* html */`
    <button
      class="story-tab${m.level === _activeLevel ? ' active' : ''}"
      data-level="${m.level}"
      style="--tab-color:${m.color}"
    >
      <span class="story-tab-num">L${m.level}</span>
      <span class="story-tab-name">${m.label}</span>
    </button>
  `).join('');

  const cardsHtml = stories.map(s => /* html */`
    <button class="story-card" data-story-id="${s.id}">
      <div class="story-card-illo" style="background:${levelMeta.bg}">
        <img
          src="${mascotSrc(s.mascotState)}"
          alt="Giri"
          class="story-card-mascot"
          draggable="false"
        />
        <span class="story-card-prop">${s.emoji}</span>
      </div>
      <span class="story-card-title">${s.title}</span>
      <span class="story-card-level" style="color:${levelMeta.color}">Level ${s.level}</span>
    </button>
  `).join('');

  _container.innerHTML = /* html */`
    <div class="stories-browser">
      <div class="stories-tabs" role="tablist" aria-label="Story levels">
        ${tabsHtml}
      </div>
      <div
        class="stories-level-strip"
        style="--level-color:${levelMeta.color};--level-bg:${levelMeta.bg}"
      >
        <span class="slstrip-label">Level ${_activeLevel}</span>
        <span class="slstrip-name">${levelMeta.label}</span>
        <span class="slstrip-sounds">${levelMeta.targetSounds}</span>
        <span class="slstrip-prop">${levelMeta.prop}</span>
      </div>
      <div class="story-cards-grid">
        ${cardsHtml}
      </div>
    </div>
  `;

  // Tab switching
  _container.querySelectorAll('.story-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      _activeLevel = parseInt(btn.dataset.level, 10);
      _renderBrowser();
    });
  });

  // Open a story
  _container.querySelectorAll('.story-card').forEach(btn => {
    btn.addEventListener('click', () => _showReader(btn.dataset.storyId));
  });
}

// ── Reader view ───────────────────────────────────────────────────────────────

function _showReader(storyId) {
  const story = STORIES.find(s => s.id === storyId);
  if (!story) return;
  _currentView = 'read';
  _stopTTS();
  _renderReader(story);
}

function _renderReader(story) {
  const levelMeta = LEVEL_META[story.level - 1];

  // Build story body lines
  const linesHtml = story.lines.map((line, i) => {
    switch (line.type) {
      case 'label':
        return `<div class="sline sline--label" data-line="${i}">${line.text}</div>`;
      case 'beat':
        return `<p class="sline sline--beat" data-line="${i}">${line.text}</p>`;
      case 'intro':
        return `<p class="sline sline--intro" data-line="${i}">${line.text}</p>`;
      case 'refrain':
        return `<div class="sline sline--refrain" data-line="${i}">🫧 ${line.text}</div>`;
      case 'end':
        return `<p class="sline sline--end" data-line="${i}">${line.text}</p>`;
      default:
        return `<p class="sline" data-line="${i}">${line.text}</p>`;
    }
  }).join('');

  _container.innerHTML = /* html */`
    <div class="story-reader">

      <!-- Illustration header -->
      <div class="story-illo" style="--level-color:${levelMeta.color};--level-bg:${levelMeta.bg}">
        <img
          src="${mascotSrc(story.mascotState)}"
          alt="Giri — ${story.title}"
          class="story-illo-mascot"
          draggable="false"
        />
        <span class="story-illo-prop">${story.emoji}</span>
        <div class="story-illo-steam">
          <span></span><span></span><span></span>
        </div>
      </div>

      <!-- Meta bar -->
      <div class="story-meta-bar" style="--level-color:${levelMeta.color}">
        <button class="btn btn--ghost story-lib-btn" id="btn-reader-back">
          ← Library
        </button>
        <span class="story-meta-badge">Level ${story.level} · ${levelMeta.label}</span>
      </div>

      <!-- Title -->
      <h2 class="story-reader-title">${story.title}</h2>

      <!-- Story body -->
      <div class="story-body" id="story-body" aria-live="polite">
        ${linesHtml}
      </div>

      <!-- TTS controls -->
      <div class="story-tts-bar">
        <button class="btn btn--primary btn--xl" id="btn-story-play" aria-label="Read story aloud">
          ▶ Read Aloud
        </button>
        <button class="btn btn--ghost btn--xl" id="btn-story-stop" style="display:none" aria-label="Stop reading">
          ⏹ Stop
        </button>
      </div>

    </div>
  `;

  document.getElementById('btn-reader-back')?.addEventListener('click', () => {
    _stopTTS();
    _currentView = 'browse';
    _renderBrowser();
  });

  document.getElementById('btn-story-play')?.addEventListener('click', () => {
    _startTTS(story);
  });

  document.getElementById('btn-story-stop')?.addEventListener('click', () => {
    _stopTTS();
  });
}

// ── TTS ───────────────────────────────────────────────────────────────────────

/**
 * Build a list of speech segments from the story lines.
 * Labels are combined with their following beat into a single utterance
 * (so TTS sounds natural) but only the beat element is highlighted.
 */
function _buildSegments(story) {
  const segments = [];
  const lines = story.lines;
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.type === 'label') {
      // Combine "Problem:" with the next beat text
      const next = lines[i + 1];
      if (next && next.type === 'beat') {
        segments.push({ text: `${line.text} ${next.text}`, highlightIdx: i + 1 });
        i += 2;
        continue;
      }
      i++;
      continue; // standalone label — skip from TTS
    }

    segments.push({ text: line.text, highlightIdx: i });
    i++;
  }

  return segments;
}

function _startTTS(story) {
  if (!window.speechSynthesis) return;
  _stopTTS();

  const playBtn = document.getElementById('btn-story-play');
  const stopBtn = document.getElementById('btn-story-stop');
  if (playBtn) playBtn.style.display = 'none';
  if (stopBtn) stopBtn.style.display = '';

  _speaking = true;
  const segments = _buildSegments(story);
  _speakNext(segments, 0);
}

function _speakNext(segments, idx) {
  if (!_speaking || idx >= segments.length) {
    _onTTSDone();
    return;
  }

  const seg = segments[idx];
  _highlightLine(seg.highlightIdx);

  const utt = new SpeechSynthesisUtterance(seg.text);
  utt.rate = 0.82;
  utt.lang = 'en-GB';

  // Slightly longer pause after refrains for drama
  const pauseMs = seg.text.startsWith('Puff') ? 600 : 380;

  utt.onend = () => {
    if (_speaking) setTimeout(() => _speakNext(segments, idx + 1), pauseMs);
  };
  utt.onerror = () => _onTTSDone();

  window.speechSynthesis.speak(utt);
}

function _highlightLine(lineIndex) {
  _container?.querySelectorAll('.sline--active').forEach(el => {
    el.classList.remove('sline--active');
  });
  const el = _container?.querySelector(`[data-line="${lineIndex}"]`);
  if (el) {
    el.classList.add('sline--active');
    el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

function _stopTTS() {
  _speaking = false;
  if (window.speechSynthesis) window.speechSynthesis.cancel();
  _container?.querySelectorAll('.sline--active').forEach(el => {
    el.classList.remove('sline--active');
  });
  _resetTTSButtons();
}

function _onTTSDone() {
  _speaking = false;
  _container?.querySelectorAll('.sline--active').forEach(el => {
    el.classList.remove('sline--active');
  });
  _resetTTSButtons();
}

function _resetTTSButtons() {
  const playBtn = document.getElementById('btn-story-play');
  const stopBtn = document.getElementById('btn-story-stop');
  if (playBtn) playBtn.style.display = '';
  if (stopBtn) stopBtn.style.display = 'none';
}
