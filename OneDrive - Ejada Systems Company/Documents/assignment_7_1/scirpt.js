// Test Case 1
let a = 9; // "009"

// Test Case 2
let b = 20; // "020"

// Test Case 3
let c = 110; // "110"

if (a < 10) {
    console.log(a.toString().padStart(3, "0")); //  009
   }
   if (b >= 10 && b < 100) {
    console.log(b.toString().padStart(3, "0")); //  020
   }
   if (c >= 100) {
    console.log(c.toString()); //  110
   }