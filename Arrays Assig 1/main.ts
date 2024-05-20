

// Q1: Part 1: Basic Arrays - Product Inventory
//***********************************************************************************************

//1. Define a type alias named Product to represent a product with the following  properties: 
// • name (string): The name of the product. 
// • price (number): The price of the product. 
// • inventory (object): An object containing inventory details including: • stock (number):
// The number of products available. 
// • colorOptions (string[ ]): An array listing available colors. 
// 2. Create an array named products containing at least three product objects.
// Each  product object should include a name, price, and inventory details.
// 3. Implement a function named changeColor that takes a product object and a new 
// color as input. This function should update the color property of the product and 
// adjust the price based on the new color (implement your own logic, e.g., increase by 
// 10% for red, decrease by 5% for blue). 
// 4. Display each product's name, price, stock, and available colors. Iterate
// through the products array and print each product's details. 


type Product = {
    name: string,
    price: number,
    color: string,
    inventory: {
        quantity: number,
        colorOption: ["purple", "orange", "blue"]
    };

};

let product1: Product = {
    name: "Hijabs",
    price: 1000,
    color: "purple",
    inventory: {
        quantity: 10000,
        colorOption: ["purple", "orange", "blue",]
    },

};
let product2: Product = {
    name: "Lolipop",
    price: 20,
    color: "brown",
    inventory: {
        quantity: 10,
        colorOption: ["purple", "orange", "blue"]
    },
};
let product3: Product = {
    name: "cocomo",
    price: 55,
    color: "red",
    inventory: {
        quantity: 25,
        colorOption: ["purple", "orange", "blue"]
    },
};
let products: Product[] = [
    product1,
    product2,
    product3
];
let changeColor = (object: Product, newColor: string) => {
    object.color = newColor
    if (object.color === "purple") {
        let ipercent10: number = object.price / 100 * 10
        object.price += ipercent10
    }
    else if (object.color === "orange") {
        let ipercent5: number = object.price / 100 * 5
    }
    else if (object.color === "blue") {
        let dpercent10: number = object.price / 100 * 10
        object.price -= dpercent10
    }
}
products.forEach((item) => {
    console.log(item);
})
changeColor(product1, "purple");
changeColor(product2, "orange");
changeColor(product3, "blue");

products.forEach((item) => {
    console.log(item);
})

//****************************************************************************************************************
//Part 2: Multi-Dimensional Arrays and Tuples - Student Grades Challenge: 
//********************************************************************************************************************

//1. Define a TypeScript type alias named Student to represent a student with the  following properties: 
//• name (string): The name of the student.
// • grades (number[ ]): An array of grades for different subjects.

type Student = {
    name: string;
    grades: (number[]);
}

//2. Create an array named students containing at least three student objects. Each student 
// object should include a name and an array of grades. 

let students: Student[] = [
    {
        name: "Gohar",
        grades: [96, 88, 85]
    },
    {
        name: "Anoshay",
        grades: [79, 67, 59]
    },
    {
        name: "Yousra",
        grades: [92, 96, 85]
    }

]
console.log(students);

//3. Implement a function named calculateAverageGrade that takes a student's grades as
//  input and returns the average grade for that student. 

function calculateAverageGrade9(grades: number[]): number {
    let total = grades.reduce((sum, grade) => sum + grade, 0);
    return total / grades.length;
}

//4. Display each student's name and average grade. Iterate through the students
// array,  calculate the average grade for each student using the calculateAverageGrade 
// function, and print their name and average grade. 

function displayStudentGrades(student: Student[]): void {
    student.forEach(student => {
        let averageGrade = calculateAverageGrade9(student.grades);
        console.log(`Name: ${student.name}, Average Grades: ${averageGrade.toFixed(2)}`);
    })
}
displayStudentGrades(students);

//Part 3: Array with Types and Indexing - Employee Salaries Challenge: 
//*************************************************************************************************************************

//1. Define a type alias named Employee with the following properties: 
//• name (string): The name of the employee. 
//• hoursWorked (number): The number of hours the employee worked. 
//• hourlyRate (number): The hourly rate of the employee. 
//• salary (number): The base salary of the employee. 

type Employee = {
    name: string;
    houseWorked: number;
    hourlyRate: number;
    salary: number
}

//2. Define an array named employees containing employee objects. Each employee  object should
// include a name, hoursWorked, hourlyRate, and salary.

let employees: Employee[] = [
    {
        name: "Yousra",
        houseWorked: 50,
        hourlyRate: 7,
        salary: 60
    },
    {
        name: "Hassan",
        houseWorked: 56,
        hourlyRate: 9,
        salary: 90
    },

]

// 3. Implement a function named calculateSalary that calculates the salary for each  employee 
//based on the hours worked and hourly rate. 

function calculateSalary(employee: Employee): void {
    employee.salary = employee.hourlyRate * employee.houseWorked;

    if (employee.houseWorked >= 50) {
        employee.salary *= 1.10;
    }
}

//4. If an employee has worked 20 hours or more, apply a 10% bonus to their salary.

function displayEmployeeSalaries(employees: Employee[]): void {
    employees.forEach(employee => {
        calculateSalary(employee);
        console.log(`Name: ${employee.name}, Hours Worked: ${employee.houseWorked}, Hourly Rate: $${employee.hourlyRate.toFixed(2)}, Salary: $${employee.salary.toFixed(2)}`);
    });
}


displayEmployeeSalaries(employees);


