import { type } from "jquery"

// global objects
const a: Array<number> = [1, 2, 3]
const date = new Date()
date.getTime()
const reg = /abc/g
reg.test('abc')

// build in objects
Math.pow(2, 2)

// Dom and DOM
let body = document.body
let allLis = document.querySelectorAll('li')
allLis.keys()

document.addEventListener('click', (e) => {
    e.preventDefault()
}) 

// Utility Types
interface IPerson {
    name: string,
    age: number,
}

let cat: IPerson = { name:'cat', age: 20 }
type IPartial = Partial<IPerson>
let dog: IPartial = { name: 'dog' }
type IOmit = Omit<IPerson, 'name'>
let elephant: IOmit = { age: 90 }