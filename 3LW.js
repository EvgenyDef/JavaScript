/*Создайте объект в формате JSON, который содержит информацию о
свойствах студента: фамилия, имя, массив оценок marks. Каждая
оценка – это объект с двумя свойствами subject и mark. Напишите
функцию, которая выводит эту информацию в консоль.*/

const student = {
    name: "Евгений",
    surname: "Зверев",
    marks: [
        {
            subject: "математика",
            mark: "5"
        },

        {
            subject: "информатика",
            mark: "4"
        },

        {
            subject: "английский язык",
            mark: "3"
        }
    ]
}

/*2)Создайте классы Student и Mark, которые описывают объекты из
предыдущего примера. 
*/

console.log(JSON.parse('{"name": "Евгений","surname": "Зверев","marks": [{"subject": "математика","mark": "5"},{"subject": "информатика","mark": "4"},{"subject": "Английский язык","mark": "3"}]}'))

class Mark {
    constructor(subject, mark) {
        this.subject = subject
        this.mark = mark
    }
}

class Student {
    constructor(name, surname, marks) {
        this.name = name ?? undefined
        this.surname = surname
        this.marks = marks
    }

    averageMark() {
        let average = 0
        for (let a in this.marks)
            average += a.mark
        return `Средняя оценка: ${average / this.marks.length}`;
    }

    getMarks(subject) {
        for (let i = 0; i < this.marks.length; i++) {
            if (this.marks[i].subject === subject) {
                return `Предмет: ${subject}\nОценки: ${this.marks[i].mark}`
            }
        }
    }

    addMark(subject, mark) {
        for (let i = 0; i < this.marks.length; i++) {
            if (this.marks[i].subject === subject)
                this.marks[i].mark.push(mark)
        }
    }

    deleteMarks(subject) {
        for (let i = 0; i < this.marks.length; i++) {
            if (this.marks[i].subject === subject)
                delete this.marks[i].mark
        }
    }
}

/** 3)Добавьте в класс Student метод, возвращающий среднюю оценку
студента по всем предметам. */
const student1 = new Student('Евгений', 'Зверев', [new Mark('математика', 5), new Mark('информатика', 4)])
console.log(student1)


/**4) Добавьте в класс метод, возвращающий все оценки по переданному
предмету. */
const student2 = new Student('Евгений', 'Зверев', [new Mark('математика', 5), new Mark('информатика', [5])])
console.log(student2.getMarks('информатика'))

/**5) Добавьте в класс метод добавления оценки по предмету. */
student2.addMark('информатика', 4)
console.log(student2.getMarks('информатика'))

/**6) Добавьте в класс метод, удаляющий все оценки по переданному
предмету. */
student2.deleteMarks('информатика')
console.log(student2.getMarks('информатика'))