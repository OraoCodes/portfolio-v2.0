// Add new functionailty 
const enteredUserInput = document.getElementById('user-message');

const remainingChar = document.getElementById('remaining-char');

let maxChar = enteredUserInput.maxLength;

function changeData(event){
    const enteredValue = event.target.value;
    const enteredLength = enteredValue.length;

    const remainingChars = maxChar - enteredLength;

    remainingChar.textContent = remainingChars;

}
enteredUserInput.addEventListener('input', changeData);

