const DEBUG = false;
const debugLog = (...args) => { if (DEBUG) console.log(...args); };

document.addEventListener('DOMContentLoaded', () => {
  debugLog('DOM fully loaded and parsed');

  /** Word Groups with Expanded Lists */
  const wordGroups = {
  cvc: {
    a: ['bat', 'cat', 'dad', 'fan', 'hat', 'jam', 'mad', 'nap', 'pan', 'rat', 'sad', 'tan', 'wag', 'zap', 'lap', 'bag', 'cab', 'dab', 'gab', 'lab', 'tab', 'bad', 'had', 'lad', 'pad', 'rad', 'tad'],
    e: ['bed', 'den', 'fed', 'get', 'hen', 'jet', 'leg', 'men', 'net', 'pen', 'red', 'set', 'ten', 'vet', 'web', 'beg', 'peg', 'wed', 'led', 'met', 'pet', 'yet'],
    i: ['big', 'dig', 'fin', 'hit', 'jig', 'kid', 'lip', 'mix', 'nip', 'pig', 'pin', 'sit', 'tin', 'wig', 'zip', 'bin', 'din', 'fib', 'hid', 'lid', 'mid', 'rid', 'win'],
    o: ['box', 'cot', 'dog', 'fog', 'hop', 'job', 'log', 'mop', 'not', 'pod', 'pop', 'pot', 'rot', 'top', 'sob', 'cob', 'dob', 'gob', 'hob', 'lob', 'mob', 'rob'],
    u: ['bug', 'cup', 'cut', 'fun', 'gum', 'hug', 'jug', 'mud', 'nut', 'pup', 'run', 'sun', 'tug', 'bud', 'bus', 'cub', 'dub', 'hub', 'mug', 'rub', 'sub', 'tub']
  },
  ccvc: {
    a: ['brag', 'clap', 'crab', 'drag', 'flag', 'flap', 'glad', 'grab', 'plan', 'slam', 'snap', 'trap', 'flat', 'chat', 'blab', 'clam', 'drab', 'slap', 'stab', 'tram', 'bran'],
    e: ['bled', 'bred', 'fled', 'fret', 'glen', 'pled', 'sled', 'stem', 'step', 'trek', 'prep', 'flex', 'smell', 'blend', 'crest', 'dress', 'press', 'spell', 'swell'],
    i: ['brim', 'clip', 'crib', 'drip', 'flip', 'grin', 'grip', 'skip', 'slim', 'snip', 'spin', 'trip', 'skin', 'swim', 'blip', 'chip', 'slip', 'strip', 'trick'],
    o: ['blot', 'clog', 'crop', 'drop', 'flop', 'frog', 'glob', 'plot', 'prop', 'shop', 'slot', 'stop', 'trot', 'clot', 'spot', 'snot'],
    u: ['club', 'drum', 'grub', 'plug', 'slug', 'snug', 'spun', 'stub', 'stun', 'flub', 'glut', 'plum', 'scum', 'shut', 'flux', 'shun']
  },
  cvcc: {
    a: ['band', 'bank', 'damp', 'hand', 'lamp', 'land', 'pant', 'ramp', 'sand', 'tank'],
    e: ['bend', 'dent', 'felt', 'lend', 'mend', 'nest', 'rest', 'sent', 'tent', 'vest', 'best', 'jest', 'pest', 'test', 'west', 'belt', 'rent', 'went', 'zest', 'left'],
    i: ['film', 'hint', 'lift', 'milk', 'mint', 'pink', 'ring', 'silk', 'sink', 'tilt', 'disk', 'fist', 'list', 'mist', 'wish', 'gilt', 'kilt', 'silt', 'risk'],
    o: ['bond', 'cost', 'fond', 'lost', 'most', 'pond', 'post', 'soft'],
    u: ['bump', 'bunk', 'dust', 'hunt', 'jump', 'just', 'lump', 'must', 'rust', 'dunk', 'fuss', 'gust', 'husk', 'tusk', 'bust', 'musk', 'dusk']
  },
  ccvcc: {
    a: ['brand', 'clamp', 'cramp', 'drank', 'flank', 'frank', 'plank', 'prank', 'stamp', 'stand', 'bland', 'tramp'],
    e: ['blend', 'fleck', 'flesh', 'spend', 'strep', 'swept', 'trend', 'bless', 'crept', 'dress', 'fresh', 'press', 'slept', 'smelt', 'spent'],
    i: ['blink', 'clink', 'crisp', 'drink', 'flint', 'print', 'slink', 'stink', 'twist', 'brisk', 'cling', 'fling', 'shift', 'swift', 'drift', 'grill'],
    o: ['blond', 'chomp', 'frost', 'prompt', 'stomp', 'strong', 'throb', 'clonk', 'floss', 'gloss', 'gross', 'prong', 'scoff'],
    u: ['blunt', 'brunt', 'clump', 'crust', 'drunk', 'flung', 'grunt', 'plump', 'stump', 'trunk', 'brush', 'crush', 'flush', 'shrug']
  },
  digraphs: {
    a: ['chat', 'chap', 'than', 'that', 'bash', 'cash', 'dash', 'lash', 'rash', 'shag', 'sham'],
    e: ['shed', 'them', 'then', 'fetch', 'bench', 'check', 'chess', 'fresh', 'retch', 'shell', 'shred', 'theft'],
    i: ['chip', 'chin', 'thin', 'ship', 'shin', 'chick', 'chill', 'shift', 'thick', 'thing', 'wish'],
    o: ['shop', 'shot', 'chop', 'shock', 'cloth', 'froth', 'notch', 'shod', 'sloth', 'thong', 'chock', 'throb'],
    u: ['shut', 'thud', 'chug', 'chunk', 'thump', 'brush', 'crush', 'flush', 'shrug', 'blush']
  },
  extended: {
    a: ['fantastic', 'smashing', 'crashing', 'stamping', 'clapping', 'tracking', 'snapping', 'flashing', 'grabbing', 'slashing', 'camping'],
    e: ['spelling', 'pressing', 'dressing', 'fetching', 'stretching', 'checking', 'swelling', 'shedding', 'tempting'],
    i: ['blinking', 'drinking', 'tripping', 'flipping', 'snipping', 'skipping', 'swinging', 'slipping', 'twisting'],
    o: ['blocking', 'rocking', 'crossing', 'stopping', 'chopping', 'dropping', 'flopping', 'locking', 'shocking', 'trotting'],
    u: ['jumping', 'bumping', 'hunting', 'rushing', 'crushing', 'brushing', 'dumping', 'hugging', 'running', 'tugging']
  },
  silentE: {
    a: ['spade', 'mate', 'game', 'bake', 'gave', 'rake', 'cake', 'lake', 'made', 'name', 'pale', 'sale', 'take', 'wave', 'base', 'case', 'date', 'fate', 'gate', 'hate'],
    e: ['theme', 'these', 'eve', 'cede', 'gene', 'mete', 'scene', 'pete', 'steve'],
    i: ['bike', 'kite', 'lime', 'mine', 'pine', 'time', 'dive', 'five', 'hive', 'bite', 'site'],
    o: ['home', 'nose', 'rope', 'note', 'cone', 'hope', 'robe', 'stone', 'bone', 'dome', 'pole', 'vote'],
    u: ['cube', 'tune', 'mule', 'rude', 'cute', 'dune', 'june', 'lute', 'mute', 'rule', 'tube']
  }
};
  /** Digraphs for Parsing */
  const digraphs = ['sh', 'th', 'ch', 'ng'];

  /** Game State */
  const state = {
    score: 0,
    revealedWords: 0,
    totalWords: 0,
    usedWords: new Set(),
    currentWord: '',
    blendingTime: 3000,
    soundsEnabled: true,
    wordType: 'cvc',
    vowelFilter: 'all',
    theme: 'default',
    celebrationMode: false,
    badges: new Map()
  };

  /** DOM Elements */
  const els = {
    spinButton: document.querySelector('#spinButton'),
    repeatButton: document.querySelector('#repeatButton'),
    hintButton: document.querySelector('#hintButton'),
    wordBox: document.querySelector('#wordBox'),
    scoreValue: document.querySelector('#scoreValue'),
    scoreIncrement: document.querySelector('#scoreIncrement'),
    progressText: document.querySelector('#progressText'),
    progressFill: document.querySelector('#progressFill'),
    progressBar: document.querySelector('#progressBar'),
    progressIcon: document.querySelector('#progressIcon'),
    complimentBox: document.querySelector('#complimentBox'),
    screenReaderAnnounce: document.querySelector('#screenReaderAnnounce'),
    blendingTimerContainer: document.querySelector('#blendingTimerContainer'),
    blendingTimer: document.querySelector('#blendingTimer'),
    wordTypeSelector: document.querySelector('#wordTypeSelector'),
    vowelSelector: document.querySelector('#vowelSelector'),
    themeSelector: document.querySelector('#themeSelector'),
    toggleAudioButton: document.querySelector('#toggleAudioButton'),
    blendingTimeDisplay: document.querySelector('#blendingTimeDisplay'),
    increaseTime: document.querySelector('#increaseBlendingTime'),
    decreaseTime: document.querySelector('#decreaseBlendingTime'),
    celebrationModeCheckbox: document.querySelector('#celebrationMode'),
    confettiContainer: document.querySelector('#confettiContainer'),
    tutorialModal: document.querySelector('#tutorialModal'),
    startTutorial: document.querySelector('#startTutorial'),
    skipTutorial: document.querySelector('#skipTutorial'),
    toggleSettingsButton: document.querySelector('#toggleSettingsButton'),
    advancedSettings: document.querySelector('#advancedSettings'),
    badges: document.querySelector('#badges'),
    fullscreenButton: document.querySelector('#fullscreenButton')
  };

  /** Compliments and Badges */
  const compliments = ['Great Job!', 'Awesome!', 'You’re a Star!', 'Well Done!', 'Fantastic!'];
  const badgeNames = {
    cvc: 'CVC Star',
    ccvc: 'CCVC Hero',
    cvcc: 'CVCC Champ',
    ccvcc: 'CCVCC Master',
    digraphs: 'Digraph Ace',
    extended: 'Word Wizard',
    silentE: 'Silent E Expert'
  };

  /** Speech Synthesis Initialization */
  async function initSpeech() {
    return new Promise(resolve => {
      const checkVoices = () => {
        if (speechSynthesis.getVoices().length > 0) {
          resolve();
        } else {
          speechSynthesis.onvoiceschanged = checkVoices;
        }
      };
      checkVoices();
    });
  }

  /**
   * Helper: Select the preferred female voice.
   * Checks for an en-GB voice with specific female keywords,
   * falls back to any female voice, then to any English voice,
   * and finally to the first available voice.
   */
  function getPreferredFemaleVoice() {
    const voices = speechSynthesis.getVoices();
    debugLog('Available voices:', voices.map(v => `${v.name} (${v.lang})`));
    const femaleIndicators = ['female', 'samantha', 'kate', 'victoria', 'alice', 'moira', 'tessa', 'zira'];
    let preferredVoice = voices.find(v =>
      v.lang === 'en-GB' && femaleIndicators.some(indicator => v.name.toLowerCase().includes(indicator))
    );
    if (!preferredVoice) {
      preferredVoice = voices.find(v =>
        femaleIndicators.some(indicator => v.name.toLowerCase().includes(indicator))
      );
    }
    if (!preferredVoice) {
      preferredVoice = voices.find(v => v.lang.startsWith('en'));
    }
    if (!preferredVoice && voices.length > 0) {
      preferredVoice = voices[0]; // Fallback to first available voice␊
    }
    debugLog('Selected voice:', preferredVoice ? `${preferredVoice.name} (${preferredVoice.lang})` : 'None');
    return preferredVoice;
  }

  /**
   * Speak a word using speech synthesis.
   * For the letter 'a', uses "uh" (schwa sound) as a more casual, unstressed variant.
   * Adds a slight delay to ensure the synthesis engine is ready.
   */
  function speakWord(text) {
    if (!state.soundsEnabled) return Promise.resolve();

    let utteranceText = text.toLowerCase() === 'a' ? 'uh' : text;
    const utterance = new SpeechSynthesisUtterance(utteranceText);
    utterance.lang = 'en-GB';
    const bestVoice = getPreferredFemaleVoice();
    if (bestVoice) {
      utterance.voice = bestVoice;
    } else {
      console.warn('No voice selected; falling back to default voice.');
    }
    utterance.pitch = 1.3;
    utterance.rate = 0.7;

    return new Promise(resolve => {
      utterance.onend = resolve;
      utterance.onerror = (event) => {
        console.error('Speech synthesis error:', event);
        resolve();
      };
     debugLog('Attempting to speak:', utteranceText);
      setTimeout(() => {
        speechSynthesis.speak(utterance);
      }, 100);
    });
  }

  /** Play Sound Effect */
  function playSound(sound) {
    if (!state.soundsEnabled) return Promise.resolve();
    return new Promise(resolve => {
      const audio = new Audio(`${sound}.mp3`);
      audio.onended = () => resolve();
      audio.onerror = () => resolve();
      audio.play().catch(e => {
        console.error(`Audio failed for ${sound}.mp3:`, e);
        resolve();
      });
    });
  }

  /** Utility Functions */
  const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
  const announce = text => {
    els.screenReaderAnnounce.textContent = text;
    setTimeout(() => els.screenReaderAnnounce.textContent = '', 1000);
  };

  /** Update Score */
  function updateScore(points = 10) {
    state.score += points;
    els.scoreValue.textContent = state.score;
    els.scoreIncrement.textContent = `+${points}`;
    els.scoreIncrement.classList.add('show');
    setTimeout(() => els.scoreIncrement.classList.remove('show'), 800);
  }

  /** Update Progress */
  function updateProgress() {
    state.revealedWords = state.usedWords.size;
    const percent = (state.revealedWords / state.totalWords) * 100 || 0;
    els.progressText.textContent = `${state.revealedWords} / ${state.totalWords} Words`;
    els.progressFill.style.width = `${percent}%`;
    els.progressBar.setAttribute('aria-valuenow', Math.round(percent));
    if (state.revealedWords % 10 === 0 && state.revealedWords > 0) {
      els.progressIcon.classList.add('star-animate');
      setTimeout(() => els.progressIcon.classList.remove('star-animate'), 1000);
      earnBadge(state.wordType);
    }
  }

  /** Show Compliment */
  function showCompliment() {
    const compliment = compliments[Math.floor(Math.random() * compliments.length)];
    els.complimentBox.textContent = compliment;
    els.complimentBox.classList.add('show');
    if (state.soundsEnabled) speakWord(compliment);
    state.celebrationMode ? launchFireworks() : launchConfetti();
    setTimeout(() => els.complimentBox.classList.remove('show'), 2000);
  }

  /** Launch Confetti */
  function launchConfetti() {
    for (let i = 0; i < 20; i++) {
      const confetti = document.createElement('div');
      confetti.className = 'confetti';
      confetti.style.left = `${Math.random() * 100}vw`;
      confetti.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
      els.confettiContainer.appendChild(confetti);
      setTimeout(() => confetti.remove(), 3000);
    }
  }

  /** Launch Fireworks */
  function launchFireworks() {
    for (let i = 0; i < 15; i++) {
      const firework = document.createElement('div');
      firework.className = 'confetti star';
      firework.style.left = `${Math.random() * 100}vw`;
      firework.style.top = `${Math.random() * 50}vh`;
      firework.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
      els.confettiContainer.appendChild(firework);
      setTimeout(() => firework.remove(), 1500);
    }
  }

  /** Parse Word into Units */
  function parseWord(word) {
    const units = [];
    if (state.wordType === 'silentE') {
      const vowelMatch = word.match(/[aeiou]/i);
      if (vowelMatch && word.endsWith('e')) {
        const vowelIndex = vowelMatch.index;
        for (let i = 0; i < word.length; i++) {
          const letter = word[i].toLowerCase();
          if (i === vowelIndex) {
            units.push({ text: letter, isLongVowel: true });
          } else if (i === word.length - 1 && letter === 'e') {
            units.push({ text: letter, isSilent: true });
          } else {
            units.push({ text: letter, isVowel: /[aeiou]/.test(letter) });
          }
        }
        return units;
      }
    }
    let i = 0;
    while (i < word.length) {
      const nextTwo = word.slice(i, i + 2).toLowerCase();
      if (i < word.length - 1 && digraphs.includes(nextTwo)) {
        units.push({ text: nextTwo, isDigraph: true });
        i += 2;
      } else {
        const letter = word[i].toLowerCase();
        units.push({ text: letter, isVowel: /[aeiou]/.test(letter) });
        i++;
      }
    }
    return units;
  }

  /** Save Preferences */
  function savePreferences() {
    localStorage.setItem('wordSpinnerPrefs', JSON.stringify({
      ...state,
      usedWords: Array.from(state.usedWords),
      badges: Object.fromEntries(state.badges)
    }));
  }

  /** Load Preferences */
  function loadPreferences() {
    const prefs = JSON.parse(localStorage.getItem('wordSpinnerPrefs')) || {};
    Object.assign(state, {
      wordType: prefs.wordType || 'cvc',
      vowelFilter: prefs.vowelFilter || 'all',
      theme: prefs.theme || 'default',
      blendingTime: prefs.blendingTime || 3000,
      soundsEnabled: prefs.soundsEnabled ?? true,
      celebrationMode: prefs.celebrationMode || false,
      badges: new Map(Object.entries(prefs.badges || {})),
      usedWords: new Set(prefs.usedWords || [])
    });
    document.body.dataset.theme = state.theme;
    els.wordTypeSelector.value = state.wordType;
    els.vowelSelector.value = state.vowelFilter;
    els.themeSelector.value = state.theme;
    els.blendingTimeDisplay.textContent = state.blendingTime / 1000;
    els.toggleAudioButton.textContent = state.soundsEnabled ? '🔇 Sounds Off' : '🔊 Sounds On';
    els.celebrationModeCheckbox.checked = state.celebrationMode;
  }

  /** Update Badges Display */
  function updateBadges() {
    if (!els.badges) return;
    els.badges.innerHTML = '';
    state.badges.forEach((_, type) => {
      const badge = document.createElement('div');
      badge.className = 'badge';
      badge.textContent = badgeNames[type];
      els.badges.appendChild(badge);
    });
  }

  /** Earn a Badge */
  function earnBadge(wordType) {
    if (!state.badges.has(wordType)) {
      state.badges.set(wordType, true);
      updateBadges();
      if (state.soundsEnabled) speakWord(`Congratulations! You earned the ${badgeNames[wordType]} badge!`);
      launchConfetti();
      savePreferences();
    }
  }

  /**
   * Reveal Word with Sounds and Visuals.
   * Calls speakWord(word) without awaiting it to avoid blocking.
   */
  async function revealWord(word, isRepeat = false) {
    els.wordBox.innerHTML = '';
    const units = parseWord(word);
    units.forEach((unit, i) => {
      const span = document.createElement('span');
      span.textContent = unit.text;
      span.classList.add('letter');
      if (unit.isVowel) span.classList.add('vowel');
      if (unit.isDigraph) span.classList.add('digraph');
      if (unit.isLongVowel) span.classList.add('long-vowel');
      if (unit.isSilent) span.classList.add('silent');
      span.style.animationDelay = `${i * 0.4}s`;
      els.wordBox.appendChild(span);
    });

    for (const unit of units) {
      await delay(400);
      if (unit.isSilent) continue;
      const sound = unit.isLongVowel ? `long_${unit.text}` : unit.text;
      await playSound(sound);
    }

    els.blendingTimerContainer.style.display = 'block';
    els.blendingTimer.style.transition = `width ${state.blendingTime / 1000}s linear`;
    els.blendingTimer.style.width = '100%';
    requestAnimationFrame(() => els.blendingTimer.style.width = '0%');
    announce('Blend the letters aloud!');
    await delay(state.blendingTime);
    els.blendingTimerContainer.style.display = 'none';

    if (state.soundsEnabled) {
      speakWord(word).catch(e => console.error('Failed to speak word:', e));
    }
    announce(`The word is: ${word}`);
    if (!isRepeat) {
      state.usedWords.add(word);
      showCompliment();
      updateScore();
      updateProgress();
      if (state.usedWords.size === state.totalWords) resetGame();
    }
    els.hintButton.hidden = false;
    els.repeatButton.disabled = false;
  }

  /** Get Available Words */
  function getAvailableWords() {
    const group = wordGroups[state.wordType];
    if (state.vowelFilter === 'all') return Object.values(group).flat();
    return group[state.vowelFilter] || [];
  }

  /** Get Random Word */
  function getRandomWord() {
    const words = getAvailableWords().filter(w => !state.usedWords.has(w));
    if (!words.length) {
      state.usedWords.clear();
      return getRandomWord();
    }
    return words[Math.floor(Math.random() * words.length)];
  }

  /** Reset Game */
  function resetGame() {
    state.usedWords.clear();
    state.revealedWords = 0;
    state.score = 0;
    state.currentWord = '';
    els.scoreValue.textContent = '0';
    els.repeatButton.disabled = true;
    els.hintButton.hidden = true;
    state.totalWords = getAvailableWords().length;
    updateProgress();
    savePreferences();
  }

  /** Spin to Reveal a New Word */
  async function spin() {
    els.spinButton.disabled = true;
    state.currentWord = getRandomWord();
    await revealWord(state.currentWord);
    els.spinButton.disabled = false;
  }

  /** Repeat Current Word */
  async function repeat() {
    if (!state.currentWord) return;
    els.repeatButton.disabled = true;
    await revealWord(state.currentWord, true);
    els.repeatButton.disabled = false;
  }

  /** Play Hint Sound */
  async function hint() {
    if (!state.currentWord) return;
    await playSound(state.currentWord);
  }

  /** Event Listeners */
  els.spinButton.addEventListener('click', spin);
  els.repeatButton.addEventListener('click', repeat);
  els.hintButton.addEventListener('click', hint);
  els.wordTypeSelector.addEventListener('change', () => {
    state.wordType = els.wordTypeSelector.value;
    resetGame();
  });
  els.vowelSelector.addEventListener('change', () => {
    state.vowelFilter = els.vowelSelector.value;
    resetGame();
  });
  els.themeSelector.addEventListener('change', () => {
    state.theme = els.themeSelector.value;
    document.body.dataset.theme = state.theme;
    savePreferences();
  });
  els.toggleAudioButton.addEventListener('click', () => {
    state.soundsEnabled = !state.soundsEnabled;
    els.toggleAudioButton.textContent = state.soundsEnabled ? '🔇 Sounds Off' : '🔊 Sounds On';
    savePreferences();
  });
  els.increaseTime.addEventListener('click', () => {
    if (state.blendingTime < 7000) {
      state.blendingTime += 1000;
      els.blendingTimeDisplay.textContent = state.blendingTime / 1000;
      savePreferences();
    }
  });
  els.decreaseTime.addEventListener('click', () => {
    if (state.blendingTime > 1000) {
      state.blendingTime -= 1000;
      els.blendingTimeDisplay.textContent = state.blendingTime / 1000;
      savePreferences();
    }
  });
  els.celebrationModeCheckbox.addEventListener('change', () => {
    state.celebrationMode = els.celebrationModeCheckbox.checked;
    savePreferences();
  });
  els.toggleSettingsButton.addEventListener('click', (event) => {
    event.preventDefault();
    const isVisible = els.advancedSettings.style.display === 'block';
    els.advancedSettings.style.display = isVisible ? 'none' : 'block';
    els.toggleSettingsButton.textContent = isVisible ? '⚙️ Customize' : 'Hide Settings';
    els.toggleSettingsButton.setAttribute('aria-expanded', !isVisible);
    els.advancedSettings.setAttribute('aria-hidden', isVisible);
  });
  els.startTutorial.addEventListener('click', () => {
    els.tutorialModal.close();
    localStorage.setItem('hasSeenTutorial', 'true');
    if (state.soundsEnabled) playSound('start');
  });
  els.skipTutorial.addEventListener('click', () => {
    els.tutorialModal.close();
    localStorage.setItem('hasSeenTutorial', 'true');
  });
  els.fullscreenButton.addEventListener('click', () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(console.warn);
    } else {
      document.exitFullscreen().catch(console.warn);
    }
  });

  /** Initialization */
  (async () => {
    await initSpeech();
    loadPreferences();
    updateBadges();
    resetGame();
    if (!localStorage.getItem('hasSeenTutorial')) els.tutorialModal.showModal();
  })();
});

