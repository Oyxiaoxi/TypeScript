// type aliases
let sum:(x:number, y:number) => number
const result = sum(1, 2)

type PlusType = (x:number, y:number) => number
let sum2: PlusType
const result2 = sum2(3, 4)

type StrOfNumber = String | number
let result3: StrOfNumber = '123'
result3 = 123

const str: 'name' = 'name'
const number:1 = 1
type Direction = 'Up' | 'Down' | 'Left' | 'Right'
let toWhere:Direction = 'Left'

interface IName {
    name: string
}

type IPerson = IName & { age: number }
let person:IPerson = { name: '123', age: 123 }