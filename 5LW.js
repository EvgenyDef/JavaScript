    /**2. Напишите функцию, принимающую на вход массив вещественных
    чисел и возвращающую сумму модулей элементов массива,
    расположенных после первого элемента равного нулю. */
function findSum(array) {
    let index = array.indexOf(0)
    if (index === -1)
        return 0

    let sum = 0
    for (; index < array.length; index++)
        sum += Math.abs(array[index])

    return sum
}

const array = [2.5, -1.3, 0, 4.2, -3.1, 0, 5.0]
console.log(findSum(array))

/**Напишите функцию, принимающую на вход вещественную
прямоугольную матрицу и возвращающую минимум среди сумм
элементов диагоналей, параллельных главной диагонали матрицы. */
function findMinSum(mat) {
    let sums = {}
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            const k = j - i
            if (k === 0)
                continue

            if (sums[k] === undefined)
                sums[k] = 0

            sums[k] += mat[i][j]
        }
    }
    return Math.min(...Object.values(sums))
}
const matrix = [
    [1.7, 2.5, 50.1],
    [4.0, 5.3, 6.6],
    [7.8, 0.01, 9.0]
]
console.log(findMinSum(matrix))