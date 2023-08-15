const slots = document.querySelectorAll('.slot');
const cvcWords = [
  'hop', 'nut', 'bed', 'cat', 'dog', 'pen', 'run', 'bug', 'fox', 'hat',
  'jam', 'net', 'map', 'pig', 'tub', 'cup', 'van', 'wax', 'win', 'box',
  'fan', 'jug', 'kid', 'lid', 'mat', 'pig', 'rat', 'sun', 'tap', 'vet',
  'web', 'yak', 'zip', 'fog', 'leg', 'mop', 'sad', 'bed', /* Add more words */
];

let spinning = false;

document.getElementById('spinButton').addEventListener('click', () => {
  if (!spinning) {
    spinning = true;
    const randomIndex = Math.floor(Math.random() * cvcWords.length);
    slots.forEach((slot, index) => {
      const newIndex = (index + randomIndex) % cvcWords.length;
      slot.style.transition = 'none';
      setTimeout(() => {
        slot.style.transition = 'transform 1s ease-in-out';
        slot.style.transform = `rotateX(${newIndex * (360 / cvcWords.length)}deg)`;
        slot.textContent = cvcWords[newIndex];
        if (index === slots.length - 1) {
          spinning = false;
        }
      }, 0);
    });
  }
});
