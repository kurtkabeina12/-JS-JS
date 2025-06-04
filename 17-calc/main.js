const buttons = document.querySelectorAll('.btn');
const resultElement = document.getElementById('result');
const firstInput = document.getElementById('firstInput');
const secondInput = document.getElementById('secondInput');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const num1 = Number(document.getElementById('firstInput').value);
        const num2 = Number(document.getElementById('secondInput').value);

        if (isNaN(num1) || isNaN(num2)) {
            resultElement.textContent = 'Пожалуйста, введите оба числа';
            return;
        }

        let result;
        switch (button.textContent) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case 'X':
                result = num1 * num2;
                break;
            case '÷':
                result = num2 !== 0 ? num1 / num2 : 'Деление на ноль!';
                break;
            default:
                result = 'Неизвестная операция';
        }

        resultElement.textContent = `Результат: ${result}`;
        firstInput.value = '';
        secondInput.value = '';
    });
});