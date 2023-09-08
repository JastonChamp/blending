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




let currentDegree = 0;

document.getElementById('spinButton').addEventListener('click', () => {
  if (!spinning) {
    spinning = true;
    const slotsCount = cvcWords.length;
    const randomSlot = Math.floor(Math.random() * slotsCount);
    const fullSpins = 5;
    const totalDegree = (360 * fullSpins) + (randomSlot * (360 / slotsCount));
    const finalDegree = currentDegree + totalDegree;
    wheel.style.transform = `rotateY(${finalDegree}deg)`;
    currentDegree = finalDegree;
    setTimeout(() => {
      spinning = false;
    }, 1000);
  }
});







