const name: string = "Abe"
console.log(name)
const isDone: boolean = false;
console.log(isDone)
const decimal: number = 6;
console.log(decimal) 
const hex: number = 0xf00d;
console.log(hex)
const binary: number = 0b1010;
console.log(binary)
const octal: number = 0o744;
console.log(octal)
const big: bigint = 100n;
console.log(big)
let color: string = "blue";
console.log(color)
color = 'red'
console.log(color)
color = 'green'
console.log(color)
let fullName: string = 'Abe';
console.log(fullName)
let age: number = 37;
console.log(age)
let sentence: string = `Hello, my name is ${fullName} I'll be ${age + 1} years old next month.`;
console.log(sentence)
let list1: Array<number> = [1, 2, 3];
console.log(list1)
enum Color {Red, Green, Blue}
let c: Color = Color.Green;
console.log(Color)
let notSure: unknown = 4;
