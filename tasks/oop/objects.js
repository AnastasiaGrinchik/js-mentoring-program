/**
 * JS Objects: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
 * create object person with firstName and lastName properties
 * implement method getFullName that returns full name
 */
const person = {
    firstName: 'Ivan',
    lastName: 'Ivanov',
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    },
}; //put you object here

/**
 * create object student that has property grade and method getGrade
 * set person as prototype of student
 */
const student = {
    grade: 10,
    getGrade() {
        return this.grade;
    },
}; //put you object here
student.__proto__ = person;

/**
 * create new instance of student using Object.create
 */
const student2 = Object.create(student); //put you object here

module.exports = {
    person,
    student,
    student2,
};
