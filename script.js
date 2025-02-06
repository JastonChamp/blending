// Sight Words array (flattened from your provided sets)
const sightWords = [
  'a', 'about', 'above', 'again', 'all',
  'also', 'are', 'be', 'came', 'day',
  'do', 'does', 'for', 'go', 'he',
  'her', 'his', 'how', 'I', 'in',
  'into', 'is', 'it', 'know', 'many',
  'name', 'not', 'now', 'of', 'on',
  'one', 'over', 'said', 'she', 'so',
  'some', 'story', 'the', 'their', 'then',
  'there', 'this', 'to', 'too', 'want',
  'was', 'were', 'what', 'when', 'white'
];

// Bank of CVC words (nouns and verbs)
const cvcNouns = ['cat', 'dog', 'man', 'kid', 'pen', 'bug', 'pig', 'bat'];
const cvcVerbs = ['run', 'dig', 'sit', 'bit', 'hug', 'cut', 'nap', 'fit', 'hid'];

// Game state variables
let currentSightIndex = 0;   // Index in sightWords array
let currentSentenceIndex = 0; // Sentence number (0 to 2) for the current sight word
let sentencesForCurrentWord = []; // Holds three sentences (each as an array of words)

const sightWordDisplay = document.getElementById('sightWordDisplay');
const sentenceDisplay = document.getElementById('sentenceDisplay');
const rewardDisplay = document.getElementById('reward');
const starBtn = document.getElementById('starBtn');
const nextBtn = document.getElementById('nextBtn');
const backBtn = document.getElementById('backBtn');

/**
 * Generates three sentences for a given sight word using two simple templates.
 * @param {string} sightWord - The target sight word.
 * @returns {Array} Array of sentences; each sentence is an array of words.
 */
function generateSentences(sightWord) {
  const sentences = [];
  for (let i = 0; i < 3; i++) {
    const useTemplateA = Math.random() > 0.5;
    const noun = cvcNouns[Math.floor(Math.random() * cvcNouns.length)];
    const verb = cvcVerbs[Math.floor(Math.random() * cvcVerbs.length)];
    const sentence = useTemplateA ? [sightWord, noun, verb] : [sightWord, verb, noun];
    sentences.push(sentence);
  }
  return sentences;
}

/**
 * Uses the Web Speech API to spell out a given text letter by letter.
 * @param {string} text - The text to spell out.
 */
function speak(text) {
  if ('speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  } else {
    console.warn("Speech Synthesis not supported.");
  }
}

/**
 * Displays the current sight word and its sentence.
 */
function displayCurrent() {
  const currentSight = sightWords[currentSightIndex];
  sightWordDisplay.textContent = currentSight;
  
  // Generate sentences if not already created for this sight word.
  if (!sentencesForCurrentWord.length) {
    sentencesForCurrentWord = generateSentences(currentSight);
    currentSentenceIndex = 0;
  }
  
  renderSentence(sentencesForCurrentWord[currentSentenceIndex]);
  
  // Disable back button at very start.
  backBtn.disabled = (currentSightIndex === 0 && currentSentenceIndex === 0);
}

/**
 * Renders a sentence (array of words) in the sentence display area.
 * @param {Array} sentenceWords - Array of words forming the sentence.
 */
function renderSentence(sentenceWords) {
  sentenceDisplay.innerHTML = '';
  sentenceWords.forEach(word => {
    const span = document.createElement('span');
    span.classList.add('word');
    // Highlight the sight word.
    if (word === sightWords[currentSightIndex]) {
      span.classList.add('sight');
    }
    span.textContent = word;
    // When tapped, spell out the word letter by letter.
    span.addEventListener('click', () => {
      const letters = word.split('').join(' ');
      speak(letters);
    });
    sentenceDisplay.appendChild(span);
  });
}

/**
 * Displays a reward animation briefly.
 */
function showReward() {
  rewardDisplay.style.display = 'block';
  setTimeout(() => {
    rewardDisplay.style.display = 'none';
  }, 800);
}

// Event Listeners

// Tap the sight word to hear it.
sightWordDisplay.addEventListener('click', () => {
  speak(sightWords[currentSightIndex]);
});

// Mark current sentence as complete with a reward.
starBtn.addEventListener('click', () => {
  showReward();
});

// Navigate to the next sentence or next sight word.
nextBtn.addEventListener('click', () => {
  if (currentSentenceIndex < 2) {
    currentSentenceIndex++;
  } else {
    currentSightIndex++;
    sentencesForCurrentWord = [];
    if (currentSightIndex >= sightWords.length) {
      alert("Congratulations! You've completed all sight words.");
      currentSightIndex = 0; // Optionally reset or navigate to a final screen.
    }
  }
  displayCurrent();
});

// Navigate to the previous sentence or sight word.
backBtn.addEventListener('click', () => {
  if (currentSentenceIndex > 0) {
    currentSentenceIndex--;
  } else if (currentSightIndex > 0) {
    currentSightIndex--;
    sentencesForCurrentWord = generateSentences(sightWords[currentSightIndex]);
    currentSentenceIndex = 2;
  }
  displayCurrent();
});

// Initialize game display on load.
displayCurrent();
