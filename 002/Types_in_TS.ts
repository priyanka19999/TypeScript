// Type Annotation and Type Inference are two ways of defining the data types of variables, functions, and other values.

// Type Annotation means explicitly telling TypeScript what type of data a variable should store.
// Type Inference means TypeScript automatically identifies the data type based on the assigned value.


// Type Annotation

// Student Management System: Problem: You are developing a student management application. You need to store a student's name, age, marks and whether the student has passed.

let studentName: string = "Priyanka";
let studentAge: number = 22;
let studentMarks: number = 85;
let isPassed: boolean = true;

console.log(studentName);
console.log(studentAge);
console.log(studentMarks);
console.log(isPassed);
/*Priyanka
22
85
true*/

// Shopping Application: Problem: You are developing an e-commerce application. You need to calculate the total price of products.

function calculateTotal(
    price: number,
    quantity: number
): number {

    return price * quantity;
}

let total = calculateTotal(500, 3);

console.log(total); //1500




// Inference

// Employee Salary


let basicSalary = 30000;
let bonus = 5000;
let totalSalary = basicSalary + bonus;
console.log(totalSalary); // 35000




// Real-time Login Application
function checkLogin(username: string) {
    return username === "admin";
}
let loginStatus = checkLogin("admin");

console.log(loginStatus);



/*Syntax Error
A Syntax Error occurs when we write code that does not follow the correct rules

Type Error
A Type Error occurs when we use or assign a value that does not match the expected data type.
*/