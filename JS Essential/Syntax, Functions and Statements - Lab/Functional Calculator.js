function math(num1, num2, operator) {

    let sum = 0;
    switch (operator) {
        case '+':
            sum = num1 + num2;
            break;
        case '-':
            sum = num1 - num2;
            break;
        case '*':
            sum = num1 * num2;
            break;
        case '/':
            sum = num1 / num2;
            break;
        case '%':
            sum = num1 % num2;
            break;
        case '**':
            sum = num1 ** num2;
            break;
    }

    console.log(sum);
}

math(5, 5, '+');