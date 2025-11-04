const numbers =[40,50,100,1,5,25,10]
const fruits = ["kola","anar","pepe","aam"]

const sortedNumber =numbers.sort((a,b)=> a-b);

// console.log(numbers)/
// console.log(sortedNumber)/



const sortedNumberDescending =numbers.sort((a,b)=> b-a);

console.log(sortedNumberDescending)/


// String er jonno 

fruits.sort((a,b)=>a.localeCompare(b));

// console.log(fruits)


// Nested array flat 

const arr = [1,12,3,4,5,[8,,[1,3,[4,5]]]]

const flatArr =arr.flat(Infinity).sort((a,b)=> a-b);

// console.log(flatArr)

const tagsFromPosts= [
    ["javascript","react","css"],
    ["node","express",],
    ["html","react","css"],
]

const filterTags = new Set(tagsFromPosts.flat())

console.log(filterTags)