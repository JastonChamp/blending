const DEBUG = false;
const debugLog = (...args) => { if (DEBUG) console.log(...args); };
document.addEventListener('DOMContentLoaded', () => {
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
      e: ['theme', 'these', 'eve', 'mete', 'pete', 'steve'],
      i: ['bike', 'kite', 'lime', 'mine', 'pine', 'time', 'dive', 'five', 'hive', 'bite', 'site'],
      o: ['home', 'nose', 'rope', 'note', 'cone', 'hope', 'robe', 'stone', 'bone', 'dome', 'pole', 'vote'],
      u: ['cube', 'tune', 'mule', 'rude', 'cute', 'dune', 'june', 'lute', 'mute', 'rule', 'tube']
    },
    softCAndG: {
      soft_c: ['cede', 'scene'],
      soft_g: ['gene']
    },
    diphthongs: {
      oy: ['boy', 'toy', 'joy', 'coy', 'soy', 'ploy', 'troy'],
      ar: ['car', 'bar', 'far', 'jar', 'tar', 'star', 'scar', 'park', 'dark', 'mark'],
      air: ['air', 'fair', 'hair', 'pair', 'stair', 'chair', 'lair'],
      ow: ['cow', 'now', 'how', 'bow', 'vow', 'brow', 'chow'],
      er: ['her', 'per', 'term', 'fern', 'germ', 'herd', 'verb'],
      ear: ['ear', 'dear', 'fear', 'hear', 'near', 'tear', 'year', 'clear']
    },
    longVowels: {
      a: ['spade','bake','rake','may','mate','gave','great','clay','game','way','holiday','wake','afraid','grey','Gayle','weight','amazed','they','stay','played','baked','stayed','holidays','against','Owen','low','envelope',"won't",'show','cove','drove','home','propose','wrote','own','Rowan','though','hoped','floated','note','owned','hope','both','nose','only',"don't",'close','spoke','go','so','ago','Joan','know','road'],
      e: ['people','breeze','leaf','released','seat','green','need','maybe','tree','speaking','thief','three','eagle','breathe','meat','revealed','create','clean','funny','puppy','grumpy','happy','believe','hungry','meet','lazy','peek','valley','seized','gleam','finally','myself','realise','realised','directly','delighted','receive','place','face','decided','exciting','chew','special','especially','office','distance','receipt','blew','pure','tune','tuneful','regular','eventually','excuse','value','use','continue','useful','continued','refused','tube','view','few','youth','beautiful','youthful','page','magic','imagine','giant','stage','manage','gently','gentle','magical','original','postage','managed'],
      i: ['find','five','kind','light','night','live','right','try','why','by','my','white','flight','height','fly','flies','ride','mild','skies','wild','sight','dive','direct','quite'],
      o: ['food','mood','room','suit','through','cockatoo','soon','swoop','cool','truth','true','kangaroo','bedroom','move','movie','soup','flew','grew'],
      u: ['pure','tune','tuneful','regular','eventually','excuse','value','use','continue','useful','continued','refused','tube','view','few','youth','beautiful','youthful']
    }
  };

  const consonantDigraphs = ['sh', 'th', 'ch', 'ng'];
  const vowelPatterns = { trigraphs: ['air', 'ear'], digraphs: ['oy', 'ar', 'ow', 'er'] };
  const longVowelDigraphs = ['ay','ai','ea','ee','ie','oa','ow','ue','oo','ew','ui','igh','ei','ey'];

  const specialDiacritics = {
    'grey': {pos: 3, mark: 'a'}, 'Gayle': {pos: 2, mark: 'a'},
    'finally': {pos: 6, mark: 'e'}, 'directly': {pos: 8, mark: 'e'},
    'only': {pos: 3, mark: 'i'}, 'especially': {pos: 9, mark: 'e'},
    'funny': {pos: 4, mark: 'e'}, 'puppy': {pos: 4, mark: 'e'},
    'grumpy': {pos: 5, mark: 'e'}, 'hungry': {pos: 5, mark: 'e'},
    'valley': {pos: 5, mark: 'e'}
  };

  const state = {
    score: 0, revealedWords: 0, totalWords: 0, usedWords: new Set(),
    currentWord: '', blendingTime: 3000, soundsEnabled: true,
    wordType: 'cvc', vowelFilter: 'all', theme: 'default',
    celebrationMode: false, badges: new Map()
  };

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

  const compliments = ['Great Job!', 'Awesome!', 'You’re a Star!', 'Well Done!', 'Fantastic!'];
  const badgeNames = {
    cvc: 'CVC Star', ccvc: 'CCVC Hero', cvcc: 'CVCC Champ', ccvcc: 'CCVCC Master',
    digraphs: 'Digraph Ace', extended: 'Word Wizard', silentE: 'Silent E Expert',
    softCAndG: 'Soft Sounds Specialist', diphthongs: 'Diphthong Dynamo',
    longVowels: 'Long Vowel Master'
  };

  async function initSpeech() {
    return new Promise(resolve => {
      const checkVoices = () => {
        if (speechSynthesis.getVoices().length > 0) resolve();
        else speechSynthesis.onvoiceschanged = checkVoices;
      };
      checkVoices();
    });
  }

  function getPreferredFemaleVoice() { /* same as before */ 
    const voices = speechSynthesis.getVoices();
    const femaleIndicators = ['female', 'samantha', 'kate', 'victoria', 'alice', 'moira', 'tessa', 'zira'];
    let preferredVoice = voices.find(v => v.lang === 'en-GB' && femaleIndicators.some(ind => v.name.toLowerCase().includes(ind)));
    if (!preferredVoice) preferredVoice = voices.find(v => femaleIndicators.some(ind => v.name.toLowerCase().includes(ind)));
    if (!preferredVoice) preferredVoice = voices.find(v => v.lang.startsWith('en'));
    if (!preferredVoice && voices.length > 0) preferredVoice = voices[0];
    return preferredVoice;
  }

  function speakWord(text) {
    if (!state.soundsEnabled) return Promise.resolve();
    let utteranceText = text.toLowerCase() === 'a' ? 'uh' : text;
    const utterance = new SpeechSynthesisUtterance(utteranceText);
    utterance.lang = 'en-GB';
    const bestVoice = getPreferredFemaleVoice();
    if (bestVoice) utterance.voice = bestVoice;
    utterance.pitch = 1.3;
    utterance.rate = 0.7;
    return new Promise(resolve => {
      utterance.onend = resolve;
      utterance.onerror = () => resolve();
      setTimeout(() => speechSynthesis.speak(utterance), 100);
    });
  }

  function playSound(sound) {
    if (!state.soundsEnabled) return Promise.resolve();
    return new Promise(resolve => {
      const audio = new Audio(`${sound}.mp3`);
      audio.onended = () => resolve();
      audio.onerror = () => resolve();
      audio.play().catch(() => resolve());
    });
  }

  const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
  const announce = text => {
    els.screenReaderAnnounce.textContent = text;
    setTimeout(() => els.screenReaderAnnounce.textContent = '', 1000);
  };

  function updateScore(points = 10) { /* same as before */ 
    state.score += points;
    els.scoreValue.textContent = state.score;
    els.scoreIncrement.textContent = `+${points}`;
    els.scoreIncrement.classList.add('show');
    setTimeout(() => els.scoreIncrement.classList.remove('show'), 800);
  }

  function updateProgress() { /* same as before */ 
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

  function showCompliment() { /* same as before */ 
    const compliment = compliments[Math.floor(Math.random() * compliments.length)];
    els.complimentBox.textContent = compliment;
    els.complimentBox.classList.add('show');
    if (state.soundsEnabled) speakWord(compliment);
    state.celebrationMode ? launchFireworks() : launchConfetti();
    setTimeout(() => els.complimentBox.classList.remove('show'), 2000);
  }

  function launchConfetti() { /* same as before */ 
    for (let i = 0; i < 20; i++) {
      const confetti = document.createElement('div');
      confetti.className = 'confetti';
      confetti.style.left = `${Math.random() * 100}vw`;
      confetti.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
      els.confettiContainer.appendChild(confetti);
      setTimeout(() => confetti.remove(), 3000);
    }
  }

  function launchFireworks() { /* same as before */ 
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

  function parseWord(word) {
    const units = [];
    let i = 0;
    while (i < word.length) {
      let unitAdded = false;
      const nextThree = word.slice(i, i + 3).toLowerCase();
      if (vowelPatterns.trigraphs.includes(nextThree)) {
        units.push({ text: nextThree, isDiphthong: true, isVowel: true });
        i += 3; unitAdded = true;
      }
      if (!unitAdded) {
        const nextTwo = word.slice(i, i + 2).toLowerCase();
        if (vowelPatterns.digraphs.includes(nextTwo) ||
            (state.wordType === 'longVowels' && longVowelDigraphs.includes(nextTwo))) {
          units.push({ text: nextTwo, isDigraph: true, isLongVowel: state.wordType === 'longVowels' });
          i += 2; unitAdded = true;
        } else if (consonantDigraphs.includes(nextTwo)) {
          units.push({ text: nextTwo, isDigraph: true });
          i += 2; unitAdded = true;
        }
      }
      if (!unitAdded) {
        const letter = word[i].toLowerCase();
        let unit = { text: letter, isVowel: /[aeiou]/.test(letter) };
        if (!unit.isVowel && i + 1 < word.length && word[i + 1].toLowerCase() === letter) {
          unit.text += letter; unit.isDouble = true; i++;
        }
        if (['c', 'g'].includes(letter) && i + 1 < word.length) {
          if (['e', 'i', 'y'].includes(word[i + 1].toLowerCase())) unit.isSoft = true;
        }
        units.push(unit);
        i++;
      }
    }
    // Silent-e detection
    if (units.length >= 3) {
      const last = units.length - 1, second = last - 1, third = last - 2;
      if (units[last].text === 'e' && !units[second].isVowel && units[third].isVowel) {
        units[third].isLongVowel = true;
        units[last].isSilent = true;
      }
    }
    if (state.wordType === 'longVowels') {
      units.forEach(u => { if (u.isVowel || u.isLongVowel) u.isLongVowelLetter = true; });
    }
    // Special diacritics
    const wordLower = word.toLowerCase();
    if (specialDiacritics[wordLower]) {
      const {pos, mark} = specialDiacritics[wordLower];
      let cur = 0;
      for (let u = 0; u < units.length; u++) {
        const len = units[u].text.length;
        if (cur <= pos && pos < cur + len) {
          units[u].diacritic = mark;
          break;
        }
        cur += len;
      }
    }
    return units;
  }

  function savePreferences() {
    localStorage.setItem('wordSpinnerPrefs', JSON.stringify({
      ...state,
      usedWords: Array.from(state.usedWords),
      badges: Object.fromEntries(state.badges)
    }));
  }

  function loadPreferences() { /* same as before */ 
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

  function updateBadges() { /* same as before */ 
    if (!els.badges) return;
    els.badges.innerHTML = '';
    state.badges.forEach((_, type) => {
      const badge = document.createElement('div');
      badge.className = 'badge';
      badge.textContent = badgeNames[type];
      els.badges.appendChild(badge);
    });
  }

  function earnBadge(wordType) { /* same as before */ 
    if (!state.badges.has(wordType)) {
      state.badges.set(wordType, true);
      updateBadges();
      if (state.soundsEnabled) speakWord(`Congratulations! You earned the ${badgeNames[wordType]} badge!`);
      launchConfetti();
      savePreferences();
    }
  }

  async function revealWord(word, isRepeat = false) {
    els.wordBox.innerHTML = '';
    const units = parseWord(word);
    units.forEach((unit, i) => {
      const span = document.createElement('span');
      span.textContent = unit.text;
      span.classList.add('letter');
      if (unit.isVowel) span.classList.add('vowel');
      if (unit.isDigraph) span.classList.add('digraph');
      if (unit.isDiphthong) span.classList.add('diphthong');
      if (unit.isLongVowel) span.classList.add('long-vowel');
      if (unit.isSilent) span.classList.add('silent');
      if (unit.isSoft) span.classList.add('soft');
      if (unit.isDouble) span.classList.add('double');
      if (unit.isLongVowelLetter) span.classList.add('long-vowel-letter');
      if (unit.diacritic) {
        span.dataset.diacritic = unit.diacritic;
        span.classList.add('has-diacritic');
      }
      span.style.animationDelay = `${i * 0.4}s`;
      els.wordBox.appendChild(span);
    });

    for (const unit of units) {
      await delay(400);
      if (unit.isSilent) continue;
      let sound = unit.text;
      if (unit.isLongVowel) sound = `long_${unit.text}`;
      else if (unit.isDiphthong) sound = unit.text;
      else if (unit.isSoft) sound = `soft_${unit.text}`;
      else if (unit.isDouble) sound = unit.text[0];
      await playSound(sound);
    }

    els.blendingTimerContainer.style.display = 'block';
    els.blendingTimer.style.transition = `width ${state.blendingTime / 1000}s linear`;
    els.blendingTimer.style.width = '100%';
    requestAnimationFrame(() => els.blendingTimer.style.width = '0%');
    announce('Blend the letters aloud!');
    await delay(state.blendingTime);
    els.blendingTimerContainer.style.display = 'none';
    if (state.soundsEnabled) speakWord(word);
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

  function getAvailableWords() {
    const group = wordGroups[state.wordType];
    if (state.vowelFilter === 'all') return Object.values(group).flat();
    return group[state.vowelFilter] || [];
  }

  function getRandomWord() {
    const words = getAvailableWords().filter(w => !state.usedWords.has(w));
    if (!words.length) {
      if (getAvailableWords().length === 0) return 'No words available';
      state.usedWords.clear();
      return getRandomWord();
    }
    return words[Math.floor(Math.random() * words.length)];
  }

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

  async function spin() {
    els.spinButton.disabled = true;
    state.currentWord = getRandomWord();
    await revealWord(state.currentWord);
    els.spinButton.disabled = false;
  }

  async function repeat() {
    if (!state.currentWord) return;
    els.repeatButton.disabled = true;
    await revealWord(state.currentWord, true);
    els.repeatButton.disabled = false;
  }

  async function hint() {
    if (!state.currentWord) return;
    const units = parseWord(state.currentWord);
    const spans = els.wordBox.querySelectorAll('.letter');
    for (let idx = 0; idx < units.length; idx++) {
      const unit = units[idx];
      if (unit.isSilent) continue;
      const span = spans[idx];
      span.classList.add('highlight');
      let sound = unit.text;
      if (unit.isLongVowel) sound = `long_${unit.text}`;
      else if (unit.isDiphthong) sound = unit.text;
      else if (unit.isSoft) sound = `soft_${unit.text}`;
      else if (unit.isDouble) sound = unit.text[0];
      await playSound(sound);
      await delay(400);
      span.classList.remove('highlight');
    }
  }

  // Event listeners (full)
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
    if (!document.fullscreenElement) document.documentElement.requestFullscreen().catch(console.warn);
    else document.exitFullscreen().catch(console.warn);
  });

  (async () => {
    await initSpeech();
    loadPreferences();
    updateBadges();
    resetGame();
    if (!localStorage.getItem('hasSeenTutorial')) els.tutorialModal.showModal();
  })();
});
