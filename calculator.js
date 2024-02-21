function clearDisplay() {
    document.getElementById('display').value = '';
}

function appendToDisplay(char) {
    document.getElementById('display').value += char;
}

function calculate() {
    try {
        const result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (error) {
        // Handle error if calculation is invalid
        document.getElementById('display').value = 'Error';
    }
}
