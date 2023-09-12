//E1

// function globalFun() {
//      console.log(this)
// };

// globalFun();  //returns Window Object

// const objectMethod = {
//      field1: 'value',
//      fun2: function () {
//           console.log(this)
//      }
// };

// objectMethod.fun2();  //returns the objectMethod object

// const objArrowFun = {
//      field1: 'other value',
//      fun3: () => {
//           console.log(this)
//      }
// };

// objArrowFun.fun3(); //returns the Window object due to how arrow functions close

//E2

// personObject = {
//      name: 'Person',
//      age: 42,

//      greet() {
//           console.log(`Greetings, fellow human, my name is ${this.name} and I am ${this.age} years old.`)
//      }
// };
// const solomon = personObject;
// solomon.name = 'Solomon'; 
// solomon.age = 110;

// solomon.greet();

// const cindy = personObject;
// cindy.name = 'Cindy'; 
// cindy.age = 14;

// solomon.greet();
// cindy.greet(); 

//I didn't really understand how Exercise 2 vs. Exercise 3 were different in the way they were worded, so I used E2 as a means of showing what it would look like to build Solomon and Cindy as classless objects and why that causes problems. 

// E3
// class Person {
//      constructor(name, age) {
//           this.name = name;
//           this.age = age;
//      }
//      greet() {
//           console.log(`Greetings, fellow human, my name is ${this.name} and I am ${this.age} years old.`)
//      }
// };

// const solomon = new Person('Solomon', 110);
// const cindy = new Person('Cindy', 14);

// solomon.greet();
// cindy.greet();

// //This is better

//E4

// class Person {
//      constructor(name, age) {
//           this.name = name;
//           this.age = age;
//      }
//      static info() {
//           console.log(`This is a ${this.name} class`)
//      }
//      greet() {
//           console.log(`Greetings, fellow human, my name is ${this.name} and I am ${this.age} years old.`)
//      }
// };

// const solomon = new Person('Solomon', 110);

// // solomon.info(); //Doesn't run due to static keyword
// Person.info();  //Does run because static keyword indicates a Class method

// E5

// class Person {
//      constructor(name, age) {
//           this._name = name;
//           this._age = age;
//      }
//      static info() {
//           console.log(`This is a ${this.name} class`)
//      }
//      greet() {
//           console.log(`Greetings, fellow human, my name is ${this.name} and I am ${this.age} years old.`)
//      }
//      get age() {
//         return this._age;
//      }

//      set age(newAge) {
//         if (newAge < 0) {
//             console.log("Age can't be negative!");
//         } else {
//             this._age = newAge;
//         }
//     }
// };

// const solomon = new Person('Solomon', 110);

// solomon.age = -42;

// console.log(solomon.age);

//Okay, it works as expected. 

//E6

// class Person {
//      static #id = 0;
//      constructor () {
//           this._ID = Person.#id++;          
//      };

//   get getID() {
//      return this._ID;
//   }

// }

// let person1 = new Person();
// let person2 = new Person();
// console.log(person1.getID);
// console.log(person2.getID);

//E7

//E8
// class Student {
//      name;
//      grades;
//      constructor (name) {
//           if (typeof(name) === 'string') {
//           this.name = name;
//           this.grades = [];
//           } else { return alert(`${name} : Stop screwin around and enter the data in a sensible format`)}
//      }
// set addScore(score) {
//           this.grades.push(score);

//      }
// };


// function getLetterGrade(student) {
//      let sum = 0;
//      student.grades.forEach(myFunction) 
//      function myFunction(item, index, arr) {
//      arr[index] = item;
//      sum = sum + item;
//      index++         
// }  average = (sum/(student.grades.length)).toFixed(2);
// if (average >= 90) {
//      return `Grade: A with a Score of ${average}`
// } else if (average >= 80) {
//      return `Grade: B with a Score of ${average}`
// } else if (average >= 70) {
//      return `Grade: C with a Score of ${average}`
// } else if (average >= 60) {
//      return `Grade: D with a Score of ${average}`
// } else {
//      return `Grade: F with a Score of ${average}`
// }};

// const sandy = new Student('Sandy');
// const mandy = new Student('Mandy');
// const blandy = new Student('Blandy');
// sandy.addScore = 54;
// sandy.addScore = 56;
// sandy.addScore = 68;

// console.log(sandy.grades);

// console.log(getLetterGrade(sandy));

//Full disclosure, I try to avoid arrow functions because I don't really understand them. Maybe I should get on that?  Anyway, I know they don't really work well inside objects, with the "this" keyword because the way their closure behaves references the global scope.

//Also I don't really know what this exercise has to do with arrow functions, seeing as how I avoided them. I guess the getLetterGrade could've been written as an arrow function?
