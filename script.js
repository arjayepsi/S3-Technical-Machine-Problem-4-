function appendToDisplay(value) {
    const display = document.getElementById('display');
    
    if (value === '<') {
        display.textContent = display.textContent.slice(0, -1);
    } else {
        display.textContent += value;
    }
}

function clearDisplay() {
    document.getElementById('display').textContent = '';
}

function calculateResult() {
    try {
        const display = document.getElementById('display');
        display.textContent = eval(display.textContent);
    } catch (error) {
        document.getElementById('display').textContent = 'Error';
    }
}
