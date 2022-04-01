/** Task: 1
 * implement factorial algorithm using for, while, do..while operators
 * assign the result to corresponding variable
 * for -> forFactorial: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
 * while -> whileFactorial: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while
 * do..while -> doFactorial: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/do...while
 */
let forFactorial = 1;
let whileFactorial = 1;
let doFactorial = 1;

const n = 10; //10! = 3628800

for (let i = 1; i <= n; i++) {
    forFactorial *= i;
}

let a = 0;
while (a < n) {
    a += 1;
    whileFactorial *= a;
}
let b = 0;
do {
    b += 1;
    doFactorial *= b;
} while (b < n);

/** Task: 2
 * return the concatenated string from an array of substring
 * assign the result to variable 'str'
 * hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
 */
let str = '';
const substr = ['I', ' love', ' JS'];

for (let value of substr) {
    str += value;
}

/** Task: 3
 * calculate a total of income of certain person
 * assign the result to the variable 'totalIncome'
 * hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
 */
let totalIncome = 0;
const personIncomes = {
    salary: 1985,
    rent: -600,
    interestOnDeposit: 250,
    otherExpences: -300,
};

for (let key in personIncomes) {
    totalIncome += personIncomes[key];
}

module.exports = {
    forFactorial,
    whileFactorial,
    doFactorial,
    str,
    totalIncome,
};
