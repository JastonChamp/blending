const wheel = document.querySelector('.wheel');
const cvcWords = [
  'hop', 'nut', 'bed', 'cat', 'dog', 'pen', 'run', 'bug', 'fox', 'hat',
  'jam', 'net', 'map', 'pig', 'tub', 'cup', 'van', 'wax', 'win', 'box'
];

cvcWords.forEach((word, index) => {
  const slot = document.createElement('div');
  slot.className = 'slot';
  slot.textContent = word;
  wheel.appendChild(slot);
});

let currentSlot = 0;

document.getElementById('spinButton').addEventListener('click', () => {
  const slots = document.querySelectorAll('.slot');
  slots[currentSlot].style.backgroundColor = 'white'; // Reset the background color of the current slot

  // Randomly select a new slot
  const randomSlot = Math.floor(Math.random() * cvcWords.length);
  slots[randomSlot].style.backgroundColor = 'yellow'; // Highlight the new slot

  currentSlot = randomSlot; // Update the current slot
});
