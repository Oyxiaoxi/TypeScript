class Animals {
    readonly name: string;
    constructor(name) {
        this.name = name;
    }
    run() {
        return `$(this.name) is running`;
    }
}

const snake = new Animals('lily')
console.log(snake.run())

class Dog extends Animals {
    bark(){
        return `$(this.name) is running`;
    }
}

const xiaobao = new Dog('xiaobao')
console.log(xiaobao.run())
console.log(xiaobao.bark())

class Cat extends Animals {
    static categories = ['mammal']
    constructor(name: string) {
        super(name)
        console.log(this.name)
    }
    run(){
        return `Meow,` + super.run()
    }
}

const maomao = new Cat('maomao')
console.log(maomao.run())
console.log(maomao.categories())