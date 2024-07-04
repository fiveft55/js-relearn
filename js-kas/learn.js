// Hello world: following free-code-camps video
// console.log("Hello world!")

// variables
// var firstName = 'src', secName = 'alt' 
// console.log(firstName, secName)

// Const
// const D_NAME = 'src'
// console.log(D_NAME)

// Data types
// let favFruit = 'apple'
// let favDrink = "water" // strings

// let noOfEnem = 12 // num
// let bigNUM = 1021313131331n // bigint
// let pi = 3.14 // float

// let answer = true // boolean
// let favColor; // undefined

// object dt, reference types
// let course = {
//     name: "Js for beginner",
//     hours: 3
// }

// console.log(course)
// console.log(course.name)
// console.log(course['hours'])

// let propt = 'hours'
// course['hours'] = 2
// console.log(course[propt])

// Arrays
// let prodColors = ['blue', 'red']

// prodColors[0] = prodColors[1]
// prodColors[1] = 'blue'

// console.log(prodColors)

// functions: 
// function sayHi(userWord) {
//     console.log("Pc says "+ userWord)
// }

// sayHi("Hello World!")

// function sum(num1, num2){
//     return num1 + num2
// }
// console.log(sum(2, 3))

// operators: -, +, *, /, %, **(pow)

// num1 = 10
// num2 = String(num1)
// console.log( typeof num2 )

// Ternary Operator: [let varValue = var1 >= var2? true : false;]
// let pts = 110
// const customerType = pts >= 100? 'gold': 'silver';

// console.log(customerType)

// logical operators: and &&, or ||, ! not, ??

// for-in loop
// const course = {
    //     name: 'js for starters',
    //     duration: 3,
    //     sections: 7
// }


// for (const key in course)
//     console.log(course[key])

// for-of loop
// numArray = [1,2,3,4,5]
// for (let elem of numArray) console.log(elem)
    
// wordArry = 'abcde'
// for (let elex of wordArry) console.log(elex)

// exe: max-min num

// function maxNum(num1, num2) {
//     return num1 >= num2 ? num1 : num2
// }
// console.log(maxNum(2, 5))

// 1:31: fizbuz

// Object literals: state & behaviour: function in an object,aka method

// const dog = {
//     name: 'Max',
//     breed: 'Pug',
//     age: 5,
//     weight: 12,
//     eat: function() {
//         console.log('Chomp')
//     },
//     bark() {
//         console.log('Woof')
//     }
// }

// function getDog(name, breed, age, weight) {
//     return {
//         name,
//         breed,
//         age,
//         weight,
//         eat() {
//             console.log('Chomp')
//         },
//         bark() {
//             console.log('Woof')
//         }
//     }
// }

// const anotherDog = getDog('Marley', 'Chocolate lab', 3, 60)
// console.log(anotherDog)

// Constructor Functions
// function Dog(name, breed, age, weight) {
//     // this = {}
    
//     // add properties
//     this.name = name
//     this.breed = breed
//     this.age = age
//     this.weight = weight

//     this.eat = function() {
//         console.log(this.name + ': Chomp!')
//     }
//     this.bark = function(){
//         console.log(this.name + ': Woof!')
//     }

//     // return this;
// }

// const anotherDog = new Dog('Marley', 'Lab', 3, 60)
// console.log(anotherDog)

// Objs are dynamic
// const person = {
//     name: 'Steve'
// }
// // console.log(person)
// person.favFood = 'chips'
// person.favDrink = 'fanta'
// delete person.favFood
// // console.log(person)

// person.eat = function() {
//     console.log('start eating')
// }
// person.eat()

// Constructor Prop
// const person = {
//     name: 'Steve'
// }
// console.log( person.constructor )

// let newObj = {} // or u can use the below one, they->same
// let newObj = new Object();

// new String();
// new Boolean(); // contructor property demo

// Func() as objects
// function add(num1, num2) {
//     return num1 + num2
// }
// const n = add
// console.log(n(2, 2))

// function Programmer(name) {
//     this.name = name
//     this.wcode = function () {
//         console.log("Code in Js")
//     }
// }
// console.log(Programmer.length)
// console.log(Programmer.constructor)

// const Programmer = new Function('name', `
//     this.name = name;
//     this.wcode = function () {console.log('code in js')};
// `);

// const newProgrammer = new Programmer('Steve')
// newProgrammer.wcode();

// value vs reference dtypes
// let a = 10
// let b = a
// a = 20
// console.log(a)
// console.log(b)

// let a = {value: 20}
// let b = a

// a.value = 100
// console.log(a)
// console.log(b)

// enum props of an obj
// let num = [1,2,3,4,5]
// for (const elem of num) {
//     console.log(elem)
// }

// const dog = {
//     name: 'max',
//     age: 5,
//     eyColor: 'blue'
// }
// // for (const key in dog) console.log(dog[key])

// const keys = Object.keys(dog) // enum the for...in loop as array
// // console.log(keys)

// const values = Object.values(dog)
// // console.log(values)

// const entries = Object.entries(dog)
// console.log(entries)

// for (const key of Object.keys(dog)) {
//     console.log(key)
// }

// Cloning an obj
// let a = {value: 20}
// let b = {}
// Object.assign(b,a)
// a.value = 100

// console.log(a)
// console.log(b)

// using spread operator to clone indipendent objs
// ...var --> Object.assign(b,a)

// let a = {value: 20}
// let b = { ...a }

// a.value = 10
// console.log(a)
// console.log(b)

// String Methods: 2:3:20

// let sentence = 'A new sentence.'

// let updatedSentence = sentence.replace('new', 'short')
// console.log(updatedSentence)
// trimmedSen = sentence.trim()
// console.log(trimmedSen)
// const wordsInSen = sentence.split(' ')
// console.log(wordsInSen)

// let email = 'TesTEmail@gmail.com'
// let lowerCaseEmail = email.toLowerCase()
// let upperCaseEmail = email.toUpperCase()
// console.log(upperCaseEmail)

// -- Template Literals

// let firstName = 'Steve'
// let lastName = 'Smith'

// let fullname = firstName + ' ' + lastName
// let fullname = `${firstName} ${lastName}`

// console.log(fullname)

// -- The date object -- 2: 11

// adding elements

// const numbers = [5,4,3,2,1]
// // numbers.push(7,8,9)
// // numbers.unshift(9,8,7)
// numbers.splice(1, 1, 25,24) // target location , delCount, addnum
// console.log(numbers)

// indexOf, lastIndexOf
// const numbers = [5,4,3,2,1,3]

// const indexOfThree = numbers.indexOf(3)
// // console.log(indexOfThree) // number[indexOfThree] = valueStored: 3
// const lastIndexOfThree = numbers.lastIndexOf(3)
// console.log(lastIndexOfThree)

// finding elems by ref
// const employees = [
//     {
//         id: 1,
//         name: 'Jim'
//     },
//     {
//         id:2,
//         name: 'Scott'
//     },
//     {
//         id:3,
//         name: 'Pam'
//     }
// ]

// const employee = employees.find(function(e) {
//     return e.name === 'Jim'
// })
// console.log(employee)

// arrow function as predicate()

// const add = (num1, num2) => {
//     return num1 + num2
// }
// console.log(add(4,1))
// const add = (num1, num2) => num1 + num2
// console.log(add(3, 1))
// const add = (num1, num2) => console.log(num1 + num2)
// add(4,1)

// -- Removing elements
// const numbers = [1,2,3,4,5]

// const lastElem = numbers.pop()
// console.log(`lastElement: ${lastElem}\n`)

// const firstElem = numbers.shift()
// console.log(`firstElement: ${firstElem}`)

// const middleElem = numbers.splice(1, 1)
// console.log(`midElement: ${middleElem}`)

// empting an array
// let numbers = [1,2,3,4,5]

// numbers.length = 0
// numbers.splice(0, numbers.length)
// numbers = []

// combining and slicing arrays
// let examA = [1,2,3]
// let examB = [4,5,6]

// const combA = examA.concat(examB)
// console.log(combA)

// const firstSlice = combA.slice(0,4)
// console.log(firstSlice)

// let combined = [...examA, ...examB] // spread operator
// console.log(combined)

// iterate an array
// const numbers = [1,2,3,4,5]

// for(num of numbers){
//     console.log(num)
// }

// numbers.forEach(num => {
//     console.log(num)
// });

// numbers.forEach((num, index) => console.log(`At index, ${index}: ${num}`));

// joining array
// const number = [1,2,3,4,5]
// const joinedNum = numbers.join(', ')
// console.log(joinedNum)

// const coureName = 'Js for starters'
// const parts = coureName.toLocaleLowerCase().split(' ') // method chaining: use 2 methods
// const urlSlug = parts.join('-')
// console.log(urlSlug)

// sorting array
// let char = ['c', 'd','b','a']
// // char.sort()
// char.reverse()
// console.log(char)

// let employees = [
//     {id: 1, name: 'Jen'},
//     {id: 2, name: 'Steve'},
//     {id: 3, name: 'Eve'},
//     {id: 4, name: 'Adam'},
// ]

// employees.sort((a, b) => {
//     const lowercaseA = a.name.toLowerCase()
//     const lowercaseB = b.name.toLowerCase()

//     if (lowercaseA < lowercaseB) return -1
//     if (lowercaseA > lowercaseB) return 1
//     return 0
// })

// console.log(employees)

// array.filter()
// const numbers = [1,2,3,4,5,6]
// const evenNumbers = numbers.filter(num => num % 2 === 0)
// console.log(evenNumbers)

// const employees = [
//     {id: 1, name: 'Alice', role: 'Dev'},
//     {id: 2, name: 'Bob', role: 'Designer'},
//     {id: 3, name: 'Charlie', role: 'Dev'},
//     {id: 4, name: 'Dani', role: 'Manager'},
// ]

// const devS = employees.filter(emplo => emplo.role == 'Dev')
// console.log(devS)

// array.map -- mapping array

// const numbers = [2,4,6,8,10]

// const sqNum = numbers.map(num => num * num)
// console.log(sqNum)

// const char = ['a', 'b', 'c', 'd']
// const upperCaseChar = char.map(char => char.toUpperCase())
// console.log(upperCaseChar)

// const employ = [
//     {id: 1, name: 'Alice', email: 'AliCe@gmail.com'},
//     {id: 2, name: 'Steve', email: 'sTeve@gmail.com'},
//     {id: 3, name: 'Joe', email: 'Joe@gmail.com'},
// ]
// const updateEmp = employ.map( emp => ({
//     ...emp,
//     email: emp.email.toLowerCase()
// }) )

// console.log(updateEmp)

// Reducing an array
// let nums = [1,2,3,4,5]
// // summation
// const sum = nums.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue
// }, 0) // initial start value: 0

// -- funx --
function println(e){
    console.log(e)
} 
// println('The total sum is: ' + sum)

// Function declaration VS expressions:
// hoisting
// arguments
// function mul(n1, n2) {
//     let product = 1
//     for (const num of arguments)
//         product *= num

//     return product
// }
// println( mul(2,2,4))

// rest operator: spread operator but for functions
// demo of spread operator
// let course = {
//     name: 'js for starters',
//     duration: '3 hrs'
// }
// let newCourse = {
//     ...course,
//     name: 'Js pro'
// }

// println(newCourse)

// function multiply(...args) {
//     return args.reduce((accumulator, currentValue) => accumulator * currentValue, 1)
// }
// function multiply(muler ,...numbers) {
//     return numbers.map( num => num * muler)
// }
// println(multiply(2, 1,2,3,4))

// 3 : 13 -- getter and setters
// const course = {
//     name: 'Js for starters',
//     duration: '3 hrs',
//     details() {
//         return `${this.name} is ${this.duration}`
//     }
// }

// const course = {
//     name: 'Js for starters',
//     duration: '3 hrs',
//     get details() {
//         return `${this.name} is ${this.duration}`
//     },
//     set details(value) {
//         let parts = value.split(' is ')
//         this.name = parts[0]
//         this.duration = parts[1]
//     }
// }
// println(`${course.name} is ${course.duration}`)
// println(course.details())
// println(course.details)

// course.details = 'Js pro is 10 hrs'
// println(course.details)

// try and catch
const course = {
    name: 'Js for starters',
    duration: '3 hrs',
    get details() {
        return `${this.name} is ${this.duration}`
    },
    set details(value) {
        if (typeof value !== 'string'){
            throw new Error(`Value, ${value} is not a string.`)
        }

        let parts = value.split(' is ')
        this.name = parts[0]
        this.duration = parts[1]
    }
}

try {
    course.details = 42
} catch(e) {
    console.log(`Caught an error: ${e.message}`)
}




