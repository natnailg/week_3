const uniq = required('lodash/uniq')

// reduce is taking in an array and creating any other value,

//first example 
//lets get the sum of these numbes
const numbers4 = [1,2,3,4]

const addtoacc = (acc, current) => {
    return acc + current
}

const sum = numbers4.reduce(addtoacc,0)   //that zero is the inital for current to be 0 


// console.log(sum)

//acc = 0  ---> because that its starting value 
//current = 1 ---> 
//Return value = 1

//acc = 1 ------> its going to be the acc + current so 1 
//curent = 2
//return = 3

///second example fof reduced funtion, at a bigger level 
const inventory = [
    {
        type: 'Monitor',
        brand: 'Lenova', 
        listPrice: 1000, 
        wholesale: 400, 
        stock: 5,
    }, 
    {
        type: 'Monitor',
        brand: 'Dell', 
        listPrice: 1200, 
        wholesale: 700, 
        stock: 3,
    },   
    {
        type: 'iPhone 13',
        brand: 'Apple', 
        listPrice: 1100, 
        wholesale: 1000, 
        stock: 14,
    },
    {
        type: 'macbook pro',
        brand: 'Apple', 
        listPrice: 3000, 
        wholesale: 2800, 
        stock: 14,
    },
    

    {
        type: 'Laptop',
        brand: 'Asus', 
        listPrice: 2300, 
        wholesale: 2000, 
        stock: 4,
    },  

]

//How much profit potential do we have?


const getPotentialProfit = (acc,item) => {
    const profitPerItem = item.listPrice - item.wholesale 
    const totalprofit = profitPerItem * item.stock
    return totalprofit + acc
}

const totalinstorpotentialprofit = inventory.reduce(getPotentialProfit, 0)

console.log("totalinstorepotentialprofit",totalinstorpotentialprofit)

const appleproduct = (inventory)=>{
    return inventory.brand === 'Apple'
}
const prodct = inventory.filter(appleproduct).reduce(getPotentialProfit,0)
console.log(prodct)  ///printed the array 

//instead of specifiying each brand lets automatically all the brands 
const brands = uniq(inventory.map(item => item.brand))

console.log(brands)

brands.map(brand =>{
    const itemsOfBrand = inventory.filter(item => item.brand === brand)
    console.log(brand, itemsOfBrand)

})