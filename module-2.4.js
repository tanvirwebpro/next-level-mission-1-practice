

const numbers = [1,2,3,4,5,6,7];

const hasEvenNumber = numbers.some((number) => number % 2 == 0);

console.log(hasEvenNumber)

const currentUserRoles = ["user","editor"];
const featureAccessRoles = ["admin","manager"];

const canAccess = currentUserRoles

// Array.from()