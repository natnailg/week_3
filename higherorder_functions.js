const numbers = [2,4,5,7,1,4,52,26]

///******objective is to take the above arrray and make a new array of the old arrys * 2 */


// the old fashion solution 
// let numbersX2 = []
// for(let x = 0; x < numbers.length; x++){
//     const currentNumber = numbers[x]
//     const X2 = currentNumber * 2
//     numbersX2.push(X2)
// }
// console.log(numbersX2)
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//forEach -> this is the first of the higher order functions. it achives the same thing as for loop, just 
//minus the overhead of declaring a variable or the exit condition. the only PROBLEM is that it won't RETURN!!!!!!
// anything. 

// let numbersX2 = []   //empty array

// const multiplyBy2AndPush = (nums) =>{
//    numbersX2.push(nums * 2) //push it to the empty array
// }
// numbers.forEach(multiplyBy2AndPush)   //for each element that function is called

// console.log(numbersX2)
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//map => UNLIKE forEach map acctually returns something. 
// const multiplyBy2 = (number)=>{
//     return number*2
// }
// const numberX2 = numbers.map(multiplyBy2)
// console.log(numberX2)
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//map => UNLIKE forEach map acctually returns something. this is an example of map for 
// const employees = [
//     {
//         name: 'Mike',
//         title: 'Professor',
//         salary: 1000000,
//         department: 'Computer Science'
//     },
//     {
//         name: 'Madhuri',
//         title: 'Professor',
//         salary: 2000000,
//         department: 'Computer Science'
//     },
//     {
//         name: 'Mark',
//         title: 'Professor',
//         salary: 1000000000,
//         department: 'Computer Science and Cyber'
//     }
    
// ]

// const getDepartment = (employees) =>{
//     return employees.department
// }

// const Depart = employees.map(getDepartment)
// console.log(Depart)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

/// MAP- (flatMap),=> we don't want to print out arrays within arrays. it will flatten it so its just a listing them out individually 
const employees = [
    {
        name: 'Mike',
        title: 'Professor',
        salary: 1000000,
        department: ['Computer Science', 'Biology']
    },
    {
        name: 'Madhuri',
        title: 'Professor',
        salary: 2000000,
        department: 'Computer Science'
    },
    {
        name: 'Mark',
        title: 'Chair',
        salary: 1000000000,
        department: ['Computer Science', 'Mathematics']
    }

]

// const getDepartment = (employees) =>{
//     return employees.department
// }

// const Depart = employees.flatMap(getDepartment)
// console.log(Depart)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Filter => selectivly extracting elements based on certain criteria, it will expect a function that returns Boolean, it. it returns an Array.
// const employ = [
//     {
//         name: 'Mike',
//         title: 'Professor',
//         salary: 1000000,
//         department: ['Computer Science', 'Biology']
//     },
//     {
//         name: 'Madhuri',
//         title: 'Professor',
//         salary: 2000000,
//         department: 'Computer Science'
//     },
//     {
//         name: 'Mark',
//         title: 'Chair',
//         salary: 1000000000,
//         department: ['Computer Science', 'Mathematics']
//     }

// ]

// const isChair = (employ) => {
//     return employ.title === 'Chair'
// }
// const chairs = employ.filter(isChair)
// console.log(chairs)  ///printed the array 


// const getNameofChairs = (employ) => {
//     return employ.name
// }
// const getNameofchairOnly = employ.filter(isChair).map(getNameofChairs)
// console.log(getNameofchairOnly)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//find => always returns either one item or it will return undefined if it can't find anything, 
//similar to filter it expects a function will return Boolean 
// unlike filter however, it just returns the first thing that it finds to be true. 
// const emp = [
//     {
//         name: 'Mike',
//         title: 'Professor',
//         salary: 1000000,
//         department: ['Computer Science', 'Biology']
//     },
//     {
//         name: 'Madhuri',
//         title: 'Professor',
//         salary: 2000000,
//         department: 'Computer Science'
//     },
//     {
//         name: 'Mark',
//         title: 'Chair',
//         salary: 1000000000,
//         department: ['Computer Science', 'Mathematics']
//     }

// ]

// const isprofessor = (emp) =>{
//     return emp.title === 'Professor'
// }

// const aProfessor = emp.find(isprofessor)
// console.log(aProfessor)

//findindex => instead of returning the value it find it just returns the index instead. 
// const emp = [
//     {
//         name: 'Mike',
//         title: 'Professor',
//         salary: 1000000,
//         department: ['Computer Science', 'Biology']
//     },
//     {
//         name: 'Madhuri',
//         title: 'Professor',
//         salary: 2000000,
//         department: 'Computer Science'
//     },
//     {
//         name: 'Mark',
//         title: 'Chair',
//         salary: 1000000000,
//         department: ['Computer Science', 'Mathematics']
//     }

// ]

// const isprofessor = (emp) =>{
//     return emp.title === 'Professor'
// }

// const bprofessor = emp.findIndex(isprofessor)
// console.log(bprofessor)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//some() => takes in a function and returns a boolean. in sum if at least one is true it will return true. 
// const numero = [2,8,4,7]
// const isOdd = (numero) => {
//     return numero % 2 !== 0
// }
// const hasOddnumber = numero.some(isOdd)

// console.log(hasOddnumber) 

//every() => takes in a function and returns a boolean. in sum if at least one is false it will return fasle. 
// const numera= [2,8,4,7]
// const isEven = (numera) => {
//     return numera % 2 === 0
// }
// const hasEvenumber = numera.every(isEven)

// console.log(hasEvenumber) 


// //sort
// const Numero = [2,8,4,7]
// const alpha = ['a', 'v', 's', 'u', 'b']
// const sortnumber = Numero.sort()
// const sortalpha = alpha.sort()

// console.log(sortnumber) 

// console.log(sortalpha) 

// //reverse
// const sortednumbers = Numero.sort((a,b) => {
//     return b - a
// })

// console.log(sortednumbers)

// const emp = [
//     {
//         name: 'Mike',
//         title: 'Professor',
//         salary: 1000000,
//         department: ['Computer Science', 'Biology']
//     },
//     {
//         name: 'Madhuri',
//         title: 'Professor',
//         salary: 2000000,
//         department: 'Computer Science'
//     },
//     {
//         name: 'Mark',
//         title: 'Chair',
//         salary: 1000000000,
//         department: ['Computer Science', 'Mathematics']
//     },
//     {
//         name: 'Joe Biden',
//         title: 'President',
//         salary: 1000000000,
//         department: ['Computer Science', 'Mathematics']
//     }

// ]

// const sortBytitle = (empA, empB) => {
//     const titleA = empA.title
//     const titleB = empB.title

//     const valueMap = {
//         President: 5,
//         Chair: 2,
//         Professor: 1
//     }
//     return  valueMap[titleB] - valueMap[titleA] 
   

// }
// const employeesSortedByTitle = emp.sort(sortBytitle)
// console.log(employeesSortedByTitle)





//reduce

// const MyArray = [0,2,4,6,8]

// const myObject = {
//     somekey: 'somevalue', 
//     someotherkey: 'someotherkey'
// }


// const MyKey = 4

// console.log(MyArray[MyKey])
