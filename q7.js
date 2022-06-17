Syntax:-

delete object
// or
delete object.property
// or
delete object['property']

/*
//Below is the example of the delete Operator.
<script>
	let emp = {
		firstName: "Raj",
		lastName: "Kumar",
		salary: 40000
	}

	console.log(delete emp.salary);
	console.log(emp);
</script>*/



/*Example: Assuming an object called person has three key-value pairs (i.e. firstName,last
Name and phone). Now, using the delete operator to delete the phone property will return true
<script>
	let person = {
		firstName: "John",
		lastName: "Doe",
		phone: 12345
	}

	console.log(delete person.phone);
	console.log(person);
</script>*/



/*Let’s try applying the delete operator for deleting a variable and a function.

<script>
	let num = 5;
	let sum = (a, b) => {
		return a + b;
	}

	console.log(delete num); //false
	console.log(delete sum); //false
</script>*/



/*<script>
	let person = {
		firstName: "John",
		lastName: "Doe",
		phone: 12345
	}

	let phone = person.phone;

	console.log(delete person.phone); //true
	console.log(phone); //12345
</script>*/



/*Exception: Global variables can be removed using the delete operator. Because the global
variables are properties of the window object and as delete works on objects, it’ll delete
 the variable
<script>
	toDelete = 5;

	// true
	console.log(delete toDelete);

	// toDelete is not defined
	console.log(toDelete);
</script>*/



/*Deleting Array Values Using delete: JavaScript arrays are after-all objects. So, the 
delete operator can be used. But it’ll cause a problem because after deleting the element 
from the array, this operator will show the position as empty and it’ll not update the 
array length
<script>
	let arr = [1, 2, 3]

	console.log(delete arr[0]); //true
	console.log(arr); //[empty, 2, 3]
</script>*/




/*Below is the example of the Comma operator.
Syntax:-

Expression1, Expression2, Expression3, ....so on


Example:

<script> 
    function x() { 
        document.write('one'+"</br>"); 
        return 'one'; 
    } 
    function y() { 
        document.write('two'+"</br>"); 
        return 'two'; 
    } 
    function z() { 
        document.write('three'+"</br>"); 
        return 'three'; 
    } 
  
    // Three expressions are 
    // given at one place 
    var x = (x(), y(), z()); 
  
    document.write(x); 
</script> */


/*The most useful application of comma operator is in loops. In loops, it is used to 
update multiple variables in the same expression.

<script>
for (var a = 0, b =5; a <= 5; a++, b--) {
document.write(a, b);
}
</script>*/



/*Below is the example of the Grouping operator. Syntax: ( )

The Grouping operator consists of a pair of parentheses around an expression or 
sub-expression to override the normal operator precedence so that expressions with 
lower precedence can be evaluated before an expression with higher priority
Example:-
<script>
	function gfg() {
	// 3 * (2 + 3)
	let value1= 3 * (2 + 3);
		// (3 + 2) * 3
	let value2= (3 + 2) * 3;
	document.write(value1 + "</br>" + value2);
	}
	gfg();
</script>*/


/*<script>
	function gfg() {
	// 5 * 5 + 5
	// 25+5
	// 30
	let value= 5 * 5 + 5 ;
	document.write("Without grouping operator: " + value);

	// 5 * (5 + 5)
	// 5*10
	// 50
	let value1= 5 * (5 + 5);
	document.write("</br>With grouping operator: "+ value1);
	}
	gfg();
</script>*/
				
























