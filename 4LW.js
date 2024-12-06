class Figure {
    #x;
    #y;
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    square() {
        return undefined;
    }
    
}

class Circle extends Figure {
    #r;
    constructor(x, y, r) {
        super(x, y)
        this.#r = r
    }

    square() {
        return `Площадь круга равна ${Math.PI * this.#r ** 2}`
    }
}

class Rectangle extends Figure{
    #h;
    #w;
    constructor(x, y, h, w) {
        super(x, y)
        this.#h = h
        this.#w = w
    }

    square() {
        return `Площать прямоугольника равна ${this.#w * this.#h}`
    }
}


const circle = new Circle(10, 10, 10)
console.log(circle.square())

const rectangle = new Rectangle(10, 10, 3, 4)
console.log(rectangle.square())