const greetingDisplay = document.getElementById('greeting');
const greetButton = document.getElementById('greetButton');
const colorButton = document.getElementById('colorButton');
const clickCounterDisplay = document.getElementById('clickCounter');
let clickCount = 0;
const greetings = ["Hello World", "Hi Planet", "Greetings Universe", "Hey Galaxy"];

greetButton.addEventListener('click', () => {
    clickCount++;
    clickCounterDisplay.textContent = `Button clicked: ${clickCount} times`;
    const newGreeting = greetings[clickCount % greetings.length];
    greetingDisplay.textContent = newGreeting;
    greetingDisplay.classList.add('bounce');
    setTimeout(() => {
        greetingDisplay.classList.remove('bounce');
    }, 500);
});

colorButton.addEventListener('click', () => {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
});