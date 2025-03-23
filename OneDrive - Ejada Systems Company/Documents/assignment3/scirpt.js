//number A
let a = 5;
let b = 9;
let c = 3;
let max = (a > b) ? (a > c ? a : c) : (b > c ? b : c);
console.log(`The maximum number is ${max}`);

//number B
let grade = 85;
if (grade > 90) {
 console.log("A");
} else if (grade > 80) {
 console.log("B");
} else if (grade > 70) {
 console.log("C");
} else if (grade > 60) {
 console.log("D");
} else {
 console.log("F");
}
//switch
let grade1 = 85;
switch (true) {
 case grade1 > 90:
   console.log("A");
   break;
 case grade1 > 80:
   console.log("B");
   break;
 case grade1 > 70:
   console.log("C");
   break;
 case grade1 > 60:
   console.log("D");
   break;
 default:
   console.log("F");
}
//number C
/*If a switch statement has two cases with the same value,
 only the first one will execute, and the second one will be
ignored (unreachable code). */
 // Example:
 let x = 1;
switch (x) {
 case 1:
   console.log("First case");
   break;
 case 1:
   console.log("Second case");
   break;
} //OUTPUT :First case
//switch uses strict comparison (===),
 //and it stops after the first matching case.Duplicate case values are not valid logic.

 //number D
 let selectedState = 'green';
switch (selectedState) {
 case 'red':
   console.log('STOP!');
 case 'green':
   console.log('Go');
 case 'yellow':
   console.log('wait...');
 default:
   console.log('chaos');
}//OUTPUT:
// Go 
//wait
//chaos
/*Explanation:
selectedState is 'green', so the case 'green' matches.
Since there’s no break, it falls through to the next cases:
case 'yellow' prints "wait..."/default → prints "chaos"
The switch keeps going after a match until a 
break is found (and there is none), so it logs all lines after 'green'.*/

//number E
let testValue = 4;
switch (testValue) {
 case '4':
   console.log('hi');
   break;
 default:
   console.log('bye');
}//OUTPUT:bya
/*why?Explanation:
Explanation:
 testValue is a number (4)
The case'4'is a string, and switch uses strict comparison (===), so 4 !== '4'
Therefore, the case doesn’t match, and the default runs.*/
