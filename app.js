// Add new functionailty for message counter

const inputMessage = document.querySelector('#user-message');
const remainingChar = document.querySelector('#remaining-char');

let maxAllowedChar = inputMessage.maxLength;

function updateChar(event){
    const userMessage = event.target.value;
    const messageChars = userMessage.length;

    const updatedChar = maxAllowedChar - messageChars;
    remainingChar.textContent = updatedChar;
}
inputMessage.addEventListener('input', updateChar);