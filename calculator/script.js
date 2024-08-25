document.addEventListener('DOMContentLoaded', function () {
    let display = document.getElementById('display');
    let buttons = Array.from(document.getElementsByClassName('btn'));
    let operator = '';
    let operand1 = '';
    let operand2 = '';
    let result = '';

    buttons.map(button => {
        button.addEventListener('click', function (e) {
            let value = e.target.getAttribute('data-value');
            
            if (value === 'C') {
                operator = '';
                operand1 = '';
                operand2 = '';
                result = '';
                display.innerText = '0';
            } else if (value === '=') {
                operand2 = display.innerText;
                result = eval(operand1 + operator + operand2);
                display.innerText = result;
                operand1 = result;
                operator = '';
                operand2 = '';
            } else if (['+', '-', '*', '/'].includes(value)) {
                operator = value;
                operand1 = display.innerText;
                display.innerText = '';
            } else {
                if (display.innerText === '0') {
                    display.innerText = value;
                } else {
                    display.innerText += value;
                }
            }
        });
    });
});
