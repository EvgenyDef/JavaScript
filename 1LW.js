/*Объявите функцию, которая принимает на вход функциональное
выражение и набор параметров для его вызова, а возвращает результат
вызова переданного функционального выражения.*/

function func(greeting, name, surname) {
    return greeting(name, surname);
}

const exp = (name, surname) => `Hello, ${name} ${surname}!`;

console.log(func(exp, 'Evgeny', 'Def'));