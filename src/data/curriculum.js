/**
 * PhonicsQuest Curriculum
 * Defines the scope & sequence for adaptive learning progression.
 * Each stage unlocks when the previous stage reaches mastery threshold.
 */

/** Mastery = accuracy >= this value across recent attempts */
export const MASTERY_THRESHOLD = 0.80;

/** Minimum attempts before mastery is calculated */
export const MIN_ATTEMPTS_FOR_MASTERY = 6;

/**
 * Curriculum stages in learning order.
 * Completing a stage unlocks the next.
 */
export const CURRICULUM = [
  {
    id: 'stage-1',
    name: 'Starter Sounds',
    description: 'Short vowels A, E, I',
    icon: '🌱',
    groups: ['short-a', 'short-e', 'short-i'],
    level: 1,
    requiredMastery: 0, // always unlocked
  },
  {
    id: 'stage-2',
    name: 'More Vowels',
    description: 'Short vowels O and U',
    icon: '🌿',
    groups: ['short-o', 'short-u'],
    level: 1,
    requiredMastery: 0.7,
    prerequisite: 'stage-1',
  },
  {
    id: 'stage-3',
    name: 'Magic E',
    description: 'Long vowels A and I with silent e',
    icon: '✨',
    groups: ['long-a', 'long-i'],
    level: 2,
    requiredMastery: 0.75,
    prerequisite: 'stage-2',
  },
  {
    id: 'stage-4',
    name: 'More Magic E',
    description: 'Long vowels E, O and U',
    icon: '🌟',
    groups: ['long-e', 'long-o', 'long-u'],
    level: 2,
    requiredMastery: 0.75,
    prerequisite: 'stage-3',
  },
  {
    id: 'stage-5',
    name: 'Team Sounds',
    description: 'Digraphs: sh, ch, th, wh',
    icon: '🤝',
    groups: ['digraphs'],
    level: 2,
    requiredMastery: 0.70,
    prerequisite: 'stage-2',
  },
  {
    id: 'stage-6',
    name: 'Sound Blends',
    description: 'Consonant blends: fl, bl, tr, cr, and more',
    icon: '🚀',
    groups: ['blends'],
    level: 3,
    requiredMastery: 0.75,
    prerequisite: 'stage-5',
  },
];

/**
 * Returns which curriculum stages are unlocked based on mastery scores.
 * @param {Record<string, number>} groupMastery - map of group -> accuracy (0-1)
 * @returns {string[]} array of unlocked stage IDs
 */
export function getUnlockedStages(groupMastery) {
  const unlocked = [];

  for (const stage of CURRICULUM) {
    // Always unlock first stage
    if (!stage.prerequisite) { unlocked.push(stage.id); continue; }

    // Check prerequisite is unlocked and mastered
    const prereq = CURRICULUM.find(s => s.id === stage.prerequisite);
    if (!prereq) continue;
    if (!unlocked.includes(prereq.id)) continue;

    const prereqAccuracy = getStageAccuracy(prereq, groupMastery);
    if (prereqAccuracy >= stage.requiredMastery) {
      unlocked.push(stage.id);
    }
  }

  return unlocked;
}

/**
 * Average accuracy across all groups in a stage.
 * @param {object} stage
 * @param {Record<string, number>} groupMastery
 * @returns {number} 0-1
 */
function getStageAccuracy(stage, groupMastery) {
  if (!stage.groups.length) return 0;
  const scores = stage.groups.map(g => groupMastery[g] ?? 0);
  return scores.reduce((a, b) => a + b, 0) / scores.length;
}

/**
 * Get the recommended next stage for the child based on current progress.
 * @param {Record<string, number>} groupMastery
 * @returns {object|null} curriculum stage
 */
export function getRecommendedStage(groupMastery) {
  const unlocked = getUnlockedStages(groupMastery);

  // Find the first unlocked stage that isn't mastered yet
  for (const id of unlocked) {
    const stage = CURRICULUM.find(s => s.id === id);
    const accuracy = getStageAccuracy(stage, groupMastery);
    if (accuracy < MASTERY_THRESHOLD) return stage;
  }

  // All unlocked stages mastered — return last unlocked for review
  const lastId = unlocked[unlocked.length - 1];
  return CURRICULUM.find(s => s.id === lastId) ?? null;
}

/**
 * XP rewards by action.
 */
export const XP_REWARDS = {
  correct:      10,
  correct_fast: 15,  // answered in < 3 seconds
  streak_5:     20,  // 5 in a row
  streak_10:    40,  // 10 in a row
  daily_goal:   50,  // completed daily goal
  perfect_round: 25, // no mistakes in a session
  new_word:      5,  // first time attempting a word
};

/**
 * Level thresholds: XP needed to reach each level.
 */
export const LEVEL_XP = [
  0,    // Level 1
  100,  // Level 2
  250,  // Level 3
  450,  // Level 4
  700,  // Level 5
  1000, // Level 6
  1400, // Level 7
  1900, // Level 8
  2500, // Level 9
  3200, // Level 10
];

/**
 * Calculate level from total XP.
 * @param {number} xp
 * @returns {{ level: number, progress: number, nextXP: number }}
 */
export function getLevelInfo(xp) {
  let level = 1;
  for (let i = 0; i < LEVEL_XP.length; i++) {
    if (xp >= LEVEL_XP[i]) level = i + 1;
    else break;
  }
  const currentXP = LEVEL_XP[level - 1] ?? 0;
  const nextXP = LEVEL_XP[level] ?? LEVEL_XP[LEVEL_XP.length - 1];
  const progress = nextXP > currentXP
    ? (xp - currentXP) / (nextXP - currentXP)
    : 1;
  return { level: Math.min(level, LEVEL_XP.length), progress, nextXP };
}
