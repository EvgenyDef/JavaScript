
// 1
function maxMult(n1, n2, n3) {
    let array = [n1, n2, n3].sort();
    return array[1] * array[2];
}

// 2
function two(name, title = 'рядовой') {
    return `${name}, ${title}`;
}

// 3
function func(greeting, name, surname) {
    return greeting(name, surname);
}

const exp = (name, surname) => `Hello, ${name} ${surname}!`;

// 4

const even = n => n ** 2;
const odd = n => n ** 3;

function four(element) {
    return (element % 2 === 0) ? () => element ** 2 : () => element **3; 
}

// 5
function five(a) {
    if (a === 1)
        return 1;
    return a * five(a - 1);
}



console.log('1: ' + maxMult(5, 8, 1));

console.log('2: ' + two('Олег'));
console.log('2: ' + two('Олег', 'сержант'));

console.log('3: ' + func(exp, 'Evgeny', 'Def'));

console.log('4: ' + four(5));

console.log('5: ' + five(5));