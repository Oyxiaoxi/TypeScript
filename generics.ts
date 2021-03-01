function echo<T>(args: T): T {
    return args
}

const result = echo(true)

function swap<T, U>(tuple: [T, U]): [U, T] {
    return [tuple[1], tuple[0]];
}

const result2 = swap(['string', 123])

function echoWithArray<T>(args: T[]): T[] {
    console.log(args.length)
    return args
}

const array = echoWithArray([1, 2, 3])

interface IWithLength {
    length: number
}

function echoWithLength<T extends IWithLength>(arg: T): T {
    console.log(arg.length)
    return arg
}

const str = echoWithLength('str')
const obj = echoWithLength({length: 10, width: 10})
const arr = echoWithLength([1, 2, 3])

class Queue<T> {
    private data = []
    push(item: T) {
        return this.data.push(item)
    }
    pop(): T {
        return this.data.shift()
    }
}

const queue = new Queue<number>()
queue.push(1)
console.log(queue.pop().toFixed())

interface KeyPair<T, U> {
    key: T,
    value: U
}

let kp1:KeyPair<number, string> = { key: 1, value: 'str'}
let kp2:KeyPair<string, number> = { key:'str', value: 1}
let arr1:number[] = [1, 2, 3]
let arrTwo: Array<number> = [1, 2, 3]