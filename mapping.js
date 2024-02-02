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