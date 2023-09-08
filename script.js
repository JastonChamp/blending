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

document.getElementById('spinButton').addEventListener('click', () => {
  const slots = document.querySelectorAll('.slot');
  const randomIndex = Math.floor(Math.random() * slots.length);
  slots.forEach((slot, index) => {
    if (index === randomIndex) {
      slot.style.backgroundColor = 'yellow';
    } else {
      slot.style.backgroundColor = 'white';
    }
  });
});
