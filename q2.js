//Example 2: Comparison operators in JavaScript
// equal operator
console.log(2 == 2); // true
console.log(2 == '2'); // true

// not equal operator
console.log(3 != 2); // true
console.log('hello' != 'Hello'); // true

// strict equal operator
console.log(2 === 2); // true
console.log(2 === '2'); // false

// strict not equal operator
console.log(2 !== '2'); // true
console.log(2 !== 2); // false



var a = 5, b = 10, c = "5";
var x = a;
console.log(a === c);
console.log(a == c);
console.log(a == x);
console.log(a != b);
console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);
console.log(a >= c);
console.log(a <= c);


a = 5
++a;          // a becomes 6
a++;          // a becomes 7
--a;          // a becomes 6
a--;          // a becomes 5



let var1 = 5, var2 = 5;

// 5 is displayed
// Then, var1 is increased to 6
console.log(var1++)

// var2 is increased to 6
// Then, var2 is displayed
console.log(++var2)


function gfg() { 
    let val1 = 5; 
      
    // Equality Operators
    document.write(val1 == 5);
    document.write("<br>");
      
    // Relational Operators
    document.write(val1 > 0);
} 
gfg(); 


// Illustration of (==) operator
// let val1 = 5;
// let val2 = '5';

// Checking of operands
console.log(val1 == 5);
console.log(val2 == 5);        
console.log(val1 == val1);

// Check against null and boolean value
console.log(0 == false);   
console.log(0 == null);


// Illustration of (==) operator
// let obj1 = {'val1': 'value'};
// let obj2 = {'val2': 'value'};

// Checking of operands
console.log(obj1.val1 == 'value');        
console.log(obj1 == obj2);
console.log(obj1.val1 == obj2.val2);

// Check against undefined
console.log(0 == undefined);   
console.log(null == undefined);



// Illustration of (!=) operator
// let val1 = 5;
// let val2 = '5';
  
// Checking of operands
console.log(val1 != 6);
console.log(val2 != '5');        
console.log(val1 != val1);
  
// Check against null and boolean value
console.log(0 != false);   
console.log(0 != null);



// Illustration of (!=) operator
// let obj1 = {'val1': 'value'};
// let obj2 = {'val2': 'value'};

// Checking of operands
console.log(obj1.val1 != 'value');        
console.log(obj1 != obj2);
console.log(obj1.val1 != obj2.val2);

// Check against undefined
console.log(0 != undefined);   
console.log(null != undefined);



// Illustration of (===) operator
// let val1 = 5;
// let val2 = '5';

// Checking of operands
console.log(val1 === 6);
console.log(val2 === '5');        
console.log(val1 === val1);

// Check against null and boolean value
console.log(0 === false);   
console.log(0 === null);



// Illustration of (===) operator
// let obj1 = {'val1': 'value'};
// let obj2 = {'val2': 'value'};

// Checking of operands
console.log(obj1.val1 === 'value');        
console.log(obj1 === obj2);
console.log(obj1.val1 === obj2.val2);

// Check against undefined
console.log(0 === undefined);   
console.log(null === undefined);



// Illustration of (!==) operator
// let val1 = 5;
// let val2 = '5';
 
// Checking of operands
console.log(val1 !== 6);
console.log(val2 !== '5');        
console.log(val1 !== val1);
 
// Check against null and boolean value
console.log(0 !== false);   
console.log(0 !== null);



// Illustration of (!==) operator
// let obj1 = {'val1': 'value'};
// let obj2 = {'val2': 'value'};

// Checking of operands
console.log(obj1.val1 !== 'value');        
console.log(obj1 !== obj2);
console.log(obj1.val1 !== obj2.val2);

// Check against undefined
console.log(0 !== undefined);   
console.log(null !== undefined);




// Illustration of (>) operator
// let val1 = 5;
// let val2 = "5";

// Checking of operands
console.log(val1 > 0);
console.log(val2 > "10");        
console.log(val1 > "10");
console.log(val2 > 0);




// Illustration of (>) operator
// let obj1 = {'val1': 1};
// let obj2 = {'val2': 3};

// Checking of operands
console.log(obj1.val1 > 0);        
console.log(obj1 > obj2);
console.log(obj1.val1 > obj2.val2);
console.log(obj2 > obj1);
console.log(obj2.val2 > obj1.val1);



// Illustration of (>=) operator
// let val1 = 5;
// let val2 = "5";
 
// Checking of operands
console.log(val1 >= 5);
console.log(val2 >= "15");        
console.log(val1 >= "5");
console.log(val2 >= 15);



// Illustration of (>=) operator
// let obj1 = {'val1': 1};
// let obj2 = {'val2': 3};

// Checking of operands
console.log(obj1.val1 >= 0);        
console.log(obj1 >= obj2);
console.log(obj1.val1 >= obj2.val2);
console.log(obj2 >= obj1);
console.log(obj2.val2 >= obj1.val1);



// Illustration of (<) operator
// let val1 = 5;
// let val2 = "5";
 
// Checking of operands
console.log(val1 < 15);
console.log(val2 < "0");        
console.log(val1 < "0");
console.log(val2 < 15);



// Illustration of (<) operator
// let obj1 = {'val1': 1};
// let obj2 = {'val2': 3};

// Checking of operands
console.log(obj1.val1 < 10);        
console.log(obj1 < obj2);
console.log(obj1.val1 < obj2.val2);
console.log(obj2 < obj1);
console.log(obj2.val2 < obj1.val1);



// Illustration of (<=) operator
let val1 = 5;
let val2 = "5";

// Checking of operands
console.log(val1 <= 15);
console.log(val2 <= "0");        
console.log(val1 <= "0");
console.log(val2 <= 15);



// Illustration of (<=) operator
let obj1 = {'val1': 1};
let obj2 = {'val2': 3};

// Checking of operands
console.log(obj1.val1 <= 10);        
console.log(obj1 <= obj2);
console.log(obj1.val1 <= obj2.val2);
console.log(obj2 <= obj1);
console.log(obj2.val2 <= obj1.val1);









