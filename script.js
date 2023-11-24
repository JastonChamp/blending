const wheel = document.querySelector('.wheel');
const words = [
    'hop', 'nut', 'bed', 'cat', 'dog', 'pen', 'run', 'bug', 'fox', 'hat',
    'jam', 'net', 'map', 'pig', 'tub', 'cup', 'van', 'wax', 'win', 'box',
    'bat', 'bet', 'bit', 'bot', 'but', 'cut', 'dot', 'fit', 'gut', 'hit',
    'hot', 'jet', 'kit', 'lot', 'met', 'not', 'pat', 'pot', 'rat', 'sat',
    'set', 'sit', 'tan', 'tap', 'tin', 'top', 'wet', 'wit', 'yet', 'zoo',
    'dim', 'dip', 'lip', 'lit', 'mix', 'mop', 'nip', 'pan', 'pin', 'pit',
    'pod', 'pop', 'rim', 'rip', 'rot', 'sob', 'sum', 'sun', 'tap', 'ten',
    'tip', 'tug', 'vet', 'wed', 'wig', 'win', 'yam', 'yen', 'yip',
    'bud', 'bun', 'bus', 'cob', 'cod', 'cog', 'con', 'cop', 'cub', 'dud',
    'dug', 'fun', 'gum', 'gun', 'hug', 'hum', 'hut', 'jog', 'jug', 'mud',
    'moon', 'book', 'tool', 'room', 'foot', 'cook', 'pool', 'cool', 'fool',
    'wood', 'wool', 'broom', 'mood', 'roof',
    'boost', 'tooth', 'shoot',
    'hoop', 'zoo', 'noon', 'booth', 'hoof',
    'loop', 'woof', 'spook', 'coo', 'rook', 'hook', 'took',
    'bath', 'math', 'moth', 'path', 'with',
    'bash', 'dish', 'fish', 'rush', 'wish',
    'chat', 'rich', 'much', 'chip', 'inch',
    'bang', 'king', 'long', 'ring', 'sing'
];

cvcWords.forEach((word, index) => {
  const slot = document.createElement('div');
  slot.className = 'slot';
  
  // Change color of vowel letters
  let coloredWord = '';
  for (let letter of word) {
    if ('aeiou'.includes(letter)) {
      coloredWord += `<span class="vowel">${letter}</span>`;
    } else {
      coloredWord += letter;
    }
  }
  
  slot.innerHTML = coloredWord;  // Use innerHTML to insert HTML content
  slot.style.display = 'none';
  wheel.appendChild(slot);
});

const slots = document.querySelectorAll('.slot');
slots[0].style.display = 'flex';

let currentSlot = 0;

document.getElementById('spinButton').addEventListener('click', () => {
  let shuffleCount = 0;
  let lastRandom = 0;

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
  }, 2500);
});
