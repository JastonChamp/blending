const wheel = document.querySelector('.wheel');
const cvcWords = [
  'hop', 'nut', 'bed', 'cat', 'dog', 'pen', 'run', 'bug', 'fox', 'hat',
  'jam', 'net', 'map', 'pig', 'tub', 'cup', 'van', 'wax', 'win', 'box',
  'fan', 'jug', 'kid', 'lid', 'mat', 'pig', 'rat', 'sun', 'tap', 'vet',
  'web', 'yak', 'zip', 'fog', 'leg', 'mop', 'sad', 'bed'
];

cvcWords.forEach((word, index) => {
  const slot = document.createElement('div');
  slot.className = 'slot';
  slot.textContent = word;
  const angle = index * (360 / cvcWords.length);
  slot.style.transform = `rotateY(${angle}deg) translateZ(200px)`;
  wheel.appendChild(slot);
});

let spinning = false;
let currentDegree = 0;




let currentSlot = 0;

document.getElementById('spinButton').addEventListener('click', () => {
  if (!spinning) {
    spinning = true;
    const slots = document.querySelectorAll('.slot');
    slots[currentSlot].style.zIndex = 0; 

    // Randomly select a new slot
    const randomSlot = Math.floor(Math.random() * cvcWords.length);
    slots[randomSlot].style.zIndex = 1; 

    currentSlot = randomSlot; // Update the current slot

    setTimeout(() => {
      spinning = false;
    }, 1000);
  }
});













