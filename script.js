const wheel = document.querySelector('.wheel');
const cvcWords = [
  'hop', 'nut', 'bed', 'cat', 'dog', 'pen', 'run', 'bug', 'fox', 'hat',
  'jam', 'net', 'map', 'pig', 'tub', 'cup', 'van', 'wax', 'win', 'box'
];

// Load spin sound
const spinSound = new Audio('spin-sound.mp3');  // Replace 'spin-sound.mp3' with the path to your audio file

cvcWords.forEach((word, index) => {
  const slot = document.createElement('div');
  slot.className = 'slot';
  slot.textContent = word;
  slot.style.display = 'none';  // Initialize to hide all slots
  wheel.appendChild(slot);
});

// Show the first word initially
const slots = document.querySelectorAll('.slot');
slots[0].style.display = 'flex';

let currentSlot = 0;

document.getElementById('spinButton').addEventListener('click', () => {
  // Play spin sound
  spinSound.play();

  // Shuffle effect
  let shuffleCount = 0;
  const shuffleEffect = setInterval(() => {
    const randomSlot = Math.floor(Math.random() * cvcWords.length);
    slots[randomSlot].style.backgroundColor = 'yellow';
    setTimeout(() => {
      slots[randomSlot].style.backgroundColor = 'white';
    }, 100);
    shuffleCount++;
    if (shuffleCount > 20) {
      clearInterval(shuffleEffect);
    }
  }, 100);

  // Actual spin logic
  setTimeout(() => {
    slots[currentSlot].style.display = 'none';  // Hide the current slot

    // Randomly select a new slot
    const randomSlot = Math.floor(Math.random() * cvcWords.length);
    slots[randomSlot].style.display = 'flex';  // Show the new slot

    currentSlot = randomSlot;  // Update the current slot
  }, 2500);  // Wait for 2.5 seconds to complete the shuffle effect
});
