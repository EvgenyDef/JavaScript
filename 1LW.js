//Проверка числа на совершенность
while (true) {
    let num = Number(prompt('Введите число: '));
    let sum = 1;
    const sqrt = Math.floor(Math.sqrt(num));
    for (let i = 2; i <= sqrt; i++) {
        if (num % i == 0)
            sum += i + num / i;
    }

    if (sqrt ** 2 == num)
        sum += sqrt;

    let message = num == sum ? `Число ${num} совершенное` : `Число ${num} не совершенное`
    alert(message + `\nСумма делителей: ${sum}`);
}
