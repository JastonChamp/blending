const wheel = document.querySelector('.wheel');
let cvcWords = [
    'hop', 'nut', 'bed', 'cat', 'dog', 'pen', 'run', 'bug', 'fox', 'hat',
    'jam', 'net', 'map', 'pig', 'tub', 'cup', 'van', 'wax', 'win', 'box',
    'bat', 'bet', 'bit', 'bot', 'but', 'cut', 'dot', 'fit', 'gut', 'hit',
    'hot', 'jet', 'kit', 'lot', 'met', 'not', 'pat', 'pot', 'rat', 'sat',
    'set', 'sit', 'tan', 'tap', 'tin', 'top', 'wet', 'wit', 'yet', 'zoo',
    'dim', 'dip', 'lip', 'lit', 'mix', 'mop', 'nip', 'pan', 'pin', 'pit',
    'pod', 'pop', 'rim', 'rip', 'rot', 'sob', 'sum', 'sun', 'tap', 'ten',
    'tip', 'tug', 'vet', 'wed', 'wig', 'win', 'yam', 'yen', 'yip',
    'bud', 'bun', 'bus', 'cob', 'cod', 'cog', 'con', 'cop', 'cub', 'dud',
    'dug', 'fun', 'gum', 'gun', 'hug', 'hum', 'hut', 'jog', 'jug', 'mud'
];

// Load audio dynamically based on word (for future audio integration)
function playAudioForWord(word) {
    console.log(`Audio for ${word} would play here.`);
}

// Render the CVC words with colored vowels
function renderSlots() {
    wheel.innerHTML = ''; // Clear existing words
    cvcWords.forEach((word) => {
        const slot = document.createElement('div');
        slot.className = 'slot';
        
        // Change color of vowel letters
        let coloredWord = '';
        for (let letter of word) {
            if ('aeiou'.includes(letter)) {
                coloredWord += `<span class="vowel letter">${letter}</span>`;
            } else {
                coloredWord += `<span class="letter">${letter}</span>`;
            }
        }
        
        slot.innerHTML = coloredWord;  // Use innerHTML to insert HTML content
        slot.style.display = 'none';
        wheel.appendChild(slot);
    });
}

renderSlots();

const slots = document.querySelectorAll('.slot');
let currentSlot = 0;
slots[currentSlot].style.display = 'flex';

// Spin button event listener
document.getElementById('spinButton').addEventListener('click', () => {
    let shuffleCount = 0;
    let lastRandom = 0;

    wheel.classList.add('active');  // Add subtle scaling/rotation effect

    const shuffleEffect = setInterval(() => {
        slots[lastRandom].style.display = 'none';
        const randomSlot = Math.floor(Math.random() * cvcWords.length);
        slots[randomSlot].style.display = 'flex';
        lastRandom = randomSlot;
        shuffleCount++;
        if (shuffleCount > 20) {
            clearInterval(shuffleEffect);
            slots[lastRandom].style.display = 'none';
            slots[currentSlot].style.display = 'flex';
        }
    }, 100);

    setTimeout(() => {
        const randomSlot = Math.floor(Math.random() * cvcWords.length);
        slots[currentSlot].style.display = 'none';
        slots[randomSlot].style.display = 'flex';
        currentSlot = randomSlot;

        // Play audio for current word (optional)
        playAudioForWord(cvcWords[currentSlot]);

        // Trigger pulse effect when letters are being revealed
        pulseWheel();
        
        wheel.classList.remove('active');  // Reset the scaling effect after spin
    }, 2500);
});

// Function to reveal letters one by one
function revealLetters(slot) {
    const letters = slot.querySelectorAll('.letter');
    letters.forEach((letter, index) => {
        letter.style.opacity = 0; // Hide letters initially
        setTimeout(() => {
            letter.style.opacity = 1; // Reveal one by one
        }, index * 500); // Adjust delay between letters
    });
}

// Custom word input functionality
document.getElementById('addWordButton').addEventListener('click', () => {
    const customWord = document.getElementById('customWordInput').value.trim().toLowerCase();
    if (customWord.length === 3 && /^[a-z]+$/.test(customWord)) {
        cvcWords.push(customWord);
        renderSlots();
    } else {
        alert('Please enter a valid 3-letter word.');
    }
});
