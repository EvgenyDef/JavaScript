/**Реализуйте функцию для поиска в двух заданных массивах элементов,
которые присутствуют в обоих массивах. Используйте Set. */
const findElements = (arr1, arr2) => {
    const set1 = new Set(arr1)
    const commonItems = arr2.filter(item => set1.has(item))
    return commonItems
}

let arr1 = [1, 4, 6, 3, 2, 7, 1]
let arr2 = [4, 7, 2, 5, 0, -1, 1]
console.log(findElements(arr1, arr2))


/**Реализуйте функцию, которая подсчитывает количество вхождений
каждого элемента в массиве. Используйте Map. */

const countItems = (array) => {
    const map = new Map();
    array.forEach(element => {
        if (map.has(element))
            map.set(element, map.get(element) + 1)
        else
            map.set(element, 1)
    });
    return map
}

const array = [1, 2, 4, 5, 1, 4, 5, 1, "banana", 235, 9, 9, 9, 9, 9]

const map = countItems(array)
map.forEach((key, value) => console.log(`Элемент: ${value}\nЧисло вхождений: ${key}`))

/**В массиве студентов подсчитать число обучающихся в самой большой
группе. Номер группы – свойство класса Student типа string. */
class Student {
    constructor(group) {
        this.group = group
    }
}

const students = [new Student('1'), new Student('1'), new Student('2'), new Student('3'), new Student('1')]

const map2 = countItems(students)

let max = 0
let number = 0
map2.forEach((key, value) => {
    if (key > max){
        max = key
        number = value.group
    }
})
console.log(`Номер самой многочисленной группы: ${max}`)