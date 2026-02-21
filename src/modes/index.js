/**
 * PhonicsQuest – Mode Registry
 * Maps mode keys to their setup/cleanup functions.
 */

import { setupBlend, cleanup as cleanupBlend, getCurrentWord as getBlendWord } from './blend.js';
import { setupHearChoose, cleanup as cleanupHear, getCurrentWord as getHearWord } from './hearChoose.js';
import { setupSegment, cleanup as cleanupSegment, getCurrentWord as getSegmentWord } from './segment.js';
import { setupMissingSound, cleanup as cleanupMissing, getCurrentWord as getMissingWord } from './missingSound.js';
import { setupFirstSound, cleanup as cleanupFirst, getCurrentWord as getFirstWord } from './firstSound.js';

/**
 * @typedef {Object} Mode
 * @property {string} key
 * @property {string} name
 * @property {string} icon
 * @property {Function} setup  (word, els) => void
 * @property {Function} cleanup  () => void
 * @property {Function} getCurrentWord  () => Word|null
 */

/** @type {Record<string, Mode>} */
export const MODES = {
  blend: {
    key: 'blend',
    name: 'Blend It!',
    icon: '🎯',
    setup: setupBlend,
    cleanup: cleanupBlend,
    getCurrentWord: getBlendWord,
  },
  hear: {
    key: 'hear',
    name: 'Hear & Choose',
    icon: '👂',
    setup: setupHearChoose,
    cleanup: cleanupHear,
    getCurrentWord: getHearWord,
  },
  segment: {
    key: 'segment',
    name: 'Segment It',
    icon: '✂️',
    setup: setupSegment,
    cleanup: cleanupSegment,
    getCurrentWord: getSegmentWord,
  },
  missing: {
    key: 'missing',
    name: 'Missing Sound',
    icon: '🔍',
    setup: setupMissingSound,
    cleanup: cleanupMissing,
    getCurrentWord: getMissingWord,
  },
  first: {
    key: 'first',
    name: 'First Sound',
    icon: '🚀',
    setup: setupFirstSound,
    cleanup: cleanupFirst,
    getCurrentWord: getFirstWord,
  },
};

export function getModeList() {
  return Object.values(MODES);
}
