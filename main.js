
let students = [
    {
        name: 'Sega',
        age: 23,
        isMarried: false,
        scores: 100
    },
    {
        name: 'Sasha',
        age: 20,
        isMarried: false,
        scores: 80
    },
    {
        name: 'Dima',
        age: 25,
        isMarried: true,
        scores: 170
    },
    {
        name: 'Sonya',
        age: 21,
        isMarried: false,
        scores: 230
    },
]

const ourMap = (array, callback) => {
    const newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray[i] = callback(array[i], i)
    }
    return newArray
}

console.log(ourMap(students, getStudentName))


function getStudentName(item, i) {
    return `Index: ${i}: ${item.name}`
}

console.log(students.map(getStudentName))
console.log(students.map(s => s)) // поверхностная копия => ([...students])
console.log(students.map(s => ({ ...s }))) // глубокая копия
console.log(students.map(s => {
    if (s.name === 'Sega') {
        return { ...s, scores: s.scores + 10 }
    }
    return s
}))

console.log(students.map(s => s.name === 'Sega' ? { ...s, scores: s.scores + 10 } : s))

const ourFilter = (array, callback) => {
    const newArray = []
    for (let i = 0; i < array.length; i++) {
       if(callback(array[i])) {
        newArray.push()
       }
    }
    return newArray
}

console.log(students.filter(s => s.scores >= 100 ))
console.log(ourFilter(students, s => s.scores >= 100 ))

const ourFind = (array, callback) => {
    const newArray = []
    for (let i = 0; i < array.length; i++) {
       if(callback(array[i])) {
        return array[i]
       }
    }
}

console.log(students.find(s => s.name >= 'Sega' ))
console.log(ourFind(students, s => s.name >= 'Sega' ))