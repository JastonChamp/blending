const wheel = document.querySelector('.wheel');
const cvcWords = [
  'hop', 'nut', 'bed', 'cat', 'dog', 'pen', 'run', 'bug', 'fox', 'hat',
  'jam', 'net', 'map', 'pig', 'tub', 'cup', 'van', 'wax', 'win', 'box',
  'fan', 'jug', 'kid', 'lid', 'mat', 'pig', 'rat', 'sun', 'tap', 'vet',
  'web', 'yak', 'zip', 'fog', 'leg', 'mop', 'sad', 'bed', /* Add more words */
];

// Insert the CVC words into the slots
const slots = document.querySelectorAll('.slot');
slots.forEach((slot, index) => {
  const wordIndex = index % cvcWords.length;
  slot.textContent = cvcWords[wordIndex];
});

let spinning = false;
let currentDegree = 0;

document.getElementById('spinButton').addEventListener('click', () => {
  if (!spinning) {
    spinning = true;
    const randomDegree = Math.floor(Math.random() * 360) + 360 * 5; // 5 full spins
    const totalDegree = currentDegree + randomDegree;
    wheel.style.transform = `rotateX(${totalDegree}deg)`;
    currentDegree = totalDegree % 360;
    setTimeout(() => {
      spinning = false;
    }, 1000); // 1s is the duration of the rotation transition
  }
});
