//E0
//Goofy Hoisting Behaviors
// demo();

// console.log(varV);

// var varV;

// varV = 5;

// console.log(varV);

// demo();

// function demo() {
//      if (varV === undefined) {
//      console.log("Execute some code.")
// } else {
//      console.log(`The number ${varV}.`)
// }};

//E1
// function outerFunction() {
// 	let outerVar = "I'm outside!";

// 	function innerFunction() {
// 		let innerVar = "I'm inside!";
// 		console.log(outerVar); // Can we access outerVar? Yes.
// 		console.log(innerVar); // Can we access innerVar? Yes.
// 	}

// 	innerFunction();
// }

// outerFunction();

//E2

// preemptiveFunction('WHOA!'); //The function is hoisted so it does not matter that we call it before it is declared. 

// function preemptiveFunction(exclaim) {
//      console.log(`${exclaim} A function from the future!`)
// };

//E3

// let animal = "owls";

// function nestedFunc(sticks) {
//      let material = sticks;
//      function insideNest() {
//           let eggs = animal;
//           console.log(`The nest is built of ${material} and contains baby ${eggs}`)
//      }
//      insideNest();
// }

// nestedFunc('willow twigs');

//E4
// Declare a global variable here
// let myGlobe = "Earth";  

// function modifyGlobal() {
//     myGlobe = "Mars";
//     console.log(myGlobe); // Try to modify the global variable here
// }

// function localScopeTest() {
//      let myGlobe = "Venus";
//      console.log(myGlobe);
//     // Declare a local variable with the same name as the global variable
// }

// console.log(myGlobe);
// modifyGlobal();
// localScopeTest();
// console.log(myGlobe);
// // Call both functions here
// //Variable can be modified if declared as let, if declared as const modifyGlode() throws error. var behaves same way as let here.  

//E5
// function functionFactory(banan) {
    
//     return function bananaFactory(banan2) {
//      console.log(`This ${banan} is bananas. ${banan2}`)
//     }
// };

// let storedFunc = functionFactory('bananas')

// storedFunc('B-A-N-A-N-A-S');

//E6
// let param;
// console.log(param);

// function hoistingTest() {
// let param = "BANANAS";
// console.log(param);
// }

// hoistingTest();
// console.log(param);

// param = 'oranges';
// console.log(param);

// function hoistingTest2() {
// console.log(param);
// }

// hoistingTest2();

// function hoistingTest3() {
// param = 'Kiwis'
// console.log(param);
// }

// hoistingTest3();

// console.log(param);


// //Global "param" remains undefined even after execution of the function because param is set locally within hoistingTest() and refers to a different variable by the same name. After defining the global variable executing hoistingTest2() shows the assigned value of the global variable. Finally, and most confusingly, hoistingTest3 actually sets the global variable to Kiwis for subsequent points in the code. This could be prevented with making param a const. 

//E7
// function setupCounter() {
//   let count = 0;
  
//   return function() {
//     console.log(count);
//     return count++;
//   };
// }

// let counter = setupCounter();
// counter();
// counter();
// counter();
// counter();
// counter();

// // Create a counter instance and invoke it to test

//E8
// function resetCounter() {
//   let count = 0;
//   return function() {
//     console.log(count);
//     if (count < 5) {
//     return count++
//   } else { return count = 0 
// }}};

// let counter = resetCounter();
// counter();
// counter();
// counter();
// counter();
// counter();
// counter();
// counter();
// counter();
// counter();
// counter();
// counter();
// counter();
// counter();
// counter();

// //counter() basically keeps invoking the inner function, even though the variable was declared in the outer function. It's basically as if we never even had resetCounter() and simply declared "let count = 0;" as a global variable and just used what was the inner anonymous function() to iterate the counter. When I think about it that way, closures make a lot more sense. 

//E9
// let gloParam = 'SNAKES';
// console.log(`There are ${gloParam} on this plane`);

// function func1() {
//      newParam = gloParam;
//      console.log(newParam);
//      newParam = "BANANAS"
//      return function func3() {
//           console.log(`This business is ${newParam}`)
//      }
//  }


// function func2() {
//      let locParam = 'KIWIS';
//      return function func4() {
//           console.log(`This island is full of ${locParam}, but are there still ${gloParam} here?`)
//      }
// }
// let virtualFunc2 = func2();
// virtualFunc2();
// let virtualFunc = func1();
// virtualFunc();
// virtualFunc2();
// console.log(gloParam);

let globalFrosting = "white";

function dumpFoodColoring() {
     globalFrosting = "red";
     return function smallBowl1() {
           console.log(`The frosting in this bowl is ${globalFrosting}`)

}};

function containOwnFrosting() {
     let localFrosting = "green";
          return function smallBowl2() {
           console.log(`The frosting in this bowl is ${localFrosting}`)
}};

console.log(`The frosting in the global bowl is ${globalFrosting}`);
dumpFoodColoring()();
containOwnFrosting()();
console.log(`The frosting in the global bowl is ${globalFrosting}`);


//I think... I get it.  It's like you're making frosting, and you have your global scope, which is the big mixing bowl full of computer frosting. You could modify the whole (global) bowl by putting food coloring in at any point. You could also make smaller bowls or closures of frosting containing local variables and the food coloring in those small bowls wouldn't affect the color of the big bowl. However, you could put food coloring in the big bowl and then put it in a small bowl and that would be like rewriting the global variable to then use it in a function.  This analogy is pretty bad, but like I said, I think I get the overall premise. 