/**1.Напишите функцию, производящую сортировку в массиве студентов
по средней оценке. Метод должен реализовывать сортировку Шелла. */
class Student {
    constructor(name,  marks) {
        this.name = name;
        this.marks = marks;
    }
    
    get averageMark() {
        return this.marks.length > 0 ? this.marks.reduce((i, j) => i + j) / this.marks.length : 0;
    }
    
}

function shellSort(students) {
    const n = students.length;
    let gap = Math.floor(n / 2); 

    while (gap > 0) {
        for (let i = gap; i < n; i++) {
            const temp = students[i];
            let j = i;

            while (j >= gap && students[j - gap].averageMark > temp.averageMark) {
                students[j] = students[j - gap];
                j -= gap;
            }
            students[j] = temp;
        }
        gap = Math.floor(gap / 2); 
    }
}


const students = [
    new Student("Евгений", [90, 85, 88]),
    new Student("Аня", [70, 75, 80]),
    new Student("Варвара", [100, 95, 90]),
    new Student("Олег", [60, 65, 70])
];

shellSort(students);
students.forEach(item => console.log(`${item}, среднаяя оценка: ${item.averageMark}`));

