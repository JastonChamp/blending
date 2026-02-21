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
  'digraphs': { label: 'Digraphs', color: '#8b5cf6', bg: '#ede9fe', icon: '⭐', audioFile: null },
  'blends':   { label: 'Blends',   color: '#f97316', bg: '#ffedd5', icon: '🚀', audioFile: null },
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

/** All unique group keys in curriculum order */
export const GROUP_ORDER = [
  'short-a','short-e','short-i','short-o','short-u',
  'long-a','long-e','long-i','long-o','long-u',
  'digraphs','blends',
];
