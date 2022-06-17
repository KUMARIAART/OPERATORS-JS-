//unary operator example:-
let x = 10;
let y = +x;

console.log(y); // 10


let s = '10';
console.log(+s); // 10


let f = false,
    t = true;

console.log(+f); // 0
console.log(+t); // 1


let person = {
    name: 'John',
    toString: function () {
      return '25';
    },
  };
  
console.log(+person);


let c = 10;
let b = -c;

console.log(b); // -10


//let age = 25;
++age;

console.log(age); // 26



let ag = 25;
ag = ag + 1;
console.log(ag); // 26


let weigt = 90;
--weigt;

console.log(weight); // 89


let weight = 90;
weight = weight - 1;

console.log(weight); // 89


//binary operators:-

5 + 2; // 7
2 + '4'; // 24
8 + true; // 9
[5, 7, 2] + 4; // '5,7,24'
'hello' + ' there'; // 'hello there'


5 - 2; // 3
2 - '4'; // -2
8 - true; // 7
[5, 7, 2] - 4; // NaN
'hello' - ' there'; // NaN


5 * 2; // 10
2 * '4'; // 8
8 * true; // 8
[5, 7, 2] * 4; // NaN
'hello' * ' there'; // NaN


5 / 2; // 2.5
2 / '4'; // 0.5
8 / true; // 8
[5, 7, 2] / 4; // NaN
'hello' / ' there'; // NaN


5 % 2; // 1
2 % '4'; // 2
8 % true; // 0
[5, 7, 2] % 4; // NaN
'hello' % ' there'; // NaN


3 ** 3; // 27
2 ** '4'; // 16
5 ** true; // 5
7 ** 'two'; // NaN


//let number = 5;
number++; // 5
number; // 6
//let newNumber = 10;
++newNumber; // 11
newNumber; // 11


let number = 5;
number--; // 5
number; // 4
let newNumber = 10;
--newNumber; // 9
newNumber; // 9


10 < 20; // true
2.7 < 2.7; // false
'ball' < 'car'; // true


10 > 20; // false
2.7 > 2.7; // false
'ball' > 'car'; // false


10 <= 20; // true
2.7 <= 2.7; // true
'ball' <= 'car'; // true


10 >= 20; // false
2.7 >= 2.7; // true
'ball' >= 'car'; // false


4 == 4; // true
'hello' == 'hello'; // true
14 == '14'; // true
1 == true; // true
[1, 5, 10] == [1, 5, 10]; // false
//let items = ['hat', 'cat', 'map'];
items == items; // true


10 != 20; // true
10 != '10'; // false
1 != true; // false
[1, 5, 10] != [1, 5, 10]; // true
let items = ['hat', 'cat', 'map'];
items != items; // false


'14' === 14; // false
1 === true; // false
120.5 === 120.5; // true
[1, 5, 10] === [1, 5, 10]; // false


10 !== 20; // true
10 !== '10'; // true
1 !== true; // true
100 !== 100; // false


true && true; // true
false && true; // false
5 > 4 && 'hello' != 'there'; // true
'' && true; // ''


false || true; // true
false || false; // false
'hello' || false; // 'hello'
false || ''; // ''


null ?? 'default value'; // 'default value'
false ?? 'default value'; // false
5 > 2 ?? 'default value'; // true


let name = 'bob';
//let value = (4 + 5) / 2;


//let value = 4;
value *= 3;
value; // 12


//let value = 4;
value **= 2;
value; // 16


//let value = 4;
value /= 2;
value; // 2


//let value = 18;
value %= 5;
value; // 3


//let value = 12;
value += 8;
value; // 20


let value = 12;
value -= 8;
value; // 4

/*logical AND assignment &&=
The logical AND assignment operator will assign the value on the right side of the 
operation with the value only if the value on the left side is truthy.

let value = 12;
value &&= 8;
value; // 8
let value2 = null;
value2 &&= 10;
value2; // null/*


/*logical OR assignment ||=
The logical OR assignment operator will assign the value on the right side of the operation
with the value only if the value on the left side is falsy.

let value = '';
value ||= 'default value';
value; // 'default value'
let value2 = 'some value';
value2 ||= 'default value';
value2; // 'some value'/*


/*logical nullish assignment ??=
The logical OR assignment operator will assign the value on the right side of the operation
with the value only if the value on the left side is null or undefined.

let value = '';
value ??= 'default value';
value; // ''
let value2 = null;
value2 ??= 'default value';
value2; // 'default value'*/


//ternary operator:-

//Example: JavaScript Ternary Operator
// program to check pass or fail

let marks = prompt('Enter your marks :');

// check the condition
//let result = (marks >= 40) ? 'pass' : 'fail';

console.log(`You ${result} the exam.`);


//Ternary Operator Used Instead of if...else
// check the age to determine the eligibility to vote
//let age = 15;
//let result;

if (age >= 18) {
      result = "You are eligible to vote.";
} else {
      result = "You are not eligible to vote yet.";
}

console.log(result);



// ternary operator to check the eligibility to vote
let age = 15;
//let result =
    (age >= 18) ? "You are eligible to vote." : "You are not eligible to vote yet";
console.log(result);


//Nested ternary operators
// program to check if number is positive, negative or zero
let a = 3;
let result = (a >= 0) ? (a == 0 ? "zero" : "positive") : "negative";
console.log(`The number is ${result}.`);








