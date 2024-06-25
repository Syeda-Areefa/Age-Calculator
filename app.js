const birthYearInput = document.getElementById('birth-year');
const currentYearInput = document.getElementById('current-year');
const resultParagraph = document.getElementById('result');

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const birthYear = parseInt(birthYearInput.value);
    const currentYear = parseInt(currentYearInput.value);
    const age = currentYear - birthYear;
    resultParagraph.textContent = `You are ${age} years old.`;
});
