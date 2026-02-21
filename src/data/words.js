/**
 * PhonicsQuest Word Data
 * Each word contains rich phoneme metadata for color-coding, diacritics,
 * adaptive learning, and multi-mode support.
 *
 * Phoneme types:
 *   'c'  = consonant (blue)
 *   'sv' = short vowel (red)
 *   'lv' = long vowel (green)
 *   'd'  = digraph (purple)
 *   'bl' = blend consonant (orange)
 *   'se' = silent-e (gray)
 *   'rc' = r-controlled vowel (pink)
 */

/** Display diacritics for vowels */
export const DIACRITICS = {
  a: { sv: 'ă', lv: 'ā' },
  e: { sv: 'ĕ', lv: 'ē' },
  i: { sv: 'ĭ', lv: 'ī' },
  o: { sv: 'ŏ', lv: 'ō' },
  u: { sv: 'ŭ', lv: 'ū' },
};

/** Word groups shown as wheel segments */
export const WORD_GROUPS = {
  'short-a':  { label: 'Short A',  color: '#ef4444', bg: '#fee2e2', icon: '🍎', audioFile: 'a' },
  'short-e':  { label: 'Short E',  color: '#f97316', bg: '#ffedd5', icon: '🥚', audioFile: 'e' },
  'short-i':  { label: 'Short I',  color: '#eab308', bg: '#fef9c3', icon: '🐟', audioFile: 'i' },
  'short-o':  { label: 'Short O',  color: '#22c55e', bg: '#dcfce7', icon: '🐙', audioFile: 'o' },
  'short-u':  { label: 'Short U',  color: '#3b82f6', bg: '#dbeafe', icon: '☂️', audioFile: 'u' },
  'long-a':   { label: 'Long A',   color: '#a855f7', bg: '#f3e8ff', icon: '🎂', audioFile: 'long_a' },
  'long-e':   { label: 'Long E',   color: '#ec4899', bg: '#fce7f3', icon: '🦁', audioFile: 'long_e' },
  'long-i':   { label: 'Long I',   color: '#14b8a6', bg: '#ccfbf1', icon: '🪁', audioFile: 'long_i' },
  'long-o':   { label: 'Long O',   color: '#f59e0b', bg: '#fef3c7', icon: '🏠', audioFile: 'long_o' },
  'long-u':   { label: 'Long U',   color: '#6366f1', bg: '#e0e7ff', icon: '🎵', audioFile: 'long_u' },
  'digraphs':     { label: 'Digraphs',     color: '#8b5cf6', bg: '#ede9fe', icon: '⭐', audioFile: null },
  'blends':       { label: 'Blends',       color: '#f97316', bg: '#ffedd5', icon: '🚀', audioFile: null },
  'diphthongs':   { label: 'Diphthongs',   color: '#0d9488', bg: '#ccfbf1', icon: '🌀', audioFile: null },
  'r-controlled': { label: 'R-Controlled', color: '#b45309', bg: '#fef3c7', icon: '🎯', audioFile: null },

  // ── Structural patterns (cross-cut the vowel groups) ──────────────────
  'struct-cvc':   { label: 'CVC',       color: '#64748b', bg: '#f1f5f9', icon: '🔤', audioFile: null },
  'struct-ccvc':  { label: 'CCVC',      color: '#0ea5e9', bg: '#e0f2fe', icon: '📘', audioFile: null },
  'struct-cvcc':  { label: 'CVCC',      color: '#7c3aed', bg: '#ede9fe', icon: '📗', audioFile: null },
  'struct-ccvcc': { label: 'CCVCC',     color: '#db2777', bg: '#fce7f3', icon: '📙', audioFile: null },

  // ── Suffix patterns ───────────────────────────────────────────────────
  'suffix-ing':   { label: '-ing Words', color: '#059669', bg: '#d1fae5', icon: '🏃', audioFile: null },
  'suffix-ed':    { label: '-ed Words',  color: '#d97706', bg: '#fef3c7', icon: '✅', audioFile: null },
  'suffix-er':    { label: '-er Words',  color: '#dc2626', bg: '#fee2e2', icon: '📈', audioFile: null },
  'suffix-est':   { label: '-est Words', color: '#7c3aed', bg: '#f3e8ff', icon: '🏆', audioFile: null },
};

/**
 * @typedef {Object} Word
 * @property {string}   id        - unique key (= word itself)
 * @property {string}   word      - the actual word
 * @property {string[]} graphemes - letter groups matching phonemes (['c','a','t'])
 * @property {string[]} types     - phoneme type per grapheme (['c','sv','c'])
 * @property {string}   pattern   - 'CVC' | 'CVCe' | 'blend' | 'digraph' | 'other'
 * @property {string}   group     - key into WORD_GROUPS
 * @property {number}   level     - 1 (easy) → 3 (hard)
 * @property {string}   emoji     - emoji illustration
 */

/** @type {Word[]} */
export const WORDS = [
  /* ══════════════════════════════════════
     SHORT-A  (CVC, level 1)
  ══════════════════════════════════════ */
  { id:'cat',  word:'cat',  graphemes:['c','a','t'],   types:['c','sv','c'],  pattern:'CVC', group:'short-a', level:1, emoji:'🐱' },
  { id:'hat',  word:'hat',  graphemes:['h','a','t'],   types:['c','sv','c'],  pattern:'CVC', group:'short-a', level:1, emoji:'🎩' },
  { id:'bat',  word:'bat',  graphemes:['b','a','t'],   types:['c','sv','c'],  pattern:'CVC', group:'short-a', level:1, emoji:'🦇' },
  { id:'mat',  word:'mat',  graphemes:['m','a','t'],   types:['c','sv','c'],  pattern:'CVC', group:'short-a', level:1, emoji:'🧘' },
  { id:'sat',  word:'sat',  graphemes:['s','a','t'],   types:['c','sv','c'],  pattern:'CVC', group:'short-a', level:1, emoji:'💺' },
  { id:'rat',  word:'rat',  graphemes:['r','a','t'],   types:['c','sv','c'],  pattern:'CVC', group:'short-a', level:1, emoji:'🐀' },
  { id:'can',  word:'can',  graphemes:['c','a','n'],   types:['c','sv','c'],  pattern:'CVC', group:'short-a', level:1, emoji:'🥫' },
  { id:'fan',  word:'fan',  graphemes:['f','a','n'],   types:['c','sv','c'],  pattern:'CVC', group:'short-a', level:1, emoji:'💨' },
  { id:'man',  word:'man',  graphemes:['m','a','n'],   types:['c','sv','c'],  pattern:'CVC', group:'short-a', level:1, emoji:'👨' },
  { id:'pan',  word:'pan',  graphemes:['p','a','n'],   types:['c','sv','c'],  pattern:'CVC', group:'short-a', level:1, emoji:'🍳' },
  { id:'ran',  word:'ran',  graphemes:['r','a','n'],   types:['c','sv','c'],  pattern:'CVC', group:'short-a', level:1, emoji:'🏃' },
  { id:'van',  word:'van',  graphemes:['v','a','n'],   types:['c','sv','c'],  pattern:'CVC', group:'short-a', level:1, emoji:'🚐' },
  { id:'bag',  word:'bag',  graphemes:['b','a','g'],   types:['c','sv','c'],  pattern:'CVC', group:'short-a', level:1, emoji:'👜' },
  { id:'tag',  word:'tag',  graphemes:['t','a','g'],   types:['c','sv','c'],  pattern:'CVC', group:'short-a', level:1, emoji:'🏷️' },
  { id:'cap',  word:'cap',  graphemes:['c','a','p'],   types:['c','sv','c'],  pattern:'CVC', group:'short-a', level:1, emoji:'🧢' },
  { id:'map',  word:'map',  graphemes:['m','a','p'],   types:['c','sv','c'],  pattern:'CVC', group:'short-a', level:1, emoji:'🗺️' },
  { id:'tap',  word:'tap',  graphemes:['t','a','p'],   types:['c','sv','c'],  pattern:'CVC', group:'short-a', level:1, emoji:'🚿' },
  { id:'dad',  word:'dad',  graphemes:['d','a','d'],   types:['c','sv','c'],  pattern:'CVC', group:'short-a', level:1, emoji:'👨‍👧' },
  { id:'had',  word:'had',  graphemes:['h','a','d'],   types:['c','sv','c'],  pattern:'CVC', group:'short-a', level:1, emoji:'✋' },
  { id:'sad',  word:'sad',  graphemes:['s','a','d'],   types:['c','sv','c'],  pattern:'CVC', group:'short-a', level:1, emoji:'😢' },
  // more short-a CVC
  { id:'jam',  word:'jam',  graphemes:['j','a','m'],   types:['c','sv','c'],  pattern:'CVC', group:'short-a', level:1, emoji:'🍓' },
  { id:'ham',  word:'ham',  graphemes:['h','a','m'],   types:['c','sv','c'],  pattern:'CVC', group:'short-a', level:1, emoji:'🥩' },
  { id:'yam',  word:'yam',  graphemes:['y','a','m'],   types:['c','sv','c'],  pattern:'CVC', group:'short-a', level:1, emoji:'🍠' },
  { id:'ram',  word:'ram',  graphemes:['r','a','m'],   types:['c','sv','c'],  pattern:'CVC', group:'short-a', level:1, emoji:'🐏' },
  { id:'dam',  word:'dam',  graphemes:['d','a','m'],   types:['c','sv','c'],  pattern:'CVC', group:'short-a', level:1, emoji:'🏞️' },
  { id:'gap',  word:'gap',  graphemes:['g','a','p'],   types:['c','sv','c'],  pattern:'CVC', group:'short-a', level:1, emoji:'🕳️' },
  { id:'lap',  word:'lap',  graphemes:['l','a','p'],   types:['c','sv','c'],  pattern:'CVC', group:'short-a', level:1, emoji:'🪑' },
  { id:'nap',  word:'nap',  graphemes:['n','a','p'],   types:['c','sv','c'],  pattern:'CVC', group:'short-a', level:1, emoji:'😴' },
  { id:'rap',  word:'rap',  graphemes:['r','a','p'],   types:['c','sv','c'],  pattern:'CVC', group:'short-a', level:1, emoji:'🎤' },
  { id:'sap',  word:'sap',  graphemes:['s','a','p'],   types:['c','sv','c'],  pattern:'CVC', group:'short-a', level:1, emoji:'🌿' },
  { id:'wag',  word:'wag',  graphemes:['w','a','g'],   types:['c','sv','c'],  pattern:'CVC', group:'short-a', level:1, emoji:'🐶' },
  { id:'rag',  word:'rag',  graphemes:['r','a','g'],   types:['c','sv','c'],  pattern:'CVC', group:'short-a', level:1, emoji:'🧹' },
  { id:'lag',  word:'lag',  graphemes:['l','a','g'],   types:['c','sv','c'],  pattern:'CVC', group:'short-a', level:1, emoji:'🐌' },
  { id:'nag',  word:'nag',  graphemes:['n','a','g'],   types:['c','sv','c'],  pattern:'CVC', group:'short-a', level:1, emoji:'🐎' },
  { id:'cab',  word:'cab',  graphemes:['c','a','b'],   types:['c','sv','c'],  pattern:'CVC', group:'short-a', level:1, emoji:'🚕' },
  { id:'jab',  word:'jab',  graphemes:['j','a','b'],   types:['c','sv','c'],  pattern:'CVC', group:'short-a', level:1, emoji:'🥊' },
  { id:'tab',  word:'tab',  graphemes:['t','a','b'],   types:['c','sv','c'],  pattern:'CVC', group:'short-a', level:1, emoji:'🏷️' },
  { id:'bad',  word:'bad',  graphemes:['b','a','d'],   types:['c','sv','c'],  pattern:'CVC', group:'short-a', level:1, emoji:'😠' },
  { id:'mad',  word:'mad',  graphemes:['m','a','d'],   types:['c','sv','c'],  pattern:'CVC', group:'short-a', level:1, emoji:'😤' },
  { id:'pad',  word:'pad',  graphemes:['p','a','d'],   types:['c','sv','c'],  pattern:'CVC', group:'short-a', level:1, emoji:'📋' },
  { id:'lad',  word:'lad',  graphemes:['l','a','d'],   types:['c','sv','c'],  pattern:'CVC', group:'short-a', level:1, emoji:'👦' },
  { id:'tax',  word:'tax',  graphemes:['t','a','x'],   types:['c','sv','c'],  pattern:'CVC', group:'short-a', level:1, emoji:'💰' },
  { id:'wax',  word:'wax',  graphemes:['w','a','x'],   types:['c','sv','c'],  pattern:'CVC', group:'short-a', level:1, emoji:'🕯️' },
  { id:'yak',  word:'yak',  graphemes:['y','a','k'],   types:['c','sv','c'],  pattern:'CVC', group:'short-a', level:1, emoji:'🦬' },

  /* ══════════════════════════════════════
     SHORT-E  (CVC, level 1)
  ══════════════════════════════════════ */
  { id:'bed',  word:'bed',  graphemes:['b','e','d'],   types:['c','sv','c'],  pattern:'CVC', group:'short-e', level:1, emoji:'🛏️' },
  { id:'fed',  word:'fed',  graphemes:['f','e','d'],   types:['c','sv','c'],  pattern:'CVC', group:'short-e', level:1, emoji:'🍽️' },
  { id:'red',  word:'red',  graphemes:['r','e','d'],   types:['c','sv','c'],  pattern:'CVC', group:'short-e', level:1, emoji:'🔴' },
  { id:'beg',  word:'beg',  graphemes:['b','e','g'],   types:['c','sv','c'],  pattern:'CVC', group:'short-e', level:1, emoji:'🙏' },
  { id:'leg',  word:'leg',  graphemes:['l','e','g'],   types:['c','sv','c'],  pattern:'CVC', group:'short-e', level:1, emoji:'🦵' },
  { id:'peg',  word:'peg',  graphemes:['p','e','g'],   types:['c','sv','c'],  pattern:'CVC', group:'short-e', level:1, emoji:'📌' },
  { id:'den',  word:'den',  graphemes:['d','e','n'],   types:['c','sv','c'],  pattern:'CVC', group:'short-e', level:1, emoji:'🦊' },
  { id:'hen',  word:'hen',  graphemes:['h','e','n'],   types:['c','sv','c'],  pattern:'CVC', group:'short-e', level:1, emoji:'🐔' },
  { id:'men',  word:'men',  graphemes:['m','e','n'],   types:['c','sv','c'],  pattern:'CVC', group:'short-e', level:1, emoji:'👨‍👨‍👦' },
  { id:'pen',  word:'pen',  graphemes:['p','e','n'],   types:['c','sv','c'],  pattern:'CVC', group:'short-e', level:1, emoji:'✒️' },
  { id:'ten',  word:'ten',  graphemes:['t','e','n'],   types:['c','sv','c'],  pattern:'CVC', group:'short-e', level:1, emoji:'🔟' },
  { id:'bet',  word:'bet',  graphemes:['b','e','t'],   types:['c','sv','c'],  pattern:'CVC', group:'short-e', level:1, emoji:'🎲' },
  { id:'get',  word:'get',  graphemes:['g','e','t'],   types:['c','sv','c'],  pattern:'CVC', group:'short-e', level:1, emoji:'🤲' },
  { id:'jet',  word:'jet',  graphemes:['j','e','t'],   types:['c','sv','c'],  pattern:'CVC', group:'short-e', level:1, emoji:'✈️' },
  { id:'let',  word:'let',  graphemes:['l','e','t'],   types:['c','sv','c'],  pattern:'CVC', group:'short-e', level:1, emoji:'🤝' },
  { id:'net',  word:'net',  graphemes:['n','e','t'],   types:['c','sv','c'],  pattern:'CVC', group:'short-e', level:1, emoji:'🎾' },
  { id:'pet',  word:'pet',  graphemes:['p','e','t'],   types:['c','sv','c'],  pattern:'CVC', group:'short-e', level:1, emoji:'🐕' },
  { id:'set',  word:'set',  graphemes:['s','e','t'],   types:['c','sv','c'],  pattern:'CVC', group:'short-e', level:1, emoji:'🎯' },
  { id:'wet',  word:'wet',  graphemes:['w','e','t'],   types:['c','sv','c'],  pattern:'CVC', group:'short-e', level:1, emoji:'💧' },
  // more short-e CVC
  { id:'vet',  word:'vet',  graphemes:['v','e','t'],   types:['c','sv','c'],  pattern:'CVC', group:'short-e', level:1, emoji:'🐕‍🦺' },
  { id:'web',  word:'web',  graphemes:['w','e','b'],   types:['c','sv','c'],  pattern:'CVC', group:'short-e', level:1, emoji:'🕸️' },
  { id:'gem',  word:'gem',  graphemes:['g','e','m'],   types:['c','sv','c'],  pattern:'CVC', group:'short-e', level:1, emoji:'💎' },
  { id:'hem',  word:'hem',  graphemes:['h','e','m'],   types:['c','sv','c'],  pattern:'CVC', group:'short-e', level:1, emoji:'🪡' },
  { id:'pep',  word:'pep',  graphemes:['p','e','p'],   types:['c','sv','c'],  pattern:'CVC', group:'short-e', level:1, emoji:'⚡' },
  { id:'hex',  word:'hex',  graphemes:['h','e','x'],   types:['c','sv','c'],  pattern:'CVC', group:'short-e', level:1, emoji:'🔮' },
  { id:'vex',  word:'vex',  graphemes:['v','e','x'],   types:['c','sv','c'],  pattern:'CVC', group:'short-e', level:1, emoji:'😤' },
  { id:'yes',  word:'yes',  graphemes:['y','e','s'],   types:['c','sv','c'],  pattern:'CVC', group:'short-e', level:1, emoji:'✅' },

  /* ══════════════════════════════════════
     SHORT-I  (CVC, level 1)
  ══════════════════════════════════════ */
  { id:'big',  word:'big',  graphemes:['b','i','g'],   types:['c','sv','c'],  pattern:'CVC', group:'short-i', level:1, emoji:'🐘' },
  { id:'dig',  word:'dig',  graphemes:['d','i','g'],   types:['c','sv','c'],  pattern:'CVC', group:'short-i', level:1, emoji:'⛏️' },
  { id:'fig',  word:'fig',  graphemes:['f','i','g'],   types:['c','sv','c'],  pattern:'CVC', group:'short-i', level:1, emoji:'🍇' },
  { id:'jig',  word:'jig',  graphemes:['j','i','g'],   types:['c','sv','c'],  pattern:'CVC', group:'short-i', level:1, emoji:'💃' },
  { id:'pig',  word:'pig',  graphemes:['p','i','g'],   types:['c','sv','c'],  pattern:'CVC', group:'short-i', level:1, emoji:'🐷' },
  { id:'wig',  word:'wig',  graphemes:['w','i','g'],   types:['c','sv','c'],  pattern:'CVC', group:'short-i', level:1, emoji:'👱' },
  { id:'bin',  word:'bin',  graphemes:['b','i','n'],   types:['c','sv','c'],  pattern:'CVC', group:'short-i', level:1, emoji:'🗑️' },
  { id:'fin',  word:'fin',  graphemes:['f','i','n'],   types:['c','sv','c'],  pattern:'CVC', group:'short-i', level:1, emoji:'🦈' },
  { id:'pin',  word:'pin',  graphemes:['p','i','n'],   types:['c','sv','c'],  pattern:'CVC', group:'short-i', level:1, emoji:'📍' },
  { id:'tin',  word:'tin',  graphemes:['t','i','n'],   types:['c','sv','c'],  pattern:'CVC', group:'short-i', level:1, emoji:'🥫' },
  { id:'win',  word:'win',  graphemes:['w','i','n'],   types:['c','sv','c'],  pattern:'CVC', group:'short-i', level:1, emoji:'🏆' },
  { id:'bit',  word:'bit',  graphemes:['b','i','t'],   types:['c','sv','c'],  pattern:'CVC', group:'short-i', level:1, emoji:'🪲' },
  { id:'fit',  word:'fit',  graphemes:['f','i','t'],   types:['c','sv','c'],  pattern:'CVC', group:'short-i', level:1, emoji:'💪' },
  { id:'hit',  word:'hit',  graphemes:['h','i','t'],   types:['c','sv','c'],  pattern:'CVC', group:'short-i', level:1, emoji:'🎯' },
  { id:'kit',  word:'kit',  graphemes:['k','i','t'],   types:['c','sv','c'],  pattern:'CVC', group:'short-i', level:1, emoji:'🧰' },
  { id:'pit',  word:'pit',  graphemes:['p','i','t'],   types:['c','sv','c'],  pattern:'CVC', group:'short-i', level:1, emoji:'🏔️' },
  { id:'sit',  word:'sit',  graphemes:['s','i','t'],   types:['c','sv','c'],  pattern:'CVC', group:'short-i', level:1, emoji:'💺' },
  { id:'lid',  word:'lid',  graphemes:['l','i','d'],   types:['c','sv','c'],  pattern:'CVC', group:'short-i', level:1, emoji:'🫙' },
  { id:'lip',  word:'lip',  graphemes:['l','i','p'],   types:['c','sv','c'],  pattern:'CVC', group:'short-i', level:1, emoji:'💋' },
  // more short-i CVC
  { id:'him',  word:'him',  graphemes:['h','i','m'],   types:['c','sv','c'],  pattern:'CVC', group:'short-i', level:1, emoji:'👤' },
  { id:'dim',  word:'dim',  graphemes:['d','i','m'],   types:['c','sv','c'],  pattern:'CVC', group:'short-i', level:1, emoji:'🌑' },
  { id:'rim',  word:'rim',  graphemes:['r','i','m'],   types:['c','sv','c'],  pattern:'CVC', group:'short-i', level:1, emoji:'⭕' },
  { id:'vim',  word:'vim',  graphemes:['v','i','m'],   types:['c','sv','c'],  pattern:'CVC', group:'short-i', level:1, emoji:'⚡' },
  { id:'dip',  word:'dip',  graphemes:['d','i','p'],   types:['c','sv','c'],  pattern:'CVC', group:'short-i', level:1, emoji:'🏊' },
  { id:'hip',  word:'hip',  graphemes:['h','i','p'],   types:['c','sv','c'],  pattern:'CVC', group:'short-i', level:1, emoji:'🕺' },
  { id:'nip',  word:'nip',  graphemes:['n','i','p'],   types:['c','sv','c'],  pattern:'CVC', group:'short-i', level:1, emoji:'✂️' },
  { id:'rip',  word:'rip',  graphemes:['r','i','p'],   types:['c','sv','c'],  pattern:'CVC', group:'short-i', level:1, emoji:'😬' },
  { id:'sip',  word:'sip',  graphemes:['s','i','p'],   types:['c','sv','c'],  pattern:'CVC', group:'short-i', level:1, emoji:'🥤' },
  { id:'tip',  word:'tip',  graphemes:['t','i','p'],   types:['c','sv','c'],  pattern:'CVC', group:'short-i', level:1, emoji:'💡' },
  { id:'zip',  word:'zip',  graphemes:['z','i','p'],   types:['c','sv','c'],  pattern:'CVC', group:'short-i', level:1, emoji:'🤐' },
  { id:'did',  word:'did',  graphemes:['d','i','d'],   types:['c','sv','c'],  pattern:'CVC', group:'short-i', level:1, emoji:'✔️' },
  { id:'hid',  word:'hid',  graphemes:['h','i','d'],   types:['c','sv','c'],  pattern:'CVC', group:'short-i', level:1, emoji:'🙈' },
  { id:'rid',  word:'rid',  graphemes:['r','i','d'],   types:['c','sv','c'],  pattern:'CVC', group:'short-i', level:1, emoji:'🧹' },
  { id:'bid',  word:'bid',  graphemes:['b','i','d'],   types:['c','sv','c'],  pattern:'CVC', group:'short-i', level:1, emoji:'🤝' },
  { id:'rib',  word:'rib',  graphemes:['r','i','b'],   types:['c','sv','c'],  pattern:'CVC', group:'short-i', level:1, emoji:'🍖' },
  { id:'mix',  word:'mix',  graphemes:['m','i','x'],   types:['c','sv','c'],  pattern:'CVC', group:'short-i', level:1, emoji:'🎨' },
  { id:'fix',  word:'fix',  graphemes:['f','i','x'],   types:['c','sv','c'],  pattern:'CVC', group:'short-i', level:1, emoji:'🔧' },
  { id:'six',  word:'six',  graphemes:['s','i','x'],   types:['c','sv','c'],  pattern:'CVC', group:'short-i', level:1, emoji:'6️⃣' },

  /* ══════════════════════════════════════
     SHORT-O  (CVC, level 1)
  ══════════════════════════════════════ */
  { id:'dog',  word:'dog',  graphemes:['d','o','g'],   types:['c','sv','c'],  pattern:'CVC', group:'short-o', level:1, emoji:'🐶' },
  { id:'fog',  word:'fog',  graphemes:['f','o','g'],   types:['c','sv','c'],  pattern:'CVC', group:'short-o', level:1, emoji:'🌫️' },
  { id:'hog',  word:'hog',  graphemes:['h','o','g'],   types:['c','sv','c'],  pattern:'CVC', group:'short-o', level:1, emoji:'🐗' },
  { id:'jog',  word:'jog',  graphemes:['j','o','g'],   types:['c','sv','c'],  pattern:'CVC', group:'short-o', level:1, emoji:'🏃' },
  { id:'log',  word:'log',  graphemes:['l','o','g'],   types:['c','sv','c'],  pattern:'CVC', group:'short-o', level:1, emoji:'🪵' },
  { id:'cob',  word:'cob',  graphemes:['c','o','b'],   types:['c','sv','c'],  pattern:'CVC', group:'short-o', level:1, emoji:'🌽' },
  { id:'mob',  word:'mob',  graphemes:['m','o','b'],   types:['c','sv','c'],  pattern:'CVC', group:'short-o', level:1, emoji:'👥' },
  { id:'rob',  word:'rob',  graphemes:['r','o','b'],   types:['c','sv','c'],  pattern:'CVC', group:'short-o', level:1, emoji:'🏴‍☠️' },
  { id:'cod',  word:'cod',  graphemes:['c','o','d'],   types:['c','sv','c'],  pattern:'CVC', group:'short-o', level:1, emoji:'🐟' },
  { id:'nod',  word:'nod',  graphemes:['n','o','d'],   types:['c','sv','c'],  pattern:'CVC', group:'short-o', level:1, emoji:'😊' },
  { id:'rod',  word:'rod',  graphemes:['r','o','d'],   types:['c','sv','c'],  pattern:'CVC', group:'short-o', level:1, emoji:'🎣' },
  { id:'cot',  word:'cot',  graphemes:['c','o','t'],   types:['c','sv','c'],  pattern:'CVC', group:'short-o', level:1, emoji:'🛏️' },
  { id:'dot',  word:'dot',  graphemes:['d','o','t'],   types:['c','sv','c'],  pattern:'CVC', group:'short-o', level:1, emoji:'⚫' },
  { id:'got',  word:'got',  graphemes:['g','o','t'],   types:['c','sv','c'],  pattern:'CVC', group:'short-o', level:1, emoji:'🎁' },
  { id:'hot',  word:'hot',  graphemes:['h','o','t'],   types:['c','sv','c'],  pattern:'CVC', group:'short-o', level:1, emoji:'🌶️' },
  { id:'lot',  word:'lot',  graphemes:['l','o','t'],   types:['c','sv','c'],  pattern:'CVC', group:'short-o', level:1, emoji:'🎰' },
  { id:'pot',  word:'pot',  graphemes:['p','o','t'],   types:['c','sv','c'],  pattern:'CVC', group:'short-o', level:1, emoji:'🍲' },
  { id:'box',  word:'box',  graphemes:['b','o','x'],   types:['c','sv','c'],  pattern:'CVC', group:'short-o', level:1, emoji:'📦' },
  { id:'fox',  word:'fox',  graphemes:['f','o','x'],   types:['c','sv','c'],  pattern:'CVC', group:'short-o', level:1, emoji:'🦊' },
  // more short-o CVC
  { id:'hop',  word:'hop',  graphemes:['h','o','p'],   types:['c','sv','c'],  pattern:'CVC', group:'short-o', level:1, emoji:'🐸' },
  { id:'mop',  word:'mop',  graphemes:['m','o','p'],   types:['c','sv','c'],  pattern:'CVC', group:'short-o', level:1, emoji:'🧹' },
  { id:'pop',  word:'pop',  graphemes:['p','o','p'],   types:['c','sv','c'],  pattern:'CVC', group:'short-o', level:1, emoji:'🎈' },
  { id:'top',  word:'top',  graphemes:['t','o','p'],   types:['c','sv','c'],  pattern:'CVC', group:'short-o', level:1, emoji:'🔝' },
  { id:'cop',  word:'cop',  graphemes:['c','o','p'],   types:['c','sv','c'],  pattern:'CVC', group:'short-o', level:1, emoji:'👮' },
  { id:'sob',  word:'sob',  graphemes:['s','o','b'],   types:['c','sv','c'],  pattern:'CVC', group:'short-o', level:1, emoji:'😭' },
  { id:'job',  word:'job',  graphemes:['j','o','b'],   types:['c','sv','c'],  pattern:'CVC', group:'short-o', level:1, emoji:'💼' },
  { id:'lob',  word:'lob',  graphemes:['l','o','b'],   types:['c','sv','c'],  pattern:'CVC', group:'short-o', level:1, emoji:'🎾' },
  { id:'pod',  word:'pod',  graphemes:['p','o','d'],   types:['c','sv','c'],  pattern:'CVC', group:'short-o', level:1, emoji:'🫛' },
  { id:'mod',  word:'mod',  graphemes:['m','o','d'],   types:['c','sv','c'],  pattern:'CVC', group:'short-o', level:1, emoji:'✏️' },
  { id:'rot',  word:'rot',  graphemes:['r','o','t'],   types:['c','sv','c'],  pattern:'CVC', group:'short-o', level:1, emoji:'🍂' },
  { id:'tot',  word:'tot',  graphemes:['t','o','t'],   types:['c','sv','c'],  pattern:'CVC', group:'short-o', level:1, emoji:'👶' },
  { id:'mom',  word:'mom',  graphemes:['m','o','m'],   types:['c','sv','c'],  pattern:'CVC', group:'short-o', level:1, emoji:'👩' },
  { id:'pox',  word:'pox',  graphemes:['p','o','x'],   types:['c','sv','c'],  pattern:'CVC', group:'short-o', level:1, emoji:'🐔' },

  /* ══════════════════════════════════════
     SHORT-U  (CVC, level 1)
  ══════════════════════════════════════ */
  { id:'bug',  word:'bug',  graphemes:['b','u','g'],   types:['c','sv','c'],  pattern:'CVC', group:'short-u', level:1, emoji:'🐛' },
  { id:'dug',  word:'dug',  graphemes:['d','u','g'],   types:['c','sv','c'],  pattern:'CVC', group:'short-u', level:1, emoji:'⛏️' },
  { id:'hug',  word:'hug',  graphemes:['h','u','g'],   types:['c','sv','c'],  pattern:'CVC', group:'short-u', level:1, emoji:'🤗' },
  { id:'jug',  word:'jug',  graphemes:['j','u','g'],   types:['c','sv','c'],  pattern:'CVC', group:'short-u', level:1, emoji:'🫗' },
  { id:'mug',  word:'mug',  graphemes:['m','u','g'],   types:['c','sv','c'],  pattern:'CVC', group:'short-u', level:1, emoji:'☕' },
  { id:'rug',  word:'rug',  graphemes:['r','u','g'],   types:['c','sv','c'],  pattern:'CVC', group:'short-u', level:1, emoji:'🏡' },
  { id:'tug',  word:'tug',  graphemes:['t','u','g'],   types:['c','sv','c'],  pattern:'CVC', group:'short-u', level:1, emoji:'🛥️' },
  { id:'bun',  word:'bun',  graphemes:['b','u','n'],   types:['c','sv','c'],  pattern:'CVC', group:'short-u', level:1, emoji:'🍞' },
  { id:'fun',  word:'fun',  graphemes:['f','u','n'],   types:['c','sv','c'],  pattern:'CVC', group:'short-u', level:1, emoji:'🎉' },
  { id:'gun',  word:'gun',  graphemes:['g','u','n'],   types:['c','sv','c'],  pattern:'CVC', group:'short-u', level:1, emoji:'🔫' },
  { id:'run',  word:'run',  graphemes:['r','u','n'],   types:['c','sv','c'],  pattern:'CVC', group:'short-u', level:1, emoji:'🏃' },
  { id:'sun',  word:'sun',  graphemes:['s','u','n'],   types:['c','sv','c'],  pattern:'CVC', group:'short-u', level:1, emoji:'☀️' },
  { id:'but',  word:'but',  graphemes:['b','u','t'],   types:['c','sv','c'],  pattern:'CVC', group:'short-u', level:1, emoji:'↕️' },
  { id:'cut',  word:'cut',  graphemes:['c','u','t'],   types:['c','sv','c'],  pattern:'CVC', group:'short-u', level:1, emoji:'✂️' },
  { id:'gut',  word:'gut',  graphemes:['g','u','t'],   types:['c','sv','c'],  pattern:'CVC', group:'short-u', level:1, emoji:'💪' },
  { id:'hut',  word:'hut',  graphemes:['h','u','t'],   types:['c','sv','c'],  pattern:'CVC', group:'short-u', level:1, emoji:'🛖' },
  { id:'nut',  word:'nut',  graphemes:['n','u','t'],   types:['c','sv','c'],  pattern:'CVC', group:'short-u', level:1, emoji:'🥜' },
  { id:'rut',  word:'rut',  graphemes:['r','u','t'],   types:['c','sv','c'],  pattern:'CVC', group:'short-u', level:1, emoji:'🛤️' },
  { id:'cub',  word:'cub',  graphemes:['c','u','b'],   types:['c','sv','c'],  pattern:'CVC', group:'short-u', level:1, emoji:'🐻' },
  { id:'tub',  word:'tub',  graphemes:['t','u','b'],   types:['c','sv','c'],  pattern:'CVC', group:'short-u', level:1, emoji:'🛁' },
  // more short-u CVC
  { id:'gum',  word:'gum',  graphemes:['g','u','m'],   types:['c','sv','c'],  pattern:'CVC', group:'short-u', level:1, emoji:'🍬' },
  { id:'hum',  word:'hum',  graphemes:['h','u','m'],   types:['c','sv','c'],  pattern:'CVC', group:'short-u', level:1, emoji:'🎵' },
  { id:'rum',  word:'rum',  graphemes:['r','u','m'],   types:['c','sv','c'],  pattern:'CVC', group:'short-u', level:1, emoji:'🍹' },
  { id:'sum',  word:'sum',  graphemes:['s','u','m'],   types:['c','sv','c'],  pattern:'CVC', group:'short-u', level:1, emoji:'➕' },
  { id:'yum',  word:'yum',  graphemes:['y','u','m'],   types:['c','sv','c'],  pattern:'CVC', group:'short-u', level:1, emoji:'😋' },
  { id:'cup',  word:'cup',  graphemes:['c','u','p'],   types:['c','sv','c'],  pattern:'CVC', group:'short-u', level:1, emoji:'☕' },
  { id:'pup',  word:'pup',  graphemes:['p','u','p'],   types:['c','sv','c'],  pattern:'CVC', group:'short-u', level:1, emoji:'🐶' },
  { id:'sup',  word:'sup',  graphemes:['s','u','p'],   types:['c','sv','c'],  pattern:'CVC', group:'short-u', level:1, emoji:'🍵' },
  { id:'bus',  word:'bus',  graphemes:['b','u','s'],   types:['c','sv','c'],  pattern:'CVC', group:'short-u', level:1, emoji:'🚌' },
  { id:'pus',  word:'pus',  graphemes:['p','u','s'],   types:['c','sv','c'],  pattern:'CVC', group:'short-u', level:1, emoji:'💧' },
  { id:'hub',  word:'hub',  graphemes:['h','u','b'],   types:['c','sv','c'],  pattern:'CVC', group:'short-u', level:1, emoji:'🔵' },
  { id:'pub',  word:'pub',  graphemes:['p','u','b'],   types:['c','sv','c'],  pattern:'CVC', group:'short-u', level:1, emoji:'🍺' },
  { id:'sub',  word:'sub',  graphemes:['s','u','b'],   types:['c','sv','c'],  pattern:'CVC', group:'short-u', level:1, emoji:'🚢' },
  { id:'bud',  word:'bud',  graphemes:['b','u','d'],   types:['c','sv','c'],  pattern:'CVC', group:'short-u', level:1, emoji:'🌱' },
  { id:'mud',  word:'mud',  graphemes:['m','u','d'],   types:['c','sv','c'],  pattern:'CVC', group:'short-u', level:1, emoji:'💧' },
  { id:'dud',  word:'dud',  graphemes:['d','u','d'],   types:['c','sv','c'],  pattern:'CVC', group:'short-u', level:1, emoji:'💣' },
  { id:'pun',  word:'pun',  graphemes:['p','u','n'],   types:['c','sv','c'],  pattern:'CVC', group:'short-u', level:1, emoji:'😄' },
  { id:'nun',  word:'nun',  graphemes:['n','u','n'],   types:['c','sv','c'],  pattern:'CVC', group:'short-u', level:1, emoji:'⛪' },
  { id:'lug',  word:'lug',  graphemes:['l','u','g'],   types:['c','sv','c'],  pattern:'CVC', group:'short-u', level:1, emoji:'💪' },

  /* ══════════════════════════════════════
     LONG-A  (CVCe, level 2)
  ══════════════════════════════════════ */
  { id:'cake',  word:'cake',  graphemes:['c','a','k','e'],  types:['c','lv','c','se'], pattern:'CVCe', group:'long-a', level:2, emoji:'🎂' },
  { id:'lake',  word:'lake',  graphemes:['l','a','k','e'],  types:['c','lv','c','se'], pattern:'CVCe', group:'long-a', level:2, emoji:'🏞️' },
  { id:'make',  word:'make',  graphemes:['m','a','k','e'],  types:['c','lv','c','se'], pattern:'CVCe', group:'long-a', level:2, emoji:'🔨' },
  { id:'take',  word:'take',  graphemes:['t','a','k','e'],  types:['c','lv','c','se'], pattern:'CVCe', group:'long-a', level:2, emoji:'🤲' },
  { id:'bake',  word:'bake',  graphemes:['b','a','k','e'],  types:['c','lv','c','se'], pattern:'CVCe', group:'long-a', level:2, emoji:'🍰' },
  { id:'came',  word:'came',  graphemes:['c','a','m','e'],  types:['c','lv','c','se'], pattern:'CVCe', group:'long-a', level:2, emoji:'👋' },
  { id:'game',  word:'game',  graphemes:['g','a','m','e'],  types:['c','lv','c','se'], pattern:'CVCe', group:'long-a', level:2, emoji:'🎮' },
  { id:'name',  word:'name',  graphemes:['n','a','m','e'],  types:['c','lv','c','se'], pattern:'CVCe', group:'long-a', level:2, emoji:'📛' },
  { id:'same',  word:'same',  graphemes:['s','a','m','e'],  types:['c','lv','c','se'], pattern:'CVCe', group:'long-a', level:2, emoji:'🔁' },
  { id:'tame',  word:'tame',  graphemes:['t','a','m','e'],  types:['c','lv','c','se'], pattern:'CVCe', group:'long-a', level:2, emoji:'🦁' },
  { id:'cape',  word:'cape',  graphemes:['c','a','p','e'],  types:['c','lv','c','se'], pattern:'CVCe', group:'long-a', level:2, emoji:'🦸' },
  { id:'tape',  word:'tape',  graphemes:['t','a','p','e'],  types:['c','lv','c','se'], pattern:'CVCe', group:'long-a', level:2, emoji:'🩹' },
  { id:'cave',  word:'cave',  graphemes:['c','a','v','e'],  types:['c','lv','c','se'], pattern:'CVCe', group:'long-a', level:2, emoji:'🕳️' },
  { id:'gave',  word:'gave',  graphemes:['g','a','v','e'],  types:['c','lv','c','se'], pattern:'CVCe', group:'long-a', level:2, emoji:'🎁' },
  { id:'wave',  word:'wave',  graphemes:['w','a','v','e'],  types:['c','lv','c','se'], pattern:'CVCe', group:'long-a', level:2, emoji:'🌊' },
  { id:'race',  word:'race',  graphemes:['r','a','c','e'],  types:['c','lv','c','se'], pattern:'CVCe', group:'long-a', level:2, emoji:'🏎️' },
  // Long A — ai vowel pair
  { id:'mail',  word:'mail',  graphemes:['m','ai','l'],   types:['c','lv','c'],  pattern:'other', group:'long-a', level:2, emoji:'📬' },
  { id:'tail',  word:'tail',  graphemes:['t','ai','l'],   types:['c','lv','c'],  pattern:'other', group:'long-a', level:2, emoji:'🦊' },
  { id:'sail',  word:'sail',  graphemes:['s','ai','l'],   types:['c','lv','c'],  pattern:'other', group:'long-a', level:2, emoji:'⛵' },
  { id:'rail',  word:'rail',  graphemes:['r','ai','l'],   types:['c','lv','c'],  pattern:'other', group:'long-a', level:2, emoji:'🛤️' },
  { id:'bail',  word:'bail',  graphemes:['b','ai','l'],   types:['c','lv','c'],  pattern:'other', group:'long-a', level:2, emoji:'🪣' },
  { id:'nail',  word:'nail',  graphemes:['n','ai','l'],   types:['c','lv','c'],  pattern:'other', group:'long-a', level:2, emoji:'🔨' },
  { id:'pail',  word:'pail',  graphemes:['p','ai','l'],   types:['c','lv','c'],  pattern:'other', group:'long-a', level:2, emoji:'🪣' },
  { id:'hail',  word:'hail',  graphemes:['h','ai','l'],   types:['c','lv','c'],  pattern:'other', group:'long-a', level:2, emoji:'🌨️' },
  { id:'wail',  word:'wail',  graphemes:['w','ai','l'],   types:['c','lv','c'],  pattern:'other', group:'long-a', level:2, emoji:'😭' },
  { id:'rain',  word:'rain',  graphemes:['r','ai','n'],   types:['c','lv','c'],  pattern:'other', group:'long-a', level:2, emoji:'🌧️' },
  { id:'main',  word:'main',  graphemes:['m','ai','n'],   types:['c','lv','c'],  pattern:'other', group:'long-a', level:2, emoji:'⭐' },
  { id:'pain',  word:'pain',  graphemes:['p','ai','n'],   types:['c','lv','c'],  pattern:'other', group:'long-a', level:2, emoji:'🤕' },
  { id:'gain',  word:'gain',  graphemes:['g','ai','n'],   types:['c','lv','c'],  pattern:'other', group:'long-a', level:2, emoji:'📈' },
  { id:'paid',  word:'paid',  graphemes:['p','ai','d'],   types:['c','lv','c'],  pattern:'other', group:'long-a', level:2, emoji:'💵' },
  { id:'maid',  word:'maid',  graphemes:['m','ai','d'],   types:['c','lv','c'],  pattern:'other', group:'long-a', level:2, emoji:'🧹' },
  { id:'wait',  word:'wait',  graphemes:['w','ai','t'],   types:['c','lv','c'],  pattern:'other', group:'long-a', level:2, emoji:'⏳' },
  { id:'bait',  word:'bait',  graphemes:['b','ai','t'],   types:['c','lv','c'],  pattern:'other', group:'long-a', level:2, emoji:'🎣' },
  // Long A — ay vowel pair
  { id:'day',   word:'day',   graphemes:['d','ay'],       types:['c','lv'],      pattern:'other', group:'long-a', level:2, emoji:'☀️' },
  { id:'say',   word:'say',   graphemes:['s','ay'],       types:['c','lv'],      pattern:'other', group:'long-a', level:2, emoji:'💬' },
  { id:'way',   word:'way',   graphemes:['w','ay'],       types:['c','lv'],      pattern:'other', group:'long-a', level:2, emoji:'🛣️' },
  { id:'pay',   word:'pay',   graphemes:['p','ay'],       types:['c','lv'],      pattern:'other', group:'long-a', level:2, emoji:'💵' },
  { id:'bay',   word:'bay',   graphemes:['b','ay'],       types:['c','lv'],      pattern:'other', group:'long-a', level:2, emoji:'🌊' },
  { id:'hay',   word:'hay',   graphemes:['h','ay'],       types:['c','lv'],      pattern:'other', group:'long-a', level:2, emoji:'🌾' },
  { id:'may',   word:'may',   graphemes:['m','ay'],       types:['c','lv'],      pattern:'other', group:'long-a', level:2, emoji:'🌸' },
  { id:'ray',   word:'ray',   graphemes:['r','ay'],       types:['c','lv'],      pattern:'other', group:'long-a', level:2, emoji:'☀️' },
  { id:'jay',   word:'jay',   graphemes:['j','ay'],       types:['c','lv'],      pattern:'other', group:'long-a', level:2, emoji:'🐦' },
  { id:'lay',   word:'lay',   graphemes:['l','ay'],       types:['c','lv'],      pattern:'other', group:'long-a', level:2, emoji:'🛏️' },
  { id:'stay',  word:'stay',  graphemes:['st','ay'],      types:['bl','lv'],     pattern:'blend', group:'long-a', level:2, emoji:'🏠' },
  { id:'tray',  word:'tray',  graphemes:['tr','ay'],      types:['bl','lv'],     pattern:'blend', group:'long-a', level:2, emoji:'🍽️' },
  { id:'gray',  word:'gray',  graphemes:['gr','ay'],      types:['bl','lv'],     pattern:'blend', group:'long-a', level:2, emoji:'🩶' },
  { id:'pray',  word:'pray',  graphemes:['pr','ay'],      types:['bl','lv'],     pattern:'blend', group:'long-a', level:2, emoji:'🙏' },
  { id:'clay',  word:'clay',  graphemes:['cl','ay'],      types:['bl','lv'],     pattern:'blend', group:'long-a', level:2, emoji:'🏺' },
  { id:'sway',  word:'sway',  graphemes:['sw','ay'],      types:['bl','lv'],     pattern:'blend', group:'long-a', level:2, emoji:'🌊' },

  /* ══════════════════════════════════════
     LONG-E  (level 2)
  ══════════════════════════════════════ */
  { id:'bee',   word:'bee',   graphemes:['b','ee'],      types:['c','lv'],      pattern:'other', group:'long-e', level:2, emoji:'🐝' },
  { id:'see',   word:'see',   graphemes:['s','ee'],      types:['c','lv'],      pattern:'other', group:'long-e', level:2, emoji:'👀' },
  { id:'tree',  word:'tree',  graphemes:['tr','ee'],     types:['bl','lv'],     pattern:'blend', group:'long-e', level:2, emoji:'🌲' },
  { id:'feet',  word:'feet',  graphemes:['f','ee','t'],  types:['c','lv','c'],  pattern:'other', group:'long-e', level:2, emoji:'🦶' },
  { id:'meet',  word:'meet',  graphemes:['m','ee','t'],  types:['c','lv','c'],  pattern:'other', group:'long-e', level:2, emoji:'🤝' },
  { id:'seed',  word:'seed',  graphemes:['s','ee','d'],  types:['c','lv','c'],  pattern:'other', group:'long-e', level:2, emoji:'🌱' },
  { id:'feed',  word:'feed',  graphemes:['f','ee','d'],  types:['c','lv','c'],  pattern:'other', group:'long-e', level:2, emoji:'🍼' },
  { id:'need',  word:'need',  graphemes:['n','ee','d'],  types:['c','lv','c'],  pattern:'other', group:'long-e', level:2, emoji:'❤️' },
  { id:'weed',  word:'weed',  graphemes:['w','ee','d'],  types:['c','lv','c'],  pattern:'other', group:'long-e', level:2, emoji:'🌿' },
  { id:'week',  word:'week',  graphemes:['w','ee','k'],  types:['c','lv','c'],  pattern:'other', group:'long-e', level:2, emoji:'📅' },
  { id:'peek',  word:'peek',  graphemes:['p','ee','k'],  types:['c','lv','c'],  pattern:'other', group:'long-e', level:2, emoji:'👁️' },
  { id:'jeep',  word:'jeep',  graphemes:['j','ee','p'],  types:['c','lv','c'],  pattern:'other', group:'long-e', level:2, emoji:'🚙' },
  { id:'deep',  word:'deep',  graphemes:['d','ee','p'],  types:['c','lv','c'],  pattern:'other', group:'long-e', level:2, emoji:'🌊' },
  // Long E — ea vowel pair
  { id:'sea',   word:'sea',   graphemes:['s','ea'],       types:['c','lv'],      pattern:'other', group:'long-e', level:2, emoji:'🌊' },
  { id:'tea',   word:'tea',   graphemes:['t','ea'],       types:['c','lv'],      pattern:'other', group:'long-e', level:2, emoji:'🍵' },
  { id:'pea',   word:'pea',   graphemes:['p','ea'],       types:['c','lv'],      pattern:'other', group:'long-e', level:2, emoji:'🫛' },
  { id:'bean',  word:'bean',  graphemes:['b','ea','n'],   types:['c','lv','c'],  pattern:'other', group:'long-e', level:2, emoji:'🫘' },
  { id:'lean',  word:'lean',  graphemes:['l','ea','n'],   types:['c','lv','c'],  pattern:'other', group:'long-e', level:2, emoji:'💪' },
  { id:'mean',  word:'mean',  graphemes:['m','ea','n'],   types:['c','lv','c'],  pattern:'other', group:'long-e', level:2, emoji:'😠' },
  { id:'dean',  word:'dean',  graphemes:['d','ea','n'],   types:['c','lv','c'],  pattern:'other', group:'long-e', level:2, emoji:'👨‍🏫' },
  { id:'heat',  word:'heat',  graphemes:['h','ea','t'],   types:['c','lv','c'],  pattern:'other', group:'long-e', level:2, emoji:'🌡️' },
  { id:'beat',  word:'beat',  graphemes:['b','ea','t'],   types:['c','lv','c'],  pattern:'other', group:'long-e', level:2, emoji:'🥁' },
  { id:'feat',  word:'feat',  graphemes:['f','ea','t'],   types:['c','lv','c'],  pattern:'other', group:'long-e', level:2, emoji:'🏆' },
  { id:'meat',  word:'meat',  graphemes:['m','ea','t'],   types:['c','lv','c'],  pattern:'other', group:'long-e', level:2, emoji:'🥩' },
  { id:'neat',  word:'neat',  graphemes:['n','ea','t'],   types:['c','lv','c'],  pattern:'other', group:'long-e', level:2, emoji:'✨' },
  { id:'seat',  word:'seat',  graphemes:['s','ea','t'],   types:['c','lv','c'],  pattern:'other', group:'long-e', level:2, emoji:'💺' },
  { id:'lead',  word:'lead',  graphemes:['l','ea','d'],   types:['c','lv','c'],  pattern:'other', group:'long-e', level:2, emoji:'➡️' },
  { id:'read',  word:'read',  graphemes:['r','ea','d'],   types:['c','lv','c'],  pattern:'other', group:'long-e', level:2, emoji:'📖' },
  { id:'bead',  word:'bead',  graphemes:['b','ea','d'],   types:['c','lv','c'],  pattern:'other', group:'long-e', level:2, emoji:'📿' },
  { id:'each',  word:'each',  graphemes:['ea','ch'],      types:['lv','d'],      pattern:'other', group:'long-e', level:2, emoji:'🔢' },
  { id:'peach', word:'peach', graphemes:['p','ea','ch'],  types:['c','lv','d'],  pattern:'other', group:'long-e', level:2, emoji:'🍑' },
  { id:'beach', word:'beach', graphemes:['b','ea','ch'],  types:['c','lv','d'],  pattern:'other', group:'long-e', level:2, emoji:'🏖️' },
  { id:'teach', word:'teach', graphemes:['t','ea','ch'],  types:['c','lv','d'],  pattern:'other', group:'long-e', level:2, emoji:'📚' },
  { id:'reach', word:'reach', graphemes:['r','ea','ch'],  types:['c','lv','d'],  pattern:'other', group:'long-e', level:2, emoji:'🤲' },
  { id:'clean', word:'clean', graphemes:['cl','ea','n'],  types:['bl','lv','c'], pattern:'blend', group:'long-e', level:2, emoji:'🧼' },
  { id:'cream', word:'cream', graphemes:['cr','ea','m'],  types:['bl','lv','c'], pattern:'blend', group:'long-e', level:2, emoji:'🍦' },
  { id:'dream', word:'dream', graphemes:['dr','ea','m'],  types:['bl','lv','c'], pattern:'blend', group:'long-e', level:2, emoji:'💭' },
  { id:'steam', word:'steam', graphemes:['st','ea','m'],  types:['bl','lv','c'], pattern:'blend', group:'long-e', level:2, emoji:'♨️' },
  { id:'stream',word:'stream',graphemes:['str','ea','m'], types:['bl','lv','c'], pattern:'blend', group:'long-e', level:3, emoji:'🏞️' },

  /* ══════════════════════════════════════
     LONG-I  (CVCe, level 2)
  ══════════════════════════════════════ */
  { id:'bike',  word:'bike',  graphemes:['b','i','k','e'],  types:['c','lv','c','se'], pattern:'CVCe', group:'long-i', level:2, emoji:'🚲' },
  { id:'hike',  word:'hike',  graphemes:['h','i','k','e'],  types:['c','lv','c','se'], pattern:'CVCe', group:'long-i', level:2, emoji:'🥾' },
  { id:'like',  word:'like',  graphemes:['l','i','k','e'],  types:['c','lv','c','se'], pattern:'CVCe', group:'long-i', level:2, emoji:'❤️' },
  { id:'pine',  word:'pine',  graphemes:['p','i','n','e'],  types:['c','lv','c','se'], pattern:'CVCe', group:'long-i', level:2, emoji:'🌲' },
  { id:'mine',  word:'mine',  graphemes:['m','i','n','e'],  types:['c','lv','c','se'], pattern:'CVCe', group:'long-i', level:2, emoji:'⛏️' },
  { id:'vine',  word:'vine',  graphemes:['v','i','n','e'],  types:['c','lv','c','se'], pattern:'CVCe', group:'long-i', level:2, emoji:'🍇' },
  { id:'line',  word:'line',  graphemes:['l','i','n','e'],  types:['c','lv','c','se'], pattern:'CVCe', group:'long-i', level:2, emoji:'📏' },
  { id:'fine',  word:'fine',  graphemes:['f','i','n','e'],  types:['c','lv','c','se'], pattern:'CVCe', group:'long-i', level:2, emoji:'👍' },
  { id:'kite',  word:'kite',  graphemes:['k','i','t','e'],  types:['c','lv','c','se'], pattern:'CVCe', group:'long-i', level:2, emoji:'🪁' },
  { id:'mite',  word:'mite',  graphemes:['m','i','t','e'],  types:['c','lv','c','se'], pattern:'CVCe', group:'long-i', level:2, emoji:'🐜' },
  { id:'hide',  word:'hide',  graphemes:['h','i','d','e'],  types:['c','lv','c','se'], pattern:'CVCe', group:'long-i', level:2, emoji:'🙈' },
  { id:'ride',  word:'ride',  graphemes:['r','i','d','e'],  types:['c','lv','c','se'], pattern:'CVCe', group:'long-i', level:2, emoji:'🏇' },
  { id:'side',  word:'side',  graphemes:['s','i','d','e'],  types:['c','lv','c','se'], pattern:'CVCe', group:'long-i', level:2, emoji:'⬅️' },
  { id:'wide',  word:'wide',  graphemes:['w','i','d','e'],  types:['c','lv','c','se'], pattern:'CVCe', group:'long-i', level:2, emoji:'↔️' },
  // more long-i CVCe
  { id:'time',  word:'time',  graphemes:['t','i','m','e'],  types:['c','lv','c','se'], pattern:'CVCe', group:'long-i', level:2, emoji:'⏰' },
  { id:'dime',  word:'dime',  graphemes:['d','i','m','e'],  types:['c','lv','c','se'], pattern:'CVCe', group:'long-i', level:2, emoji:'🪙' },
  { id:'lime',  word:'lime',  graphemes:['l','i','m','e'],  types:['c','lv','c','se'], pattern:'CVCe', group:'long-i', level:2, emoji:'🍋' },
  { id:'dine',  word:'dine',  graphemes:['d','i','n','e'],  types:['c','lv','c','se'], pattern:'CVCe', group:'long-i', level:2, emoji:'🍽️' },
  { id:'nine',  word:'nine',  graphemes:['n','i','n','e'],  types:['c','lv','c','se'], pattern:'CVCe', group:'long-i', level:2, emoji:'9️⃣' },
  { id:'five',  word:'five',  graphemes:['f','i','v','e'],  types:['c','lv','c','se'], pattern:'CVCe', group:'long-i', level:2, emoji:'5️⃣' },
  { id:'give',  word:'give',  graphemes:['g','i','v','e'],  types:['c','lv','c','se'], pattern:'CVCe', group:'long-i', level:2, emoji:'🎁' },
  { id:'live',  word:'live',  graphemes:['l','i','v','e'],  types:['c','lv','c','se'], pattern:'CVCe', group:'long-i', level:2, emoji:'💚' },
  { id:'bite',  word:'bite',  graphemes:['b','i','t','e'],  types:['c','lv','c','se'], pattern:'CVCe', group:'long-i', level:2, emoji:'😬' },
  { id:'site',  word:'site',  graphemes:['s','i','t','e'],  types:['c','lv','c','se'], pattern:'CVCe', group:'long-i', level:2, emoji:'🌐' },
  { id:'tile',  word:'tile',  graphemes:['t','i','l','e'],  types:['c','lv','c','se'], pattern:'CVCe', group:'long-i', level:2, emoji:'🔲' },
  { id:'mile',  word:'mile',  graphemes:['m','i','l','e'],  types:['c','lv','c','se'], pattern:'CVCe', group:'long-i', level:2, emoji:'📏' },
  { id:'file',  word:'file',  graphemes:['f','i','l','e'],  types:['c','lv','c','se'], pattern:'CVCe', group:'long-i', level:2, emoji:'📁' },
  { id:'pile',  word:'pile',  graphemes:['p','i','l','e'],  types:['c','lv','c','se'], pattern:'CVCe', group:'long-i', level:2, emoji:'📚' },
  { id:'wipe',  word:'wipe',  graphemes:['w','i','p','e'],  types:['c','lv','c','se'], pattern:'CVCe', group:'long-i', level:2, emoji:'🧹' },
  { id:'pipe',  word:'pipe',  graphemes:['p','i','p','e'],  types:['c','lv','c','se'], pattern:'CVCe', group:'long-i', level:2, emoji:'🪠' },
  { id:'ripe',  word:'ripe',  graphemes:['r','i','p','e'],  types:['c','lv','c','se'], pattern:'CVCe', group:'long-i', level:2, emoji:'🍎' },

  /* ══════════════════════════════════════
     LONG-O  (CVCe, level 2)
  ══════════════════════════════════════ */
  { id:'bone',  word:'bone',  graphemes:['b','o','n','e'],  types:['c','lv','c','se'], pattern:'CVCe', group:'long-o', level:2, emoji:'🦴' },
  { id:'cone',  word:'cone',  graphemes:['c','o','n','e'],  types:['c','lv','c','se'], pattern:'CVCe', group:'long-o', level:2, emoji:'🍦' },
  { id:'tone',  word:'tone',  graphemes:['t','o','n','e'],  types:['c','lv','c','se'], pattern:'CVCe', group:'long-o', level:2, emoji:'🎵' },
  { id:'zone',  word:'zone',  graphemes:['z','o','n','e'],  types:['c','lv','c','se'], pattern:'CVCe', group:'long-o', level:2, emoji:'🚫' },
  { id:'home',  word:'home',  graphemes:['h','o','m','e'],  types:['c','lv','c','se'], pattern:'CVCe', group:'long-o', level:2, emoji:'🏠' },
  { id:'hope',  word:'hope',  graphemes:['h','o','p','e'],  types:['c','lv','c','se'], pattern:'CVCe', group:'long-o', level:2, emoji:'🤞' },
  { id:'rope',  word:'rope',  graphemes:['r','o','p','e'],  types:['c','lv','c','se'], pattern:'CVCe', group:'long-o', level:2, emoji:'🪢' },
  { id:'note',  word:'note',  graphemes:['n','o','t','e'],  types:['c','lv','c','se'], pattern:'CVCe', group:'long-o', level:2, emoji:'📝' },
  { id:'vote',  word:'vote',  graphemes:['v','o','t','e'],  types:['c','lv','c','se'], pattern:'CVCe', group:'long-o', level:2, emoji:'🗳️' },
  { id:'hole',  word:'hole',  graphemes:['h','o','l','e'],  types:['c','lv','c','se'], pattern:'CVCe', group:'long-o', level:2, emoji:'🕳️' },
  { id:'mole',  word:'mole',  graphemes:['m','o','l','e'],  types:['c','lv','c','se'], pattern:'CVCe', group:'long-o', level:2, emoji:'🦔' },
  { id:'pole',  word:'pole',  graphemes:['p','o','l','e'],  types:['c','lv','c','se'], pattern:'CVCe', group:'long-o', level:2, emoji:'🎣' },
  // more long-o CVCe
  { id:'code',  word:'code',  graphemes:['c','o','d','e'],  types:['c','lv','c','se'], pattern:'CVCe', group:'long-o', level:2, emoji:'💻' },
  { id:'rode',  word:'rode',  graphemes:['r','o','d','e'],  types:['c','lv','c','se'], pattern:'CVCe', group:'long-o', level:2, emoji:'🏇' },
  { id:'mode',  word:'mode',  graphemes:['m','o','d','e'],  types:['c','lv','c','se'], pattern:'CVCe', group:'long-o', level:2, emoji:'🔧' },
  { id:'nose',  word:'nose',  graphemes:['n','o','s','e'],  types:['c','lv','c','se'], pattern:'CVCe', group:'long-o', level:2, emoji:'👃' },
  { id:'rose',  word:'rose',  graphemes:['r','o','s','e'],  types:['c','lv','c','se'], pattern:'CVCe', group:'long-o', level:2, emoji:'🌹' },
  { id:'pose',  word:'pose',  graphemes:['p','o','s','e'],  types:['c','lv','c','se'], pattern:'CVCe', group:'long-o', level:2, emoji:'📸' },
  { id:'dove',  word:'dove',  graphemes:['d','o','v','e'],  types:['c','lv','c','se'], pattern:'CVCe', group:'long-o', level:2, emoji:'🕊️' },
  { id:'woke',  word:'woke',  graphemes:['w','o','k','e'],  types:['c','lv','c','se'], pattern:'CVCe', group:'long-o', level:2, emoji:'⏰' },
  { id:'joke',  word:'joke',  graphemes:['j','o','k','e'],  types:['c','lv','c','se'], pattern:'CVCe', group:'long-o', level:2, emoji:'😄' },
  { id:'poke',  word:'poke',  graphemes:['p','o','k','e'],  types:['c','lv','c','se'], pattern:'CVCe', group:'long-o', level:2, emoji:'👉' },
  { id:'wove',  word:'wove',  graphemes:['w','o','v','e'],  types:['c','lv','c','se'], pattern:'CVCe', group:'long-o', level:2, emoji:'🧶' },
  // Long O — oa vowel pair
  { id:'boat',  word:'boat',  graphemes:['b','oa','t'],     types:['c','lv','c'],  pattern:'other', group:'long-o', level:2, emoji:'⛵' },
  { id:'coat',  word:'coat',  graphemes:['c','oa','t'],     types:['c','lv','c'],  pattern:'other', group:'long-o', level:2, emoji:'🧥' },
  { id:'goat',  word:'goat',  graphemes:['g','oa','t'],     types:['c','lv','c'],  pattern:'other', group:'long-o', level:2, emoji:'🐐' },
  { id:'moat',  word:'moat',  graphemes:['m','oa','t'],     types:['c','lv','c'],  pattern:'other', group:'long-o', level:2, emoji:'🏰' },
  { id:'road',  word:'road',  graphemes:['r','oa','d'],     types:['c','lv','c'],  pattern:'other', group:'long-o', level:2, emoji:'🛣️' },
  { id:'load',  word:'load',  graphemes:['l','oa','d'],     types:['c','lv','c'],  pattern:'other', group:'long-o', level:2, emoji:'📦' },
  { id:'toad',  word:'toad',  graphemes:['t','oa','d'],     types:['c','lv','c'],  pattern:'other', group:'long-o', level:2, emoji:'🐸' },
  { id:'soap',  word:'soap',  graphemes:['s','oa','p'],     types:['c','lv','c'],  pattern:'other', group:'long-o', level:2, emoji:'🧼' },
  { id:'foam',  word:'foam',  graphemes:['f','oa','m'],     types:['c','lv','c'],  pattern:'other', group:'long-o', level:2, emoji:'🫧' },
  { id:'loan',  word:'loan',  graphemes:['l','oa','n'],     types:['c','lv','c'],  pattern:'other', group:'long-o', level:2, emoji:'💵' },
  { id:'moan',  word:'moan',  graphemes:['m','oa','n'],     types:['c','lv','c'],  pattern:'other', group:'long-o', level:2, emoji:'😩' },
  { id:'groan', word:'groan', graphemes:['gr','oa','n'],    types:['bl','lv','c'], pattern:'blend', group:'long-o', level:2, emoji:'😩' },
  { id:'toast', word:'toast', graphemes:['t','oa','st'],    types:['c','lv','bl'], pattern:'other', group:'long-o', level:2, emoji:'🍞' },
  { id:'roast', word:'roast', graphemes:['r','oa','st'],    types:['c','lv','bl'], pattern:'other', group:'long-o', level:2, emoji:'🍗' },
  { id:'coast', word:'coast', graphemes:['c','oa','st'],    types:['c','lv','bl'], pattern:'other', group:'long-o', level:2, emoji:'🏖️' },
  // Long O — ow pattern (long-o sound)
  { id:'low',   word:'low',   graphemes:['l','ow'],         types:['c','lv'],      pattern:'other', group:'long-o', level:2, emoji:'⬇️' },
  { id:'row',   word:'row',   graphemes:['r','ow'],         types:['c','lv'],      pattern:'other', group:'long-o', level:2, emoji:'🚣' },
  { id:'mow',   word:'mow',   graphemes:['m','ow'],         types:['c','lv'],      pattern:'other', group:'long-o', level:2, emoji:'🌿' },
  { id:'tow',   word:'tow',   graphemes:['t','ow'],         types:['c','lv'],      pattern:'other', group:'long-o', level:2, emoji:'🚗' },
  { id:'sow',   word:'sow',   graphemes:['s','ow'],         types:['c','lv'],      pattern:'other', group:'long-o', level:2, emoji:'🌱' },
  { id:'flow',  word:'flow',  graphemes:['fl','ow'],        types:['bl','lv'],     pattern:'blend', group:'long-o', level:2, emoji:'💧' },
  { id:'glow',  word:'glow',  graphemes:['gl','ow'],        types:['bl','lv'],     pattern:'blend', group:'long-o', level:2, emoji:'✨' },
  { id:'slow',  word:'slow',  graphemes:['sl','ow'],        types:['bl','lv'],     pattern:'blend', group:'long-o', level:2, emoji:'🐢' },
  { id:'snow',  word:'snow',  graphemes:['sn','ow'],        types:['bl','lv'],     pattern:'blend', group:'long-o', level:2, emoji:'❄️' },
  { id:'blow',  word:'blow',  graphemes:['bl','ow'],        types:['bl','lv'],     pattern:'blend', group:'long-o', level:2, emoji:'💨' },
  { id:'grow',  word:'grow',  graphemes:['gr','ow'],        types:['bl','lv'],     pattern:'blend', group:'long-o', level:2, emoji:'🌱' },
  { id:'show',  word:'show',  graphemes:['sh','ow'],        types:['d','lv'],      pattern:'other', group:'long-o', level:2, emoji:'🎭' },
  { id:'know',  word:'know',  graphemes:['kn','ow'],        types:['bl','lv'],     pattern:'other', group:'long-o', level:2, emoji:'🧠' },
  { id:'crow',  word:'crow',  graphemes:['cr','ow'],        types:['bl','lv'],     pattern:'blend', group:'long-o', level:2, emoji:'🐦‍⬛' },

  /* ══════════════════════════════════════
     LONG-U  (CVCe, level 2)
  ══════════════════════════════════════ */
  { id:'cube',  word:'cube',  graphemes:['c','u','b','e'],  types:['c','lv','c','se'], pattern:'CVCe', group:'long-u', level:2, emoji:'🧊' },
  { id:'tube',  word:'tube',  graphemes:['t','u','b','e'],  types:['c','lv','c','se'], pattern:'CVCe', group:'long-u', level:2, emoji:'🧪' },
  { id:'tune',  word:'tune',  graphemes:['t','u','n','e'],  types:['c','lv','c','se'], pattern:'CVCe', group:'long-u', level:2, emoji:'🎵' },
  { id:'cute',  word:'cute',  graphemes:['c','u','t','e'],  types:['c','lv','c','se'], pattern:'CVCe', group:'long-u', level:2, emoji:'🥰' },
  { id:'mule',  word:'mule',  graphemes:['m','u','l','e'],  types:['c','lv','c','se'], pattern:'CVCe', group:'long-u', level:2, emoji:'🫏' },
  { id:'rule',  word:'rule',  graphemes:['r','u','l','e'],  types:['c','lv','c','se'], pattern:'CVCe', group:'long-u', level:2, emoji:'📏' },
  { id:'huge',  word:'huge',  graphemes:['h','u','g','e'],  types:['c','lv','c','se'], pattern:'CVCe', group:'long-u', level:2, emoji:'🐋' },
  { id:'dune',  word:'dune',  graphemes:['d','u','n','e'],  types:['c','lv','c','se'], pattern:'CVCe', group:'long-u', level:2, emoji:'🏜️' },
  { id:'June',  word:'June',  graphemes:['j','u','n','e'],  types:['c','lv','c','se'], pattern:'CVCe', group:'long-u', level:2, emoji:'📅' },
  { id:'fuse',  word:'fuse',  graphemes:['f','u','s','e'],  types:['c','lv','c','se'], pattern:'CVCe', group:'long-u', level:2, emoji:'💥' },
  { id:'muse',  word:'muse',  graphemes:['m','u','s','e'],  types:['c','lv','c','se'], pattern:'CVCe', group:'long-u', level:2, emoji:'💭' },
  { id:'use',   word:'use',   graphemes:['u','s','e'],      types:['lv','c','se'],     pattern:'CVCe', group:'long-u', level:2, emoji:'✅' },
  { id:'duke',  word:'duke',  graphemes:['d','u','k','e'],  types:['c','lv','c','se'], pattern:'CVCe', group:'long-u', level:2, emoji:'👑' },
  { id:'Luke',  word:'Luke',  graphemes:['l','u','k','e'],  types:['c','lv','c','se'], pattern:'CVCe', group:'long-u', level:2, emoji:'🌟' },
  { id:'flute', word:'flute', graphemes:['fl','u','t','e'], types:['bl','lv','c','se'],pattern:'CVCe', group:'long-u', level:2, emoji:'🪈' },
  { id:'fluke', word:'fluke', graphemes:['fl','u','k','e'], types:['bl','lv','c','se'],pattern:'CVCe', group:'long-u', level:3, emoji:'🎲' },

  /* ══════════════════════════════════════
     DIGRAPHS  (level 2)
  ══════════════════════════════════════ */
  { id:'ship',  word:'ship',  graphemes:['sh','i','p'],  types:['d','sv','c'],  pattern:'digraph', group:'digraphs', level:2, emoji:'🚢' },
  { id:'chip',  word:'chip',  graphemes:['ch','i','p'],  types:['d','sv','c'],  pattern:'digraph', group:'digraphs', level:2, emoji:'🍟' },
  { id:'chop',  word:'chop',  graphemes:['ch','o','p'],  types:['d','sv','c'],  pattern:'digraph', group:'digraphs', level:2, emoji:'🔪' },
  { id:'chat',  word:'chat',  graphemes:['ch','a','t'],  types:['d','sv','c'],  pattern:'digraph', group:'digraphs', level:2, emoji:'💬' },
  { id:'chin',  word:'chin',  graphemes:['ch','i','n'],  types:['d','sv','c'],  pattern:'digraph', group:'digraphs', level:2, emoji:'👶' },
  { id:'shut',  word:'shut',  graphemes:['sh','u','t'],  types:['d','sv','c'],  pattern:'digraph', group:'digraphs', level:2, emoji:'🚪' },
  { id:'shop',  word:'shop',  graphemes:['sh','o','p'],  types:['d','sv','c'],  pattern:'digraph', group:'digraphs', level:2, emoji:'🛍️' },
  { id:'shed',  word:'shed',  graphemes:['sh','e','d'],  types:['d','sv','c'],  pattern:'digraph', group:'digraphs', level:2, emoji:'🏚️' },
  { id:'them',  word:'them',  graphemes:['th','e','m'],  types:['d','sv','c'],  pattern:'digraph', group:'digraphs', level:2, emoji:'👥' },
  { id:'then',  word:'then',  graphemes:['th','e','n'],  types:['d','sv','c'],  pattern:'digraph', group:'digraphs', level:2, emoji:'⏭️' },
  { id:'thin',  word:'thin',  graphemes:['th','i','n'],  types:['d','sv','c'],  pattern:'digraph', group:'digraphs', level:2, emoji:'💪' },
  { id:'that',  word:'that',  graphemes:['th','a','t'],  types:['d','sv','c'],  pattern:'digraph', group:'digraphs', level:2, emoji:'👆' },
  { id:'math',  word:'math',  graphemes:['m','a','th'],  types:['c','sv','d'],  pattern:'digraph', group:'digraphs', level:2, emoji:'➕' },
  { id:'bath',  word:'bath',  graphemes:['b','a','th'],  types:['c','sv','d'],  pattern:'digraph', group:'digraphs', level:2, emoji:'🛁' },
  { id:'rich',  word:'rich',  graphemes:['r','i','ch'],  types:['c','sv','d'],  pattern:'digraph', group:'digraphs', level:2, emoji:'💰' },
  { id:'much',  word:'much',  graphemes:['m','u','ch'],  types:['c','sv','d'],  pattern:'digraph', group:'digraphs', level:2, emoji:'📏' },
  { id:'fish',  word:'fish',  graphemes:['f','i','sh'],  types:['c','sv','d'],  pattern:'digraph', group:'digraphs', level:2, emoji:'🐟' },
  { id:'dish',  word:'dish',  graphemes:['d','i','sh'],  types:['c','sv','d'],  pattern:'digraph', group:'digraphs', level:2, emoji:'🍽️' },
  { id:'wish',  word:'wish',  graphemes:['w','i','sh'],  types:['c','sv','d'],  pattern:'digraph', group:'digraphs', level:2, emoji:'⭐' },
  // more sh/ch/th/wh digraphs
  { id:'cash',  word:'cash',  graphemes:['c','a','sh'],  types:['c','sv','d'],  pattern:'digraph', group:'digraphs', level:2, emoji:'💵' },
  { id:'rash',  word:'rash',  graphemes:['r','a','sh'],  types:['c','sv','d'],  pattern:'digraph', group:'digraphs', level:2, emoji:'🩹' },
  { id:'dash',  word:'dash',  graphemes:['d','a','sh'],  types:['c','sv','d'],  pattern:'digraph', group:'digraphs', level:2, emoji:'💨' },
  { id:'gash',  word:'gash',  graphemes:['g','a','sh'],  types:['c','sv','d'],  pattern:'digraph', group:'digraphs', level:2, emoji:'🗡️' },
  { id:'lash',  word:'lash',  graphemes:['l','a','sh'],  types:['c','sv','d'],  pattern:'digraph', group:'digraphs', level:2, emoji:'💥' },
  { id:'mash',  word:'mash',  graphemes:['m','a','sh'],  types:['c','sv','d'],  pattern:'digraph', group:'digraphs', level:2, emoji:'🥔' },
  { id:'sash',  word:'sash',  graphemes:['s','a','sh'],  types:['c','sv','d'],  pattern:'digraph', group:'digraphs', level:2, emoji:'🎀' },
  { id:'rush',  word:'rush',  graphemes:['r','u','sh'],  types:['c','sv','d'],  pattern:'digraph', group:'digraphs', level:2, emoji:'💨' },
  { id:'bush',  word:'bush',  graphemes:['b','u','sh'],  types:['c','sv','d'],  pattern:'digraph', group:'digraphs', level:2, emoji:'🌿' },
  { id:'gush',  word:'gush',  graphemes:['g','u','sh'],  types:['c','sv','d'],  pattern:'digraph', group:'digraphs', level:2, emoji:'💧' },
  { id:'hush',  word:'hush',  graphemes:['h','u','sh'],  types:['c','sv','d'],  pattern:'digraph', group:'digraphs', level:2, emoji:'🤫' },
  { id:'mush',  word:'mush',  graphemes:['m','u','sh'],  types:['c','sv','d'],  pattern:'digraph', group:'digraphs', level:2, emoji:'🍲' },
  { id:'lush',  word:'lush',  graphemes:['l','u','sh'],  types:['c','sv','d'],  pattern:'digraph', group:'digraphs', level:2, emoji:'🌿' },
  { id:'such',  word:'such',  graphemes:['s','u','ch'],  types:['c','sv','d'],  pattern:'digraph', group:'digraphs', level:2, emoji:'✅' },
  { id:'with',  word:'with',  graphemes:['w','i','th'],  types:['c','sv','d'],  pattern:'digraph', group:'digraphs', level:2, emoji:'🤝' },
  { id:'path',  word:'path',  graphemes:['p','a','th'],  types:['c','sv','d'],  pattern:'digraph', group:'digraphs', level:2, emoji:'🛤️' },
  { id:'cloth', word:'cloth', graphemes:['cl','o','th'], types:['bl','sv','d'], pattern:'digraph', group:'digraphs', level:2, emoji:'🧶' },
  { id:'chin',  word:'chin',  graphemes:['ch','i','n'],  types:['d','sv','c'],  pattern:'digraph', group:'digraphs', level:2, emoji:'😊' },
  { id:'whip',  word:'whip',  graphemes:['wh','i','p'],  types:['d','sv','c'],  pattern:'digraph', group:'digraphs', level:2, emoji:'💨' },
  { id:'when',  word:'when',  graphemes:['wh','e','n'],  types:['d','sv','c'],  pattern:'digraph', group:'digraphs', level:2, emoji:'❓' },
  { id:'whiz',  word:'whiz',  graphemes:['wh','i','z'],  types:['d','sv','c'],  pattern:'digraph', group:'digraphs', level:2, emoji:'⚡' },
  // -ck digraph words (ck = one phoneme /k/, two letters)
  // Short A + ck
  { id:'back',  word:'back',  graphemes:['b','a','ck'],  types:['c','sv','d'],  pattern:'digraph', group:'digraphs', level:2, emoji:'🔙' },
  { id:'hack',  word:'hack',  graphemes:['h','a','ck'],  types:['c','sv','d'],  pattern:'digraph', group:'digraphs', level:2, emoji:'🪓' },
  { id:'jack',  word:'jack',  graphemes:['j','a','ck'],  types:['c','sv','d'],  pattern:'digraph', group:'digraphs', level:2, emoji:'🔌' },
  { id:'lack',  word:'lack',  graphemes:['l','a','ck'],  types:['c','sv','d'],  pattern:'digraph', group:'digraphs', level:2, emoji:'❌' },
  { id:'pack',  word:'pack',  graphemes:['p','a','ck'],  types:['c','sv','d'],  pattern:'digraph', group:'digraphs', level:2, emoji:'🎒' },
  { id:'rack',  word:'rack',  graphemes:['r','a','ck'],  types:['c','sv','d'],  pattern:'digraph', group:'digraphs', level:2, emoji:'🗄️' },
  { id:'sack',  word:'sack',  graphemes:['s','a','ck'],  types:['c','sv','d'],  pattern:'digraph', group:'digraphs', level:2, emoji:'👜' },
  { id:'tack',  word:'tack',  graphemes:['t','a','ck'],  types:['c','sv','d'],  pattern:'digraph', group:'digraphs', level:2, emoji:'📌' },
  // Short E + ck
  { id:'deck',  word:'deck',  graphemes:['d','e','ck'],  types:['c','sv','d'],  pattern:'digraph', group:'digraphs', level:2, emoji:'🃏' },
  { id:'neck',  word:'neck',  graphemes:['n','e','ck'],  types:['c','sv','d'],  pattern:'digraph', group:'digraphs', level:2, emoji:'🦒' },
  { id:'peck',  word:'peck',  graphemes:['p','e','ck'],  types:['c','sv','d'],  pattern:'digraph', group:'digraphs', level:2, emoji:'🐦' },
  { id:'beck',  word:'beck',  graphemes:['b','e','ck'],  types:['c','sv','d'],  pattern:'digraph', group:'digraphs', level:2, emoji:'🌊' },
  // Short I + ck
  { id:'kick',  word:'kick',  graphemes:['k','i','ck'],  types:['c','sv','d'],  pattern:'digraph', group:'digraphs', level:2, emoji:'⚽' },
  { id:'lick',  word:'lick',  graphemes:['l','i','ck'],  types:['c','sv','d'],  pattern:'digraph', group:'digraphs', level:2, emoji:'👅' },
  { id:'nick',  word:'nick',  graphemes:['n','i','ck'],  types:['c','sv','d'],  pattern:'digraph', group:'digraphs', level:2, emoji:'✂️' },
  { id:'pick',  word:'pick',  graphemes:['p','i','ck'],  types:['c','sv','d'],  pattern:'digraph', group:'digraphs', level:2, emoji:'🍒' },
  { id:'sick',  word:'sick',  graphemes:['s','i','ck'],  types:['c','sv','d'],  pattern:'digraph', group:'digraphs', level:2, emoji:'🤒' },
  { id:'tick',  word:'tick',  graphemes:['t','i','ck'],  types:['c','sv','d'],  pattern:'digraph', group:'digraphs', level:2, emoji:'✔️' },
  { id:'wick',  word:'wick',  graphemes:['w','i','ck'],  types:['c','sv','d'],  pattern:'digraph', group:'digraphs', level:2, emoji:'🕯️' },
  // Short O + ck
  { id:'lock',  word:'lock',  graphemes:['l','o','ck'],  types:['c','sv','d'],  pattern:'digraph', group:'digraphs', level:2, emoji:'🔒' },
  { id:'rock',  word:'rock',  graphemes:['r','o','ck'],  types:['c','sv','d'],  pattern:'digraph', group:'digraphs', level:2, emoji:'🪨' },
  { id:'sock',  word:'sock',  graphemes:['s','o','ck'],  types:['c','sv','d'],  pattern:'digraph', group:'digraphs', level:2, emoji:'🧦' },
  { id:'dock',  word:'dock',  graphemes:['d','o','ck'],  types:['c','sv','d'],  pattern:'digraph', group:'digraphs', level:2, emoji:'🚢' },
  { id:'mock',  word:'mock',  graphemes:['m','o','ck'],  types:['c','sv','d'],  pattern:'digraph', group:'digraphs', level:2, emoji:'😜' },
  { id:'pock',  word:'pock',  graphemes:['p','o','ck'],  types:['c','sv','d'],  pattern:'digraph', group:'digraphs', level:2, emoji:'⭕' },
  { id:'cock',  word:'cock',  graphemes:['c','o','ck'],  types:['c','sv','d'],  pattern:'digraph', group:'digraphs', level:2, emoji:'🐓' },
  // Short U + ck
  { id:'duck',  word:'duck',  graphemes:['d','u','ck'],  types:['c','sv','d'],  pattern:'digraph', group:'digraphs', level:2, emoji:'🦆' },
  { id:'luck',  word:'luck',  graphemes:['l','u','ck'],  types:['c','sv','d'],  pattern:'digraph', group:'digraphs', level:2, emoji:'🍀' },
  { id:'muck',  word:'muck',  graphemes:['m','u','ck'],  types:['c','sv','d'],  pattern:'digraph', group:'digraphs', level:2, emoji:'💩' },
  { id:'suck',  word:'suck',  graphemes:['s','u','ck'],  types:['c','sv','d'],  pattern:'digraph', group:'digraphs', level:2, emoji:'🍭' },
  { id:'tuck',  word:'tuck',  graphemes:['t','u','ck'],  types:['c','sv','d'],  pattern:'digraph', group:'digraphs', level:2, emoji:'🛏️' },
  { id:'buck',  word:'buck',  graphemes:['b','u','ck'],  types:['c','sv','d'],  pattern:'digraph', group:'digraphs', level:2, emoji:'🦌' },
  // -ck with blends
  { id:'black',  word:'black',  graphemes:['bl','a','ck'],  types:['bl','sv','d'],  pattern:'blend', group:'digraphs', level:3, emoji:'⚫' },
  { id:'crack',  word:'crack',  graphemes:['cr','a','ck'],  types:['bl','sv','d'],  pattern:'blend', group:'digraphs', level:3, emoji:'🔨' },
  { id:'snack',  word:'snack',  graphemes:['sn','a','ck'],  types:['bl','sv','d'],  pattern:'blend', group:'digraphs', level:3, emoji:'🍿' },
  { id:'stack',  word:'stack',  graphemes:['st','a','ck'],  types:['bl','sv','d'],  pattern:'blend', group:'digraphs', level:3, emoji:'📚' },
  { id:'track',  word:'track',  graphemes:['tr','a','ck'],  types:['bl','sv','d'],  pattern:'blend', group:'digraphs', level:3, emoji:'🛤️' },
  { id:'brick',  word:'brick',  graphemes:['br','i','ck'],  types:['bl','sv','d'],  pattern:'blend', group:'digraphs', level:3, emoji:'🧱' },
  { id:'click',  word:'click',  graphemes:['cl','i','ck'],  types:['bl','sv','d'],  pattern:'blend', group:'digraphs', level:3, emoji:'🖱️' },
  { id:'trick',  word:'trick',  graphemes:['tr','i','ck'],  types:['bl','sv','d'],  pattern:'blend', group:'digraphs', level:3, emoji:'🪄' },
  { id:'clock',  word:'clock',  graphemes:['cl','o','ck'],  types:['bl','sv','d'],  pattern:'blend', group:'digraphs', level:3, emoji:'🕐' },
  { id:'block',  word:'block',  graphemes:['bl','o','ck'],  types:['bl','sv','d'],  pattern:'blend', group:'digraphs', level:3, emoji:'🧊' },
  { id:'flock',  word:'flock',  graphemes:['fl','o','ck'],  types:['bl','sv','d'],  pattern:'blend', group:'digraphs', level:3, emoji:'🐑' },
  { id:'stuck',  word:'stuck',  graphemes:['st','u','ck'],  types:['bl','sv','d'],  pattern:'blend', group:'digraphs', level:3, emoji:'🪛' },
  { id:'pluck',  word:'pluck',  graphemes:['pl','u','ck'],  types:['bl','sv','d'],  pattern:'blend', group:'digraphs', level:3, emoji:'🎸' },
  { id:'truck',  word:'truck',  graphemes:['tr','u','ck'],  types:['bl','sv','d'],  pattern:'blend', group:'digraphs', level:3, emoji:'🚛' },
  // -ng digraph words
  { id:'bang',  word:'bang',  graphemes:['b','a','ng'],  types:['c','sv','d'],  pattern:'digraph', group:'digraphs', level:2, emoji:'💥' },
  { id:'gang',  word:'gang',  graphemes:['g','a','ng'],  types:['c','sv','d'],  pattern:'digraph', group:'digraphs', level:2, emoji:'👥' },
  { id:'hang',  word:'hang',  graphemes:['h','a','ng'],  types:['c','sv','d'],  pattern:'digraph', group:'digraphs', level:2, emoji:'🪝' },
  { id:'rang',  word:'rang',  graphemes:['r','a','ng'],  types:['c','sv','d'],  pattern:'digraph', group:'digraphs', level:2, emoji:'🔔' },
  { id:'sang',  word:'sang',  graphemes:['s','a','ng'],  types:['c','sv','d'],  pattern:'digraph', group:'digraphs', level:2, emoji:'🎤' },
  { id:'ring',  word:'ring',  graphemes:['r','i','ng'],  types:['c','sv','d'],  pattern:'digraph', group:'digraphs', level:2, emoji:'💍' },
  { id:'king',  word:'king',  graphemes:['k','i','ng'],  types:['c','sv','d'],  pattern:'digraph', group:'digraphs', level:2, emoji:'👑' },
  { id:'sing',  word:'sing',  graphemes:['s','i','ng'],  types:['c','sv','d'],  pattern:'digraph', group:'digraphs', level:2, emoji:'🎤' },
  { id:'wing',  word:'wing',  graphemes:['w','i','ng'],  types:['c','sv','d'],  pattern:'digraph', group:'digraphs', level:2, emoji:'🦋' },
  { id:'ding',  word:'ding',  graphemes:['d','i','ng'],  types:['c','sv','d'],  pattern:'digraph', group:'digraphs', level:2, emoji:'🔔' },
  { id:'ping',  word:'ping',  graphemes:['p','i','ng'],  types:['c','sv','d'],  pattern:'digraph', group:'digraphs', level:2, emoji:'🏓' },
  { id:'song',  word:'song',  graphemes:['s','o','ng'],  types:['c','sv','d'],  pattern:'digraph', group:'digraphs', level:2, emoji:'🎵' },
  { id:'gong',  word:'gong',  graphemes:['g','o','ng'],  types:['c','sv','d'],  pattern:'digraph', group:'digraphs', level:2, emoji:'🥁' },
  { id:'long',  word:'long',  graphemes:['l','o','ng'],  types:['c','sv','d'],  pattern:'digraph', group:'digraphs', level:2, emoji:'📏' },
  { id:'bong',  word:'bong',  graphemes:['b','o','ng'],  types:['c','sv','d'],  pattern:'digraph', group:'digraphs', level:2, emoji:'🔔' },
  { id:'prong', word:'prong', graphemes:['pr','o','ng'], types:['bl','sv','d'], pattern:'blend',   group:'digraphs', level:3, emoji:'🍴' },
  { id:'sung',  word:'sung',  graphemes:['s','u','ng'],  types:['c','sv','d'],  pattern:'digraph', group:'digraphs', level:2, emoji:'🎤' },
  { id:'hung',  word:'hung',  graphemes:['h','u','ng'],  types:['c','sv','d'],  pattern:'digraph', group:'digraphs', level:2, emoji:'🪝' },
  { id:'lung',  word:'lung',  graphemes:['l','u','ng'],  types:['c','sv','d'],  pattern:'digraph', group:'digraphs', level:2, emoji:'🫁' },
  { id:'rung',  word:'rung',  graphemes:['r','u','ng'],  types:['c','sv','d'],  pattern:'digraph', group:'digraphs', level:2, emoji:'🪜' },
  // -ll words
  { id:'bell',  word:'bell',  graphemes:['b','e','ll'],  types:['c','sv','d'],  pattern:'digraph', group:'digraphs', level:2, emoji:'🔔' },
  { id:'fell',  word:'fell',  graphemes:['f','e','ll'],  types:['c','sv','d'],  pattern:'digraph', group:'digraphs', level:2, emoji:'⬇️' },
  { id:'sell',  word:'sell',  graphemes:['s','e','ll'],  types:['c','sv','d'],  pattern:'digraph', group:'digraphs', level:2, emoji:'🏷️' },
  { id:'tell',  word:'tell',  graphemes:['t','e','ll'],  types:['c','sv','d'],  pattern:'digraph', group:'digraphs', level:2, emoji:'📢' },
  { id:'well',  word:'well',  graphemes:['w','e','ll'],  types:['c','sv','d'],  pattern:'digraph', group:'digraphs', level:2, emoji:'🪣' },
  { id:'yell',  word:'yell',  graphemes:['y','e','ll'],  types:['c','sv','d'],  pattern:'digraph', group:'digraphs', level:2, emoji:'📢' },
  { id:'bill',  word:'bill',  graphemes:['b','i','ll'],  types:['c','sv','d'],  pattern:'digraph', group:'digraphs', level:2, emoji:'💵' },
  { id:'fill',  word:'fill',  graphemes:['f','i','ll'],  types:['c','sv','d'],  pattern:'digraph', group:'digraphs', level:2, emoji:'🧃' },
  { id:'hill',  word:'hill',  graphemes:['h','i','ll'],  types:['c','sv','d'],  pattern:'digraph', group:'digraphs', level:2, emoji:'⛰️' },
  { id:'kill',  word:'kill',  graphemes:['k','i','ll'],  types:['c','sv','d'],  pattern:'digraph', group:'digraphs', level:2, emoji:'☠️' },
  { id:'mill',  word:'mill',  graphemes:['m','i','ll'],  types:['c','sv','d'],  pattern:'digraph', group:'digraphs', level:2, emoji:'🏭' },
  { id:'pill',  word:'pill',  graphemes:['p','i','ll'],  types:['c','sv','d'],  pattern:'digraph', group:'digraphs', level:2, emoji:'💊' },
  { id:'till',  word:'till',  graphemes:['t','i','ll'],  types:['c','sv','d'],  pattern:'digraph', group:'digraphs', level:2, emoji:'🏧' },
  { id:'will',  word:'will',  graphemes:['w','i','ll'],  types:['c','sv','d'],  pattern:'digraph', group:'digraphs', level:2, emoji:'💪' },
  { id:'dull',  word:'dull',  graphemes:['d','u','ll'],  types:['c','sv','d'],  pattern:'digraph', group:'digraphs', level:2, emoji:'😐' },
  { id:'full',  word:'full',  graphemes:['f','u','ll'],  types:['c','sv','d'],  pattern:'digraph', group:'digraphs', level:2, emoji:'🍽️' },
  { id:'gull',  word:'gull',  graphemes:['g','u','ll'],  types:['c','sv','d'],  pattern:'digraph', group:'digraphs', level:2, emoji:'🐦' },
  { id:'hull',  word:'hull',  graphemes:['h','u','ll'],  types:['c','sv','d'],  pattern:'digraph', group:'digraphs', level:2, emoji:'🚢' },
  { id:'lull',  word:'lull',  graphemes:['l','u','ll'],  types:['c','sv','d'],  pattern:'digraph', group:'digraphs', level:2, emoji:'😴' },
  { id:'mull',  word:'mull',  graphemes:['m','u','ll'],  types:['c','sv','d'],  pattern:'digraph', group:'digraphs', level:2, emoji:'🍵' },
  { id:'pull',  word:'pull',  graphemes:['p','u','ll'],  types:['c','sv','d'],  pattern:'digraph', group:'digraphs', level:2, emoji:'💪' },
  { id:'bull',  word:'bull',  graphemes:['b','u','ll'],  types:['c','sv','d'],  pattern:'digraph', group:'digraphs', level:2, emoji:'🐂' },

  /* ══════════════════════════════════════
     CONSONANT BLENDS  (level 3)
  ══════════════════════════════════════ */
  { id:'flat',  word:'flat',  graphemes:['fl','a','t'],   types:['bl','sv','c'],  pattern:'blend', group:'blends', level:3, emoji:'📄' },
  { id:'flag',  word:'flag',  graphemes:['fl','a','g'],   types:['bl','sv','c'],  pattern:'blend', group:'blends', level:3, emoji:'🏁' },
  { id:'flip',  word:'flip',  graphemes:['fl','i','p'],   types:['bl','sv','c'],  pattern:'blend', group:'blends', level:3, emoji:'🔄' },
  { id:'flop',  word:'flop',  graphemes:['fl','o','p'],   types:['bl','sv','c'],  pattern:'blend', group:'blends', level:3, emoji:'🐟' },
  { id:'slam',  word:'slam',  graphemes:['sl','a','m'],   types:['bl','sv','c'],  pattern:'blend', group:'blends', level:3, emoji:'🚪' },
  { id:'slim',  word:'slim',  graphemes:['sl','i','m'],   types:['bl','sv','c'],  pattern:'blend', group:'blends', level:3, emoji:'💪' },
  { id:'slap',  word:'slap',  graphemes:['sl','a','p'],   types:['bl','sv','c'],  pattern:'blend', group:'blends', level:3, emoji:'👋' },
  { id:'plan',  word:'plan',  graphemes:['pl','a','n'],   types:['bl','sv','c'],  pattern:'blend', group:'blends', level:3, emoji:'📋' },
  { id:'play',  word:'play',  graphemes:['pl','ay'],      types:['bl','lv'],      pattern:'blend', group:'blends', level:3, emoji:'🎮' },
  { id:'clap',  word:'clap',  graphemes:['cl','a','p'],   types:['bl','sv','c'],  pattern:'blend', group:'blends', level:3, emoji:'👏' },
  { id:'clip',  word:'clip',  graphemes:['cl','i','p'],   types:['bl','sv','c'],  pattern:'blend', group:'blends', level:3, emoji:'📎' },
  { id:'clog',  word:'clog',  graphemes:['cl','o','g'],   types:['bl','sv','c'],  pattern:'blend', group:'blends', level:3, emoji:'🚧' },
  { id:'glad',  word:'glad',  graphemes:['gl','a','d'],   types:['bl','sv','c'],  pattern:'blend', group:'blends', level:3, emoji:'😊' },
  { id:'glob',  word:'glob',  graphemes:['gl','o','b'],   types:['bl','sv','c'],  pattern:'blend', group:'blends', level:3, emoji:'💧' },
  { id:'trip',  word:'trip',  graphemes:['tr','i','p'],   types:['bl','sv','c'],  pattern:'blend', group:'blends', level:3, emoji:'✈️' },
  { id:'trim',  word:'trim',  graphemes:['tr','i','m'],   types:['bl','sv','c'],  pattern:'blend', group:'blends', level:3, emoji:'✂️' },
  { id:'trap',  word:'trap',  graphemes:['tr','a','p'],   types:['bl','sv','c'],  pattern:'blend', group:'blends', level:3, emoji:'🪤' },
  { id:'drip',  word:'drip',  graphemes:['dr','i','p'],   types:['bl','sv','c'],  pattern:'blend', group:'blends', level:3, emoji:'💧' },
  { id:'drop',  word:'drop',  graphemes:['dr','o','p'],   types:['bl','sv','c'],  pattern:'blend', group:'blends', level:3, emoji:'💧' },
  { id:'drum',  word:'drum',  graphemes:['dr','u','m'],   types:['bl','sv','c'],  pattern:'blend', group:'blends', level:3, emoji:'🥁' },
  { id:'grip',  word:'grip',  graphemes:['gr','i','p'],   types:['bl','sv','c'],  pattern:'blend', group:'blends', level:3, emoji:'🤝' },
  { id:'grin',  word:'grin',  graphemes:['gr','i','n'],   types:['bl','sv','c'],  pattern:'blend', group:'blends', level:3, emoji:'😁' },
  { id:'crab',  word:'crab',  graphemes:['cr','a','b'],   types:['bl','sv','c'],  pattern:'blend', group:'blends', level:3, emoji:'🦀' },
  { id:'crop',  word:'crop',  graphemes:['cr','o','p'],   types:['bl','sv','c'],  pattern:'blend', group:'blends', level:3, emoji:'🌾' },
  { id:'frog',  word:'frog',  graphemes:['fr','o','g'],   types:['bl','sv','c'],  pattern:'blend', group:'blends', level:3, emoji:'🐸' },
  { id:'fret',  word:'fret',  graphemes:['fr','e','t'],   types:['bl','sv','c'],  pattern:'blend', group:'blends', level:3, emoji:'😟' },
  { id:'brag',  word:'brag',  graphemes:['br','a','g'],   types:['bl','sv','c'],  pattern:'blend', group:'blends', level:3, emoji:'💬' },
  { id:'brim',  word:'brim',  graphemes:['br','i','m'],   types:['bl','sv','c'],  pattern:'blend', group:'blends', level:3, emoji:'🎩' },
  { id:'spin',  word:'spin',  graphemes:['sp','i','n'],   types:['bl','sv','c'],  pattern:'blend', group:'blends', level:3, emoji:'🌀' },
  { id:'spot',  word:'spot',  graphemes:['sp','o','t'],   types:['bl','sv','c'],  pattern:'blend', group:'blends', level:3, emoji:'🔵' },
  { id:'step',  word:'step',  graphemes:['st','e','p'],   types:['bl','sv','c'],  pattern:'blend', group:'blends', level:3, emoji:'👟' },
  { id:'stop',  word:'stop',  graphemes:['st','o','p'],   types:['bl','sv','c'],  pattern:'blend', group:'blends', level:3, emoji:'🛑' },
  { id:'stem',  word:'stem',  graphemes:['st','e','m'],   types:['bl','sv','c'],  pattern:'blend', group:'blends', level:3, emoji:'🌹' },
  { id:'snap',  word:'snap',  graphemes:['sn','a','p'],   types:['bl','sv','c'],  pattern:'blend', group:'blends', level:3, emoji:'📸' },
  { id:'snip',  word:'snip',  graphemes:['sn','i','p'],   types:['bl','sv','c'],  pattern:'blend', group:'blends', level:3, emoji:'✂️' },
  { id:'swim',  word:'swim',  graphemes:['sw','i','m'],   types:['bl','sv','c'],  pattern:'blend', group:'blends', level:3, emoji:'🏊' },
  { id:'sled',  word:'sled',  graphemes:['sl','e','d'],   types:['bl','sv','c'],  pattern:'blend', group:'blends', level:3, emoji:'🛷' },
  { id:'slug',  word:'slug',  graphemes:['sl','u','g'],   types:['bl','sv','c'],  pattern:'blend', group:'blends', level:3, emoji:'🐌' },
  // more blends
  { id:'scan',  word:'scan',  graphemes:['sc','a','n'],   types:['bl','sv','c'],  pattern:'blend', group:'blends', level:3, emoji:'🔍' },
  { id:'scab',  word:'scab',  graphemes:['sc','a','b'],   types:['bl','sv','c'],  pattern:'blend', group:'blends', level:3, emoji:'🩹' },
  { id:'skip',  word:'skip',  graphemes:['sk','i','p'],   types:['bl','sv','c'],  pattern:'blend', group:'blends', level:3, emoji:'🦘' },
  { id:'skin',  word:'skin',  graphemes:['sk','i','n'],   types:['bl','sv','c'],  pattern:'blend', group:'blends', level:3, emoji:'🧴' },
  { id:'skim',  word:'skim',  graphemes:['sk','i','m'],   types:['bl','sv','c'],  pattern:'blend', group:'blends', level:3, emoji:'🏊' },
  { id:'skid',  word:'skid',  graphemes:['sk','i','d'],   types:['bl','sv','c'],  pattern:'blend', group:'blends', level:3, emoji:'🚗' },
  { id:'twin',  word:'twin',  graphemes:['tw','i','n'],   types:['bl','sv','c'],  pattern:'blend', group:'blends', level:3, emoji:'👫' },
  { id:'twig',  word:'twig',  graphemes:['tw','i','g'],   types:['bl','sv','c'],  pattern:'blend', group:'blends', level:3, emoji:'🌿' },
  { id:'span',  word:'span',  graphemes:['sp','a','n'],   types:['bl','sv','c'],  pattern:'blend', group:'blends', level:3, emoji:'🌉' },
  { id:'sped',  word:'sped',  graphemes:['sp','e','d'],   types:['bl','sv','c'],  pattern:'blend', group:'blends', level:3, emoji:'⚡' },
  { id:'stab',  word:'stab',  graphemes:['st','a','b'],   types:['bl','sv','c'],  pattern:'blend', group:'blends', level:3, emoji:'🗡️' },
  { id:'stub',  word:'stub',  graphemes:['st','u','b'],   types:['bl','sv','c'],  pattern:'blend', group:'blends', level:3, emoji:'🦶' },
  { id:'stud',  word:'stud',  graphemes:['st','u','d'],   types:['bl','sv','c'],  pattern:'blend', group:'blends', level:3, emoji:'💎' },
  { id:'cram',  word:'cram',  graphemes:['cr','a','m'],   types:['bl','sv','c'],  pattern:'blend', group:'blends', level:3, emoji:'📦' },
  { id:'brat',  word:'brat',  graphemes:['br','a','t'],   types:['bl','sv','c'],  pattern:'blend', group:'blends', level:3, emoji:'😤' },
  { id:'prim',  word:'prim',  graphemes:['pr','i','m'],   types:['bl','sv','c'],  pattern:'blend', group:'blends', level:3, emoji:'✨' },
  { id:'prop',  word:'prop',  graphemes:['pr','o','p'],   types:['bl','sv','c'],  pattern:'blend', group:'blends', level:3, emoji:'🎭' },
  { id:'prod',  word:'prod',  graphemes:['pr','o','d'],   types:['bl','sv','c'],  pattern:'blend', group:'blends', level:3, emoji:'👉' },
  { id:'pram',  word:'pram',  graphemes:['pr','a','m'],   types:['bl','sv','c'],  pattern:'blend', group:'blends', level:3, emoji:'👶' },
  { id:'split', word:'split', graphemes:['spl','i','t'],  types:['bl','sv','c'],  pattern:'blend', group:'blends', level:3, emoji:'✂️' },
  { id:'splat', word:'splat', graphemes:['spl','a','t'],  types:['bl','sv','c'],  pattern:'blend', group:'blends', level:3, emoji:'💦' },
  { id:'scrap', word:'scrap', graphemes:['scr','a','p'],  types:['bl','sv','c'],  pattern:'blend', group:'blends', level:3, emoji:'📄' },
  { id:'scrub', word:'scrub', graphemes:['scr','u','b'],  types:['bl','sv','c'],  pattern:'blend', group:'blends', level:3, emoji:'🧼' },
  { id:'strip', word:'strip', graphemes:['str','i','p'],  types:['bl','sv','c'],  pattern:'blend', group:'blends', level:3, emoji:'📏' },
  { id:'drub',  word:'drub',  graphemes:['dr','u','b'],   types:['bl','sv','c'],  pattern:'blend', group:'blends', level:3, emoji:'💥' },
  { id:'drug',  word:'drug',  graphemes:['dr','u','g'],   types:['bl','sv','c'],  pattern:'blend', group:'blends', level:3, emoji:'💊' },
  { id:'drab',  word:'drab',  graphemes:['dr','a','b'],   types:['bl','sv','c'],  pattern:'blend', group:'blends', level:3, emoji:'😑' },

  /* ══════════════════════════════════════
     DIPHTHONGS  (level 3)
     oi/oy · ou/ow · aw
  ══════════════════════════════════════ */
  // oi / oy
  { id:'oil',   word:'oil',   graphemes:['oi','l'],          types:['dp','c'],       pattern:'other', group:'diphthongs', level:3, emoji:'🛢️' },
  { id:'coin',  word:'coin',  graphemes:['c','oi','n'],      types:['c','dp','c'],   pattern:'other', group:'diphthongs', level:3, emoji:'🪙' },
  { id:'foil',  word:'foil',  graphemes:['f','oi','l'],      types:['c','dp','c'],   pattern:'other', group:'diphthongs', level:3, emoji:'🍳' },
  { id:'soil',  word:'soil',  graphemes:['s','oi','l'],      types:['c','dp','c'],   pattern:'other', group:'diphthongs', level:3, emoji:'🌱' },
  { id:'coil',  word:'coil',  graphemes:['c','oi','l'],      types:['c','dp','c'],   pattern:'other', group:'diphthongs', level:3, emoji:'🌀' },
  { id:'boil',  word:'boil',  graphemes:['b','oi','l'],      types:['c','dp','c'],   pattern:'other', group:'diphthongs', level:3, emoji:'♨️' },
  { id:'boy',   word:'boy',   graphemes:['b','oy'],          types:['c','dp'],       pattern:'other', group:'diphthongs', level:3, emoji:'👦' },
  { id:'toy',   word:'toy',   graphemes:['t','oy'],          types:['c','dp'],       pattern:'other', group:'diphthongs', level:3, emoji:'🪀' },
  { id:'joy',   word:'joy',   graphemes:['j','oy'],          types:['c','dp'],       pattern:'other', group:'diphthongs', level:3, emoji:'😄' },

  // ou / ow
  { id:'cow',   word:'cow',   graphemes:['c','ow'],          types:['c','dp'],       pattern:'other', group:'diphthongs', level:3, emoji:'🐄' },
  { id:'now',   word:'now',   graphemes:['n','ow'],          types:['c','dp'],       pattern:'other', group:'diphthongs', level:3, emoji:'⏰' },
  { id:'how',   word:'how',   graphemes:['h','ow'],          types:['c','dp'],       pattern:'other', group:'diphthongs', level:3, emoji:'❓' },
  { id:'bow_dip', word:'bow', graphemes:['b','ow'],          types:['c','dp'],       pattern:'other', group:'diphthongs', level:3, emoji:'🎀' },
  { id:'town',  word:'town',  graphemes:['t','ow','n'],      types:['c','dp','c'],   pattern:'other', group:'diphthongs', level:3, emoji:'🏘️' },
  { id:'gown',  word:'gown',  graphemes:['g','ow','n'],      types:['c','dp','c'],   pattern:'other', group:'diphthongs', level:3, emoji:'👗' },
  { id:'down',  word:'down',  graphemes:['d','ow','n'],      types:['c','dp','c'],   pattern:'other', group:'diphthongs', level:3, emoji:'⬇️' },
  { id:'out',   word:'out',   graphemes:['ou','t'],          types:['dp','c'],       pattern:'other', group:'diphthongs', level:3, emoji:'🚪' },
  { id:'shout', word:'shout', graphemes:['sh','ou','t'],     types:['d','dp','c'],   pattern:'other', group:'diphthongs', level:3, emoji:'📢' },
  { id:'loud',  word:'loud',  graphemes:['l','ou','d'],      types:['c','dp','c'],   pattern:'other', group:'diphthongs', level:3, emoji:'🔊' },
  { id:'cloud', word:'cloud', graphemes:['cl','ou','d'],     types:['bl','dp','c'],  pattern:'other', group:'diphthongs', level:3, emoji:'☁️' },
  { id:'mouth', word:'mouth', graphemes:['m','ou','th'],     types:['c','dp','d'],   pattern:'other', group:'diphthongs', level:3, emoji:'👄' },
  { id:'south', word:'south', graphemes:['s','ou','th'],     types:['c','dp','d'],   pattern:'other', group:'diphthongs', level:3, emoji:'🧭' },

  // aw
  { id:'saw',   word:'saw',   graphemes:['s','aw'],          types:['c','dp'],       pattern:'other', group:'diphthongs', level:3, emoji:'🔨' },
  { id:'jaw',   word:'jaw',   graphemes:['j','aw'],          types:['c','dp'],       pattern:'other', group:'diphthongs', level:3, emoji:'💪' },
  { id:'paw',   word:'paw',   graphemes:['p','aw'],          types:['c','dp'],       pattern:'other', group:'diphthongs', level:3, emoji:'🐾' },
  { id:'raw',   word:'raw',   graphemes:['r','aw'],          types:['c','dp'],       pattern:'other', group:'diphthongs', level:3, emoji:'🥩' },
  { id:'law',   word:'law',   graphemes:['l','aw'],          types:['c','dp'],       pattern:'other', group:'diphthongs', level:3, emoji:'⚖️' },
  { id:'yawn',  word:'yawn',  graphemes:['y','aw','n'],      types:['c','dp','c'],   pattern:'other', group:'diphthongs', level:3, emoji:'😴' },
  { id:'dawn',  word:'dawn',  graphemes:['d','aw','n'],      types:['c','dp','c'],   pattern:'other', group:'diphthongs', level:3, emoji:'🌅' },
  { id:'hawk',  word:'hawk',  graphemes:['h','aw','k'],      types:['c','dp','c'],   pattern:'other', group:'diphthongs', level:3, emoji:'🦅' },
  { id:'draw',  word:'draw',  graphemes:['dr','aw'],         types:['bl','dp'],      pattern:'other', group:'diphthongs', level:3, emoji:'🎨' },
  { id:'claw',  word:'claw',  graphemes:['cl','aw'],         types:['bl','dp'],      pattern:'other', group:'diphthongs', level:3, emoji:'🦞' },

  /* ══════════════════════════════════════
     R-CONTROLLED VOWELS  (level 2)
     ar · er · ir · or · ur
  ══════════════════════════════════════ */
  // -ar words
  { id:'car',   word:'car',   graphemes:['c','ar'],         types:['c','rc'],        pattern:'other', group:'r-controlled', level:2, emoji:'🚗' },
  { id:'bar',   word:'bar',   graphemes:['b','ar'],         types:['c','rc'],        pattern:'other', group:'r-controlled', level:2, emoji:'🍺' },
  { id:'far',   word:'far',   graphemes:['f','ar'],         types:['c','rc'],        pattern:'other', group:'r-controlled', level:2, emoji:'🌟' },
  { id:'jar',   word:'jar',   graphemes:['j','ar'],         types:['c','rc'],        pattern:'other', group:'r-controlled', level:2, emoji:'🫙' },
  { id:'tar',   word:'tar',   graphemes:['t','ar'],         types:['c','rc'],        pattern:'other', group:'r-controlled', level:2, emoji:'🖤' },
  { id:'star',  word:'star',  graphemes:['st','ar'],        types:['bl','rc'],       pattern:'blend', group:'r-controlled', level:2, emoji:'⭐' },
  { id:'scar',  word:'scar',  graphemes:['sc','ar'],        types:['bl','rc'],       pattern:'blend', group:'r-controlled', level:2, emoji:'🩹' },
  { id:'farm',  word:'farm',  graphemes:['f','ar','m'],     types:['c','rc','c'],    pattern:'other', group:'r-controlled', level:2, emoji:'🏡' },
  { id:'harm',  word:'harm',  graphemes:['h','ar','m'],     types:['c','rc','c'],    pattern:'other', group:'r-controlled', level:2, emoji:'⚠️' },
  { id:'bark',  word:'bark',  graphemes:['b','ar','k'],     types:['c','rc','c'],    pattern:'other', group:'r-controlled', level:2, emoji:'🌳' },
  { id:'dark',  word:'dark',  graphemes:['d','ar','k'],     types:['c','rc','c'],    pattern:'other', group:'r-controlled', level:2, emoji:'🌑' },
  { id:'park',  word:'park',  graphemes:['p','ar','k'],     types:['c','rc','c'],    pattern:'other', group:'r-controlled', level:2, emoji:'🌳' },
  { id:'mark',  word:'mark',  graphemes:['m','ar','k'],     types:['c','rc','c'],    pattern:'other', group:'r-controlled', level:2, emoji:'✏️' },
  { id:'card',  word:'card',  graphemes:['c','ar','d'],     types:['c','rc','c'],    pattern:'other', group:'r-controlled', level:2, emoji:'🃏' },
  { id:'hard',  word:'hard',  graphemes:['h','ar','d'],     types:['c','rc','c'],    pattern:'other', group:'r-controlled', level:2, emoji:'💪' },
  { id:'yard',  word:'yard',  graphemes:['y','ar','d'],     types:['c','rc','c'],    pattern:'other', group:'r-controlled', level:2, emoji:'🌿' },
  { id:'barn',  word:'barn',  graphemes:['b','ar','n'],     types:['c','rc','c'],    pattern:'other', group:'r-controlled', level:2, emoji:'🏚️' },
  { id:'yarn',  word:'yarn',  graphemes:['y','ar','n'],     types:['c','rc','c'],    pattern:'other', group:'r-controlled', level:2, emoji:'🧶' },
  { id:'cart',  word:'cart',  graphemes:['c','ar','t'],     types:['c','rc','c'],    pattern:'other', group:'r-controlled', level:2, emoji:'🛒' },
  { id:'part',  word:'part',  graphemes:['p','ar','t'],     types:['c','rc','c'],    pattern:'other', group:'r-controlled', level:2, emoji:'🧩' },
  { id:'tart',  word:'tart',  graphemes:['t','ar','t'],     types:['c','rc','c'],    pattern:'other', group:'r-controlled', level:2, emoji:'🍰' },
  { id:'start', word:'start', graphemes:['st','ar','t'],    types:['bl','rc','c'],   pattern:'blend', group:'r-controlled', level:3, emoji:'🚀' },
  { id:'smart', word:'smart', graphemes:['sm','ar','t'],    types:['bl','rc','c'],   pattern:'blend', group:'r-controlled', level:3, emoji:'🧠' },
  { id:'chart', word:'chart', graphemes:['ch','ar','t'],    types:['d','rc','c'],    pattern:'other', group:'r-controlled', level:3, emoji:'📊' },
  { id:'march', word:'march', graphemes:['m','ar','ch'],    types:['c','rc','d'],    pattern:'other', group:'r-controlled', level:3, emoji:'🥁' },
  { id:'arch',  word:'arch',  graphemes:['ar','ch'],        types:['rc','d'],        pattern:'other', group:'r-controlled', level:2, emoji:'🏛️' },
  // -er words
  { id:'her',   word:'her',   graphemes:['h','er'],         types:['c','rc'],        pattern:'other', group:'r-controlled', level:2, emoji:'👩' },
  { id:'fern',  word:'fern',  graphemes:['f','er','n'],     types:['c','rc','c'],    pattern:'other', group:'r-controlled', level:2, emoji:'🌿' },
  { id:'term',  word:'term',  graphemes:['t','er','m'],     types:['c','rc','c'],    pattern:'other', group:'r-controlled', level:2, emoji:'📚' },
  { id:'verb',  word:'verb',  graphemes:['v','er','b'],     types:['c','rc','c'],    pattern:'other', group:'r-controlled', level:2, emoji:'📝' },
  { id:'herd',  word:'herd',  graphemes:['h','er','d'],     types:['c','rc','c'],    pattern:'other', group:'r-controlled', level:2, emoji:'🐄' },
  // -ir words
  { id:'sir',   word:'sir',   graphemes:['s','ir'],         types:['c','rc'],        pattern:'other', group:'r-controlled', level:2, emoji:'🎩' },
  { id:'bird',  word:'bird',  graphemes:['b','ir','d'],     types:['c','rc','c'],    pattern:'other', group:'r-controlled', level:2, emoji:'🐦' },
  { id:'girl',  word:'girl',  graphemes:['g','ir','l'],     types:['c','rc','c'],    pattern:'other', group:'r-controlled', level:2, emoji:'👧' },
  { id:'dirt',  word:'dirt',  graphemes:['d','ir','t'],     types:['c','rc','c'],    pattern:'other', group:'r-controlled', level:2, emoji:'🌱' },
  { id:'firm',  word:'firm',  graphemes:['f','ir','m'],     types:['c','rc','c'],    pattern:'other', group:'r-controlled', level:2, emoji:'🏢' },
  { id:'stir',  word:'stir',  graphemes:['st','ir'],        types:['bl','rc'],       pattern:'blend', group:'r-controlled', level:2, emoji:'🥄' },
  { id:'shirt', word:'shirt', graphemes:['sh','ir','t'],    types:['d','rc','c'],    pattern:'other', group:'r-controlled', level:2, emoji:'👕' },
  { id:'first', word:'first', graphemes:['f','ir','st'],    types:['c','rc','bl'],   pattern:'other', group:'r-controlled', level:2, emoji:'1️⃣' },
  { id:'third', word:'third', graphemes:['th','ir','d'],    types:['d','rc','c'],    pattern:'other', group:'r-controlled', level:2, emoji:'3️⃣' },
  // -or words
  { id:'for',   word:'for',   graphemes:['f','or'],         types:['c','rc'],        pattern:'other', group:'r-controlled', level:2, emoji:'➡️' },
  { id:'nor',   word:'nor',   graphemes:['n','or'],         types:['c','rc'],        pattern:'other', group:'r-controlled', level:2, emoji:'❌' },
  { id:'born',  word:'born',  graphemes:['b','or','n'],     types:['c','rc','c'],    pattern:'other', group:'r-controlled', level:2, emoji:'👶' },
  { id:'corn',  word:'corn',  graphemes:['c','or','n'],     types:['c','rc','c'],    pattern:'other', group:'r-controlled', level:2, emoji:'🌽' },
  { id:'horn',  word:'horn',  graphemes:['h','or','n'],     types:['c','rc','c'],    pattern:'other', group:'r-controlled', level:2, emoji:'📯' },
  { id:'worn',  word:'worn',  graphemes:['w','or','n'],     types:['c','rc','c'],    pattern:'other', group:'r-controlled', level:2, emoji:'👖' },
  { id:'torn',  word:'torn',  graphemes:['t','or','n'],     types:['c','rc','c'],    pattern:'other', group:'r-controlled', level:2, emoji:'😢' },
  { id:'fork',  word:'fork',  graphemes:['f','or','k'],     types:['c','rc','c'],    pattern:'other', group:'r-controlled', level:2, emoji:'🍴' },
  { id:'pork',  word:'pork',  graphemes:['p','or','k'],     types:['c','rc','c'],    pattern:'other', group:'r-controlled', level:2, emoji:'🥩' },
  { id:'form',  word:'form',  graphemes:['f','or','m'],     types:['c','rc','c'],    pattern:'other', group:'r-controlled', level:2, emoji:'📋' },
  { id:'cord',  word:'cord',  graphemes:['c','or','d'],     types:['c','rc','c'],    pattern:'other', group:'r-controlled', level:2, emoji:'🔌' },
  { id:'ford',  word:'ford',  graphemes:['f','or','d'],     types:['c','rc','c'],    pattern:'other', group:'r-controlled', level:2, emoji:'🚗' },
  { id:'lord',  word:'lord',  graphemes:['l','or','d'],     types:['c','rc','c'],    pattern:'other', group:'r-controlled', level:2, emoji:'👑' },
  { id:'fort',  word:'fort',  graphemes:['f','or','t'],     types:['c','rc','c'],    pattern:'other', group:'r-controlled', level:2, emoji:'🏰' },
  { id:'sort',  word:'sort',  graphemes:['s','or','t'],     types:['c','rc','c'],    pattern:'other', group:'r-controlled', level:2, emoji:'🗂️' },
  { id:'port',  word:'port',  graphemes:['p','or','t'],     types:['c','rc','c'],    pattern:'other', group:'r-controlled', level:2, emoji:'⚓' },
  { id:'storm', word:'storm', graphemes:['st','or','m'],    types:['bl','rc','c'],   pattern:'blend', group:'r-controlled', level:3, emoji:'⛈️' },
  { id:'short', word:'short', graphemes:['sh','or','t'],    types:['d','rc','c'],    pattern:'other', group:'r-controlled', level:2, emoji:'📏' },
  { id:'sport', word:'sport', graphemes:['sp','or','t'],    types:['bl','rc','c'],   pattern:'blend', group:'r-controlled', level:3, emoji:'⚽' },
  // -ur words
  { id:'fur',   word:'fur',   graphemes:['f','ur'],         types:['c','rc'],        pattern:'other', group:'r-controlled', level:2, emoji:'🐱' },
  { id:'blur',  word:'blur',  graphemes:['bl','ur'],        types:['bl','rc'],       pattern:'blend', group:'r-controlled', level:2, emoji:'🌫️' },
  { id:'slur',  word:'slur',  graphemes:['sl','ur'],        types:['bl','rc'],       pattern:'blend', group:'r-controlled', level:2, emoji:'💬' },
  { id:'burn',  word:'burn',  graphemes:['b','ur','n'],     types:['c','rc','c'],    pattern:'other', group:'r-controlled', level:2, emoji:'🔥' },
  { id:'turn',  word:'turn',  graphemes:['t','ur','n'],     types:['c','rc','c'],    pattern:'other', group:'r-controlled', level:2, emoji:'↩️' },
  { id:'curl',  word:'curl',  graphemes:['c','ur','l'],     types:['c','rc','c'],    pattern:'other', group:'r-controlled', level:2, emoji:'💇' },
  { id:'hurl',  word:'hurl',  graphemes:['h','ur','l'],     types:['c','rc','c'],    pattern:'other', group:'r-controlled', level:2, emoji:'🎯' },
  { id:'hurt',  word:'hurt',  graphemes:['h','ur','t'],     types:['c','rc','c'],    pattern:'other', group:'r-controlled', level:2, emoji:'🤕' },
  { id:'burst', word:'burst', graphemes:['b','ur','st'],    types:['c','rc','bl'],   pattern:'other', group:'r-controlled', level:3, emoji:'💥' },
  { id:'nurse', word:'nurse', graphemes:['n','ur','se'],    types:['c','rc','d'],    pattern:'other', group:'r-controlled', level:2, emoji:'👩‍⚕️' },
  { id:'purse', word:'purse', graphemes:['p','ur','se'],    types:['c','rc','d'],    pattern:'other', group:'r-controlled', level:2, emoji:'👜' },
  { id:'curse', word:'curse', graphemes:['c','ur','se'],    types:['c','rc','d'],    pattern:'other', group:'r-controlled', level:2, emoji:'😠' },

  /* ══════════════════════════════════════
     CVCC  (C + V + final cluster, level 2)
     These words feature two consonants at the end — a great next step
     after CVC.  The final cluster is treated as a blend tile.
  ══════════════════════════════════════ */
  // -nd endings
  { id:'band', word:'band', graphemes:['b','a','nd'], types:['c','sv','bl'], pattern:'CVCC', group:'struct-cvcc', level:2, emoji:'🎸' },
  { id:'hand', word:'hand', graphemes:['h','a','nd'], types:['c','sv','bl'], pattern:'CVCC', group:'struct-cvcc', level:2, emoji:'✋' },
  { id:'land', word:'land', graphemes:['l','a','nd'], types:['c','sv','bl'], pattern:'CVCC', group:'struct-cvcc', level:2, emoji:'🌎' },
  { id:'sand', word:'sand', graphemes:['s','a','nd'], types:['c','sv','bl'], pattern:'CVCC', group:'struct-cvcc', level:2, emoji:'🏖️' },
  { id:'bend', word:'bend', graphemes:['b','e','nd'], types:['c','sv','bl'], pattern:'CVCC', group:'struct-cvcc', level:2, emoji:'↩️' },
  { id:'lend', word:'lend', graphemes:['l','e','nd'], types:['c','sv','bl'], pattern:'CVCC', group:'struct-cvcc', level:2, emoji:'🤝' },
  { id:'mend', word:'mend', graphemes:['m','e','nd'], types:['c','sv','bl'], pattern:'CVCC', group:'struct-cvcc', level:2, emoji:'🪡' },
  { id:'send', word:'send', graphemes:['s','e','nd'], types:['c','sv','bl'], pattern:'CVCC', group:'struct-cvcc', level:2, emoji:'📨' },
  // -nt endings
  { id:'tent', word:'tent', graphemes:['t','e','nt'], types:['c','sv','bl'], pattern:'CVCC', group:'struct-cvcc', level:2, emoji:'⛺' },
  { id:'dent', word:'dent', graphemes:['d','e','nt'], types:['c','sv','bl'], pattern:'CVCC', group:'struct-cvcc', level:2, emoji:'🔨' },
  { id:'went', word:'went', graphemes:['w','e','nt'], types:['c','sv','bl'], pattern:'CVCC', group:'struct-cvcc', level:2, emoji:'🚶' },
  // -st endings
  { id:'best', word:'best', graphemes:['b','e','st'], types:['c','sv','bl'], pattern:'CVCC', group:'struct-cvcc', level:2, emoji:'🥇' },
  { id:'rest', word:'rest', graphemes:['r','e','st'], types:['c','sv','bl'], pattern:'CVCC', group:'struct-cvcc', level:2, emoji:'😴' },
  { id:'nest', word:'nest', graphemes:['n','e','st'], types:['c','sv','bl'], pattern:'CVCC', group:'struct-cvcc', level:2, emoji:'🪺' },
  { id:'vest', word:'vest', graphemes:['v','e','st'], types:['c','sv','bl'], pattern:'CVCC', group:'struct-cvcc', level:2, emoji:'🦺' },
  { id:'fast', word:'fast', graphemes:['f','a','st'], types:['c','sv','bl'], pattern:'CVCC', group:'struct-cvcc', level:2, emoji:'⚡' },
  { id:'last', word:'last', graphemes:['l','a','st'], types:['c','sv','bl'], pattern:'CVCC', group:'struct-cvcc', level:2, emoji:'🏁' },
  { id:'mast', word:'mast', graphemes:['m','a','st'], types:['c','sv','bl'], pattern:'CVCC', group:'struct-cvcc', level:2, emoji:'⛵' },
  // -mp endings
  { id:'camp', word:'camp', graphemes:['c','a','mp'], types:['c','sv','bl'], pattern:'CVCC', group:'struct-cvcc', level:2, emoji:'🏕️' },
  { id:'lamp', word:'lamp', graphemes:['l','a','mp'], types:['c','sv','bl'], pattern:'CVCC', group:'struct-cvcc', level:2, emoji:'💡' },
  { id:'damp', word:'damp', graphemes:['d','a','mp'], types:['c','sv','bl'], pattern:'CVCC', group:'struct-cvcc', level:2, emoji:'💧' },
  { id:'jump', word:'jump', graphemes:['j','u','mp'], types:['c','sv','bl'], pattern:'CVCC', group:'struct-cvcc', level:2, emoji:'🦘' },
  { id:'bump', word:'bump', graphemes:['b','u','mp'], types:['c','sv','bl'], pattern:'CVCC', group:'struct-cvcc', level:2, emoji:'🤛' },
  { id:'dump', word:'dump', graphemes:['d','u','mp'], types:['c','sv','bl'], pattern:'CVCC', group:'struct-cvcc', level:2, emoji:'🗑️' },
  // -lt endings
  { id:'felt', word:'felt', graphemes:['f','e','lt'], types:['c','sv','bl'], pattern:'CVCC', group:'struct-cvcc', level:2, emoji:'🧤' },
  { id:'melt', word:'melt', graphemes:['m','e','lt'], types:['c','sv','bl'], pattern:'CVCC', group:'struct-cvcc', level:2, emoji:'🕯️' },
  { id:'belt', word:'belt', graphemes:['b','e','lt'], types:['c','sv','bl'], pattern:'CVCC', group:'struct-cvcc', level:2, emoji:'👖' },
  // -nk endings
  { id:'link', word:'link', graphemes:['l','i','nk'], types:['c','sv','bl'], pattern:'CVCC', group:'struct-cvcc', level:2, emoji:'🔗' },
  { id:'sink', word:'sink', graphemes:['s','i','nk'], types:['c','sv','bl'], pattern:'CVCC', group:'struct-cvcc', level:2, emoji:'🚿' },
  { id:'pink', word:'pink', graphemes:['p','i','nk'], types:['c','sv','bl'], pattern:'CVCC', group:'struct-cvcc', level:2, emoji:'🌸' },

  /* ══════════════════════════════════════
     CCVCC  (blend + V + final cluster, level 3)
  ══════════════════════════════════════ */
  { id:'stamp',  word:'stamp',  graphemes:['st','a','mp'],  types:['bl','sv','bl'], pattern:'CCVCC', group:'struct-ccvcc', level:3, emoji:'📮' },
  { id:'clamp',  word:'clamp',  graphemes:['cl','a','mp'],  types:['bl','sv','bl'], pattern:'CCVCC', group:'struct-ccvcc', level:3, emoji:'🗜️' },
  { id:'bland',  word:'bland',  graphemes:['bl','a','nd'],  types:['bl','sv','bl'], pattern:'CCVCC', group:'struct-ccvcc', level:3, emoji:'😑' },
  { id:'grand',  word:'grand',  graphemes:['gr','a','nd'],  types:['bl','sv','bl'], pattern:'CCVCC', group:'struct-ccvcc', level:3, emoji:'🏰' },
  { id:'plant',  word:'plant',  graphemes:['pl','a','nt'],  types:['bl','sv','bl'], pattern:'CCVCC', group:'struct-ccvcc', level:3, emoji:'🌱' },
  { id:'blend',  word:'blend',  graphemes:['bl','e','nd'],  types:['bl','sv','bl'], pattern:'CCVCC', group:'struct-ccvcc', level:3, emoji:'🎨' },
  { id:'spend',  word:'spend',  graphemes:['sp','e','nd'],  types:['bl','sv','bl'], pattern:'CCVCC', group:'struct-ccvcc', level:3, emoji:'💸' },
  { id:'trend',  word:'trend',  graphemes:['tr','e','nd'],  types:['bl','sv','bl'], pattern:'CCVCC', group:'struct-ccvcc', level:3, emoji:'📈' },
  { id:'crest',  word:'crest',  graphemes:['cr','e','st'],  types:['bl','sv','bl'], pattern:'CCVCC', group:'struct-ccvcc', level:3, emoji:'🌊' },
  { id:'chest',  word:'chest',  graphemes:['ch','e','st'],  types:['d','sv','bl'],  pattern:'CCVCC', group:'struct-ccvcc', level:3, emoji:'📦' },
  { id:'crisp',  word:'crisp',  graphemes:['cr','i','sp'],  types:['bl','sv','bl'], pattern:'CCVCC', group:'struct-ccvcc', level:3, emoji:'🍟' },
  { id:'swift',  word:'swift',  graphemes:['sw','i','ft'],  types:['bl','sv','bl'], pattern:'CCVCC', group:'struct-ccvcc', level:3, emoji:'🦅' },
  { id:'draft',  word:'draft',  graphemes:['dr','a','ft'],  types:['bl','sv','bl'], pattern:'CCVCC', group:'struct-ccvcc', level:3, emoji:'📝' },
  { id:'blast',  word:'blast',  graphemes:['bl','a','st'],  types:['bl','sv','bl'], pattern:'CCVCC', group:'struct-ccvcc', level:3, emoji:'💥' },
  { id:'trust',  word:'trust',  graphemes:['tr','u','st'],  types:['bl','sv','bl'], pattern:'CCVCC', group:'struct-ccvcc', level:3, emoji:'🤝' },
  { id:'grunt',  word:'grunt',  graphemes:['gr','u','nt'],  types:['bl','sv','bl'], pattern:'CCVCC', group:'struct-ccvcc', level:3, emoji:'🐷' },

  /* ══════════════════════════════════════
     SUFFIX: -ing  (level 3)
     Base word phonemes + '-ing' suffix tile
  ══════════════════════════════════════ */
  { id:'sitting',  word:'sitting',  graphemes:['s','i','t','-ing'],   types:['c','sv','c','sf'],  pattern:'suffix', group:'suffix-ing', level:3, emoji:'💺' },
  { id:'running',  word:'running',  graphemes:['r','u','n','-ing'],   types:['c','sv','c','sf'],  pattern:'suffix', group:'suffix-ing', level:3, emoji:'🏃' },
  { id:'jumping',  word:'jumping',  graphemes:['j','u','mp','-ing'],  types:['c','sv','bl','sf'], pattern:'suffix', group:'suffix-ing', level:3, emoji:'🦘' },
  { id:'fishing',  word:'fishing',  graphemes:['f','i','sh','-ing'],  types:['c','sv','d','sf'],  pattern:'suffix', group:'suffix-ing', level:3, emoji:'🎣' },
  { id:'wishing',  word:'wishing',  graphemes:['w','i','sh','-ing'],  types:['c','sv','d','sf'],  pattern:'suffix', group:'suffix-ing', level:3, emoji:'⭐' },
  { id:'singing',  word:'singing',  graphemes:['s','i','ng','-ing'],  types:['c','sv','d','sf'],  pattern:'suffix', group:'suffix-ing', level:3, emoji:'🎤' },
  { id:'ringing',  word:'ringing',  graphemes:['r','i','ng','-ing'],  types:['c','sv','d','sf'],  pattern:'suffix', group:'suffix-ing', level:3, emoji:'🔔' },
  { id:'landing',  word:'landing',  graphemes:['l','a','nd','-ing'],  types:['c','sv','bl','sf'], pattern:'suffix', group:'suffix-ing', level:3, emoji:'✈️' },
  { id:'camping',  word:'camping',  graphemes:['c','a','mp','-ing'],  types:['c','sv','bl','sf'], pattern:'suffix', group:'suffix-ing', level:3, emoji:'🏕️' },
  { id:'melting',  word:'melting',  graphemes:['m','e','lt','-ing'],  types:['c','sv','bl','sf'], pattern:'suffix', group:'suffix-ing', level:3, emoji:'🕯️' },
  { id:'resting',  word:'resting',  graphemes:['r','e','st','-ing'],  types:['c','sv','bl','sf'], pattern:'suffix', group:'suffix-ing', level:3, emoji:'😴' },
  { id:'blending', word:'blending', graphemes:['bl','e','nd','-ing'], types:['bl','sv','bl','sf'], pattern:'suffix', group:'suffix-ing', level:3, emoji:'🎨' },

  /* ══════════════════════════════════════
     SUFFIX: -ed  (level 3)
  ══════════════════════════════════════ */
  { id:'jumped',   word:'jumped',   graphemes:['j','u','mp','-ed'],   types:['c','sv','bl','sf'], pattern:'suffix', group:'suffix-ed', level:3, emoji:'🦘' },
  { id:'fished',   word:'fished',   graphemes:['f','i','sh','-ed'],   types:['c','sv','d','sf'],  pattern:'suffix', group:'suffix-ed', level:3, emoji:'🎣' },
  { id:'wished',   word:'wished',   graphemes:['w','i','sh','-ed'],   types:['c','sv','d','sf'],  pattern:'suffix', group:'suffix-ed', level:3, emoji:'⭐' },
  { id:'landed',   word:'landed',   graphemes:['l','a','nd','-ed'],   types:['c','sv','bl','sf'], pattern:'suffix', group:'suffix-ed', level:3, emoji:'✈️' },
  { id:'camped',   word:'camped',   graphemes:['c','a','mp','-ed'],   types:['c','sv','bl','sf'], pattern:'suffix', group:'suffix-ed', level:3, emoji:'🏕️' },
  { id:'melted',   word:'melted',   graphemes:['m','e','lt','-ed'],   types:['c','sv','bl','sf'], pattern:'suffix', group:'suffix-ed', level:3, emoji:'🕯️' },
  { id:'rested',   word:'rested',   graphemes:['r','e','st','-ed'],   types:['c','sv','bl','sf'], pattern:'suffix', group:'suffix-ed', level:3, emoji:'😴' },
  { id:'blended',  word:'blended',  graphemes:['bl','e','nd','-ed'],  types:['bl','sv','bl','sf'], pattern:'suffix', group:'suffix-ed', level:3, emoji:'🎨' },
  { id:'lifted',   word:'lifted',   graphemes:['l','i','ft','-ed'],   types:['c','sv','bl','sf'], pattern:'suffix', group:'suffix-ed', level:3, emoji:'💪' },
  { id:'hunted',   word:'hunted',   graphemes:['h','u','nt','-ed'],   types:['c','sv','bl','sf'], pattern:'suffix', group:'suffix-ed', level:3, emoji:'🏹' },

  /* ══════════════════════════════════════
     SUFFIX: -er  (level 3)
  ══════════════════════════════════════ */
  { id:'runner',  word:'runner',  graphemes:['r','u','n','-er'],   types:['c','sv','c','sf'],  pattern:'suffix', group:'suffix-er', level:3, emoji:'🏃' },
  { id:'jumper',  word:'jumper',  graphemes:['j','u','mp','-er'],  types:['c','sv','bl','sf'], pattern:'suffix', group:'suffix-er', level:3, emoji:'🦘' },
  { id:'fisher',  word:'fisher',  graphemes:['f','i','sh','-er'],  types:['c','sv','d','sf'],  pattern:'suffix', group:'suffix-er', level:3, emoji:'🎣' },
  { id:'singer',  word:'singer',  graphemes:['s','i','ng','-er'],  types:['c','sv','d','sf'],  pattern:'suffix', group:'suffix-er', level:3, emoji:'🎤' },
  { id:'faster',  word:'faster',  graphemes:['f','a','st','-er'],  types:['c','sv','bl','sf'], pattern:'suffix', group:'suffix-er', level:3, emoji:'⚡' },
  { id:'longer',  word:'longer',  graphemes:['l','o','ng','-er'],  types:['c','sv','d','sf'],  pattern:'suffix', group:'suffix-er', level:3, emoji:'📏' },
  { id:'bigger',  word:'bigger',  graphemes:['b','i','g','-er'],   types:['c','sv','c','sf'],  pattern:'suffix', group:'suffix-er', level:3, emoji:'🐘' },
  { id:'winner',  word:'winner',  graphemes:['w','i','n','-er'],   types:['c','sv','c','sf'],  pattern:'suffix', group:'suffix-er', level:3, emoji:'🏆' },

  /* ══════════════════════════════════════
     SUFFIX: -est  (level 3)
  ══════════════════════════════════════ */
  { id:'fastest', word:'fastest', graphemes:['f','a','st','-est'],  types:['c','sv','bl','sf'], pattern:'suffix', group:'suffix-est', level:3, emoji:'⚡' },
  { id:'longest', word:'longest', graphemes:['l','o','ng','-est'],  types:['c','sv','d','sf'],  pattern:'suffix', group:'suffix-est', level:3, emoji:'📏' },
  { id:'richest', word:'richest', graphemes:['r','i','ch','-est'],  types:['c','sv','d','sf'],  pattern:'suffix', group:'suffix-est', level:3, emoji:'💰' },
  { id:'biggest', word:'biggest', graphemes:['b','i','g','-est'],   types:['c','sv','c','sf'],  pattern:'suffix', group:'suffix-est', level:3, emoji:'🐘' },
  { id:'coldest', word:'coldest', graphemes:['c','o','ld','-est'],  types:['c','sv','bl','sf'], pattern:'suffix', group:'suffix-est', level:3, emoji:'🧊' },
  { id:'boldest', word:'boldest', graphemes:['b','o','ld','-est'],  types:['c','sv','bl','sf'], pattern:'suffix', group:'suffix-est', level:3, emoji:'💪' },
  { id:'kindest', word:'kindest', graphemes:['k','i','nd','-est'],  types:['c','sv','bl','sf'], pattern:'suffix', group:'suffix-est', level:3, emoji:'💛' },
  { id:'oldest',  word:'oldest',  graphemes:['o','ld','-est'],      types:['sv','bl','sf'],     pattern:'suffix', group:'suffix-est', level:3, emoji:'🧓' },
];

/**
 * Get words filtered by group(s) and max level.
 * @param {string|string[]} groups
 * @param {number} maxLevel
 * @returns {Word[]}
 */
export function getWordsByGroup(groups, maxLevel = 3) {
  const groupArr = Array.isArray(groups) ? groups : [groups];
  return WORDS.filter(w => groupArr.includes(w.group) && w.level <= maxLevel);
}

/**
 * Get words by difficulty level.
 * @param {number} level 1|2|3
 * @returns {Word[]}
 */
export function getWordsByLevel(level) {
  return WORDS.filter(w => w.level <= level);
}

/**
 * Get distractors for a word (same group, different words).
 * Used in Hear & Choose and Missing Sound modes.
 * @param {Word} word
 * @param {number} count  number of distractors
 * @returns {Word[]}
 */
export function getDistractors(word, count = 3) {
  // Prefer same-group distractors, fall back to same-level
  let pool = WORDS.filter(w => w.id !== word.id && w.group === word.group);
  if (pool.length < count) {
    pool = WORDS.filter(w => w.id !== word.id && w.level === word.level);
  }
  return shuffleArray(pool).slice(0, count);
}

/**
 * Shuffle array (Fisher-Yates).
 * @template T
 * @param {T[]} arr
 * @returns {T[]}
 */
export function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Get a random word from the full list filtered by level. */
export function getRandomWord(maxLevel = 1) {
  const pool = getWordsByLevel(maxLevel);
  return pool[Math.floor(Math.random() * pool.length)];
}

/** All unique group keys in curriculum order (used by wheel, dashboard, progress) */
export const GROUP_ORDER = [
  'short-a','short-e','short-i','short-o','short-u',
  'long-a','long-e','long-i','long-o','long-u',
  'digraphs','blends','diphthongs','r-controlled',
];

/**
 * Structural pattern groups — these filter by word.pattern rather than word.group
 * for struct-cvc and struct-ccvc (which reuse existing vowel/blend words),
 * or by word.group for struct-cvcc and struct-ccvcc (new dedicated words).
 */
export const STRUCT_GROUP_ORDER = [
  'struct-cvc', 'struct-ccvc', 'struct-cvcc', 'struct-ccvcc',
];

/** Suffix groups — new dedicated words in each group */
export const SUFFIX_GROUP_ORDER = [
  'suffix-ing', 'suffix-ed', 'suffix-er', 'suffix-est',
];
