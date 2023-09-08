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
  slots[currentSlot].style.display = 'none';

  const randomSlot = Math.floor(Math.random() * cvcWords.length);
  slots[randomSlot].style.display = 'flex'; 

  currentSlot = randomSlot; 
});
