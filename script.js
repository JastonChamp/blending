const slots = document.querySelectorAll('.slot');
const cvcWords = [
  'hop', 'nut', 'bed', 'cat', 'dog', 'pen', 'run', 'bug', 'fox', 'hat',
  'jam', 'net', 'map', 'pig', 'tub', 'cup', 'van', 'wax', 'win', 'box',
  'fan', 'jug', 'kid', 'lid', 'mat', 'pig', 'rat', 'sun', 'tap', 'vet',
  'web', 'yak', 'zip', 'fog', 'leg', 'mop', 'sad', 'bed', /* Add more words */
];

let spinning = false;
document.querySelector('.wheel').addEventListener('click', () => {
  if (!spinning) {
    spinning = true;
    setTimeout(() => {
      spinning = false;
      const randomIndex = Math.floor(Math.random() * cvcWords.length);
      slots.forEach((slot, index) => {
        slot.textContent = cvcWords[(index + randomIndex) % cvcWords.length];
      });
    }, 5000); // Set a delay for spinning
  }
});
