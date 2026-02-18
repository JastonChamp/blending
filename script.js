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

    // ✅ LONG VOWELS — NOW CONTAINS *EVERY WORD FROM YOUR 6 IMAGES*
    longVowels: {
      // Long A set (from image 1)
      a: [
        'spade','mate','game','afraid',
        'bake','gave','way','grey',
        'rake','great','holiday','Gayle',
        'may','clay','wake','weight',
        'baked','holidays','played','amazed',
        'stayed','stay','against','they'
      ],

      // Long E set (from image 2)
      e: [
        'people','need','eagle','funny','meet',
        'breeze','maybe','breathe','puppy','lazy',
        'leaf','tree','meat','grumpy','peek',
        'released','speaking','revealed','happy','valley',
        'seat','thief','create','believe','seized',
        'green','three','clean','hungry','gleam'
      ],

      // Long I set (from image 3)
      i: [
        'find','right','flight','skies','sight',
        'five','try','height','finally','dive',
        'kind','why','fly','myself','direct',
        'light','by','flies','wild','directly',
        'quite','night','my','ride','realise',
        'live','white','realised','mild','delighted'
      ],

      // Long O + OO set (from image 4 + image 6)
      o: [
        // image 4
        'go','so','ago','Joan','know','road',
        'Owen','low','envelope',"won't",'show','cove',
        'drove','home','propose','wrote','own','Rowan',
        'though','hoped','floated','note','owned','hope',
        'both','nose','only',"don't",'close','spoke',

        // image 6 (oo set)
        'food','soon','bedroom','receive','special',
        'mood','swoop','move','place','especially',
        'room','cool','movie','face','office',
        'suit','truth','soup','decided','distance',
        'through','true','flew','exciting','receipt',
        'cockatoo','kangaroo','grew','chew','blew'
      ],

      // Long U + soft g set (from image 5)
      u: [
        'pure','tune','tuneful','regular','eventually','excuse',
        'value','use','continue','useful','continued','refused',
        'tube','view','few','youth','beautiful','youthful',
        'page','magic','imagine','giant','stage','manage',
        'gently','gentle','magical','original','postage','managed'
      ]
    }
  };

  // Digraph/trigraph detection sets
  const consonantDigraphs = ['sh', 'th', 'ch', 'ng'];
  const vowelPatterns = { trigraphs: ['air', 'ear'], digraphs: ['oy', 'ar', 'ow', 'er'] };

  // Fallback placeholders (wordRenderMap takes priority for complex words)
  const longVowelDigraphs = ['ai', 'ay', 'ea', 'ee', 'ie', 'oa', 'oe', 'ue'];
  const silentLetterOverrides = {};
  const longVowelWordInfo = {};

  // ============================================================
  // COMPREHENSIVE WORD RENDERING DATA
  // Each entry: array of { text, type, diacritic?, sound? }
  // Types: 'vowel', 'consonant', 'digraph', 'silent', 'long-vowel'
  // ============================================================
  const wordRenderMap = {
    // ==================== LONG A WORDS ====================
    'spade': [
      { text: 'sp', type: 'consonant', sound: 'sp' },
      { text: 'a', type: 'long-vowel', sound: 'long_a' },
      { text: 'd', type: 'consonant', sound: 'd' },
      { text: 'e', type: 'silent' }
    ],
    'mate': [
      { text: 'm', type: 'consonant', sound: 'm' },
      { text: 'a', type: 'long-vowel', sound: 'long_a' },
      { text: 't', type: 'consonant', sound: 't' },
      { text: 'e', type: 'silent' }
    ],
    'game': [
      { text: 'g', type: 'consonant', sound: 'g' },
      { text: 'a', type: 'long-vowel', sound: 'long_a' },
      { text: 'm', type: 'consonant', sound: 'm' },
      { text: 'e', type: 'silent' }
    ],
    'afraid': [
      { text: 'a', type: 'vowel', sound: 'a' },
      { text: 'fr', type: 'consonant', sound: 'fr' },
      { text: 'ai', type: 'long-vowel', sound: 'long_a' },
      { text: 'd', type: 'consonant', sound: 'd' }
    ],
    'bake': [
      { text: 'b', type: 'consonant', sound: 'b' },
      { text: 'a', type: 'long-vowel', sound: 'long_a' },
      { text: 'k', type: 'consonant', sound: 'k' },
      { text: 'e', type: 'silent' }
    ],
    'gave': [
      { text: 'g', type: 'consonant', sound: 'g' },
      { text: 'a', type: 'long-vowel', sound: 'long_a' },
      { text: 'v', type: 'consonant', sound: 'v' },
      { text: 'e', type: 'silent' }
    ],
    'way': [
      { text: 'w', type: 'consonant', sound: 'w' },
      { text: 'a', type: 'long-vowel', sound: 'long_a' },
      { text: 'y', type: 'silent' }
    ],
    'grey': [
      { text: 'gr', type: 'consonant', sound: 'gr' },
      { text: 'e', type: 'long-vowel', sound: 'long_a' },
      { text: 'y', type: 'silent', diacritic: 'ā' }
    ],
    'rake': [
      { text: 'r', type: 'consonant', sound: 'r' },
      { text: 'a', type: 'long-vowel', sound: 'long_a' },
      { text: 'k', type: 'consonant', sound: 'k' },
      { text: 'e', type: 'silent' }
    ],
    'great': [
      { text: 'gr', type: 'consonant', sound: 'gr' },
      { text: 'ea', type: 'long-vowel', sound: 'long_a' },
      { text: 't', type: 'consonant', sound: 't' }
    ],
    'holiday': [
      { text: 'h', type: 'consonant', sound: 'h' },
      { text: 'o', type: 'vowel', sound: 'o' },
      { text: 'l', type: 'consonant', sound: 'l' },
      { text: 'i', type: 'vowel', sound: 'i' },
      { text: 'd', type: 'consonant', sound: 'd' },
      { text: 'a', type: 'long-vowel', sound: 'long_a' },
      { text: 'y', type: 'silent' }
    ],
    'gayle': [
      { text: 'G', type: 'consonant', sound: 'g' },
      { text: 'ay', type: 'long-vowel', sound: 'long_a' },
      { text: 'l', type: 'consonant', sound: 'l' },
      { text: 'e', type: 'silent' }
    ],
    'may': [
      { text: 'm', type: 'consonant', sound: 'm' },
      { text: 'a', type: 'long-vowel', sound: 'long_a' },
      { text: 'y', type: 'silent' }
    ],
    'clay': [
      { text: 'cl', type: 'consonant', sound: 'cl' },
      { text: 'a', type: 'long-vowel', sound: 'long_a' },
      { text: 'y', type: 'silent' }
    ],
    'wake': [
      { text: 'w', type: 'consonant', sound: 'w' },
      { text: 'a', type: 'long-vowel', sound: 'long_a' },
      { text: 'k', type: 'consonant', sound: 'k' },
      { text: 'e', type: 'silent' }
    ],
    'weight': [
      { text: 'w', type: 'consonant', sound: 'w' },
      { text: 'ei', type: 'long-vowel', sound: 'long_a', diacritic: 'ā' },
      { text: 'gh', type: 'silent' },
      { text: 't', type: 'consonant', sound: 't' }
    ],
    'baked': [
      { text: 'b', type: 'consonant', sound: 'b' },
      { text: 'a', type: 'long-vowel', sound: 'long_a' },
      { text: 'k', type: 'consonant', sound: 'k' },
      { text: 'e', type: 'silent' },
      { text: 'd', type: 'consonant', sound: 'd' }
    ],
    'holidays': [
      { text: 'h', type: 'consonant', sound: 'h' },
      { text: 'o', type: 'vowel', sound: 'o' },
      { text: 'l', type: 'consonant', sound: 'l' },
      { text: 'i', type: 'vowel', sound: 'i' },
      { text: 'd', type: 'consonant', sound: 'd' },
      { text: 'a', type: 'long-vowel', sound: 'long_a' },
      { text: 'y', type: 'silent' },
      { text: 's', type: 'consonant', sound: 's' }
    ],
    'played': [
      { text: 'pl', type: 'consonant', sound: 'pl' },
      { text: 'a', type: 'long-vowel', sound: 'long_a' },
      { text: 'y', type: 'silent' },
      { text: 'e', type: 'silent' },
      { text: 'd', type: 'consonant', sound: 'd' }
    ],
    'amazed': [
      { text: 'a', type: 'vowel', sound: 'a' },
      { text: 'm', type: 'consonant', sound: 'm' },
      { text: 'a', type: 'long-vowel', sound: 'long_a' },
      { text: 'z', type: 'consonant', sound: 'z' },
      { text: 'e', type: 'silent' },
      { text: 'd', type: 'consonant', sound: 'd' }
    ],
    'stayed': [
      { text: 'st', type: 'consonant', sound: 'st' },
      { text: 'a', type: 'long-vowel', sound: 'long_a' },
      { text: 'y', type: 'silent' },
      { text: 'e', type: 'silent' },
      { text: 'd', type: 'consonant', sound: 'd' }
    ],
    'stay': [
      { text: 'st', type: 'consonant', sound: 'st' },
      { text: 'a', type: 'long-vowel', sound: 'long_a' },
      { text: 'y', type: 'silent' }
    ],
    'against': [
      { text: 'a', type: 'vowel', sound: 'a' },
      { text: 'g', type: 'consonant', sound: 'g' },
      { text: 'ai', type: 'long-vowel', sound: 'long_a' },
      { text: 'n', type: 'consonant', sound: 'n' },
      { text: 's', type: 'consonant', sound: 's' },
      { text: 't', type: 'consonant', sound: 't' }
    ],
    'they': [
      { text: 'th', type: 'digraph', sound: 'th' },
      { text: 'e', type: 'long-vowel', sound: 'long_a' },
      { text: 'y', type: 'silent' }
    ],

    // ==================== LONG E WORDS ====================
    'people': [
      { text: 'p', type: 'consonant', sound: 'p' },
      { text: 'eo', type: 'long-vowel', sound: 'long_e' },
      { text: 'p', type: 'consonant', sound: 'p' },
      { text: 'l', type: 'consonant', sound: 'l' },
      { text: 'e', type: 'silent' }
    ],
    'need': [
      { text: 'n', type: 'consonant', sound: 'n' },
      { text: 'ee', type: 'long-vowel', sound: 'long_e' },
      { text: 'd', type: 'consonant', sound: 'd' }
    ],
    'eagle': [
      { text: 'ea', type: 'long-vowel', sound: 'long_e' },
      { text: 'g', type: 'consonant', sound: 'g' },
      { text: 'l', type: 'consonant', sound: 'l' },
      { text: 'e', type: 'silent' }
    ],
    'funny': [
      { text: 'f', type: 'consonant', sound: 'f' },
      { text: 'u', type: 'vowel', sound: 'u' },
      { text: 'nn', type: 'consonant', sound: 'n' },
      { text: 'y', type: 'long-vowel', sound: 'long_e', diacritic: 'ē' }
    ],
    'meet': [
      { text: 'm', type: 'consonant', sound: 'm' },
      { text: 'ee', type: 'long-vowel', sound: 'long_e' },
      { text: 't', type: 'consonant', sound: 't' }
    ],
    'breeze': [
      { text: 'br', type: 'consonant', sound: 'br' },
      { text: 'ee', type: 'long-vowel', sound: 'long_e' },
      { text: 'z', type: 'consonant', sound: 'z' },
      { text: 'e', type: 'silent' }
    ],
    'maybe': [
      { text: 'm', type: 'consonant', sound: 'm' },
      { text: 'a', type: 'long-vowel', sound: 'long_a' },
      { text: 'y', type: 'silent' },
      { text: 'b', type: 'consonant', sound: 'b' },
      { text: 'e', type: 'long-vowel', sound: 'long_e' }
    ],
    'breathe': [
      { text: 'br', type: 'consonant', sound: 'br' },
      { text: 'ea', type: 'long-vowel', sound: 'long_e' },
      { text: 'th', type: 'digraph', sound: 'th' },
      { text: 'e', type: 'silent' }
    ],
    'puppy': [
      { text: 'p', type: 'consonant', sound: 'p' },
      { text: 'u', type: 'vowel', sound: 'u' },
      { text: 'pp', type: 'consonant', sound: 'p' },
      { text: 'y', type: 'long-vowel', sound: 'long_e', diacritic: 'ē' }
    ],
    'lazy': [
      { text: 'l', type: 'consonant', sound: 'l' },
      { text: 'a', type: 'long-vowel', sound: 'long_a' },
      { text: 'z', type: 'consonant', sound: 'z' },
      { text: 'y', type: 'long-vowel', sound: 'long_e', diacritic: 'ē' }
    ],
    'leaf': [
      { text: 'l', type: 'consonant', sound: 'l' },
      { text: 'ea', type: 'long-vowel', sound: 'long_e' },
      { text: 'f', type: 'consonant', sound: 'f' }
    ],
    'tree': [
      { text: 'tr', type: 'consonant', sound: 'tr' },
      { text: 'ee', type: 'long-vowel', sound: 'long_e' }
    ],
    'meat': [
      { text: 'm', type: 'consonant', sound: 'm' },
      { text: 'ea', type: 'long-vowel', sound: 'long_e' },
      { text: 't', type: 'consonant', sound: 't' }
    ],
    'grumpy': [
      { text: 'gr', type: 'consonant', sound: 'gr' },
      { text: 'u', type: 'vowel', sound: 'u' },
      { text: 'm', type: 'consonant', sound: 'm' },
      { text: 'p', type: 'consonant', sound: 'p' },
      { text: 'y', type: 'long-vowel', sound: 'long_e', diacritic: 'ē' }
    ],
    'peek': [
      { text: 'p', type: 'consonant', sound: 'p' },
      { text: 'ee', type: 'long-vowel', sound: 'long_e' },
      { text: 'k', type: 'consonant', sound: 'k' }
    ],
    'released': [
      { text: 'r', type: 'consonant', sound: 'r' },
      { text: 'e', type: 'vowel', sound: 'e' },
      { text: 'l', type: 'consonant', sound: 'l' },
      { text: 'ea', type: 'long-vowel', sound: 'long_e' },
      { text: 's', type: 'consonant', sound: 's' },
      { text: 'e', type: 'silent' },
      { text: 'd', type: 'consonant', sound: 'd' }
    ],
    'speaking': [
      { text: 'sp', type: 'consonant', sound: 'sp' },
      { text: 'ea', type: 'long-vowel', sound: 'long_e' },
      { text: 'k', type: 'consonant', sound: 'k' },
      { text: 'i', type: 'vowel', sound: 'i' },
      { text: 'ng', type: 'digraph', sound: 'ng' }
    ],
    'revealed': [
      { text: 'r', type: 'consonant', sound: 'r' },
      { text: 'e', type: 'vowel', sound: 'e' },
      { text: 'v', type: 'consonant', sound: 'v' },
      { text: 'ea', type: 'long-vowel', sound: 'long_e' },
      { text: 'l', type: 'consonant', sound: 'l' },
      { text: 'e', type: 'silent' },
      { text: 'd', type: 'consonant', sound: 'd' }
    ],
    'happy': [
      { text: 'h', type: 'consonant', sound: 'h' },
      { text: 'a', type: 'vowel', sound: 'a' },
      { text: 'pp', type: 'consonant', sound: 'p' },
      { text: 'y', type: 'long-vowel', sound: 'long_e', diacritic: 'ē' }
    ],
    'valley': [
      { text: 'v', type: 'consonant', sound: 'v' },
      { text: 'a', type: 'vowel', sound: 'a' },
      { text: 'll', type: 'consonant', sound: 'l' },
      { text: 'e', type: 'long-vowel', sound: 'long_e' },
      { text: 'y', type: 'silent', diacritic: 'ē' }
    ],
    'seat': [
      { text: 's', type: 'consonant', sound: 's' },
      { text: 'ea', type: 'long-vowel', sound: 'long_e' },
      { text: 't', type: 'consonant', sound: 't' }
    ],
    'thief': [
      { text: 'th', type: 'digraph', sound: 'th' },
      { text: 'ie', type: 'long-vowel', sound: 'long_e' },
      { text: 'f', type: 'consonant', sound: 'f' }
    ],
    'create': [
      { text: 'cr', type: 'consonant', sound: 'cr' },
      { text: 'ea', type: 'long-vowel', sound: 'long_e' },
      { text: 't', type: 'consonant', sound: 't' },
      { text: 'e', type: 'silent' }
    ],
    'believe': [
      { text: 'b', type: 'consonant', sound: 'b' },
      { text: 'e', type: 'vowel', sound: 'e' },
      { text: 'l', type: 'consonant', sound: 'l' },
      { text: 'ie', type: 'long-vowel', sound: 'long_e' },
      { text: 'v', type: 'consonant', sound: 'v' },
      { text: 'e', type: 'silent' }
    ],
    'seized': [
      { text: 's', type: 'consonant', sound: 's' },
      { text: 'ei', type: 'long-vowel', sound: 'long_e' },
      { text: 'z', type: 'consonant', sound: 'z' },
      { text: 'e', type: 'silent' },
      { text: 'd', type: 'consonant', sound: 'd' }
    ],
    'green': [
      { text: 'gr', type: 'consonant', sound: 'gr' },
      { text: 'ee', type: 'long-vowel', sound: 'long_e' },
      { text: 'n', type: 'consonant', sound: 'n' }
    ],
    'three': [
      { text: 'th', type: 'digraph', sound: 'th' },
      { text: 'r', type: 'consonant', sound: 'r' },
      { text: 'ee', type: 'long-vowel', sound: 'long_e' }
    ],
    'clean': [
      { text: 'cl', type: 'consonant', sound: 'cl' },
      { text: 'ea', type: 'long-vowel', sound: 'long_e' },
      { text: 'n', type: 'consonant', sound: 'n' }
    ],
    'hungry': [
      { text: 'h', type: 'consonant', sound: 'h' },
      { text: 'u', type: 'vowel', sound: 'u' },
      { text: 'n', type: 'consonant', sound: 'n' },
      { text: 'gr', type: 'consonant', sound: 'gr' },
      { text: 'y', type: 'long-vowel', sound: 'long_e', diacritic: 'ē' }
    ],
    'gleam': [
      { text: 'gl', type: 'consonant', sound: 'gl' },
      { text: 'ea', type: 'long-vowel', sound: 'long_e' },
      { text: 'm', type: 'consonant', sound: 'm' }
    ],

    // ==================== LONG I WORDS ====================
    'find': [
      { text: 'f', type: 'consonant', sound: 'f' },
      { text: 'i', type: 'long-vowel', sound: 'long_i' },
      { text: 'n', type: 'consonant', sound: 'n' },
      { text: 'd', type: 'consonant', sound: 'd' }
    ],
    'right': [
      { text: 'r', type: 'consonant', sound: 'r' },
      { text: 'i', type: 'long-vowel', sound: 'long_i' },
      { text: 'gh', type: 'silent' },
      { text: 't', type: 'consonant', sound: 't' }
    ],
    'flight': [
      { text: 'fl', type: 'consonant', sound: 'fl' },
      { text: 'i', type: 'long-vowel', sound: 'long_i' },
      { text: 'gh', type: 'silent' },
      { text: 't', type: 'consonant', sound: 't' }
    ],
    'skies': [
      { text: 'sk', type: 'consonant', sound: 'sk' },
      { text: 'ie', type: 'long-vowel', sound: 'long_i' },
      { text: 's', type: 'consonant', sound: 's' }
    ],
    'sight': [
      { text: 's', type: 'consonant', sound: 's' },
      { text: 'i', type: 'long-vowel', sound: 'long_i' },
      { text: 'gh', type: 'silent' },
      { text: 't', type: 'consonant', sound: 't' }
    ],
    'five': [
      { text: 'f', type: 'consonant', sound: 'f' },
      { text: 'i', type: 'long-vowel', sound: 'long_i' },
      { text: 'v', type: 'consonant', sound: 'v' },
      { text: 'e', type: 'silent' }
    ],
    'try': [
      { text: 'tr', type: 'consonant', sound: 'tr' },
      { text: 'y', type: 'long-vowel', sound: 'long_i', diacritic: 'ī' }
    ],
    'height': [
      { text: 'h', type: 'consonant', sound: 'h' },
      { text: 'ei', type: 'long-vowel', sound: 'long_i', diacritic: 'ī' },
      { text: 'gh', type: 'silent' },
      { text: 't', type: 'consonant', sound: 't' }
    ],
    'finally': [
      { text: 'f', type: 'consonant', sound: 'f' },
      { text: 'i', type: 'long-vowel', sound: 'long_i' },
      { text: 'n', type: 'consonant', sound: 'n' },
      { text: 'a', type: 'vowel', sound: 'a' },
      { text: 'll', type: 'consonant', sound: 'l' },
      { text: 'y', type: 'long-vowel', sound: 'long_e', diacritic: 'ē' }
    ],
    'dive': [
      { text: 'd', type: 'consonant', sound: 'd' },
      { text: 'i', type: 'long-vowel', sound: 'long_i' },
      { text: 'v', type: 'consonant', sound: 'v' },
      { text: 'e', type: 'silent' }
    ],
    'kind': [
      { text: 'k', type: 'consonant', sound: 'k' },
      { text: 'i', type: 'long-vowel', sound: 'long_i' },
      { text: 'n', type: 'consonant', sound: 'n' },
      { text: 'd', type: 'consonant', sound: 'd' }
    ],
    'why': [
      { text: 'wh', type: 'digraph', sound: 'wh' },
      { text: 'y', type: 'long-vowel', sound: 'long_i', diacritic: 'ī' }
    ],
    'fly': [
      { text: 'fl', type: 'consonant', sound: 'fl' },
      { text: 'y', type: 'long-vowel', sound: 'long_i', diacritic: 'ī' }
    ],
    'myself': [
      { text: 'm', type: 'consonant', sound: 'm' },
      { text: 'y', type: 'long-vowel', sound: 'long_i', diacritic: 'ī' },
      { text: 's', type: 'consonant', sound: 's' },
      { text: 'e', type: 'vowel', sound: 'e' },
      { text: 'l', type: 'consonant', sound: 'l' },
      { text: 'f', type: 'consonant', sound: 'f' }
    ],
    'direct': [
      { text: 'd', type: 'consonant', sound: 'd' },
      { text: 'i', type: 'long-vowel', sound: 'long_i' },
      { text: 'r', type: 'consonant', sound: 'r' },
      { text: 'e', type: 'vowel', sound: 'e' },
      { text: 'c', type: 'consonant', sound: 'k' },
      { text: 't', type: 'consonant', sound: 't' }
    ],
    'light': [
      { text: 'l', type: 'consonant', sound: 'l' },
      { text: 'i', type: 'long-vowel', sound: 'long_i' },
      { text: 'gh', type: 'silent' },
      { text: 't', type: 'consonant', sound: 't' }
    ],
    'by': [
      { text: 'b', type: 'consonant', sound: 'b' },
      { text: 'y', type: 'long-vowel', sound: 'long_i', diacritic: 'ī' }
    ],
    'flies': [
      { text: 'fl', type: 'consonant', sound: 'fl' },
      { text: 'ie', type: 'long-vowel', sound: 'long_i' },
      { text: 's', type: 'consonant', sound: 's' }
    ],
    'wild': [
      { text: 'w', type: 'consonant', sound: 'w' },
      { text: 'i', type: 'long-vowel', sound: 'long_i' },
      { text: 'l', type: 'consonant', sound: 'l' },
      { text: 'd', type: 'consonant', sound: 'd' }
    ],
    'directly': [
      { text: 'd', type: 'consonant', sound: 'd' },
      { text: 'i', type: 'long-vowel', sound: 'long_i' },
      { text: 'r', type: 'consonant', sound: 'r' },
      { text: 'e', type: 'vowel', sound: 'e' },
      { text: 'c', type: 'consonant', sound: 'k' },
      { text: 't', type: 'consonant', sound: 't' },
      { text: 'l', type: 'consonant', sound: 'l' },
      { text: 'y', type: 'long-vowel', sound: 'long_e', diacritic: 'ē' }
    ],
    'quite': [
      { text: 'qu', type: 'consonant', sound: 'qu' },
      { text: 'i', type: 'long-vowel', sound: 'long_i' },
      { text: 't', type: 'consonant', sound: 't' },
      { text: 'e', type: 'silent' }
    ],
    'night': [
      { text: 'n', type: 'consonant', sound: 'n' },
      { text: 'i', type: 'long-vowel', sound: 'long_i' },
      { text: 'gh', type: 'silent' },
      { text: 't', type: 'consonant', sound: 't' }
    ],
    'my': [
      { text: 'm', type: 'consonant', sound: 'm' },
      { text: 'y', type: 'long-vowel', sound: 'long_i', diacritic: 'ī' }
    ],
    'ride': [
      { text: 'r', type: 'consonant', sound: 'r' },
      { text: 'i', type: 'long-vowel', sound: 'long_i' },
      { text: 'd', type: 'consonant', sound: 'd' },
      { text: 'e', type: 'silent' }
    ],
    'realise': [
      { text: 'r', type: 'consonant', sound: 'r' },
      { text: 'ea', type: 'long-vowel', sound: 'long_e' },
      { text: 'l', type: 'consonant', sound: 'l' },
      { text: 'i', type: 'long-vowel', sound: 'long_i' },
      { text: 's', type: 'consonant', sound: 's' },
      { text: 'e', type: 'silent' }
    ],
    'live': [
      { text: 'l', type: 'consonant', sound: 'l' },
      { text: 'i', type: 'long-vowel', sound: 'long_i' },
      { text: 'v', type: 'consonant', sound: 'v' },
      { text: 'e', type: 'silent' }
    ],
    'white': [
      { text: 'wh', type: 'digraph', sound: 'wh' },
      { text: 'i', type: 'long-vowel', sound: 'long_i' },
      { text: 't', type: 'consonant', sound: 't' },
      { text: 'e', type: 'silent' }
    ],
    'realised': [
      { text: 'r', type: 'consonant', sound: 'r' },
      { text: 'ea', type: 'long-vowel', sound: 'long_e' },
      { text: 'l', type: 'consonant', sound: 'l' },
      { text: 'i', type: 'long-vowel', sound: 'long_i' },
      { text: 's', type: 'consonant', sound: 's' },
      { text: 'e', type: 'silent' },
      { text: 'd', type: 'consonant', sound: 'd' }
    ],
    'mild': [
      { text: 'm', type: 'consonant', sound: 'm' },
      { text: 'i', type: 'long-vowel', sound: 'long_i' },
      { text: 'l', type: 'consonant', sound: 'l' },
      { text: 'd', type: 'consonant', sound: 'd' }
    ],
    'delighted': [
      { text: 'd', type: 'consonant', sound: 'd' },
      { text: 'e', type: 'vowel', sound: 'e' },
      { text: 'l', type: 'consonant', sound: 'l' },
      { text: 'i', type: 'long-vowel', sound: 'long_i' },
      { text: 'gh', type: 'silent' },
      { text: 't', type: 'consonant', sound: 't' },
      { text: 'e', type: 'silent' },
      { text: 'd', type: 'consonant', sound: 'd' }
    ],

    // ==================== LONG O WORDS ====================
    'go': [
      { text: 'g', type: 'consonant', sound: 'g' },
      { text: 'o', type: 'long-vowel', sound: 'long_o' }
    ],
    'so': [
      { text: 's', type: 'consonant', sound: 's' },
      { text: 'o', type: 'long-vowel', sound: 'long_o' }
    ],
    'ago': [
      { text: 'a', type: 'vowel', sound: 'a', diacritic: 'ū' },
      { text: 'g', type: 'consonant', sound: 'g' },
      { text: 'o', type: 'long-vowel', sound: 'long_o' }
    ],
    'joan': [
      { text: 'J', type: 'consonant', sound: 'j' },
      { text: 'oa', type: 'long-vowel', sound: 'long_o' },
      { text: 'n', type: 'consonant', sound: 'n' }
    ],
    'know': [
      { text: 'k', type: 'silent' },
      { text: 'n', type: 'consonant', sound: 'n' },
      { text: 'ow', type: 'long-vowel', sound: 'long_o' }
    ],
    'road': [
      { text: 'r', type: 'consonant', sound: 'r' },
      { text: 'oa', type: 'long-vowel', sound: 'long_o' },
      { text: 'd', type: 'consonant', sound: 'd' }
    ],
    'owen': [
      { text: 'O', type: 'long-vowel', sound: 'long_o' },
      { text: 'w', type: 'consonant', sound: 'w' },
      { text: 'e', type: 'vowel', sound: 'e' },
      { text: 'n', type: 'consonant', sound: 'n' }
    ],
    'low': [
      { text: 'l', type: 'consonant', sound: 'l' },
      { text: 'ow', type: 'long-vowel', sound: 'long_o' }
    ],
    'envelope': [
      { text: 'e', type: 'vowel', sound: 'e' },
      { text: 'n', type: 'consonant', sound: 'n' },
      { text: 'v', type: 'consonant', sound: 'v' },
      { text: 'e', type: 'vowel', sound: 'e' },
      { text: 'l', type: 'consonant', sound: 'l' },
      { text: 'o', type: 'long-vowel', sound: 'long_o' },
      { text: 'p', type: 'consonant', sound: 'p' },
      { text: 'e', type: 'silent' }
    ],
    "won't": [
      { text: 'w', type: 'consonant', sound: 'w' },
      { text: 'o', type: 'long-vowel', sound: 'long_o' },
      { text: "n'", type: 'consonant', sound: 'n' },
      { text: 't', type: 'consonant', sound: 't' }
    ],
    'show': [
      { text: 'sh', type: 'digraph', sound: 'sh' },
      { text: 'ow', type: 'long-vowel', sound: 'long_o' }
    ],
    'cove': [
      { text: 'c', type: 'consonant', sound: 'k' },
      { text: 'o', type: 'long-vowel', sound: 'long_o' },
      { text: 'v', type: 'consonant', sound: 'v' },
      { text: 'e', type: 'silent' }
    ],
    'drove': [
      { text: 'dr', type: 'consonant', sound: 'dr' },
      { text: 'o', type: 'long-vowel', sound: 'long_o' },
      { text: 'v', type: 'consonant', sound: 'v' },
      { text: 'e', type: 'silent' }
    ],
    'home': [
      { text: 'h', type: 'consonant', sound: 'h' },
      { text: 'o', type: 'long-vowel', sound: 'long_o' },
      { text: 'm', type: 'consonant', sound: 'm' },
      { text: 'e', type: 'silent' }
    ],
    'propose': [
      { text: 'pr', type: 'consonant', sound: 'pr' },
      { text: 'o', type: 'vowel', sound: 'o' },
      { text: 'p', type: 'consonant', sound: 'p' },
      { text: 'o', type: 'long-vowel', sound: 'long_o' },
      { text: 's', type: 'consonant', sound: 's' },
      { text: 'e', type: 'silent' }
    ],
    'wrote': [
      { text: 'wr', type: 'consonant', sound: 'r' },
      { text: 'o', type: 'long-vowel', sound: 'long_o' },
      { text: 't', type: 'consonant', sound: 't' },
      { text: 'e', type: 'silent' }
    ],
    'own': [
      { text: 'ow', type: 'long-vowel', sound: 'long_o' },
      { text: 'n', type: 'consonant', sound: 'n' }
    ],
    'rowan': [
      { text: 'R', type: 'consonant', sound: 'r' },
      { text: 'ow', type: 'long-vowel', sound: 'long_o' },
      { text: 'a', type: 'vowel', sound: 'a' },
      { text: 'n', type: 'consonant', sound: 'n' }
    ],
    'though': [
      { text: 'th', type: 'digraph', sound: 'th' },
      { text: 'o', type: 'long-vowel', sound: 'long_o' },
      { text: 'u', type: 'silent' },
      { text: 'gh', type: 'silent' }
    ],
    'hoped': [
      { text: 'h', type: 'consonant', sound: 'h' },
      { text: 'o', type: 'long-vowel', sound: 'long_o' },
      { text: 'p', type: 'consonant', sound: 'p' },
      { text: 'e', type: 'silent' },
      { text: 'd', type: 'consonant', sound: 'd' }
    ],
    'floated': [
      { text: 'fl', type: 'consonant', sound: 'fl' },
      { text: 'oa', type: 'long-vowel', sound: 'long_o' },
      { text: 't', type: 'consonant', sound: 't' },
      { text: 'e', type: 'silent' },
      { text: 'd', type: 'consonant', sound: 'd' }
    ],
    'note': [
      { text: 'n', type: 'consonant', sound: 'n' },
      { text: 'o', type: 'long-vowel', sound: 'long_o' },
      { text: 't', type: 'consonant', sound: 't' },
      { text: 'e', type: 'silent' }
    ],
    'owned': [
      { text: 'ow', type: 'long-vowel', sound: 'long_o' },
      { text: 'n', type: 'consonant', sound: 'n' },
      { text: 'e', type: 'silent' },
      { text: 'd', type: 'consonant', sound: 'd' }
    ],
    'hope': [
      { text: 'h', type: 'consonant', sound: 'h' },
      { text: 'o', type: 'long-vowel', sound: 'long_o' },
      { text: 'p', type: 'consonant', sound: 'p' },
      { text: 'e', type: 'silent' }
    ],
    'both': [
      { text: 'b', type: 'consonant', sound: 'b' },
      { text: 'o', type: 'long-vowel', sound: 'long_o' },
      { text: 'th', type: 'digraph', sound: 'th' }
    ],
    'nose': [
      { text: 'n', type: 'consonant', sound: 'n' },
      { text: 'o', type: 'long-vowel', sound: 'long_o' },
      { text: 's', type: 'consonant', sound: 's' },
      { text: 'e', type: 'silent' }
    ],
    'only': [
      { text: 'o', type: 'long-vowel', sound: 'long_o' },
      { text: 'n', type: 'consonant', sound: 'n' },
      { text: 'l', type: 'consonant', sound: 'l' },
      { text: 'y', type: 'long-vowel', sound: 'long_e', diacritic: 'ē' }
    ],
    "don't": [
      { text: 'd', type: 'consonant', sound: 'd' },
      { text: 'o', type: 'long-vowel', sound: 'long_o' },
      { text: "n'", type: 'consonant', sound: 'n' },
      { text: 't', type: 'consonant', sound: 't' }
    ],
    'close': [
      { text: 'cl', type: 'consonant', sound: 'cl' },
      { text: 'o', type: 'long-vowel', sound: 'long_o' },
      { text: 's', type: 'consonant', sound: 's' },
      { text: 'e', type: 'silent' }
    ],
    'spoke': [
      { text: 'sp', type: 'consonant', sound: 'sp' },
      { text: 'o', type: 'long-vowel', sound: 'long_o' },
      { text: 'k', type: 'consonant', sound: 'k' },
      { text: 'e', type: 'silent' }
    ],

    // ==================== OO WORDS ====================
    'food': [
      { text: 'f', type: 'consonant', sound: 'f' },
      { text: 'oo', type: 'long-vowel', sound: 'oo' },
      { text: 'd', type: 'consonant', sound: 'd' }
    ],
    'soon': [
      { text: 's', type: 'consonant', sound: 's' },
      { text: 'oo', type: 'long-vowel', sound: 'oo' },
      { text: 'n', type: 'consonant', sound: 'n' }
    ],
    'bedroom': [
      { text: 'b', type: 'consonant', sound: 'b' },
      { text: 'e', type: 'vowel', sound: 'e' },
      { text: 'd', type: 'consonant', sound: 'd' },
      { text: 'r', type: 'consonant', sound: 'r' },
      { text: 'oo', type: 'long-vowel', sound: 'oo' },
      { text: 'm', type: 'consonant', sound: 'm' }
    ],
    'receive': [
      { text: 'r', type: 'consonant', sound: 'r' },
      { text: 'e', type: 'vowel', sound: 'e' },
      { text: 'c', type: 'consonant', sound: 's', diacritic: 's' },
      { text: 'ei', type: 'long-vowel', sound: 'long_e' },
      { text: 'v', type: 'consonant', sound: 'v' },
      { text: 'e', type: 'silent' }
    ],
    'special': [
      { text: 'sp', type: 'consonant', sound: 'sp' },
      { text: 'e', type: 'vowel', sound: 'e' },
      { text: 'c', type: 'consonant', sound: 'sh', diacritic: 'sh' },
      { text: 'i', type: 'vowel', sound: 'i' },
      { text: 'a', type: 'vowel', sound: 'a' },
      { text: 'l', type: 'consonant', sound: 'l' }
    ],
    'mood': [
      { text: 'm', type: 'consonant', sound: 'm' },
      { text: 'oo', type: 'long-vowel', sound: 'oo' },
      { text: 'd', type: 'consonant', sound: 'd' }
    ],
    'swoop': [
      { text: 'sw', type: 'consonant', sound: 'sw' },
      { text: 'oo', type: 'long-vowel', sound: 'oo' },
      { text: 'p', type: 'consonant', sound: 'p' }
    ],
    'move': [
      { text: 'm', type: 'consonant', sound: 'm' },
      { text: 'o', type: 'long-vowel', sound: 'oo', diacritic: 'oo' },
      { text: 'v', type: 'consonant', sound: 'v' },
      { text: 'e', type: 'silent' }
    ],
    'place': [
      { text: 'pl', type: 'consonant', sound: 'pl' },
      { text: 'a', type: 'long-vowel', sound: 'long_a' },
      { text: 'c', type: 'consonant', sound: 's', diacritic: 's' },
      { text: 'e', type: 'silent' }
    ],
    'especially': [
      { text: 'e', type: 'vowel', sound: 'e' },
      { text: 'sp', type: 'consonant', sound: 'sp' },
      { text: 'e', type: 'vowel', sound: 'e' },
      { text: 'c', type: 'consonant', sound: 'sh', diacritic: 'sh' },
      { text: 'i', type: 'vowel', sound: 'i' },
      { text: 'a', type: 'vowel', sound: 'a' },
      { text: 'll', type: 'consonant', sound: 'l' },
      { text: 'y', type: 'long-vowel', sound: 'long_e', diacritic: 'ē' }
    ],
    'room': [
      { text: 'r', type: 'consonant', sound: 'r' },
      { text: 'oo', type: 'long-vowel', sound: 'oo' },
      { text: 'm', type: 'consonant', sound: 'm' }
    ],
    'cool': [
      { text: 'c', type: 'consonant', sound: 'k' },
      { text: 'oo', type: 'long-vowel', sound: 'oo' },
      { text: 'l', type: 'consonant', sound: 'l' }
    ],
    'movie': [
      { text: 'm', type: 'consonant', sound: 'm' },
      { text: 'o', type: 'long-vowel', sound: 'oo', diacritic: 'oo' },
      { text: 'v', type: 'consonant', sound: 'v' },
      { text: 'ie', type: 'long-vowel', sound: 'long_e' }
    ],
    'face': [
      { text: 'f', type: 'consonant', sound: 'f' },
      { text: 'a', type: 'long-vowel', sound: 'long_a' },
      { text: 'c', type: 'consonant', sound: 's', diacritic: 's' },
      { text: 'e', type: 'silent' }
    ],
    'office': [
      { text: 'o', type: 'vowel', sound: 'o' },
      { text: 'ff', type: 'consonant', sound: 'f' },
      { text: 'i', type: 'vowel', sound: 'i' },
      { text: 'c', type: 'consonant', sound: 's', diacritic: 's' },
      { text: 'e', type: 'silent' }
    ],
    'suit': [
      { text: 's', type: 'consonant', sound: 's' },
      { text: 'ui', type: 'long-vowel', sound: 'oo' },
      { text: 't', type: 'consonant', sound: 't' }
    ],
    'truth': [
      { text: 'tr', type: 'consonant', sound: 'tr' },
      { text: 'u', type: 'long-vowel', sound: 'oo', diacritic: 'oo' },
      { text: 'th', type: 'digraph', sound: 'th' }
    ],
    'soup': [
      { text: 's', type: 'consonant', sound: 's' },
      { text: 'ou', type: 'long-vowel', sound: 'oo' },
      { text: 'p', type: 'consonant', sound: 'p' }
    ],
    'decided': [
      { text: 'd', type: 'consonant', sound: 'd' },
      { text: 'e', type: 'vowel', sound: 'e' },
      { text: 'c', type: 'consonant', sound: 's', diacritic: 's' },
      { text: 'i', type: 'long-vowel', sound: 'long_i' },
      { text: 'd', type: 'consonant', sound: 'd' },
      { text: 'e', type: 'silent' },
      { text: 'd', type: 'consonant', sound: 'd' }
    ],
    'distance': [
      { text: 'd', type: 'consonant', sound: 'd' },
      { text: 'i', type: 'vowel', sound: 'i' },
      { text: 's', type: 'consonant', sound: 's' },
      { text: 't', type: 'consonant', sound: 't' },
      { text: 'a', type: 'vowel', sound: 'a' },
      { text: 'n', type: 'consonant', sound: 'n' },
      { text: 'c', type: 'consonant', sound: 's', diacritic: 's' },
      { text: 'e', type: 'silent' }
    ],
    'through': [
      { text: 'th', type: 'digraph', sound: 'th' },
      { text: 'r', type: 'consonant', sound: 'r' },
      { text: 'ou', type: 'long-vowel', sound: 'oo' },
      { text: 'gh', type: 'silent' }
    ],
    'true': [
      { text: 'tr', type: 'consonant', sound: 'tr' },
      { text: 'ue', type: 'long-vowel', sound: 'oo' }
    ],
    'flew': [
      { text: 'fl', type: 'consonant', sound: 'fl' },
      { text: 'ew', type: 'long-vowel', sound: 'oo' }
    ],
    'exciting': [
      { text: 'e', type: 'vowel', sound: 'e' },
      { text: 'x', type: 'consonant', sound: 'x' },
      { text: 'c', type: 'consonant', sound: 's', diacritic: 's' },
      { text: 'i', type: 'long-vowel', sound: 'long_i' },
      { text: 't', type: 'consonant', sound: 't' },
      { text: 'i', type: 'vowel', sound: 'i' },
      { text: 'ng', type: 'digraph', sound: 'ng' }
    ],
    'receipt': [
      { text: 'r', type: 'consonant', sound: 'r' },
      { text: 'e', type: 'vowel', sound: 'e' },
      { text: 'c', type: 'consonant', sound: 's', diacritic: 's' },
      { text: 'ei', type: 'long-vowel', sound: 'long_e' },
      { text: 'p', type: 'silent' },
      { text: 't', type: 'consonant', sound: 't' }
    ],
    'cockatoo': [
      { text: 'c', type: 'consonant', sound: 'k' },
      { text: 'o', type: 'vowel', sound: 'o' },
      { text: 'ck', type: 'consonant', sound: 'k' },
      { text: 'a', type: 'vowel', sound: 'a' },
      { text: 't', type: 'consonant', sound: 't' },
      { text: 'oo', type: 'long-vowel', sound: 'oo' }
    ],
    'kangaroo': [
      { text: 'k', type: 'consonant', sound: 'k' },
      { text: 'a', type: 'vowel', sound: 'a' },
      { text: 'n', type: 'consonant', sound: 'n' },
      { text: 'g', type: 'consonant', sound: 'g' },
      { text: 'a', type: 'vowel', sound: 'a' },
      { text: 'r', type: 'consonant', sound: 'r' },
      { text: 'oo', type: 'long-vowel', sound: 'oo' }
    ],
    'grew': [
      { text: 'gr', type: 'consonant', sound: 'gr' },
      { text: 'ew', type: 'long-vowel', sound: 'oo' }
    ],
    'chew': [
      { text: 'ch', type: 'digraph', sound: 'ch' },
      { text: 'ew', type: 'long-vowel', sound: 'oo' }
    ],
    'blew': [
      { text: 'bl', type: 'consonant', sound: 'bl' },
      { text: 'ew', type: 'long-vowel', sound: 'oo' }
    ],

    // ==================== LONG U + SOFT G WORDS ====================
    'pure': [
      { text: 'p', type: 'consonant', sound: 'p' },
      { text: 'u', type: 'long-vowel', sound: 'long_u' },
      { text: 'r', type: 'consonant', sound: 'r' },
      { text: 'e', type: 'silent' }
    ],
    'tune': [
      { text: 't', type: 'consonant', sound: 't' },
      { text: 'u', type: 'long-vowel', sound: 'long_u' },
      { text: 'n', type: 'consonant', sound: 'n' },
      { text: 'e', type: 'silent' }
    ],
    'tuneful': [
      { text: 't', type: 'consonant', sound: 't' },
      { text: 'u', type: 'long-vowel', sound: 'long_u' },
      { text: 'n', type: 'consonant', sound: 'n' },
      { text: 'e', type: 'silent' },
      { text: 'f', type: 'consonant', sound: 'f' },
      { text: 'u', type: 'vowel', sound: 'oo', diacritic: 'oo' },
      { text: 'l', type: 'consonant', sound: 'l' }
    ],
    'regular': [
      { text: 'r', type: 'consonant', sound: 'r' },
      { text: 'e', type: 'vowel', sound: 'e' },
      { text: 'g', type: 'consonant', sound: 'g' },
      { text: 'u', type: 'long-vowel', sound: 'long_u', diacritic: 'ū' },
      { text: 'l', type: 'consonant', sound: 'l' },
      { text: 'a', type: 'vowel', sound: 'a' },
      { text: 'r', type: 'consonant', sound: 'r' }
    ],
    'eventually': [
      { text: 'e', type: 'vowel', sound: 'e' },
      { text: 'v', type: 'consonant', sound: 'v' },
      { text: 'e', type: 'vowel', sound: 'e' },
      { text: 'n', type: 'consonant', sound: 'n' },
      { text: 't', type: 'consonant', sound: 't' },
      { text: 'u', type: 'vowel', sound: 'u' },
      { text: 'a', type: 'vowel', sound: 'a' },
      { text: 'll', type: 'consonant', sound: 'l' },
      { text: 'y', type: 'silent' }
    ],
    'excuse': [
      { text: 'e', type: 'vowel', sound: 'e' },
      { text: 'x', type: 'consonant', sound: 'x' },
      { text: 'c', type: 'consonant', sound: 'k' },
      { text: 'u', type: 'long-vowel', sound: 'long_u' },
      { text: 's', type: 'consonant', sound: 's' },
      { text: 'e', type: 'silent' }
    ],
    'value': [
      { text: 'v', type: 'consonant', sound: 'v' },
      { text: 'a', type: 'vowel', sound: 'a' },
      { text: 'l', type: 'consonant', sound: 'l' },
      { text: 'u', type: 'long-vowel', sound: 'long_u' },
      { text: 'e', type: 'silent' }
    ],
    'use': [
      { text: 'u', type: 'long-vowel', sound: 'long_u' },
      { text: 's', type: 'consonant', sound: 's' },
      { text: 'e', type: 'silent' }
    ],
    'continue': [
      { text: 'c', type: 'consonant', sound: 'k' },
      { text: 'o', type: 'vowel', sound: 'o' },
      { text: 'n', type: 'consonant', sound: 'n' },
      { text: 't', type: 'consonant', sound: 't' },
      { text: 'i', type: 'vowel', sound: 'i' },
      { text: 'n', type: 'consonant', sound: 'n' },
      { text: 'u', type: 'long-vowel', sound: 'long_u' },
      { text: 'e', type: 'silent' }
    ],
    'useful': [
      { text: 'u', type: 'long-vowel', sound: 'long_u' },
      { text: 's', type: 'consonant', sound: 's' },
      { text: 'e', type: 'silent' },
      { text: 'f', type: 'consonant', sound: 'f' },
      { text: 'u', type: 'vowel', sound: 'oo', diacritic: 'oo' },
      { text: 'l', type: 'consonant', sound: 'l' }
    ],
    'continued': [
      { text: 'c', type: 'consonant', sound: 'k' },
      { text: 'o', type: 'vowel', sound: 'o' },
      { text: 'n', type: 'consonant', sound: 'n' },
      { text: 't', type: 'consonant', sound: 't' },
      { text: 'i', type: 'vowel', sound: 'i' },
      { text: 'n', type: 'consonant', sound: 'n' },
      { text: 'u', type: 'long-vowel', sound: 'long_u' },
      { text: 'e', type: 'silent' },
      { text: 'd', type: 'consonant', sound: 'd' }
    ],
    'refused': [
      { text: 'r', type: 'consonant', sound: 'r' },
      { text: 'e', type: 'vowel', sound: 'e' },
      { text: 'f', type: 'consonant', sound: 'f' },
      { text: 'u', type: 'long-vowel', sound: 'long_u' },
      { text: 's', type: 'consonant', sound: 's' },
      { text: 'e', type: 'silent' },
      { text: 'd', type: 'consonant', sound: 'd' }
    ],
    'tube': [
      { text: 't', type: 'consonant', sound: 't' },
      { text: 'u', type: 'long-vowel', sound: 'long_u' },
      { text: 'b', type: 'consonant', sound: 'b' },
      { text: 'e', type: 'silent' }
    ],
    'view': [
      { text: 'v', type: 'consonant', sound: 'v' },
      { text: 'iew', type: 'long-vowel', sound: 'long_u', diacritic: 'ū' }
    ],
    'few': [
      { text: 'f', type: 'consonant', sound: 'f' },
      { text: 'ew', type: 'long-vowel', sound: 'long_u', diacritic: 'ū' }
    ],
    'youth': [
      { text: 'y', type: 'consonant', sound: 'y' },
      { text: 'ou', type: 'long-vowel', sound: 'oo' },
      { text: 'th', type: 'digraph', sound: 'th' }
    ],
    'beautiful': [
      { text: 'b', type: 'consonant', sound: 'b' },
      { text: 'eau', type: 'long-vowel', sound: 'long_u' },
      { text: 't', type: 'consonant', sound: 't' },
      { text: 'i', type: 'vowel', sound: 'i' },
      { text: 'f', type: 'consonant', sound: 'f' },
      { text: 'u', type: 'vowel', sound: 'oo', diacritic: 'oo' },
      { text: 'l', type: 'consonant', sound: 'l' }
    ],
    'youthful': [
      { text: 'y', type: 'consonant', sound: 'y' },
      { text: 'ou', type: 'long-vowel', sound: 'oo' },
      { text: 'th', type: 'digraph', sound: 'th' },
      { text: 'f', type: 'consonant', sound: 'f' },
      { text: 'u', type: 'vowel', sound: 'oo', diacritic: 'oo' },
      { text: 'l', type: 'consonant', sound: 'l' }
    ],
    // Soft G words with 'j' diacritic
    'page': [
      { text: 'p', type: 'consonant', sound: 'p' },
      { text: 'a', type: 'long-vowel', sound: 'long_a' },
      { text: 'g', type: 'consonant', sound: 'j', diacritic: 'j' },
      { text: 'e', type: 'silent' }
    ],
    'magic': [
      { text: 'm', type: 'consonant', sound: 'm' },
      { text: 'a', type: 'vowel', sound: 'a' },
      { text: 'g', type: 'consonant', sound: 'j', diacritic: 'j' },
      { text: 'i', type: 'vowel', sound: 'i' },
      { text: 'c', type: 'consonant', sound: 'k' }
    ],
    'imagine': [
      { text: 'i', type: 'vowel', sound: 'i' },
      { text: 'm', type: 'consonant', sound: 'm' },
      { text: 'a', type: 'vowel', sound: 'a' },
      { text: 'g', type: 'consonant', sound: 'j', diacritic: 'j' },
      { text: 'i', type: 'vowel', sound: 'i' },
      { text: 'n', type: 'consonant', sound: 'n' },
      { text: 'e', type: 'silent' }
    ],
    'giant': [
      { text: 'g', type: 'consonant', sound: 'j', diacritic: 'j' },
      { text: 'i', type: 'long-vowel', sound: 'long_i' },
      { text: 'a', type: 'vowel', sound: 'a' },
      { text: 'n', type: 'consonant', sound: 'n' },
      { text: 't', type: 'consonant', sound: 't' }
    ],
    'stage': [
      { text: 'st', type: 'consonant', sound: 'st' },
      { text: 'a', type: 'long-vowel', sound: 'long_a' },
      { text: 'g', type: 'consonant', sound: 'j', diacritic: 'j' },
      { text: 'e', type: 'silent' }
    ],
    'manage': [
      { text: 'm', type: 'consonant', sound: 'm' },
      { text: 'a', type: 'vowel', sound: 'a' },
      { text: 'n', type: 'consonant', sound: 'n' },
      { text: 'a', type: 'vowel', sound: 'a' },
      { text: 'g', type: 'consonant', sound: 'j', diacritic: 'j' },
      { text: 'e', type: 'silent' }
    ],
    'gently': [
      { text: 'g', type: 'consonant', sound: 'j', diacritic: 'j' },
      { text: 'e', type: 'vowel', sound: 'e' },
      { text: 'n', type: 'consonant', sound: 'n' },
      { text: 't', type: 'consonant', sound: 't' },
      { text: 'l', type: 'consonant', sound: 'l' },
      { text: 'y', type: 'long-vowel', sound: 'long_e', diacritic: 'ē' }
    ],
    'gentle': [
      { text: 'g', type: 'consonant', sound: 'j', diacritic: 'j' },
      { text: 'e', type: 'vowel', sound: 'e' },
      { text: 'n', type: 'consonant', sound: 'n' },
      { text: 't', type: 'consonant', sound: 't' },
      { text: 'l', type: 'consonant', sound: 'l' },
      { text: 'e', type: 'silent' }
    ],
    'magical': [
      { text: 'm', type: 'consonant', sound: 'm' },
      { text: 'a', type: 'vowel', sound: 'a' },
      { text: 'g', type: 'consonant', sound: 'j', diacritic: 'j' },
      { text: 'i', type: 'vowel', sound: 'i' },
      { text: 'c', type: 'consonant', sound: 'k' },
      { text: 'a', type: 'vowel', sound: 'a' },
      { text: 'l', type: 'consonant', sound: 'l' }
    ],
    'original': [
      { text: 'o', type: 'vowel', sound: 'o' },
      { text: 'r', type: 'consonant', sound: 'r' },
      { text: 'i', type: 'vowel', sound: 'i' },
      { text: 'g', type: 'consonant', sound: 'j', diacritic: 'j' },
      { text: 'i', type: 'vowel', sound: 'i' },
      { text: 'n', type: 'consonant', sound: 'n' },
      { text: 'a', type: 'vowel', sound: 'a' },
      { text: 'l', type: 'consonant', sound: 'l' }
    ],
    'postage': [
      { text: 'p', type: 'consonant', sound: 'p' },
      { text: 'o', type: 'long-vowel', sound: 'long_o' },
      { text: 's', type: 'consonant', sound: 's' },
      { text: 't', type: 'consonant', sound: 't' },
      { text: 'a', type: 'vowel', sound: 'a' },
      { text: 'g', type: 'consonant', sound: 'j', diacritic: 'j' },
      { text: 'e', type: 'silent' }
    ],
    'managed': [
      { text: 'm', type: 'consonant', sound: 'm' },
      { text: 'a', type: 'vowel', sound: 'a' },
      { text: 'n', type: 'consonant', sound: 'n' },
      { text: 'a', type: 'vowel', sound: 'a' },
      { text: 'g', type: 'consonant', sound: 'j', diacritic: 'j' },
      { text: 'e', type: 'silent' },
      { text: 'd', type: 'consonant', sound: 'd' }
    ],

    // ==================== SILENT E WORDS ====================
    // (These use the simple silent-e pattern)
    'cake': [
      { text: 'c', type: 'consonant', sound: 'k' },
      { text: 'a', type: 'long-vowel', sound: 'long_a' },
      { text: 'k', type: 'consonant', sound: 'k' },
      { text: 'e', type: 'silent' }
    ],
    'lake': [
      { text: 'l', type: 'consonant', sound: 'l' },
      { text: 'a', type: 'long-vowel', sound: 'long_a' },
      { text: 'k', type: 'consonant', sound: 'k' },
      { text: 'e', type: 'silent' }
    ],
    'made': [
      { text: 'm', type: 'consonant', sound: 'm' },
      { text: 'a', type: 'long-vowel', sound: 'long_a' },
      { text: 'd', type: 'consonant', sound: 'd' },
      { text: 'e', type: 'silent' }
    ],
    'name': [
      { text: 'n', type: 'consonant', sound: 'n' },
      { text: 'a', type: 'long-vowel', sound: 'long_a' },
      { text: 'm', type: 'consonant', sound: 'm' },
      { text: 'e', type: 'silent' }
    ],
    'pale': [
      { text: 'p', type: 'consonant', sound: 'p' },
      { text: 'a', type: 'long-vowel', sound: 'long_a' },
      { text: 'l', type: 'consonant', sound: 'l' },
      { text: 'e', type: 'silent' }
    ],
    'sale': [
      { text: 's', type: 'consonant', sound: 's' },
      { text: 'a', type: 'long-vowel', sound: 'long_a' },
      { text: 'l', type: 'consonant', sound: 'l' },
      { text: 'e', type: 'silent' }
    ],
    'take': [
      { text: 't', type: 'consonant', sound: 't' },
      { text: 'a', type: 'long-vowel', sound: 'long_a' },
      { text: 'k', type: 'consonant', sound: 'k' },
      { text: 'e', type: 'silent' }
    ],
    'wave': [
      { text: 'w', type: 'consonant', sound: 'w' },
      { text: 'a', type: 'long-vowel', sound: 'long_a' },
      { text: 'v', type: 'consonant', sound: 'v' },
      { text: 'e', type: 'silent' }
    ],
    'base': [
      { text: 'b', type: 'consonant', sound: 'b' },
      { text: 'a', type: 'long-vowel', sound: 'long_a' },
      { text: 's', type: 'consonant', sound: 's' },
      { text: 'e', type: 'silent' }
    ],
    'case': [
      { text: 'c', type: 'consonant', sound: 'k' },
      { text: 'a', type: 'long-vowel', sound: 'long_a' },
      { text: 's', type: 'consonant', sound: 's' },
      { text: 'e', type: 'silent' }
    ],
    'date': [
      { text: 'd', type: 'consonant', sound: 'd' },
      { text: 'a', type: 'long-vowel', sound: 'long_a' },
      { text: 't', type: 'consonant', sound: 't' },
      { text: 'e', type: 'silent' }
    ],
    'fate': [
      { text: 'f', type: 'consonant', sound: 'f' },
      { text: 'a', type: 'long-vowel', sound: 'long_a' },
      { text: 't', type: 'consonant', sound: 't' },
      { text: 'e', type: 'silent' }
    ],
    'gate': [
      { text: 'g', type: 'consonant', sound: 'g' },
      { text: 'a', type: 'long-vowel', sound: 'long_a' },
      { text: 't', type: 'consonant', sound: 't' },
      { text: 'e', type: 'silent' }
    ],
    'hate': [
      { text: 'h', type: 'consonant', sound: 'h' },
      { text: 'a', type: 'long-vowel', sound: 'long_a' },
      { text: 't', type: 'consonant', sound: 't' },
      { text: 'e', type: 'silent' }
    ],
    'theme': [
      { text: 'th', type: 'digraph', sound: 'th' },
      { text: 'e', type: 'long-vowel', sound: 'long_e' },
      { text: 'm', type: 'consonant', sound: 'm' },
      { text: 'e', type: 'silent' }
    ],
    'these': [
      { text: 'th', type: 'digraph', sound: 'th' },
      { text: 'e', type: 'long-vowel', sound: 'long_e' },
      { text: 's', type: 'consonant', sound: 's' },
      { text: 'e', type: 'silent' }
    ],
    'eve': [
      { text: 'e', type: 'long-vowel', sound: 'long_e' },
      { text: 'v', type: 'consonant', sound: 'v' },
      { text: 'e', type: 'silent' }
    ],
    'bike': [
      { text: 'b', type: 'consonant', sound: 'b' },
      { text: 'i', type: 'long-vowel', sound: 'long_i' },
      { text: 'k', type: 'consonant', sound: 'k' },
      { text: 'e', type: 'silent' }
    ],
    'kite': [
      { text: 'k', type: 'consonant', sound: 'k' },
      { text: 'i', type: 'long-vowel', sound: 'long_i' },
      { text: 't', type: 'consonant', sound: 't' },
      { text: 'e', type: 'silent' }
    ],
    'lime': [
      { text: 'l', type: 'consonant', sound: 'l' },
      { text: 'i', type: 'long-vowel', sound: 'long_i' },
      { text: 'm', type: 'consonant', sound: 'm' },
      { text: 'e', type: 'silent' }
    ],
    'mine': [
      { text: 'm', type: 'consonant', sound: 'm' },
      { text: 'i', type: 'long-vowel', sound: 'long_i' },
      { text: 'n', type: 'consonant', sound: 'n' },
      { text: 'e', type: 'silent' }
    ],
    'pine': [
      { text: 'p', type: 'consonant', sound: 'p' },
      { text: 'i', type: 'long-vowel', sound: 'long_i' },
      { text: 'n', type: 'consonant', sound: 'n' },
      { text: 'e', type: 'silent' }
    ],
    'time': [
      { text: 't', type: 'consonant', sound: 't' },
      { text: 'i', type: 'long-vowel', sound: 'long_i' },
      { text: 'm', type: 'consonant', sound: 'm' },
      { text: 'e', type: 'silent' }
    ],
    'hive': [
      { text: 'h', type: 'consonant', sound: 'h' },
      { text: 'i', type: 'long-vowel', sound: 'long_i' },
      { text: 'v', type: 'consonant', sound: 'v' },
      { text: 'e', type: 'silent' }
    ],
    'bite': [
      { text: 'b', type: 'consonant', sound: 'b' },
      { text: 'i', type: 'long-vowel', sound: 'long_i' },
      { text: 't', type: 'consonant', sound: 't' },
      { text: 'e', type: 'silent' }
    ],
    'site': [
      { text: 's', type: 'consonant', sound: 's' },
      { text: 'i', type: 'long-vowel', sound: 'long_i' },
      { text: 't', type: 'consonant', sound: 't' },
      { text: 'e', type: 'silent' }
    ],
    'rope': [
      { text: 'r', type: 'consonant', sound: 'r' },
      { text: 'o', type: 'long-vowel', sound: 'long_o' },
      { text: 'p', type: 'consonant', sound: 'p' },
      { text: 'e', type: 'silent' }
    ],
    'cone': [
      { text: 'c', type: 'consonant', sound: 'k' },
      { text: 'o', type: 'long-vowel', sound: 'long_o' },
      { text: 'n', type: 'consonant', sound: 'n' },
      { text: 'e', type: 'silent' }
    ],
    'robe': [
      { text: 'r', type: 'consonant', sound: 'r' },
      { text: 'o', type: 'long-vowel', sound: 'long_o' },
      { text: 'b', type: 'consonant', sound: 'b' },
      { text: 'e', type: 'silent' }
    ],
    'stone': [
      { text: 'st', type: 'consonant', sound: 'st' },
      { text: 'o', type: 'long-vowel', sound: 'long_o' },
      { text: 'n', type: 'consonant', sound: 'n' },
      { text: 'e', type: 'silent' }
    ],
    'bone': [
      { text: 'b', type: 'consonant', sound: 'b' },
      { text: 'o', type: 'long-vowel', sound: 'long_o' },
      { text: 'n', type: 'consonant', sound: 'n' },
      { text: 'e', type: 'silent' }
    ],
    'dome': [
      { text: 'd', type: 'consonant', sound: 'd' },
      { text: 'o', type: 'long-vowel', sound: 'long_o' },
      { text: 'm', type: 'consonant', sound: 'm' },
      { text: 'e', type: 'silent' }
    ],
    'pole': [
      { text: 'p', type: 'consonant', sound: 'p' },
      { text: 'o', type: 'long-vowel', sound: 'long_o' },
      { text: 'l', type: 'consonant', sound: 'l' },
      { text: 'e', type: 'silent' }
    ],
    'vote': [
      { text: 'v', type: 'consonant', sound: 'v' },
      { text: 'o', type: 'long-vowel', sound: 'long_o' },
      { text: 't', type: 'consonant', sound: 't' },
      { text: 'e', type: 'silent' }
    ],
    'cube': [
      { text: 'c', type: 'consonant', sound: 'k' },
      { text: 'u', type: 'long-vowel', sound: 'long_u' },
      { text: 'b', type: 'consonant', sound: 'b' },
      { text: 'e', type: 'silent' }
    ],
    'mule': [
      { text: 'm', type: 'consonant', sound: 'm' },
      { text: 'u', type: 'long-vowel', sound: 'long_u' },
      { text: 'l', type: 'consonant', sound: 'l' },
      { text: 'e', type: 'silent' }
    ],
    'rude': [
      { text: 'r', type: 'consonant', sound: 'r' },
      { text: 'u', type: 'long-vowel', sound: 'long_u' },
      { text: 'd', type: 'consonant', sound: 'd' },
      { text: 'e', type: 'silent' }
    ],
    'cute': [
      { text: 'c', type: 'consonant', sound: 'k' },
      { text: 'u', type: 'long-vowel', sound: 'long_u' },
      { text: 't', type: 'consonant', sound: 't' },
      { text: 'e', type: 'silent' }
    ],
    'dune': [
      { text: 'd', type: 'consonant', sound: 'd' },
      { text: 'u', type: 'long-vowel', sound: 'long_u' },
      { text: 'n', type: 'consonant', sound: 'n' },
      { text: 'e', type: 'silent' }
    ],
    'june': [
      { text: 'j', type: 'consonant', sound: 'j' },
      { text: 'u', type: 'long-vowel', sound: 'long_u' },
      { text: 'n', type: 'consonant', sound: 'n' },
      { text: 'e', type: 'silent' }
    ],
    'lute': [
      { text: 'l', type: 'consonant', sound: 'l' },
      { text: 'u', type: 'long-vowel', sound: 'long_u' },
      { text: 't', type: 'consonant', sound: 't' },
      { text: 'e', type: 'silent' }
    ],
    'mute': [
      { text: 'm', type: 'consonant', sound: 'm' },
      { text: 'u', type: 'long-vowel', sound: 'long_u' },
      { text: 't', type: 'consonant', sound: 't' },
      { text: 'e', type: 'silent' }
    ],
    'rule': [
      { text: 'r', type: 'consonant', sound: 'r' },
      { text: 'u', type: 'long-vowel', sound: 'long_u' },
      { text: 'l', type: 'consonant', sound: 'l' },
      { text: 'e', type: 'silent' }
    ],

    // ==================== SOFT C AND G ====================
    'cede': [
      { text: 'c', type: 'consonant', sound: 'soft_c' },
      { text: 'e', type: 'long-vowel', sound: 'long_e' },
      { text: 'd', type: 'consonant', sound: 'd' },
      { text: 'e', type: 'silent' }
    ],
    'scene': [
      { text: 'sc', type: 'consonant', sound: 'soft_c' },
      { text: 'e', type: 'long-vowel', sound: 'long_e' },
      { text: 'n', type: 'consonant', sound: 'n' },
      { text: 'e', type: 'silent' }
    ],
    'gene': [
      { text: 'g', type: 'consonant', sound: 'soft_g' },
      { text: 'e', type: 'long-vowel', sound: 'long_e' },
      { text: 'n', type: 'consonant', sound: 'n' },
      { text: 'e', type: 'silent' }
    ]
  };

  // ============================================================
  // XP LEVEL SYSTEM
  // ============================================================
  const XP_LEVELS = [
    { level: 1,  name: 'Phonics Rookie',    xpRequired: 0   },
    { level: 2,  name: 'Sound Explorer',    xpRequired: 100 },
    { level: 3,  name: 'Blending Beginner', xpRequired: 250 },
    { level: 4,  name: 'Phonics Pal',       xpRequired: 500 },
    { level: 5,  name: 'Blend Star',        xpRequired: 900 },
    { level: 6,  name: 'Segment Hero',      xpRequired: 1400 },
    { level: 7,  name: 'Word Wizard',       xpRequired: 2100 },
    { level: 8,  name: 'Phonics Champion',  xpRequired: 3000 },
    { level: 9,  name: 'Super Blender',     xpRequired: 4200 },
    { level: 10, name: 'Phonics Master',    xpRequired: 6000 }
  ];

  const XP_REWARDS = {
    blend_correct: 15,
    blend_wrong: 3,
    hear_choose_correct: 20,
    hear_choose_wrong: 0,
    segment_correct: 25,
    segment_wrong: 0,
    missing_correct: 20,
    missing_wrong: 0,
    first_sound_correct: 20,
    first_sound_wrong: 0,
    lesson_complete_3star: 50,
    lesson_complete_2star: 30,
    lesson_complete_1star: 15,
    streak_bonus_5: 10,
    streak_bonus_10: 25
  };

  // ============================================================
  // PHONICS SOUND GROUPS (Jolly Phonics Style)
  // ============================================================
  const phonicsGroups = [
    {
      id: 'group1', name: 'Group 1', icon: '🌟', color: '#FF6B6B',
      sounds: ['s', 'a', 't', 'p', 'i', 'n'],
      description: 'The first sounds: s, a, t, p, i, n',
      keywords: { s: 'snake', a: 'ant', t: 'top', p: 'pan', i: 'in', n: 'net' },
      actions: {
        s: 'Weave hand like a snake saying ssss',
        a: 'Wiggle fingers by cheek like an ant',
        t: 'Turn head side to side saying t-t-t',
        p: 'Blow out like a puff of air',
        i: 'Tap index finger on palm saying i-i-i',
        n: 'Hold nose and say nnn'
      },
      wordTypes: ['cvc']
    },
    {
      id: 'group2', name: 'Group 2', icon: '🚀', color: '#4ECDC4',
      sounds: ['e', 'h', 'r', 'm', 'd'],
      description: 'More letters: e, h, r, m, d',
      keywords: { e: 'egg', h: 'hat', r: 'run', m: 'map', d: 'dog' },
      actions: {
        e: 'Tap egg on side of pan saying eh',
        h: 'Pant like you are out of breath',
        r: 'Pretend to be a robot saying rrr',
        m: 'Rub tummy saying mmmm',
        d: 'Beat a drum saying d-d-d'
      },
      wordTypes: ['cvc']
    },
    {
      id: 'group3', name: 'Group 3', icon: '🎯', color: '#45B7D1',
      sounds: ['g', 'o', 'u', 'l', 'f', 'b'],
      description: 'Next group: g, o, u, l, f, b',
      keywords: { g: 'got', o: 'on', u: 'up', l: 'leg', f: 'fan', b: 'bat' },
      actions: {
        g: 'Spiral hand down like water going down a drain',
        o: 'Pretend to turn on a light saying o-o-o',
        u: 'Pretend fingers are an umbrella opening',
        l: 'Lick an imaginary lollipop saying lll',
        f: 'Let hands gently fall saying fff',
        b: 'Hit a ball saying b-b-b'
      },
      wordTypes: ['cvc']
    },
    {
      id: 'group4', name: 'Group 4', icon: '💎', color: '#96CEB4',
      sounds: ['ai', 'j', 'oa', 'ie', 'ee', 'or'],
      description: 'Vowel digraphs: ai, j, oa, ie, ee, or',
      keywords: { ai: 'rain', j: 'jam', oa: 'goat', ie: 'pie', ee: 'feet', or: 'fork' },
      actions: {
        ai: 'Cup hand to ear as if hearing rain',
        j: 'Pretend to wobble like jelly',
        oa: 'Cup hands around mouth like megaphone',
        ie: 'Point to eye then pat knee saying i-e',
        ee: 'Stretch arms out wide saying eeee',
        or: 'Open and close hands like a crab'
      },
      wordTypes: ['diphthongs', 'longVowels']
    },
    {
      id: 'group5', name: 'Group 5', icon: '🔮', color: '#FFEAA7',
      sounds: ['sh', 'ch', 'th', 'ng'],
      description: 'Digraphs: sh, ch, th, ng',
      keywords: { sh: 'ship', ch: 'chip', th: 'thin', ng: 'ring' },
      actions: {
        sh: 'Finger over lips saying shhh',
        ch: 'Pretend to be a train saying ch-ch-ch',
        th: 'Put tongue between teeth',
        ng: 'Arms out like a weight lifter saying ng'
      },
      wordTypes: ['digraphs']
    },
    {
      id: 'group6', name: 'Group 6', icon: '✨', color: '#DDA0DD',
      sounds: ['oo', 'ar', 'ow', 'oi', 'er', 'air'],
      description: 'Special vowels: oo, ar, ow, oi, er, air',
      keywords: { oo: 'moon', ar: 'car', ow: 'cow', oi: 'oil', er: 'fern', air: 'hair' },
      actions: {
        oo: 'Point to moon saying ooo',
        ar: 'Open mouth wide like at the dentist',
        ow: 'Pretend to be hurt saying ow!',
        oi: 'Point finger saying oi!',
        er: 'Shrug shoulders saying er...',
        air: 'Sway arms like wind saying aaiirr'
      },
      wordTypes: ['diphthongs']
    },
    {
      id: 'group7', name: 'Group 7', icon: '🏆', color: '#F0E68C',
      sounds: ['magic-e'],
      description: 'Magic E makes the vowel say its name!',
      keywords: { 'magic-e': 'cake, kite, home, tune, Pete' },
      actions: {
        'magic-e': 'Flick fingers like magic saying e-e-e!'
      },
      wordTypes: ['silentE']
    },
    {
      id: 'group8', name: 'Group 8', icon: '👑', color: '#87CEEB',
      sounds: ['cc/ck', 'bl', 'cl', 'fl', 'gl', 'pl', 'sl'],
      description: 'Consonant blends at the start',
      keywords: { 'bl': 'black', 'cl': 'clap', 'fl': 'flag', 'gl': 'glad', 'pl': 'plan', 'sl': 'slip' },
      actions: { 'bl': 'Blend bl together quickly' },
      wordTypes: ['ccvc', 'cvcc']
    }
  ];

  const state = {
    score: 0, revealedWords: 0, totalWords: 0, usedWords: new Set(),
    currentWord: '', blendingTime: 3000, soundsEnabled: true,
    wordType: 'cvc', vowelFilter: 'all', theme: 'default',
    celebrationMode: false, badges: new Map(), streak: 0,
    // Session tracking
    sessionStartTime: Date.now(),
    sessionWordsCompleted: 0,
    sessionBestStreak: 0,
    // Mastery tracking - words mastered per word type
    masteredWords: {},
    // Premium features
    dailyGoal: 10,
    dailyProgress: 0,
    dailyStreakDays: 0,
    lastPracticeDate: null,
    totalPracticeDays: 0,
    totalWordsAllTime: 0,
    totalTimeMinutes: 0,
    allTimeBestStreak: 0,
    wordHistory: [],
    difficultWords: new Set(),
    weeklyActivity: {},
    unlockedLevels: ['cvc'],
    requireMasteryToUnlock: true,
    sessionTimeLimit: 0,
    difficultyLock: 0,
    goalCompletedToday: false,
    // === NEW: XP & Hearts system ===
    xp: 0,
    xpLevel: 1,
    hearts: 5,
    maxHearts: 5,
    lastHeartRegenTime: Date.now(),
    // === NEW: Exercise mode ===
    exerciseMode: 'blend',
    // === NEW: Active lesson ===
    inLesson: false,
    lessonWordType: 'cvc',
    lessonExercises: [],
    lessonCurrentIndex: 0,
    lessonMistakes: 0,
    lessonCorrect: 0,
    lessonXPEarned: 0,
    // === NEW: Lesson stars per word type ===
    lessonStars: {},
    // === NEW: current phonics group ===
    currentGroupId: null,
    // === NEW: Segmenting state ===
    segmentTapped: [],
    segmentUnits: []
  };

  // Learning path configuration
  const learningPath = [
    { id: 'cvc', name: 'CVC Words', icon: '🌟', requiredMastery: 0 },
    { id: 'ccvc', name: 'CCVC Words', icon: '🚀', requiredMastery: 50 },
    { id: 'cvcc', name: 'CVCC Words', icon: '🎯', requiredMastery: 50 },
    { id: 'ccvcc', name: 'CCVCC Words', icon: '💎', requiredMastery: 60 },
    { id: 'digraphs', name: 'Digraphs', icon: '🔮', requiredMastery: 60 },
    { id: 'silentE', name: 'Silent E', icon: '✨', requiredMastery: 70 },
    { id: 'extended', name: 'Extended Words', icon: '🏆', requiredMastery: 70 },
    { id: 'diphthongs', name: 'Diphthongs', icon: '👑', requiredMastery: 75 },
    { id: 'softCAndG', name: 'Soft C & G', icon: '🎭', requiredMastery: 75 },
    { id: 'longVowels', name: 'Long Vowels', icon: '🌈', requiredMastery: 80 }
  ];

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
    fullscreenButton: document.querySelector('#fullscreenButton'),
    streakSection: document.querySelector('#streakSection'),
    streakCount: document.querySelector('#streakCount'),
    wordTypeDesc: document.querySelector('#wordTypeDesc'),
    resetProgressButton: document.querySelector('#resetProgressButton'),
    skipButton: document.querySelector('#skipButton'),
    toggleLegend: document.querySelector('#toggleLegend'),
    legendContent: document.querySelector('.legend-content'),
    toggleSessionSummary: document.querySelector('#toggleSessionSummary'),
    sessionDetails: document.querySelector('#sessionDetails'),
    sessionWords: document.querySelector('#sessionWords'),
    sessionTime: document.querySelector('#sessionTime'),
    sessionBestStreak: document.querySelector('#sessionBestStreak'),
    // Premium elements
    dailyGoalWidget: document.querySelector('#dailyGoalWidget'),
    goalRingProgress: document.querySelector('#goalRingProgress'),
    dailyGoalCurrent: document.querySelector('#dailyGoalCurrent'),
    dailyGoalTarget: document.querySelector('#dailyGoalTarget'),
    dailyStreakDays: document.querySelector('#dailyStreakDays'),
    dailyGoalSelect: document.querySelector('#dailyGoalSelect'),
    goalCompleteCelebration: document.querySelector('#goalCompleteCelebration'),
    celebrationWordCount: document.querySelector('#celebrationWordCount'),
    closeCelebration: document.querySelector('#closeCelebration'),
    difficultWordBanner: document.querySelector('#difficultWordBanner'),
    parentDashboardButton: document.querySelector('#parentDashboardButton'),
    parentDashboardModal: document.querySelector('#parentDashboardModal'),
    closeParentDashboard: document.querySelector('#closeParentDashboard'),
    dashTotalDays: document.querySelector('#dashTotalDays'),
    dashTotalWords: document.querySelector('#dashTotalWords'),
    dashBestStreak: document.querySelector('#dashBestStreak'),
    dashTotalTime: document.querySelector('#dashTotalTime'),
    weeklyChart: document.querySelector('#weeklyChart'),
    masteryBars: document.querySelector('#masteryBars'),
    learningPathList: document.querySelector('#learningPathList'),
    wordHistoryList: document.querySelector('#wordHistoryList'),
    sessionTimeLimit: document.querySelector('#sessionTimeLimit'),
    difficultyLock: document.querySelector('#difficultyLock'),
    requireMastery: document.querySelector('#requireMastery'),
    // === NEW elements ===
    xpBarFill: document.querySelector('#xpBarFill'),
    xpLabel: document.querySelector('#xpLabel'),
    xpLevelBadge: document.querySelector('#xpLevelBadge'),
    levelName: document.querySelector('#levelName'),
    heartsDisplay: document.querySelector('#heartsDisplay'),
    headerStreakDays: document.querySelector('#headerStreakDays'),
    xpPop: document.querySelector('#xpPop'),
    heartLostBanner: document.querySelector('#heartLostBanner'),
    heartLostText: document.querySelector('#heartLostText'),
    mascotSpeech: document.querySelector('#mascotSpeech'),
    mascotChar: document.querySelector('#mascotChar'),
    // Exercise mode buttons
    exModeButtons: document.querySelectorAll('.ex-mode-btn'),
    blendActionButtons: document.querySelector('#blendActionButtons'),
    selfAssessButtons: document.querySelector('#selfAssessButtons'),
    assessYes: document.querySelector('#assessYes'),
    assessNo: document.querySelector('#assessNo'),
    answerFeedback: document.querySelector('#answerFeedback'),
    feedbackIcon: document.querySelector('#feedbackIcon'),
    feedbackText: document.querySelector('#feedbackText'),
    // Hear & Choose
    exerciseHearChoose: document.querySelector('#exerciseHearChoose'),
    playWordBtn: document.querySelector('#playWordBtn'),
    hearChooseOptions: document.querySelector('#hearChooseOptions'),
    // Segment
    exerciseSegment: document.querySelector('#exerciseSegment'),
    segmentBoxes: document.querySelector('#segmentBoxes'),
    segmentCheckBtn: document.querySelector('#segmentCheckBtn'),
    // Missing
    exerciseMissing: document.querySelector('#exerciseMissing'),
    missingWordDisplay: document.querySelector('#missingWordDisplay'),
    missingOptions: document.querySelector('#missingOptions'),
    // First Sound
    exerciseFirstSound: document.querySelector('#exerciseFirstSound'),
    firstSoundWord: document.querySelector('#firstSoundWord'),
    playFirstSoundBtn: document.querySelector('#playFirstSoundBtn'),
    firstSoundOptions: document.querySelector('#firstSoundOptions'),
    // Mode tabs
    modeTabs: document.querySelectorAll('.mode-tab'),
    panelFreePlay: document.querySelector('#panelFreePlay'),
    panelLesson: document.querySelector('#panelLesson'),
    panelGroups: document.querySelector('#panelGroups'),
    // Lesson
    lessonInProgress: document.querySelector('#lessonInProgress'),
    lessonChooser: document.querySelector('#lessonChooser'),
    lessonList: document.querySelector('#lessonList'),
    lessonProgressDots: document.querySelector('#lessonProgressDots'),
    lessonHearts: document.querySelector('#lessonHearts'),
    lessonBackBtn: document.querySelector('#lessonBackBtn'),
    lessonExLabel: document.querySelector('#lessonExLabel'),
    lessonWordBox: document.querySelector('#lessonWordBox'),
    lessonExerciseUI: document.querySelector('#lessonExerciseUI'),
    lessonFeedback: document.querySelector('#lessonFeedback'),
    lessonFeedbackIcon: document.querySelector('#lessonFeedbackIcon'),
    lessonFeedbackText: document.querySelector('#lessonFeedbackText'),
    // Lesson complete
    lessonCompleteModal: document.querySelector('#lessonCompleteModal'),
    lcStar1: document.querySelector('#lcStar1'),
    lcStar2: document.querySelector('#lcStar2'),
    lcStar3: document.querySelector('#lcStar3'),
    lcCorrect: document.querySelector('#lcCorrect'),
    lcXPEarned: document.querySelector('#lcXPEarned'),
    lcHeartsLeft: document.querySelector('#lcHeartsLeft'),
    lcContinueBtn: document.querySelector('#lcContinueBtn'),
    // Level up
    levelUpModal: document.querySelector('#levelUpModal'),
    luLevelName: document.querySelector('#luLevelName'),
    luCloseBtn: document.querySelector('#luCloseBtn'),
    // Phonics groups
    phonicsGroupsGrid: document.querySelector('#phonicsGroupsGrid'),
    groupDetail: document.querySelector('#groupDetail'),
    groupDetailContent: document.querySelector('#groupDetailContent'),
    groupBackBtn: document.querySelector('#groupBackBtn'),
    practiceGroupBtn: document.querySelector('#practiceGroupBtn')
  };

  const wordTypeDescriptions = {
    cvc: 'e.g. cat, dog, sun',
    ccvc: 'e.g. flag, grab, spin',
    cvcc: 'e.g. hand, lamp, milk',
    ccvcc: 'e.g. brand, drink, frost',
    digraphs: 'e.g. chat, shop, thin',
    extended: 'e.g. jumping, blocking',
    silentE: 'e.g. cake, bike, home',
    softCAndG: 'e.g. cede, gene, scene',
    diphthongs: 'e.g. boy, car, cow',
    longVowels: 'e.g. find, road, tree'
  };

  // Difficulty ratings (1-5 stars)
  const wordTypeDifficulty = {
    cvc: 1,
    ccvc: 2,
    cvcc: 2,
    ccvcc: 3,
    digraphs: 3,
    silentE: 3,
    extended: 4,
    diphthongs: 4,
    softCAndG: 4,
    longVowels: 5
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

  function getPreferredFemaleVoice() {
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
    const utteranceText = text.toLowerCase() === 'a' ? 'uh' : text;
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

  function updateScore(points = 10) {
    state.score += points;
    els.scoreValue.textContent = state.score;
    els.scoreIncrement.textContent = `+${points}`;
    els.scoreIncrement.classList.add('show');
    setTimeout(() => els.scoreIncrement.classList.remove('show'), 800);
  }

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

  function updateStreak() {
    state.streak++;
    els.streakCount.textContent = state.streak;
    if (state.streak >= 2) {
      els.streakSection.classList.add('visible');
    }

    // Streak milestone celebrations
    const milestones = [3, 5, 10, 15, 20, 25];
    if (milestones.includes(state.streak)) {
      celebrateStreakMilestone(state.streak);
    }
  }

  function celebrateStreakMilestone(streak) {
    // Enhanced visual feedback for milestones
    els.streakSection.classList.add('milestone');
    setTimeout(() => els.streakSection.classList.remove('milestone'), 1500);

    // Play special sound for milestones
    if (state.soundsEnabled) {
      if (streak >= 10) {
        speakWord(`Amazing! ${streak} in a row!`);
      } else if (streak >= 5) {
        speakWord(`Fantastic! ${streak} streak!`);
      } else {
        speakWord(`Great! ${streak} in a row!`);
      }
    }

    // Extra confetti for higher milestones
    if (streak >= 10) {
      for (let i = 0; i < 3; i++) {
        setTimeout(() => launchFireworks(), i * 200);
      }
    } else if (streak >= 5) {
      launchFireworks();
      setTimeout(() => launchConfetti(), 300);
    }

    // Show milestone badge notification
    showMilestoneNotification(streak);
  }

  function showMilestoneNotification(streak) {
    const notification = document.createElement('div');
    notification.className = 'milestone-notification';
    notification.innerHTML = `<span class="milestone-icon">🔥</span><span>${streak} Streak!</span>`;
    document.body.appendChild(notification);
    setTimeout(() => notification.classList.add('show'), 10);
    setTimeout(() => {
      notification.classList.remove('show');
      setTimeout(() => notification.remove(), 500);
    }, 2000);
  }

  function resetStreak() {
    state.streak = 0;
    els.streakCount.textContent = '0';
    els.streakSection.classList.remove('visible');
  }

  // Session tracking functions
  function updateSessionStats() {
    state.sessionWordsCompleted++;
    if (state.streak > state.sessionBestStreak) {
      state.sessionBestStreak = state.streak;
    }

    if (els.sessionWords) els.sessionWords.textContent = state.sessionWordsCompleted;
    if (els.sessionBestStreak) els.sessionBestStreak.textContent = state.sessionBestStreak;
  }

  function formatSessionTime(ms) {
    const seconds = Math.floor(ms / 1000);
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  }

  function updateSessionTimer() {
    const elapsed = Date.now() - state.sessionStartTime;
    if (els.sessionTime) els.sessionTime.textContent = formatSessionTime(elapsed);
  }

  // Update session timer every second
  setInterval(updateSessionTimer, 1000);

  function showPlaceholder() {
    els.wordBox.innerHTML = '<div class="word-placeholder"><span class="placeholder-icon">🎡</span><span>Press Spin to start!</span></div>';
  }

  function updateWordTypeDesc() {
    if (els.wordTypeDesc) {
      const desc = wordTypeDescriptions[state.wordType] || '';
      const difficulty = wordTypeDifficulty[state.wordType] || 1;
      const stars = '⭐'.repeat(difficulty) + '☆'.repeat(5 - difficulty);
      const mastery = getMasteryPercentage(state.wordType);
      const masteryDisplay = mastery > 0 ? ` <span class="mastery-badge" title="Words mastered in this category">${mastery}% mastered</span>` : '';
      els.wordTypeDesc.innerHTML = `<span class="difficulty-stars" title="Difficulty: ${difficulty}/5">${stars}</span> ${desc}${masteryDisplay}`;
    }
  }

  function getMasteryPercentage(wordType) {
    const group = wordGroups[wordType];
    if (!group) return 0;

    const totalWords = Object.values(group).flat().length;
    const masteredSet = state.masteredWords[wordType];
    const masteredCount = masteredSet ? masteredSet.size : 0;

    return totalWords > 0 ? Math.round((masteredCount / totalWords) * 100) : 0;
  }

  function trackMasteredWord(word) {
    if (!state.masteredWords[state.wordType]) {
      state.masteredWords[state.wordType] = new Set();
    }
    state.masteredWords[state.wordType].add(word.toLowerCase());
    updateWordTypeDesc();
    savePreferences();
  }

  function showCompliment() {
    const compliment = compliments[Math.floor(Math.random() * compliments.length)];
    els.complimentBox.textContent = compliment;
    els.complimentBox.classList.add('show');
    state.celebrationMode ? launchFireworks() : launchConfetti();
    updateStreak();
    updateSessionStats();
    trackMasteredWord(state.currentWord);
    trackWordCompletion(state.currentWord);
    // XP & mascot
    awardXP(XP_REWARDS.blend_correct);
    setMascotState(state.streak >= 5 ? 'excited' : 'happy');
    // Streak XP bonuses
    if (state.streak === 5) awardXP(XP_REWARDS.streak_bonus_5);
    if (state.streak === 10) awardXP(XP_REWARDS.streak_bonus_10);
    // Update header daily streak
    if (els.headerStreakDays) els.headerStreakDays.textContent = state.dailyStreakDays;
    setTimeout(() => els.complimentBox.classList.remove('show'), 2000);
    // Show self-assessment after blend mode
    if (state.exerciseMode === 'blend' && !state.inLesson) {
      setTimeout(() => {
        if (els.selfAssessButtons) els.selfAssessButtons.hidden = false;
      }, 2200);
    }
  }

  // ✅ PARSER — now supports -igh / -eigh with silent GH,
  // and auto-diacritics for every long-vowel word
  function parseWord(word) {
    const lower = word.toLowerCase();

    // Check explicit rendering data first (for complex words with diacritics)
    if (wordRenderMap[lower]) {
      return wordRenderMap[lower].map(unit => ({
        text: unit.text,
        isVowel: unit.type === 'vowel' || unit.type === 'long-vowel' || unit.type === 'diphthong',
        isLongVowel: unit.type === 'long-vowel',
        isDigraph: unit.type === 'digraph',
        isSilent: unit.type === 'silent',
        isDiphthong: unit.type === 'diphthong',
        isSoft: unit.type === 'soft',
        diacritic: unit.diacritic || null,
        sound: unit.sound || null
      }));
    }

    // Fall back to algorithmic parsing for simple words (CVC, CCVC, etc.)
    const units = [];
    let i = 0;

    while (i < word.length) {
      let unitAdded = false;

      // eigh -> ei (long vowel) + gh (silent)
      const nextFour = word.slice(i, i + 4).toLowerCase();
      if (nextFour === 'eigh') {
        units.push({ text: word.slice(i, i + 2), isDigraph: true, isVowel: true, isLongVowel: true }); // ei
        units.push({ text: word.slice(i + 2, i + 4), isDigraph: true, isSilent: true });              // gh
        i += 4;
        unitAdded = true;
      }

      // igh -> i (long vowel) + gh (silent)
      if (!unitAdded) {
        const nextThree = word.slice(i, i + 3).toLowerCase();
        if (nextThree === 'igh') {
          units.push({ text: word.slice(i, i + 1), isVowel: true, isLongVowel: true });                // i
          units.push({ text: word.slice(i + 1, i + 3), isDigraph: true, isSilent: true });             // gh
          i += 3;
          unitAdded = true;
        }
      }

      // trigraphs (air/ear etc)
      if (!unitAdded) {
        const nextThree = word.slice(i, i + 3).toLowerCase();
        if (vowelPatterns.trigraphs.includes(nextThree)) {
          units.push({ text: word.slice(i, i + 3), isDiphthong: true, isVowel: true });
          i += 3;
          unitAdded = true;
        }
      }

      // digraphs / long vowel digraphs
      if (!unitAdded) {
        const nextTwo = word.slice(i, i + 2).toLowerCase();

        if (
          vowelPatterns.digraphs.includes(nextTwo) ||
          (state.wordType === 'longVowels' && longVowelDigraphs.includes(nextTwo))
        ) {
          units.push({
            text: word.slice(i, i + 2),
            isDigraph: true,
            isVowel: true,
            isLongVowel: state.wordType === 'longVowels'
          });
          i += 2;
          unitAdded = true;
        } else if (consonantDigraphs.includes(nextTwo)) {
          units.push({ text: word.slice(i, i + 2), isDigraph: true });
          i += 2;
          unitAdded = true;
        }
      }

      // single letters
      if (!unitAdded) {
        const letter = word[i];
        let unit = { text: letter, isVowel: /[aeiouAEIOU]/.test(letter) };

        // double letter
        if (!unit.isVowel && i + 1 < word.length && word[i + 1].toLowerCase() === letter.toLowerCase()) {
          unit.text += word[i + 1];
          unit.isDouble = true;
          i++;
        }

        // soft c/g
        const lowerLetter = letter.toLowerCase();
        if (['c', 'g'].includes(lowerLetter) && i + 1 < word.length) {
          if (['e', 'i', 'y'].includes(word[i + 1].toLowerCase())) unit.isSoft = true;
        }

        units.push(unit);
        i++;
      }
    }

    // Silent-e detection
    if (units.length >= 3) {
      const last = units.length - 1;
      const second = last - 1;
      const third = last - 2;
      if (units[last].text.toLowerCase() === 'e' && !units[second].isVowel && units[third].isVowel) {
        units[third].isLongVowel = true;
        units[last].isSilent = true;
      }
    }

    // ✅ Apply diacritic + silent letters for ALL long vowel words
    if (state.wordType === 'longVowels') {
      const info = longVowelWordInfo[lower];
      if (info) {
        // Prefer a true long-vowel unit (digraph/igh/silent-e carrier), else fallback vowel
        const target =
          units.find(u => u.isLongVowel && !u.isSilent) ||
          units.find(u => u.isVowel && !u.isSilent);

        if (target) target.diacritic = info.mark;
      }

      // Grey “silent” letter overrides (y grey etc.)
      const overrides = silentLetterOverrides[lower];
      if (overrides?.length) {
        for (const u of units) {
          if (overrides.includes(u.text.toLowerCase())) u.isSilent = true;
        }
      }
    }

    return units;
  }

  function savePreferences() {
    // Convert masteredWords Sets to Arrays for JSON storage
    const masteredWordsArray = {};
    for (const [type, words] of Object.entries(state.masteredWords)) {
      masteredWordsArray[type] = Array.from(words);
    }

    // Calculate session time to add to total
    const sessionMinutes = Math.floor((Date.now() - state.sessionStartTime) / 60000);

    localStorage.setItem('wordSpinnerPrefs', JSON.stringify({
      ...state,
      usedWords: Array.from(state.usedWords),
      badges: Object.fromEntries(state.badges),
      masteredWords: masteredWordsArray,
      difficultWords: Array.from(state.difficultWords),
      totalTimeMinutes: state.totalTimeMinutes + sessionMinutes,
      // New fields
      xp: state.xp,
      xpLevel: state.xpLevel,
      hearts: state.hearts,
      lastHeartRegenTime: state.lastHeartRegenTime,
      lessonStars: state.lessonStars
    }));
  }

  function loadPreferences() {
    const prefs = JSON.parse(localStorage.getItem('wordSpinnerPrefs')) || {};

    // Convert masteredWords Arrays back to Sets
    const masteredWords = {};
    if (prefs.masteredWords) {
      for (const [type, words] of Object.entries(prefs.masteredWords)) {
        masteredWords[type] = new Set(words);
      }
    }

    Object.assign(state, {
      wordType: prefs.wordType || 'cvc',
      vowelFilter: prefs.vowelFilter || 'all',
      theme: prefs.theme || 'default',
      blendingTime: prefs.blendingTime || 3000,
      soundsEnabled: prefs.soundsEnabled ?? true,
      celebrationMode: prefs.celebrationMode || false,
      badges: new Map(Object.entries(prefs.badges || {})),
      usedWords: new Set(prefs.usedWords || []),
      masteredWords: masteredWords,
      // Premium features
      dailyGoal: prefs.dailyGoal || 10,
      dailyProgress: prefs.dailyProgress || 0,
      dailyStreakDays: prefs.dailyStreakDays || 0,
      lastPracticeDate: prefs.lastPracticeDate || null,
      totalPracticeDays: prefs.totalPracticeDays || 0,
      totalWordsAllTime: prefs.totalWordsAllTime || 0,
      totalTimeMinutes: prefs.totalTimeMinutes || 0,
      allTimeBestStreak: prefs.allTimeBestStreak || 0,
      wordHistory: prefs.wordHistory || [],
      difficultWords: new Set(prefs.difficultWords || []),
      weeklyActivity: prefs.weeklyActivity || {},
      unlockedLevels: prefs.unlockedLevels || ['cvc'],
      requireMasteryToUnlock: prefs.requireMasteryToUnlock ?? true,
      sessionTimeLimit: prefs.sessionTimeLimit || 0,
      difficultyLock: prefs.difficultyLock || 0,
      goalCompletedToday: prefs.goalCompletedToday || false,
      // New: XP & Hearts
      xp: prefs.xp || 0,
      xpLevel: prefs.xpLevel || 1,
      hearts: prefs.hearts ?? 5,
      lastHeartRegenTime: prefs.lastHeartRegenTime || Date.now(),
      lessonStars: prefs.lessonStars || {}
    });

    // Check if it's a new day and update streak
    updateDailyStreak();

    document.body.dataset.theme = state.theme;
    els.wordTypeSelector.value = state.wordType;
    els.vowelSelector.value = state.vowelFilter;
    els.themeSelector.value = state.theme;
    els.blendingTimeDisplay.textContent = state.blendingTime / 1000;
    updateAudioButton();
    els.celebrationModeCheckbox.checked = state.celebrationMode;
    updateWordTypeDesc();
    updateDailyGoalUI();
    updateXPBar();
    updateHeartsUI();
    if (els.headerStreakDays) els.headerStreakDays.textContent = state.dailyStreakDays;

    // Update daily goal selector
    if (els.dailyGoalSelect) {
      els.dailyGoalSelect.value = state.dailyGoal;
    }
  }

  function updateAudioButton() {
    if (state.soundsEnabled) {
      els.toggleAudioButton.textContent = '🔊 Sound On';
      els.toggleAudioButton.classList.remove('audio-toggle-off');
      els.toggleAudioButton.classList.add('audio-toggle-on');
    } else {
      els.toggleAudioButton.textContent = '🔇 Sound Off';
      els.toggleAudioButton.classList.remove('audio-toggle-on');
      els.toggleAudioButton.classList.add('audio-toggle-off');
    }
  }

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

  function earnBadge(wordType) {
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

    units.forEach((unit, idx) => {
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

      if (unit.diacritic) {
        span.dataset.diacritic = unit.diacritic;
        span.classList.add('has-diacritic');
      }

      span.style.animationDelay = `${idx * 0.4}s`;
      els.wordBox.appendChild(span);
    });

    // Play unit sounds (skips silent units)
    for (const unit of units) {
      await delay(400);
      if (unit.isSilent) continue;

      // Use explicit sound mapping from wordRenderMap if available
      let sound;
      if (unit.sound) {
        sound = unit.sound;
      } else {
        // Fallback to algorithmic sound mapping for simple words
        sound = unit.text.toLowerCase();
        if (unit.isLongVowel) sound = `long_${sound}`;
        else if (unit.isSoft) sound = `soft_${sound}`;
        else if (unit.isDouble) sound = sound[0];
      }

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
    els.skipButton.hidden = false;
    els.repeatButton.disabled = false;
  }

  function getAvailableWords() {
    const group = wordGroups[state.wordType];
    if (!group) return [];
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
    els.skipButton.hidden = true;
    state.totalWords = getAvailableWords().length;
    updateProgress();
    showPlaceholder();
    resetStreak();
    savePreferences();
  }

  async function spin() {
    els.spinButton.disabled = true;
    if (els.selfAssessButtons) els.selfAssessButtons.hidden = true;
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

      let sound = unit.text.toLowerCase();
      if (unit.isLongVowel) sound = `long_${sound}`;
      else if (unit.isDiphthong) sound = sound;
      else if (unit.isSoft) sound = `soft_${sound}`;
      else if (unit.isDouble) sound = sound[0];

      await playSound(sound);
      await delay(400);
      span.classList.remove('highlight');
    }
  }

  async function skip() {
    if (!state.currentWord) return;
    // Track as difficult word when skipped
    state.difficultWords.add(state.currentWord.toLowerCase());
    resetStreak();
    els.skipButton.hidden = true;
    els.hintButton.hidden = true;
    els.repeatButton.disabled = true;
    showPlaceholder();
    announce('Word skipped. Press Spin for a new word.');
    savePreferences();
  }

  // ============================================
  // PREMIUM FEATURES
  // ============================================

  function getTodayString() {
    return new Date().toISOString().split('T')[0];
  }

  function updateDailyGoalUI() {
    if (!els.dailyGoalCurrent) return;

    els.dailyGoalCurrent.textContent = state.dailyProgress;
    els.dailyGoalTarget.textContent = state.dailyGoal;
    els.dailyStreakDays.textContent = `🔥 ${state.dailyStreakDays} day${state.dailyStreakDays !== 1 ? 's' : ''} streak`;

    // Update progress ring
    const circumference = 2 * Math.PI * 45; // r=45
    const progress = Math.min(state.dailyProgress / state.dailyGoal, 1);
    const offset = circumference * (1 - progress);

    if (els.goalRingProgress) {
      els.goalRingProgress.style.strokeDasharray = circumference;
      els.goalRingProgress.style.strokeDashoffset = offset;
      els.goalRingProgress.style.stroke = progress >= 1 ? '#00b894' : '#e94560';
    }
  }

  function checkDailyGoalComplete() {
    if (state.dailyProgress >= state.dailyGoal && !state.goalCompletedToday) {
      state.goalCompletedToday = true;
      showDailyGoalCelebration();
      savePreferences();
    }
  }

  function showDailyGoalCelebration() {
    if (!els.goalCompleteCelebration) return;

    els.celebrationWordCount.textContent = state.dailyGoal;
    els.goalCompleteCelebration.hidden = false;

    // Launch extra confetti
    for (let i = 0; i < 5; i++) {
      setTimeout(() => launchFireworks(), i * 200);
    }

    if (state.soundsEnabled) {
      speakWord('Congratulations! You completed your daily goal!');
    }
  }

  function updateDailyStreak() {
    const today = getTodayString();

    if (state.lastPracticeDate !== today) {
      // Check if yesterday was practiced for streak
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayString = yesterday.toISOString().split('T')[0];

      if (state.lastPracticeDate === yesterdayString) {
        state.dailyStreakDays++;
      } else if (state.lastPracticeDate !== today) {
        state.dailyStreakDays = 1;
      }

      state.lastPracticeDate = today;
      state.totalPracticeDays++;
      state.dailyProgress = 0;
      state.goalCompletedToday = false;
    }
  }

  function trackWordCompletion(word) {
    const today = getTodayString();

    // Update daily progress
    state.dailyProgress++;
    state.totalWordsAllTime++;

    // Update weekly activity
    state.weeklyActivity[today] = (state.weeklyActivity[today] || 0) + 1;

    // Add to word history
    const existingIndex = state.wordHistory.findIndex(h => h.word === word.toLowerCase());
    if (existingIndex >= 0) {
      state.wordHistory[existingIndex].attempts++;
      state.wordHistory[existingIndex].lastPracticed = today;
    } else {
      state.wordHistory.push({
        word: word.toLowerCase(),
        type: state.wordType,
        firstPracticed: today,
        lastPracticed: today,
        attempts: 1,
        mastered: false
      });
    }

    // Remove from difficult words if practiced successfully
    if (state.difficultWords.has(word.toLowerCase())) {
      const historyItem = state.wordHistory.find(h => h.word === word.toLowerCase());
      if (historyItem && historyItem.attempts >= 3) {
        state.difficultWords.delete(word.toLowerCase());
      }
    }

    // Update all-time best streak
    if (state.streak > state.allTimeBestStreak) {
      state.allTimeBestStreak = state.streak;
    }

    updateDailyGoalUI();
    checkDailyGoalComplete();
    checkLevelUnlocks();
    savePreferences();
  }

  function checkLevelUnlocks() {
    if (!state.requireMasteryToUnlock) return;

    for (let i = 0; i < learningPath.length; i++) {
      const level = learningPath[i];

      if (state.unlockedLevels.includes(level.id)) continue;

      // Check if previous level has required mastery
      if (i > 0) {
        const prevLevel = learningPath[i - 1];
        const prevMastery = getMasteryPercentage(prevLevel.id);

        if (prevMastery >= level.requiredMastery) {
          state.unlockedLevels.push(level.id);
          announceUnlock(level);
        }
      }
    }
  }

  function announceUnlock(level) {
    if (state.soundsEnabled) {
      speakWord(`New level unlocked: ${level.name}!`);
    }

    // Show unlock notification
    const notification = document.createElement('div');
    notification.className = 'milestone-notification';
    notification.innerHTML = `<span class="milestone-icon">${level.icon}</span><span>Unlocked: ${level.name}!</span>`;
    document.body.appendChild(notification);
    setTimeout(() => notification.classList.add('show'), 10);
    setTimeout(() => {
      notification.classList.remove('show');
      setTimeout(() => notification.remove(), 500);
    }, 3000);

    launchFireworks();
  }

  function isLevelUnlocked(levelId) {
    if (state.difficultyLock > 0) {
      const levelIndex = learningPath.findIndex(l => l.id === levelId);
      return levelIndex < state.difficultyLock;
    }
    return state.unlockedLevels.includes(levelId);
  }

  // Parent Dashboard Functions
  function openParentDashboard() {
    if (!els.parentDashboardModal) return;

    updateDashboardStats();
    renderWeeklyChart();
    renderMasteryBars();
    renderLearningPath();
    renderWordHistory('all');

    els.parentDashboardModal.showModal();
  }

  function updateDashboardStats() {
    if (els.dashTotalDays) els.dashTotalDays.textContent = state.totalPracticeDays;
    if (els.dashTotalWords) els.dashTotalWords.textContent = state.totalWordsAllTime;
    if (els.dashBestStreak) els.dashBestStreak.textContent = state.allTimeBestStreak;

    // Calculate total time
    const sessionMinutes = Math.floor((Date.now() - state.sessionStartTime) / 60000);
    const totalMins = state.totalTimeMinutes + sessionMinutes;
    if (els.dashTotalTime) {
      els.dashTotalTime.textContent = totalMins >= 60
        ? `${Math.floor(totalMins / 60)}h ${totalMins % 60}m`
        : `${totalMins}m`;
    }
  }

  function renderWeeklyChart() {
    if (!els.weeklyChart) return;

    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const today = new Date();
    let maxWords = 1;
    const weekData = [];

    // Get last 7 days data
    for (let i = 6; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      const dateStr = date.toISOString().split('T')[0];
      const words = state.weeklyActivity[dateStr] || 0;
      weekData.push({ day: days[date.getDay()], words, isToday: i === 0 });
      if (words > maxWords) maxWords = words;
    }

    els.weeklyChart.innerHTML = weekData.map(d => `
      <div class="chart-day">
        <div class="chart-bar" style="height: ${(d.words / maxWords) * 80}px"></div>
        <span class="chart-label">${d.day}</span>
      </div>
    `).join('');
  }

  function renderMasteryBars() {
    if (!els.masteryBars) return;

    const types = ['cvc', 'ccvc', 'cvcc', 'digraphs', 'silentE', 'longVowels'];
    const labels = { cvc: 'CVC', ccvc: 'CCVC', cvcc: 'CVCC', digraphs: 'Digraphs', silentE: 'Silent E', longVowels: 'Long Vowels' };

    els.masteryBars.innerHTML = types.map(type => {
      const percent = getMasteryPercentage(type);
      return `
        <div class="mastery-bar-item">
          <span class="mastery-bar-label">${labels[type]}</span>
          <div class="mastery-bar-track">
            <div class="mastery-bar-fill" style="width: ${percent}%"></div>
          </div>
          <span class="mastery-bar-percent">${percent}%</span>
        </div>
      `;
    }).join('');
  }

  function renderLearningPath() {
    if (!els.learningPathList) return;

    els.learningPathList.innerHTML = learningPath.map((level, index) => {
      const mastery = getMasteryPercentage(level.id);
      const isUnlocked = isLevelUnlocked(level.id);
      const isCurrent = state.wordType === level.id;
      const isComplete = mastery >= 80;

      let status, statusClass;
      if (isComplete) {
        status = '✓ Mastered';
        statusClass = 'complete';
      } else if (isUnlocked) {
        status = `${mastery}% complete`;
        statusClass = '';
      } else {
        status = `🔒 Unlock at ${level.requiredMastery}%`;
        statusClass = 'locked';
      }

      const itemClass = `path-item ${isUnlocked ? 'unlocked' : 'locked'} ${isCurrent ? 'current' : ''}`;

      return `
        <div class="${itemClass}" data-level="${level.id}">
          <span class="path-icon">${level.icon}</span>
          <div class="path-info">
            <span class="path-name">${level.name}</span>
            <span class="path-status ${statusClass}">${status}</span>
          </div>
        </div>
      `;
    }).join('');
  }

  function renderWordHistory(filter) {
    if (!els.wordHistoryList) return;

    let words = [...state.wordHistory].reverse();

    if (filter === 'difficult') {
      words = words.filter(w => state.difficultWords.has(w.word));
    } else if (filter === 'mastered') {
      words = words.filter(w => w.attempts >= 5);
    }

    if (words.length === 0) {
      els.wordHistoryList.innerHTML = '<p style="text-align: center; color: #666; padding: 2rem;">No words yet. Start practicing!</p>';
      return;
    }

    els.wordHistoryList.innerHTML = words.slice(0, 50).map(w => {
      const isDifficult = state.difficultWords.has(w.word);
      const isMastered = w.attempts >= 5;
      const status = isDifficult ? '⚠️' : (isMastered ? '⭐' : '📝');

      return `
        <div class="history-item">
          <span class="history-word">${w.word}</span>
          <div class="history-meta">
            <span class="history-type">${w.type.toUpperCase()}</span>
            <span class="history-status">${status}</span>
          </div>
        </div>
      `;
    }).join('');
  }

  function initDashboardTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.dashboard-tab-content');

    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const tabId = btn.dataset.tab;

        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        tabContents.forEach(content => {
          content.hidden = content.id !== `tab-${tabId}`;
        });
      });
    });

    // Filter buttons
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderWordHistory(btn.dataset.filter);
      });
    });
  }

  function updateWordTypeSelector() {
    // Disable locked word types in selector
    const options = els.wordTypeSelector.querySelectorAll('option');
    options.forEach(opt => {
      const isUnlocked = isLevelUnlocked(opt.value);
      opt.disabled = !isUnlocked;
      if (!isUnlocked) {
        opt.textContent = opt.textContent.replace(' 🔒', '') + ' 🔒';
      }
    });
  }

  // ============================================================
  // XP & LEVEL SYSTEM
  // ============================================================
  function getLevelInfo(xp) {
    let currentLevel = XP_LEVELS[0];
    for (const lvl of XP_LEVELS) {
      if (xp >= lvl.xpRequired) currentLevel = lvl;
      else break;
    }
    const nextLevel = XP_LEVELS.find(l => l.level === currentLevel.level + 1);
    const xpIntoLevel = xp - currentLevel.xpRequired;
    const xpForLevel = nextLevel ? nextLevel.xpRequired - currentLevel.xpRequired : 999;
    return { currentLevel, nextLevel, xpIntoLevel, xpForLevel };
  }

  function updateXPBar() {
    const { currentLevel, xpIntoLevel, xpForLevel, nextLevel } = getLevelInfo(state.xp);
    const pct = Math.min((xpIntoLevel / xpForLevel) * 100, 100);
    if (els.xpBarFill) els.xpBarFill.style.width = `${pct}%`;
    if (els.xpLabel) els.xpLabel.textContent = nextLevel ? `${state.xp} / ${nextLevel.xpRequired} XP` : `${state.xp} XP (Max!)`;
    if (els.xpLevelBadge) els.xpLevelBadge.textContent = `Lv ${currentLevel.level}`;
    if (els.levelName) els.levelName.textContent = currentLevel.name;
  }

  function awardXP(amount, label) {
    if (amount <= 0) return;
    const oldLevel = getLevelInfo(state.xp).currentLevel.level;
    state.xp += amount;
    const newInfo = getLevelInfo(state.xp);
    updateXPBar();
    showXPPop(`+${amount} XP`);
    if (newInfo.currentLevel.level > oldLevel) {
      showLevelUp(newInfo.currentLevel.name);
    }
    savePreferences();
  }

  function showXPPop(text) {
    if (!els.xpPop) return;
    els.xpPop.textContent = text;
    els.xpPop.classList.add('show');
    setTimeout(() => els.xpPop.classList.remove('show'), 1200);
  }

  function showLevelUp(levelName) {
    if (!els.levelUpModal) return;
    els.luLevelName.textContent = levelName;
    els.levelUpModal.hidden = false;
    launchFireworks();
    if (state.soundsEnabled) speakWord(`Level up! You are now a ${levelName}!`);
  }

  // ============================================================
  // HEARTS SYSTEM
  // ============================================================
  function updateHeartsUI() {
    if (!els.heartsDisplay) return;
    const hearts = els.heartsDisplay.querySelectorAll('.heart-icon');
    hearts.forEach((h, i) => {
      const heartNum = i + 1;
      if (heartNum <= state.hearts) {
        h.classList.add('active');
        h.textContent = '❤️';
      } else {
        h.classList.remove('active');
        h.textContent = '🖤';
      }
    });
  }

  function loseHeart(msg) {
    if (state.hearts > 0) state.hearts--;
    updateHeartsUI();
    showHeartLost(msg);
    // Bounce mascot sadly
    setMascotState('sad');
  }

  function gainHeart() {
    if (state.hearts < state.maxHearts) {
      state.hearts++;
      updateHeartsUI();
    }
  }

  function showHeartLost(msg) {
    if (!els.heartLostBanner) return;
    if (els.heartLostText) els.heartLostText.textContent = msg || 'Oops! –1 Heart';
    els.heartLostBanner.hidden = false;
    setTimeout(() => { els.heartLostBanner.hidden = true; }, 2000);
  }

  // Regen 1 heart every 20 minutes (up to max)
  function tickHeartRegen() {
    const now = Date.now();
    const elapsed = now - state.lastHeartRegenTime;
    const interval = 20 * 60 * 1000; // 20 min
    if (state.hearts < state.maxHearts && elapsed >= interval) {
      gainHeart();
      state.lastHeartRegenTime = now;
      savePreferences();
    }
  }
  setInterval(tickHeartRegen, 60000); // check every minute

  // ============================================================
  // MASCOT
  // ============================================================
  const mascotMessages = {
    happy: ["Great job! 🎉", "Brilliant! ⭐", "You're amazing! 🌟", "Super blending! 🦜", "Fantastic! 🎊", "Keep it up! 💪"],
    encouraging: ["Nearly there! 💛", "Try again! 🔄", "You can do it! 💪", "Don't give up! 🌈", "Almost! Keep going! ✨"],
    excited: ["WOW! 🎆", "INCREDIBLE! 🎇", "PERFECT! 🏆", "Streak! 🔥", "Amazing phonics! ⚡"],
    sad: ["Oops! Try again 💙", "Hmm, let's try again 🤔", "Nearly! 💛"],
    greeting: ["Hi! Ready to blend? 🦜", "Let's learn phonics! 📚", "Press Spin to start! 🎡"]
  };

  function setMascotState(mood) {
    if (!els.mascotChar) return;
    els.mascotChar.dataset.mood = mood;
    const msgs = mascotMessages[mood] || mascotMessages.happy;
    const msg = msgs[Math.floor(Math.random() * msgs.length)];
    showMascotSpeech(msg);
  }

  function showMascotSpeech(text) {
    if (!els.mascotSpeech) return;
    els.mascotSpeech.textContent = text;
    els.mascotSpeech.classList.add('visible');
    clearTimeout(els.mascotSpeech._hideTimer);
    els.mascotSpeech._hideTimer = setTimeout(() => {
      els.mascotSpeech.classList.remove('visible');
    }, 2500);
  }

  // ============================================================
  // ANSWER FEEDBACK
  // ============================================================
  function showFeedback(correct, correctText, container) {
    const fb = container === 'lesson' ? els.lessonFeedback : els.answerFeedback;
    const icon = container === 'lesson' ? els.lessonFeedbackIcon : els.feedbackIcon;
    const text = container === 'lesson' ? els.lessonFeedbackText : els.feedbackText;
    if (!fb) return;
    fb.hidden = false;
    fb.className = `answer-feedback ${correct ? 'correct' : 'wrong'}`;
    icon.textContent = correct ? '✅' : '❌';
    text.textContent = correctText || (correct ? 'Correct! Great job!' : 'Not quite – let\'s keep practising!');
    clearTimeout(fb._hideTimer);
    fb._hideTimer = setTimeout(() => { fb.hidden = true; }, 1800);
  }

  // ============================================================
  // EXERCISE MODE SYSTEM
  // ============================================================
  function setExerciseMode(mode) {
    state.exerciseMode = mode;
    // Update exercise mode buttons
    document.querySelectorAll('.ex-mode-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.exercise === mode);
    });
    // Hide/show exercise UIs
    const allExUIs = ['exerciseHearChoose', 'exerciseSegment', 'exerciseMissing', 'exerciseFirstSound'];
    allExUIs.forEach(id => {
      const el = document.querySelector(`#${id}`);
      if (el) el.hidden = true;
    });
    if (els.blendActionButtons) els.blendActionButtons.hidden = mode !== 'blend';
    if (els.selfAssessButtons) els.selfAssessButtons.hidden = true;
    // Show the right UI when not in blend mode
    if (mode === 'hear_choose' && els.exerciseHearChoose) els.exerciseHearChoose.hidden = false;
    if (mode === 'segment' && els.exerciseSegment) els.exerciseSegment.hidden = false;
    if (mode === 'missing' && els.exerciseMissing) els.exerciseMissing.hidden = false;
    if (mode === 'first_sound' && els.exerciseFirstSound) els.exerciseFirstSound.hidden = false;

    // Reset the word display
    showPlaceholder();
    if (mode !== 'blend') setupNewExercise();
  }

  function setupNewExercise() {
    const mode = state.exerciseMode;
    if (mode === 'blend') { spin(); return; }

    // Get a smart word (spaced repetition: prefer difficult words)
    const word = getSmartWord();
    state.currentWord = word;

    if (mode === 'hear_choose') setupHearChoose(word);
    else if (mode === 'segment') setupSegment(word);
    else if (mode === 'missing') setupMissing(word);
    else if (mode === 'first_sound') setupFirstSound(word);
  }

  // Spaced repetition: pull difficult words more often
  function getSmartWord() {
    const all = getAvailableWords();
    const difficult = all.filter(w => state.difficultWords.has(w.toLowerCase()));
    const unused = all.filter(w => !state.usedWords.has(w));

    // 40% chance: pick from difficult words if available
    if (difficult.length > 0 && Math.random() < 0.4) {
      return difficult[Math.floor(Math.random() * difficult.length)];
    }
    // Otherwise pick unused
    if (unused.length > 0) return unused[Math.floor(Math.random() * unused.length)];
    // Reset if all used
    state.usedWords.clear();
    return all[Math.floor(Math.random() * all.length)];
  }

  // ============================================================
  // EXERCISE: HEAR & CHOOSE
  // ============================================================
  function setupHearChoose(word) {
    if (!els.hearChooseOptions) return;
    // Get 3 wrong options from same category
    const allWords = getAvailableWords().filter(w => w.toLowerCase() !== word.toLowerCase());
    const shuffled = allWords.sort(() => Math.random() - 0.5).slice(0, 3);
    const options = [...shuffled, word].sort(() => Math.random() - 0.5);

    els.hearChooseOptions.innerHTML = '';
    options.forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'choice-btn';
      btn.textContent = opt.toLowerCase();
      btn.addEventListener('click', () => handleHearChooseAnswer(btn, opt, word));
      els.hearChooseOptions.appendChild(btn);
    });

    // Show word in display as a question mark
    if (els.wordBox) els.wordBox.innerHTML = '<div class="word-placeholder"><span class="placeholder-icon">👂</span><span>Listen and choose!</span></div>';

    // Auto-play the word
    setTimeout(() => speakWord(word), 400);
    setMascotState('greeting');
  }

  function handleHearChooseAnswer(btn, chosen, correct) {
    const isCorrect = chosen.toLowerCase() === correct.toLowerCase();
    // Disable all buttons
    document.querySelectorAll('#hearChooseOptions .choice-btn').forEach(b => {
      b.disabled = true;
      if (b.textContent === correct.toLowerCase()) b.classList.add('correct-answer');
    });
    btn.classList.add(isCorrect ? 'correct-answer' : 'wrong-answer');

    if (isCorrect) {
      awardXP(XP_REWARDS.hear_choose_correct);
      updateScore(20);
      updateStreak();
      showFeedback(true, `✅ "${correct}" – well done!`);
      setMascotState('happy');
      if (state.soundsEnabled) speakWord(correct);
      trackWordCompletion(correct);
    } else {
      loseHeart('Wrong! –1 Heart');
      state.difficultWords.add(correct.toLowerCase());
      showFeedback(false, `❌ It was "${correct}"`);
      setMascotState('encouraging');
      if (state.soundsEnabled) speakWord(correct);
    }

    setTimeout(() => setupHearChoose(getSmartWord()), 2200);
  }

  // ============================================================
  // EXERCISE: SEGMENT IT
  // ============================================================
  function setupSegment(word) {
    if (!els.segmentBoxes) return;
    const units = parseWord(word);
    state.segmentUnits = units;
    state.segmentTapped = [];

    // Show word at top
    if (els.wordBox) {
      els.wordBox.innerHTML = '';
      units.forEach((unit, idx) => {
        const span = document.createElement('span');
        span.className = 'letter';
        span.textContent = unit.text;
        if (unit.isVowel) span.classList.add('vowel');
        if (unit.isDigraph) span.classList.add('digraph');
        if (unit.isSilent) span.classList.add('silent');
        if (unit.isLongVowel) span.classList.add('long-vowel');
        if (unit.isDiphthong) span.classList.add('diphthong');
        span.style.animationDelay = `${idx * 0.1}s`;
        els.wordBox.appendChild(span);
      });
    }

    // Build tappable phoneme boxes
    els.segmentBoxes.innerHTML = '';
    units.forEach((unit, idx) => {
      const box = document.createElement('button');
      box.className = 'segment-box';
      box.dataset.idx = idx;
      box.textContent = unit.text;
      if (unit.isSilent) {
        box.classList.add('silent-box');
        box.title = 'Silent letter';
      }
      box.addEventListener('click', () => handleSegmentTap(idx, unit, box));
      els.segmentBoxes.appendChild(box);
    });

    if (els.segmentCheckBtn) {
      els.segmentCheckBtn.disabled = true;
      els.segmentCheckBtn.onclick = handleSegmentCheck;
    }
    setMascotState('greeting');
    showMascotSpeech('Tap each sound in order! ✂️');
  }

  function handleSegmentTap(idx, unit, box) {
    if (state.segmentTapped.includes(idx)) return;
    state.segmentTapped.push(idx);
    box.classList.add('tapped');

    // Play the phoneme sound
    let sound = unit.sound || unit.text.toLowerCase();
    if (!unit.sound) {
      if (unit.isLongVowel) sound = `long_${unit.text.toLowerCase()}`;
      else if (unit.isSoft) sound = `soft_${unit.text.toLowerCase()}`;
    }
    if (!unit.isSilent) playSound(sound).catch(() => {});

    // Enable check when all non-silent tapped or all tapped
    const totalBoxes = state.segmentUnits.length;
    if (state.segmentTapped.length >= totalBoxes) {
      if (els.segmentCheckBtn) els.segmentCheckBtn.disabled = false;
    }
  }

  function handleSegmentCheck() {
    const word = state.currentWord;
    const units = state.segmentUnits;
    // Check that they tapped all units in some order
    const allTapped = state.segmentTapped.length >= units.length;

    if (allTapped) {
      awardXP(XP_REWARDS.segment_correct);
      updateScore(25);
      updateStreak();
      showFeedback(true, `✅ "${word}" has ${units.length} sound${units.length !== 1 ? 's' : ''}!`);
      setMascotState('excited');
      if (state.soundsEnabled) speakWord(word);
      trackWordCompletion(word);
      setTimeout(() => setupSegment(getSmartWord()), 2200);
    } else {
      loseHeart('Tap all the sounds first!');
      showFeedback(false, 'Tap each phoneme box first!');
      setMascotState('encouraging');
    }
  }

  // ============================================================
  // EXERCISE: MISSING SOUND
  // ============================================================
  function setupMissing(word) {
    if (!els.missingWordDisplay || !els.missingOptions) return;
    const units = parseWord(word);
    if (units.length < 2) { setupMissing(getSmartWord()); return; }

    // Pick a non-silent unit to blank out (prefer vowel for variety)
    const eligible = units.map((u, i) => ({ u, i })).filter(({ u }) => !u.isSilent);
    if (eligible.length === 0) { setupMissing(getSmartWord()); return; }
    const pick = eligible[Math.floor(Math.random() * eligible.length)];
    const blankIdx = pick.i;
    const correctUnit = pick.u;

    // Show word with blank
    els.missingWordDisplay.innerHTML = '';
    units.forEach((unit, idx) => {
      const span = document.createElement('span');
      if (idx === blankIdx) {
        span.className = 'missing-blank';
        span.textContent = '___';
      } else {
        span.className = 'letter';
        span.textContent = unit.text;
        if (unit.isVowel) span.classList.add('vowel');
        if (unit.isDigraph) span.classList.add('digraph');
        if (unit.isSilent) span.classList.add('silent');
        if (unit.isLongVowel) span.classList.add('long-vowel');
      }
      els.missingWordDisplay.appendChild(span);
    });

    // Generate distractors (other sounds from the word + random phonemes)
    const correctText = correctUnit.text.toLowerCase();
    const distractors = generateDistractors(correctText, 3);
    const allChoices = [correctText, ...distractors].sort(() => Math.random() - 0.5);

    els.missingOptions.innerHTML = '';
    allChoices.forEach(choice => {
      const btn = document.createElement('button');
      btn.className = 'choice-btn phoneme-btn';
      btn.textContent = choice;
      btn.addEventListener('click', () => handleMissingAnswer(btn, choice, correctText, word));
      els.missingOptions.appendChild(btn);
    });

    if (els.wordBox) els.wordBox.innerHTML = '<div class="word-placeholder"><span class="placeholder-icon">❓</span><span>Fill in the missing sound!</span></div>';
    setMascotState('greeting');
    showMascotSpeech('Which sound is missing? ❓');
  }

  function generateDistractors(correct, count) {
    const commonSounds = ['a', 'e', 'i', 'o', 'u', 'sh', 'ch', 'th', 'ng', 'ar', 'er', 'ow', 'oy', 'ai', 'ee', 'oo'];
    const distract = commonSounds.filter(s => s !== correct).sort(() => Math.random() - 0.5);
    return distract.slice(0, count);
  }

  function handleMissingAnswer(btn, chosen, correct, word) {
    const isCorrect = chosen === correct;
    document.querySelectorAll('#missingOptions .choice-btn').forEach(b => {
      b.disabled = true;
      if (b.textContent === correct) b.classList.add('correct-answer');
    });
    btn.classList.add(isCorrect ? 'correct-answer' : 'wrong-answer');

    if (isCorrect) {
      awardXP(XP_REWARDS.missing_correct);
      updateScore(20);
      updateStreak();
      showFeedback(true, `✅ "${correct}" – great phonics!`);
      setMascotState('happy');
      if (state.soundsEnabled) speakWord(word);
      trackWordCompletion(word);
    } else {
      loseHeart('Missing sound wrong! –1 Heart');
      state.difficultWords.add(word.toLowerCase());
      showFeedback(false, `❌ It was "${correct}" – "${word}"`);
      setMascotState('encouraging');
    }

    setTimeout(() => setupMissing(getSmartWord()), 2200);
  }

  // ============================================================
  // EXERCISE: FIRST SOUND
  // ============================================================
  function setupFirstSound(word) {
    if (!els.firstSoundWord || !els.firstSoundOptions) return;
    const units = parseWord(word);
    const firstUnit = units.find(u => !u.isSilent);
    if (!firstUnit) { setupFirstSound(getSmartWord()); return; }
    const correctSound = firstUnit.text.toLowerCase();

    // Display word
    if (els.firstSoundWord) {
      els.firstSoundWord.innerHTML = '';
      units.forEach((unit, idx) => {
        const span = document.createElement('span');
        span.className = 'letter' + (idx === 0 ? ' first-letter-highlight' : '');
        span.textContent = unit.text;
        if (unit.isVowel) span.classList.add('vowel');
        if (unit.isDigraph) span.classList.add('digraph');
        if (unit.isSilent) span.classList.add('silent');
        if (unit.isLongVowel) span.classList.add('long-vowel');
        els.firstSoundWord.appendChild(span);
      });
    }

    // Auto-play
    if (state.soundsEnabled) setTimeout(() => speakWord(word), 300);

    // Play first sound button
    if (els.playFirstSoundBtn) {
      els.playFirstSoundBtn.onclick = () => speakWord(word);
    }

    // Build choices
    const distractors = generateDistractors(correctSound, 3);
    const allChoices = [correctSound, ...distractors].sort(() => Math.random() - 0.5);

    els.firstSoundOptions.innerHTML = '';
    allChoices.forEach(choice => {
      const btn = document.createElement('button');
      btn.className = 'choice-btn phoneme-btn';
      btn.textContent = choice;
      btn.addEventListener('click', () => handleFirstSoundAnswer(btn, choice, correctSound, word));
      els.firstSoundOptions.appendChild(btn);
    });

    if (els.wordBox) els.wordBox.innerHTML = '<div class="word-placeholder"><span class="placeholder-icon">🔤</span><span>What\'s the first sound?</span></div>';
    setMascotState('greeting');
  }

  function handleFirstSoundAnswer(btn, chosen, correct, word) {
    const isCorrect = chosen === correct;
    document.querySelectorAll('#firstSoundOptions .choice-btn').forEach(b => {
      b.disabled = true;
      if (b.textContent === correct) b.classList.add('correct-answer');
    });
    btn.classList.add(isCorrect ? 'correct-answer' : 'wrong-answer');

    if (isCorrect) {
      awardXP(XP_REWARDS.first_sound_correct);
      updateScore(20);
      updateStreak();
      showFeedback(true, `✅ "${correct}" – the first sound in "${word}"`);
      setMascotState('happy');
      if (state.soundsEnabled) speakWord(word);
      trackWordCompletion(word);
    } else {
      loseHeart('Wrong first sound! –1 Heart');
      state.difficultWords.add(word.toLowerCase());
      showFeedback(false, `❌ "${correct}" is the first sound in "${word}"`);
      setMascotState('encouraging');
    }

    setTimeout(() => setupFirstSound(getSmartWord()), 2200);
  }

  // ============================================================
  // LESSON MODE
  // ============================================================
  const LESSON_SIZE = 8;
  const LESSON_EXERCISE_TYPES = ['blend', 'hear_choose', 'segment', 'missing', 'first_sound'];

  function buildLesson(wordType) {
    const words = Object.values(wordGroups[wordType] || wordGroups.cvc).flat();
    if (words.length === 0) return [];
    const shuffled = [...words].sort(() => Math.random() - 0.5).slice(0, LESSON_SIZE);
    // Assign exercise types cyclically
    return shuffled.map((word, i) => ({
      word,
      type: LESSON_EXERCISE_TYPES[i % LESSON_EXERCISE_TYPES.length]
    }));
  }

  function renderLessonChooser() {
    if (!els.lessonList) return;
    els.lessonList.innerHTML = learningPath.map(level => {
      const isUnlocked = isLevelUnlocked(level.id);
      const stars = state.lessonStars[level.id] || 0;
      const starsHTML = '⭐'.repeat(stars) + '☆'.repeat(3 - stars);
      return `
        <div class="lesson-card ${isUnlocked ? '' : 'locked'}" data-level="${level.id}">
          <div class="lesson-card-icon">${level.icon}</div>
          <div class="lesson-card-info">
            <div class="lesson-card-name">${level.name}</div>
            <div class="lesson-card-stars" title="${stars}/3 stars">${starsHTML}</div>
            <div class="lesson-card-desc">${wordTypeDescriptions[level.id] || ''}</div>
          </div>
          ${isUnlocked ? '' : '<div class="lesson-lock">🔒</div>'}
        </div>
      `;
    }).join('');

    // Add click handlers
    els.lessonList.querySelectorAll('.lesson-card:not(.locked)').forEach(card => {
      card.addEventListener('click', () => startLesson(card.dataset.level));
    });
  }

  function startLesson(wordType) {
    state.inLesson = true;
    state.lessonWordType = wordType;
    state.lessonExercises = buildLesson(wordType);
    state.lessonCurrentIndex = 0;
    state.lessonMistakes = 0;
    state.lessonCorrect = 0;
    state.lessonXPEarned = 0;

    // Save original word type and restore after lesson
    state._prelessonWordType = state.wordType;
    state.wordType = wordType;

    // Show lesson in progress
    if (els.lessonChooser) els.lessonChooser.hidden = true;
    if (els.lessonInProgress) els.lessonInProgress.hidden = false;

    renderLessonProgressDots();
    renderLessonExercise();
  }

  function renderLessonProgressDots() {
    if (!els.lessonProgressDots) return;
    els.lessonProgressDots.innerHTML = state.lessonExercises.map((_, i) => {
      let cls = 'dot';
      if (i < state.lessonCurrentIndex) cls += ' done';
      else if (i === state.lessonCurrentIndex) cls += ' current';
      return `<span class="${cls}"></span>`;
    }).join('');

    if (els.lessonHearts) {
      els.lessonHearts.innerHTML = '';
      for (let i = 0; i < state.maxHearts; i++) {
        const h = document.createElement('span');
        h.textContent = i < state.hearts ? '❤️' : '🖤';
        els.lessonHearts.appendChild(h);
      }
    }
  }

  async function renderLessonExercise() {
    if (state.lessonCurrentIndex >= state.lessonExercises.length) {
      finishLesson(); return;
    }
    const exercise = state.lessonExercises[state.lessonCurrentIndex];
    const { word, type } = exercise;
    state.currentWord = word;

    renderLessonProgressDots();

    // Label
    const labels = {
      blend: '🎵 Blend It',
      hear_choose: '👂 Hear & Choose',
      segment: '✂️ Segment It',
      missing: '❓ Missing Sound',
      first_sound: '🔤 First Sound'
    };
    if (els.lessonExLabel) els.lessonExLabel.textContent = labels[type] || type;

    // Render exercise in lessonWordBox + lessonExerciseUI
    if (els.lessonWordBox) els.lessonWordBox.innerHTML = '';
    if (els.lessonExerciseUI) els.lessonExerciseUI.innerHTML = '';

    if (type === 'blend') {
      await renderLessonBlend(word);
    } else if (type === 'hear_choose') {
      renderLessonHearChoose(word);
    } else if (type === 'segment') {
      renderLessonSegment(word);
    } else if (type === 'missing') {
      renderLessonMissing(word);
    } else if (type === 'first_sound') {
      renderLessonFirstSound(word);
    }
  }

  async function renderLessonBlend(word) {
    if (!els.lessonWordBox || !els.lessonExerciseUI) return;
    const units = parseWord(word);

    units.forEach((unit, idx) => {
      const span = document.createElement('span');
      span.textContent = unit.text;
      span.className = 'letter';
      if (unit.isVowel) span.classList.add('vowel');
      if (unit.isDigraph) span.classList.add('digraph');
      if (unit.isSilent) span.classList.add('silent');
      if (unit.isLongVowel) span.classList.add('long-vowel');
      if (unit.isDiphthong) span.classList.add('diphthong');
      span.style.animationDelay = `${idx * 0.3}s`;
      els.lessonWordBox.appendChild(span);
    });

    for (const unit of units) {
      await delay(350);
      if (unit.isSilent) continue;
      let sound = unit.sound || unit.text.toLowerCase();
      if (!unit.sound) {
        if (unit.isLongVowel) sound = `long_${sound}`;
        else if (unit.isSoft) sound = `soft_${sound}`;
      }
      await playSound(sound);
    }

    if (state.soundsEnabled) await speakWord(word);

    // Show self-assessment buttons
    const assessDiv = document.createElement('div');
    assessDiv.className = 'lesson-self-assess';
    assessDiv.innerHTML = `
      <p class="assess-prompt">Did you blend it?</p>
      <button class="assess-yes lesson-assess-yes">✅ Yes, I got it!</button>
      <button class="assess-no lesson-assess-no">❌ Not quite</button>
    `;
    els.lessonExerciseUI.appendChild(assessDiv);

    assessDiv.querySelector('.lesson-assess-yes').addEventListener('click', () => {
      awardXP(XP_REWARDS.blend_correct);
      state.lessonCorrect++;
      state.lessonXPEarned += XP_REWARDS.blend_correct;
      showLessonFeedback(true, `✅ "${word}" – brilliant blending!`);
      advanceLessonExercise();
    });
    assessDiv.querySelector('.lesson-assess-no').addEventListener('click', () => {
      awardXP(XP_REWARDS.blend_wrong);
      state.lessonMistakes++;
      state.lessonXPEarned += XP_REWARDS.blend_wrong;
      loseHeart('Keep practising! –1 Heart');
      showLessonFeedback(false, `Try again – "${word}"`);
      if (state.soundsEnabled) speakWord(word);
      advanceLessonExercise();
    });
  }

  function renderLessonHearChoose(word) {
    const allWords = Object.values(wordGroups[state.lessonWordType] || wordGroups.cvc).flat();
    const distractors = allWords.filter(w => w.toLowerCase() !== word.toLowerCase())
      .sort(() => Math.random() - 0.5).slice(0, 3);
    const choices = [...distractors, word].sort(() => Math.random() - 0.5);

    if (els.lessonWordBox) els.lessonWordBox.innerHTML = '<div class="word-placeholder"><span class="placeholder-icon">👂</span><span>Hear &amp; choose!</span></div>';

    const ui = document.createElement('div');
    ui.innerHTML = `
      <button class="play-word-btn lesson-play-btn">🔊 Hear the word</button>
      <div class="choice-grid lesson-choices"></div>
    `;
    ui.querySelector('.lesson-play-btn').addEventListener('click', () => speakWord(word));
    const grid = ui.querySelector('.lesson-choices');
    choices.forEach(ch => {
      const btn = document.createElement('button');
      btn.className = 'choice-btn';
      btn.textContent = ch.toLowerCase();
      btn.addEventListener('click', () => {
        grid.querySelectorAll('.choice-btn').forEach(b => {
          b.disabled = true;
          if (b.textContent === word.toLowerCase()) b.classList.add('correct-answer');
        });
        const correct = ch.toLowerCase() === word.toLowerCase();
        btn.classList.add(correct ? 'correct-answer' : 'wrong-answer');
        if (correct) {
          awardXP(XP_REWARDS.hear_choose_correct);
          state.lessonCorrect++;
          state.lessonXPEarned += XP_REWARDS.hear_choose_correct;
          showLessonFeedback(true, `✅ "${word}"`);
        } else {
          loseHeart('Wrong word! –1 Heart');
          state.lessonMistakes++;
          showLessonFeedback(false, `❌ It was "${word}"`);
          if (state.soundsEnabled) speakWord(word);
        }
        setTimeout(() => advanceLessonExercise(), 1800);
      });
      grid.appendChild(btn);
    });
    els.lessonExerciseUI.appendChild(ui);
    setTimeout(() => speakWord(word), 400);
  }

  function renderLessonSegment(word) {
    const units = parseWord(word);

    // Show word
    if (els.lessonWordBox) {
      units.forEach((unit, idx) => {
        const span = document.createElement('span');
        span.className = 'letter';
        span.textContent = unit.text;
        if (unit.isVowel) span.classList.add('vowel');
        if (unit.isDigraph) span.classList.add('digraph');
        if (unit.isSilent) span.classList.add('silent');
        if (unit.isLongVowel) span.classList.add('long-vowel');
        span.style.animationDelay = `${idx * 0.1}s`;
        els.lessonWordBox.appendChild(span);
      });
    }

    const tapped = [];
    const ui = document.createElement('div');
    ui.innerHTML = '<p class="exercise-prompt">Tap each sound:</p><div class="segment-boxes lesson-seg-boxes"></div><button class="check-answer-btn" disabled>✅ Check!</button>';
    const boxes = ui.querySelector('.lesson-seg-boxes');
    const checkBtn = ui.querySelector('.check-answer-btn');

    units.forEach((unit, idx) => {
      const box = document.createElement('button');
      box.className = `segment-box${unit.isSilent ? ' silent-box' : ''}`;
      box.textContent = unit.text;
      box.addEventListener('click', () => {
        if (tapped.includes(idx)) return;
        tapped.push(idx);
        box.classList.add('tapped');
        let sound = unit.sound || unit.text.toLowerCase();
        if (!unit.sound) {
          if (unit.isLongVowel) sound = `long_${sound}`;
          else if (unit.isSoft) sound = `soft_${sound}`;
        }
        if (!unit.isSilent) playSound(sound).catch(() => {});
        if (tapped.length >= units.length) checkBtn.disabled = false;
      });
      boxes.appendChild(box);
    });

    checkBtn.addEventListener('click', () => {
      if (tapped.length >= units.length) {
        awardXP(XP_REWARDS.segment_correct);
        state.lessonCorrect++;
        state.lessonXPEarned += XP_REWARDS.segment_correct;
        showLessonFeedback(true, `✅ "${word}" has ${units.length} sounds!`);
        if (state.soundsEnabled) speakWord(word);
        setTimeout(() => advanceLessonExercise(), 1800);
      }
    });
    els.lessonExerciseUI.appendChild(ui);
  }

  function renderLessonMissing(word) {
    const units = parseWord(word);
    const eligible = units.map((u, i) => ({ u, i })).filter(({ u }) => !u.isSilent);
    if (eligible.length === 0) { advanceLessonExercise(); return; }
    const pick = eligible[Math.floor(Math.random() * eligible.length)];
    const correctText = pick.u.text.toLowerCase();

    if (els.lessonWordBox) {
      const wrap = document.createElement('div');
      wrap.className = 'missing-word-display';
      units.forEach((unit, idx) => {
        const s = document.createElement('span');
        if (idx === pick.i) { s.className = 'missing-blank'; s.textContent = '___'; }
        else {
          s.className = 'letter';
          s.textContent = unit.text;
          if (unit.isVowel) s.classList.add('vowel');
          if (unit.isDigraph) s.classList.add('digraph');
          if (unit.isSilent) s.classList.add('silent');
          if (unit.isLongVowel) s.classList.add('long-vowel');
        }
        wrap.appendChild(s);
      });
      els.lessonWordBox.appendChild(wrap);
    }

    const distractors = generateDistractors(correctText, 3);
    const choices = [correctText, ...distractors].sort(() => Math.random() - 0.5);
    const ui = document.createElement('div');
    ui.className = 'choice-grid phoneme-choices';
    choices.forEach(ch => {
      const btn = document.createElement('button');
      btn.className = 'choice-btn phoneme-btn';
      btn.textContent = ch;
      btn.addEventListener('click', () => {
        ui.querySelectorAll('.choice-btn').forEach(b => {
          b.disabled = true;
          if (b.textContent === correctText) b.classList.add('correct-answer');
        });
        const correct = ch === correctText;
        btn.classList.add(correct ? 'correct-answer' : 'wrong-answer');
        if (correct) {
          awardXP(XP_REWARDS.missing_correct);
          state.lessonCorrect++;
          state.lessonXPEarned += XP_REWARDS.missing_correct;
          showLessonFeedback(true, `✅ "${correctText}" – correct!`);
          if (state.soundsEnabled) speakWord(word);
        } else {
          loseHeart('Missing sound wrong! –1 Heart');
          state.lessonMistakes++;
          showLessonFeedback(false, `❌ It was "${correctText}"`);
        }
        setTimeout(() => advanceLessonExercise(), 1800);
      });
      ui.appendChild(btn);
    });
    els.lessonExerciseUI.appendChild(ui);
  }

  function renderLessonFirstSound(word) {
    const units = parseWord(word);
    const firstUnit = units.find(u => !u.isSilent);
    if (!firstUnit) { advanceLessonExercise(); return; }
    const correctSound = firstUnit.text.toLowerCase();

    // Display word
    if (els.lessonWordBox) {
      units.forEach((unit, idx) => {
        const span = document.createElement('span');
        span.className = 'letter' + (idx === 0 ? ' first-letter-highlight' : '');
        span.textContent = unit.text;
        if (unit.isVowel) span.classList.add('vowel');
        if (unit.isDigraph) span.classList.add('digraph');
        if (unit.isSilent) span.classList.add('silent');
        if (unit.isLongVowel) span.classList.add('long-vowel');
        els.lessonWordBox.appendChild(span);
      });
    }

    const distractors = generateDistractors(correctSound, 3);
    const choices = [correctSound, ...distractors].sort(() => Math.random() - 0.5);
    const ui = document.createElement('div');
    ui.innerHTML = '<button class="play-word-btn lesson-play-btn">🔊 Hear the word</button>';
    ui.querySelector('.lesson-play-btn').addEventListener('click', () => speakWord(word));
    const grid = document.createElement('div');
    grid.className = 'choice-grid phoneme-choices';
    choices.forEach(ch => {
      const btn = document.createElement('button');
      btn.className = 'choice-btn phoneme-btn';
      btn.textContent = ch;
      btn.addEventListener('click', () => {
        grid.querySelectorAll('.choice-btn').forEach(b => {
          b.disabled = true;
          if (b.textContent === correctSound) b.classList.add('correct-answer');
        });
        const correct = ch === correctSound;
        btn.classList.add(correct ? 'correct-answer' : 'wrong-answer');
        if (correct) {
          awardXP(XP_REWARDS.first_sound_correct);
          state.lessonCorrect++;
          state.lessonXPEarned += XP_REWARDS.first_sound_correct;
          showLessonFeedback(true, `✅ "${correctSound}" – first sound in "${word}"`);
          if (state.soundsEnabled) speakWord(word);
        } else {
          loseHeart('Wrong first sound! –1 Heart');
          state.lessonMistakes++;
          showLessonFeedback(false, `❌ "${correctSound}" is the first sound`);
        }
        setTimeout(() => advanceLessonExercise(), 1800);
      });
      grid.appendChild(btn);
    });
    ui.appendChild(grid);
    els.lessonExerciseUI.appendChild(ui);
    setTimeout(() => speakWord(word), 400);
  }

  function showLessonFeedback(correct, text) {
    if (!els.lessonFeedback) return;
    els.lessonFeedback.hidden = false;
    els.lessonFeedback.className = `answer-feedback ${correct ? 'correct' : 'wrong'}`;
    if (els.lessonFeedbackIcon) els.lessonFeedbackIcon.textContent = correct ? '✅' : '❌';
    if (els.lessonFeedbackText) els.lessonFeedbackText.textContent = text;
    clearTimeout(els.lessonFeedback._hideTimer);
    els.lessonFeedback._hideTimer = setTimeout(() => { els.lessonFeedback.hidden = true; }, 1600);
  }

  function advanceLessonExercise() {
    state.lessonCurrentIndex++;
    if (state.lessonCurrentIndex >= state.lessonExercises.length) {
      finishLesson();
    } else {
      renderLessonExercise();
    }
  }

  function finishLesson() {
    state.inLesson = false;
    // Restore word type
    if (state._prelessonWordType) {
      state.wordType = state._prelessonWordType;
    }

    // Calculate stars: 3=0 mistakes, 2=1-2 mistakes, 1=3-4 mistakes, 0=5+ mistakes
    let stars = 3;
    if (state.lessonMistakes >= 5) stars = 0;
    else if (state.lessonMistakes >= 3) stars = 1;
    else if (state.lessonMistakes >= 1) stars = 2;

    // Award bonus XP for lesson completion
    const bonusXP = stars === 3 ? XP_REWARDS.lesson_complete_3star :
                    stars === 2 ? XP_REWARDS.lesson_complete_2star :
                    XP_REWARDS.lesson_complete_1star;
    awardXP(bonusXP);
    state.lessonXPEarned += bonusXP;

    // Save best stars for this level
    const prev = state.lessonStars[state.lessonWordType] || 0;
    if (stars > prev) state.lessonStars[state.lessonWordType] = stars;

    // Update lesson complete modal
    if (els.lcStar1) els.lcStar1.textContent = stars >= 1 ? '⭐' : '☆';
    if (els.lcStar2) els.lcStar2.textContent = stars >= 2 ? '⭐' : '☆';
    if (els.lcStar3) els.lcStar3.textContent = stars >= 3 ? '⭐' : '☆';
    if (els.lcCorrect) els.lcCorrect.textContent = state.lessonCorrect;
    if (els.lcXPEarned) els.lcXPEarned.textContent = `+${state.lessonXPEarned}`;
    if (els.lcHeartsLeft) els.lcHeartsLeft.textContent = state.hearts;
    if (els.lessonCompleteModal) els.lessonCompleteModal.hidden = false;

    launchFireworks();
    if (state.soundsEnabled) {
      const msg = stars === 3 ? 'Perfect lesson! Three stars!' :
                  stars === 2 ? 'Great lesson! Two stars!' : 'Lesson complete! Keep practising!';
      speakWord(msg);
    }
    savePreferences();
  }

  function exitLesson() {
    state.inLesson = false;
    if (state._prelessonWordType) state.wordType = state._prelessonWordType;
    if (els.lessonInProgress) els.lessonInProgress.hidden = true;
    if (els.lessonChooser) els.lessonChooser.hidden = false;
    renderLessonChooser();
  }

  // ============================================================
  // PHONICS GROUPS
  // ============================================================
  function renderPhonicsGroupsGrid() {
    if (!els.phonicsGroupsGrid) return;
    els.phonicsGroupsGrid.innerHTML = phonicsGroups.map(group => `
      <div class="group-card" data-group="${group.id}" style="--group-color: ${group.color}">
        <div class="group-card-icon">${group.icon}</div>
        <div class="group-card-name">${group.name}</div>
        <div class="group-sounds">${group.sounds.map(s => `<span class="sound-chip">${s}</span>`).join('')}</div>
        <div class="group-card-desc">${group.description}</div>
      </div>
    `).join('');

    els.phonicsGroupsGrid.querySelectorAll('.group-card').forEach(card => {
      card.addEventListener('click', () => showGroupDetail(card.dataset.group));
    });
  }

  function showGroupDetail(groupId) {
    const group = phonicsGroups.find(g => g.id === groupId);
    if (!group) return;
    state.currentGroupId = groupId;

    if (els.phonicsGroupsGrid) els.phonicsGroupsGrid.hidden = true;
    if (els.groupDetail) els.groupDetail.hidden = false;

    if (els.groupDetailContent) {
      els.groupDetailContent.innerHTML = `
        <div class="group-header" style="background: ${group.color}20; border-left: 4px solid ${group.color}">
          <span class="group-detail-icon">${group.icon}</span>
          <h3>${group.name} – ${group.description}</h3>
        </div>
        <div class="sounds-detail-grid">
          ${group.sounds.map(sound => `
            <div class="sound-detail-card">
              <div class="sound-letter" style="background:${group.color}">${sound}</div>
              <div class="sound-keyword">${group.keywords[sound] || ''}</div>
              <div class="sound-action">${group.actions[sound] || ''}</div>
              <button class="sound-play-btn" data-sound="${sound}">🔊 Hear it</button>
            </div>
          `).join('')}
        </div>
      `;

      // Play buttons
      els.groupDetailContent.querySelectorAll('.sound-play-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const s = btn.dataset.sound;
          if (s.length <= 2) playSound(s).catch(() => speakWord(s));
          else speakWord(s);
        });
      });
    }
  }

  function hideGroupDetail() {
    if (els.phonicsGroupsGrid) els.phonicsGroupsGrid.hidden = false;
    if (els.groupDetail) els.groupDetail.hidden = true;
  }

  // ============================================================
  // MODE TABS
  // ============================================================
  function switchMode(mode) {
    document.querySelectorAll('.mode-tab').forEach(t => {
      t.classList.toggle('active', t.dataset.mode === mode);
      t.setAttribute('aria-selected', t.dataset.mode === mode);
    });
    const panels = { freeplay: els.panelFreePlay, lesson: els.panelLesson, groups: els.panelGroups };
    Object.entries(panels).forEach(([key, panel]) => {
      if (panel) {
        panel.hidden = key !== mode;
        panel.classList.toggle('active', key === mode);
      }
    });
    if (mode === 'lesson') {
      renderLessonChooser();
    } else if (mode === 'groups') {
      renderPhonicsGroupsGrid();
      if (els.groupDetail) els.groupDetail.hidden = true;
      if (els.phonicsGroupsGrid) els.phonicsGroupsGrid.hidden = false;
    }
  }

  // Override showCompliment to use XP and mascot
  const _originalShowCompliment = showCompliment;

  function showComplimentEnhanced() {
    const compliment = compliments[Math.floor(Math.random() * compliments.length)];
    els.complimentBox.textContent = compliment;
    els.complimentBox.classList.add('show');
    state.celebrationMode ? launchFireworks() : launchConfetti();
    updateStreak();
    updateSessionStats();
    trackMasteredWord(state.currentWord);
    trackWordCompletion(state.currentWord);
    awardXP(XP_REWARDS.blend_correct);
    setMascotState(state.streak >= 5 ? 'excited' : 'happy');
    setTimeout(() => els.complimentBox.classList.remove('show'), 2000);

    // After blend completes, show self-assessment
    if (state.exerciseMode === 'blend' && !state.inLesson) {
      if (els.selfAssessButtons) els.selfAssessButtons.hidden = false;
    }
  }

  // ============================================================
  // Event listeners
  els.spinButton.addEventListener('click', spin);
  els.repeatButton.addEventListener('click', repeat);
  els.hintButton.addEventListener('click', hint);
  els.skipButton.addEventListener('click', skip);

  els.toggleLegend.addEventListener('click', () => {
    const isHidden = els.legendContent.hidden;
    els.legendContent.hidden = !isHidden;
    els.toggleLegend.setAttribute('aria-expanded', isHidden);
    els.toggleLegend.textContent = isHidden ? '📖 Hide Guide' : '📖 Color Guide';
  });

  els.toggleSessionSummary.addEventListener('click', () => {
    const isHidden = els.sessionDetails.hidden;
    els.sessionDetails.hidden = !isHidden;
    els.toggleSessionSummary.setAttribute('aria-expanded', isHidden);
    els.toggleSessionSummary.textContent = isHidden ? '📊 Hide Session' : '📊 Session';
  });

  els.wordTypeSelector.addEventListener('change', () => {
    state.wordType = els.wordTypeSelector.value;
    updateWordTypeDesc();
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
    updateAudioButton();
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
    const isVisible = els.advancedSettings.classList.contains('open');
    els.advancedSettings.classList.toggle('open');
    els.toggleSettingsButton.textContent = isVisible ? '⚙️ Customize' : '⚙️ Hide Settings';
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

  els.resetProgressButton.addEventListener('click', () => {
    if (confirm('Reset all progress? This will clear your score, badges, word history, and daily goals.')) {
      state.badges.clear();
      state.wordHistory = [];
      state.difficultWords.clear();
      state.weeklyActivity = {};
      state.totalWordsAllTime = 0;
      state.totalPracticeDays = 0;
      state.totalTimeMinutes = 0;
      state.allTimeBestStreak = 0;
      state.dailyProgress = 0;
      state.dailyStreakDays = 0;
      state.unlockedLevels = ['cvc'];
      state.xp = 0;
      state.xpLevel = 1;
      state.hearts = 5;
      state.lessonStars = {};
      resetStreak();
      resetGame();
      updateBadges();
      updateDailyGoalUI();
      updateXPBar();
      updateHeartsUI();
      if (els.headerStreakDays) els.headerStreakDays.textContent = '0';
      savePreferences();
      announce('Progress has been reset');
    }
  });

  // Premium feature event listeners
  if (els.parentDashboardButton) {
    els.parentDashboardButton.addEventListener('click', openParentDashboard);
  }

  if (els.closeParentDashboard) {
    els.closeParentDashboard.addEventListener('click', () => {
      els.parentDashboardModal.close();
    });
  }

  if (els.closeCelebration) {
    els.closeCelebration.addEventListener('click', () => {
      els.goalCompleteCelebration.hidden = true;
    });
  }

  if (els.dailyGoalSelect) {
    els.dailyGoalSelect.addEventListener('change', () => {
      state.dailyGoal = parseInt(els.dailyGoalSelect.value);
      updateDailyGoalUI();
      savePreferences();
    });
  }

  if (els.sessionTimeLimit) {
    els.sessionTimeLimit.addEventListener('change', () => {
      state.sessionTimeLimit = parseInt(els.sessionTimeLimit.value);
      savePreferences();
    });
  }

  if (els.difficultyLock) {
    els.difficultyLock.addEventListener('change', () => {
      state.difficultyLock = parseInt(els.difficultyLock.value);
      updateWordTypeSelector();
      savePreferences();
    });
  }

  if (els.requireMastery) {
    els.requireMastery.addEventListener('change', () => {
      state.requireMasteryToUnlock = els.requireMastery.checked;
      savePreferences();
    });
  }

  // Initialize dashboard tabs
  initDashboardTabs();

  // === NEW: Mode tab listeners ===
  document.querySelectorAll('.mode-tab').forEach(tab => {
    tab.addEventListener('click', () => switchMode(tab.dataset.mode));
  });

  // === NEW: Exercise mode button listeners ===
  document.querySelectorAll('.ex-mode-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.dataset.exercise !== state.exerciseMode) {
        setExerciseMode(btn.dataset.exercise);
      }
    });
  });

  // === NEW: Self-assessment buttons ===
  if (els.assessYes) {
    els.assessYes.addEventListener('click', () => {
      if (els.selfAssessButtons) els.selfAssessButtons.hidden = true;
      awardXP(XP_REWARDS.blend_correct);
      setMascotState('excited');
    });
  }
  if (els.assessNo) {
    els.assessNo.addEventListener('click', () => {
      if (els.selfAssessButtons) els.selfAssessButtons.hidden = true;
      loseHeart('Keep practising! –1 Heart');
      state.difficultWords.add(state.currentWord.toLowerCase());
      setMascotState('encouraging');
      savePreferences();
    });
  }

  // === NEW: Hear & Choose play button ===
  if (els.playWordBtn) {
    els.playWordBtn.addEventListener('click', () => {
      if (state.currentWord) speakWord(state.currentWord);
    });
  }

  // === NEW: Segment check button ===
  if (els.segmentCheckBtn) {
    els.segmentCheckBtn.addEventListener('click', handleSegmentCheck);
  }

  // === NEW: Lesson back button ===
  if (els.lessonBackBtn) {
    els.lessonBackBtn.addEventListener('click', () => {
      if (confirm('Exit this lesson? Your progress will be lost.')) exitLesson();
    });
  }

  // === NEW: Lesson complete continue ===
  if (els.lcContinueBtn) {
    els.lcContinueBtn.addEventListener('click', () => {
      if (els.lessonCompleteModal) els.lessonCompleteModal.hidden = true;
      exitLesson();
    });
  }

  // === NEW: Level up close ===
  if (els.luCloseBtn) {
    els.luCloseBtn.addEventListener('click', () => {
      if (els.levelUpModal) els.levelUpModal.hidden = true;
    });
  }

  // === NEW: Group back button ===
  if (els.groupBackBtn) {
    els.groupBackBtn.addEventListener('click', hideGroupDetail);
  }

  // === NEW: Practice group button ===
  if (els.practiceGroupBtn) {
    els.practiceGroupBtn.addEventListener('click', () => {
      const group = phonicsGroups.find(g => g.id === state.currentGroupId);
      if (group && group.wordTypes && group.wordTypes[0]) {
        // Switch to free play with this word type
        switchMode('freeplay');
        state.wordType = group.wordTypes[0];
        if (els.wordTypeSelector) els.wordTypeSelector.value = state.wordType;
        updateWordTypeDesc();
        resetGame();
        showMascotSpeech(`Practising ${group.name} sounds! 🎵`);
      }
    });
  }

  // Patch showCompliment to use enhanced version
  window._showComplimentPatched = true;

  document.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'SELECT' || e.target.tagName === 'INPUT') return;
    const key = e.key.toLowerCase();
    if (key === 's' && !els.spinButton.disabled) spin();
    else if (key === 'r' && !els.repeatButton.disabled) repeat();
    else if (key === 'h' && !els.hintButton.hidden) hint();
  });

  (async () => {
    await initSpeech();
    loadPreferences();
    updateBadges();
    resetGame();
    updateXPBar();
    updateHeartsUI();
    setMascotState('greeting');
    renderLessonChooser();
    renderPhonicsGroupsGrid();
    if (!localStorage.getItem('hasSeenTutorial')) els.tutorialModal.showModal();
  })();
});
