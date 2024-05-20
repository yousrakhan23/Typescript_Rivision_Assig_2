// Q1: Part 1: Basic Arrays - Product Inventory
//***********************************************************************************************
var product1 = {
    name: "Hijabs",
    price: 1000,
    color: "purple",
    inventory: {
        quantity: 10000,
        colorOption: ["purple", "orange", "blue",]
    },
};
var product2 = {
    name: "Lolipop",
    price: 20,
    color: "brown",
    inventory: {
        quantity: 10,
        colorOption: ["purple", "orange", "blue"]
    },
};
var product3 = {
    name: "cocomo",
    price: 55,
    color: "red",
    inventory: {
        quantity: 25,
        colorOption: ["purple", "orange", "blue"]
    },
};
var products = [
    product1,
    product2,
    product3
];
var changeColor = function (object, newColor) {
    object.color = newColor;
    if (object.color === "purple") {
        var ipercent10 = object.price / 100 * 10;
        object.price += ipercent10;
    }
    else if (object.color === "orange") {
        var ipercent5 = object.price / 100 * 5;
    }
    else if (object.color === "blue") {
        var dpercent10 = object.price / 100 * 10;
        object.price -= dpercent10;
    }
};
products.forEach(function (item) {
    console.log(item);
});
changeColor(product1, "purple");
changeColor(product2, "orange");
changeColor(product3, "blue");
products.forEach(function (item) {
    console.log(item);
});
//2. Create an array named students containing at least three student objects. Each student 
// object should include a name and an array of grades. 
var students = [
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
];
console.log(students);
//3. Implement a function named calculateAverageGrade that takes a student's grades as
//  input and returns the average grade for that student. 
function calculateAverageGrade9(grades) {
    var total = grades.reduce(function (sum, grade) { return sum + grade; }, 0);
    return total / grades.length;
}
//4. Display each student's name and average grade. Iterate through the students
// array,  calculate the average grade for each student using the calculateAverageGrade 
// function, and print their name and average grade. 
function displayStudentGrades(student) {
    student.forEach(function (student) {
        var averageGrade = calculateAverageGrade9(student.grades);
        console.log("Name: ".concat(student.name, ", Average Grades: ").concat(averageGrade.toFixed(2)));
    });
}
displayStudentGrades(students);
//2. Define an array named employees containing employee objects. Each employee  object should
// include a name, hoursWorked, hourlyRate, and salary.
var employees = [
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
];
// 3. Implement a function named calculateSalary that calculates the salary for each  employee 
//based on the hours worked and hourly rate. 
function calculateSalary(employee) {
    employee.salary = employee.hourlyRate * employee.houseWorked;
    if (employee.houseWorked >= 50) {
        employee.salary *= 1.10;
    }
}
//4. If an employee has worked 20 hours or more, apply a 10% bonus to their salary.
function displayEmployeeSalaries(employees) {
    employees.forEach(function (employee) {
        calculateSalary(employee);
        console.log("Name: ".concat(employee.name, ", Hours Worked: ").concat(employee.houseWorked, ", Hourly Rate: $").concat(employee.hourlyRate.toFixed(2), ", Salary: $").concat(employee.salary.toFixed(2)));
    });
}
displayEmployeeSalaries(employees);
