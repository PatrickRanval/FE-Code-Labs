//Goofy Hoisting Behaviors
demo();

console.log(varV);

var varV;

varV = 5;

console.log(varV);

demo();

function demo() {
     if (varV === undefined) {
     console.log("Execute some code.")
} else {
     console.log(`The number ${varV}.`)
}};


