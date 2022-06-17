/*JavaScript Bitwise AND
Bitwise AND & returns 1 if the corresponding bits of both operands are 1 else it returns 0.
Let's take a look at the bitwise AND operation of two integers 12 and 25.
In binary,

12 = 01100
25 = 11001

// Bitwise AND Operation of 12 and 25

    00001100
&   00011001
    ---------
    00001000  = 8 (In decimal)
Note: Converting 12 to 32-bit binary gives us 00000000000000000000000000001100 and 25 gives 
00000000000000000000000000011001. However, we have removed the preceding zeros for simplicity.*/



//Example 1: Bitwise AND Operator
// bitwise AND operator example

/*let a = 12; 
let  b = 25; 

result = a & b; 
console.log(result); // 8 
In the above program,
The binary value of 12 is 00000000000000000000000000001100
The binary value of 25 is 00000000000000000000000000011001.
When bitwise AND operation is performed, the binary result will be 
00000000000000000000000000001000 which converts into the decimal value 8.*/




/*JavaScript Bitwise OR
Bitwise OR | returns 1 if either of the corresponding bits of one operand is 1 else returns 0.


Let's take a look at the bitwise OR operation of two integers 12 and 25.

In binary,

12 = 01100
25 = 11001

// Bitwise OR Operation of 12 and 25

    00001100
|   00011001
    --------
    00011101  = 29 (In decimal)*/


//Example 2: Bitwise OR Operator
// bitwise OR operator example
//let a = 12; 
//let  b = 25; 
    
//result = a | b; 
//console.log(result); // 29
//When bitwise OR operation is performed, the binary result will be 
//00000000000000000000000000011101 which converts into the decimal value 29.




/*JavaScript Bitwise XOR
Bitwise XOR ^ returns 1 if the corresponding bits are different and returns 0 if the corresponding bits are the same.


In binary,

12 = 01100
25 = 11001

// Bitwise XOR Operation of 12 and 25

    00001100
^   00011001
    --------
    00010101  = 21 (In decimal)

Example 3: Bitwise XOR Operator
// bitwise XOR operator example
let a = 12; 
let  b = 25; 

result = a ^ b; 
console.log(result); // 21

When bitwise XOR operation is performed, the binary result will be 
00000000000000000000000000010101 which converts into the decimal value 21.*/




/*JavaScript Bitwise NOT
Bitwise NOT ~ inverts the bit( 0 becomes 1, 1 becomes 0).


In binary,

12 = 00000000000000000000000000001100

// Bitwise Not Operation of 12 

    ~ 00000000000000000000000000001100
      ---------------------------------
      11111111111111111111111111110011  = -13(In decimal)

While converting 11111111111111111111111111110011 to decimal, the value would be
4294967283. But when using bitwise operator, the value is computed in signed 2's complement
format except for zero-fill right shift.
2's complement is computed by inverting the bits(1's complement) and then adding 1. For example      
13 in binary: 00000000000000000000000000001101
1's complement of 13: 11111111111111111111111111110010

2's complement of 13: 11111111111111111111111111110010
                                                    +1
                      ---------------------------------
                      11111111111111111111111111110011

Notice the 2's complement of 13 (i.e. -13) is 11111111111111111111111111110011. This value
is equivalent to the bitwise NOT of 12.

Example 4: Bitwise NOT Operator
// bitwise NOT operator example
let  b = 12;

result = ~b;

console.log(result); // -13
When bitwise NOT operation is performed, the binary result will be 
11111111111111111111111111110011 which converts into the decimal value -13.
Note: Bitwise NOT of a number x gives -(x + 1). Notice above ~2 gives -3 */




/*JavaScript Left shift
In the left shift operator <<, the left operand specifies the number and the right operand
specifies the number to be shifted left. Zero bits are added to the right and excess bits
from the left are discarded.

for example:
let a = 8;
let  b = 1;

result = a << b;

// 1 ( 00000000000000000000000000010000 )
console.log(result);*/




/*JavaScript Sign-propagating right shift
In the right shift operator >>, the first operand specifies the number and the second 
operand specifies the number to be shifted right. Excess bits from the right are discarded.
The copies of the leftmost bit are shifted in from the left, hence the name sign-propagating

for exampe:-
let a = 8;
let b = 1;
// 11111111111111111111111111111101
let c = -3;

result = a >> b;
result1 = c >> b;

// 4 (00000000000000000000000000000100)
console.log(result); 

// -2 (11111111111111111111111111111111)
console.log(result1); */




/*JavaScript Zero-fill right shift
Zero-fill right shift >>> shifts the operand to the right by filling the zero bits to the 
left. Excess bits from the right are discarded

for example:-
let a = 8;
let b = 1;
let c = -3; 

result = a >>> b;
result1 = c >>> b;

// 4 (00000000000000000000000000000100)
console.log(result);

// 1073741823 (00111111111111111111111111111111)
console.log(result);*/



var a = 4; 
var b = 1; 
  
document.write("A & B = " + (a & b) + '<br>'); 
document.write("A | B = " + (a | b) + '<br>'); 
document.write("~A = " + (~a) + '<br>'); 




var a = 6;
var b = 1;

// AND Operation
document.write("A & B = " + (a & b) + '<br>');


// OR operation
document.write("A | B = " + (a | b) + '<br>');

// NOT operation
document.write("~A = " + (~a) + '<br>');


// Sign Propagating Right Shift
document.write("A >> B = " + (a >> b) + '<br>');


// Zero Fill Right Shift
document.write("A >>> B = " + (a >>> b) + '<br>');


// Left Shift
document.write("A << B = " + (a << b) + '<br>');



















    




    

