
function greet(name: string):string {
    return `hello ${name}, Welcome to ChaiCode`;
}
console.log(greet("Priyanka"))
console.log(greet("14"))
const username:string = "Learning Typescript"
console.log(greet(username));




/*
-> TypeScript is a typed superset of JavaScript. 
-> Any valid JavaScript is valid TypeScript, but TypeScript adds compile-time type-checking to catch bugs before your code runs.


Think of TypeScript as a strict contract or a security guard:

→(name: string) 
Input Rule:
You are telling TypeScript: "This function only accepts text (a string). Nothing else."

→): string  →
Output Guarantee:
You are telling TypeScript: "This function guarantees it will return text (a string) back to you."

→return \hello ${name}...`` 
Combines your text with the name and returns the final string.
*/