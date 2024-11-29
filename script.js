// script.js
const student = {
    name: "Frank",
    age: 20,
    enrolled: true,
    courses: ["Math", "Science", "Literature"],
    displayInfo: function () {
        return `Student: ${this.name}, Age: ${this.age}`;
    },
};

// Log properties
console.log(student.name); // Frank
console.log(student.age);  // 20

// Log method result
console.log(student.displayInfo()); // "Student: Frank, Age: 20"

// Convert object to JSON string
const studentJSON = JSON.stringify(student);
console.log(studentJSON);

// Convert JSON string back to object
const parsedStudent = JSON.parse(studentJSON);
console.log(parsedStudent);

// Compare objects
console.log(student === parsedStudent); // false (different references)

// Destructure name and courses
const { name, courses } = student;
console.log(name);    // Frank
console.log(courses); // ["Math", "Science", "Literature"]

// Array destructuring
const scores = [85, 92, 78, 90];
const [score1, score2] = scores;
console.log(score1); // 85
console.log(score2); // 92

// Clone object and add new property
const clonedStudent = { ...student, graduationYear: 2024 };
console.log(clonedStudent);

// Merge arrays
const newCourses = ["History", "Art"];
const combinedCourses = [...student.courses, ...newCourses];
console.log(combinedCourses); // ["Math", "Science", "Literature", "History", "Art"]

// Add method to dynamically add a course
student.addCourse = function (newCourse) {
    this.courses.push(newCourse);
};

// Add method to calculate total courses
student.totalCourses = function () {
    return this.courses.length;
};

// Test methods
student.addCourse("Physics");
console.log(student.courses); // ["Math", "Science", "Literature", "Physics"]

console.log(student.totalCourses()); // 4

//Bouns: Calculate average score using reduce
const averageScore = scores.reduce((sum, score) => sum + score, 0) / scores.length;
console.log(averageScore); // 86.25
