

const numbers = [1,2,3,4,5,6,7];

const hasEvenNumber = numbers.some((number) => number % 2 == 0);

// console.log(hasEvenNumber)

const currentUserRoles = ["user","editor","admin"];
const featureAccessRoles = ["admin","manager"];

const canAccess = currentUserRoles.some((role)=>{
    featureAccessRoles.includes(role)
})


// console.log(canAccess)


// Array.from()

const arr = Array.from({length:5}).fill("");
const arr2 = Array.from({length:5}).fill(null);
const arr3 = Array.from({length:5}).fill(0);
// console.log(arr)

const arr4 =Array.from([1,2,3] ,(value,i)=> value * value )

console.log(arr4)