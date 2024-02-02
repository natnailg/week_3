
// Filter => selectivly extracting elements based on certain criteria, it will expect a function that returns Boolean, it. it returns an Array.
const employ = [
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

const isChair = (employ) => {
    return employ.title === 'Chair'
}
const chairs = employ.filter(isChair)
console.log(chairs)  ///printed the array 


const getNameofChairs = (employ) => {
    return employ.name
}
const getNameofchairOnly = employ.filter(isChair).map(getNameofChairs)
console.log(getNameofchairOnly)