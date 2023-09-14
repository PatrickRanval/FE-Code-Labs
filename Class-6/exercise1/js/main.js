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

class Library {
     constructor (name) {
          this.name = name;
          this.collection = [];
     }
     
     addBook(book) {
          this.collection.push(book);          
     }

     findIndexByTitle(searchString) {
          for (let i=0; i < this.collection.length; i++) {
               const book = this.collection[i];
               const regex = new RegExp(searchString, 'gi');

               if (regex.test(book.title)) {
                    return i;
               }
          }
     return -1;
     }
     removeBookByIndex(index) {
          if (index >= 0 && index < this.collection.length) {
          this.collection.splice(index, 1);
      }
      return this.collection;      
}
     listCollection() {
          console.log(`The Holdings of ${this.name} are as follows:`)
          this.collection.forEach(printBook)
          function printBook(item, index, arr) {
               arr[index] = item;
               console.log(`'${item.title}'`, `by: ${item.author}`)
               index++
          }
     }

     sendBook(index, targetLibrary) {
          targetLibrary.addBook(this.collection[index]);
          this.removeBookByIndex(index);
     }
}




class Book {
     #ISBN;
     constructor (ISBN, title, author, yearPublished) {
          this.#ISBN = ISBN;
          this.title = title;
          this.author = author;
          this.yearPublished = yearPublished;
     }
     get getISBN() {
          return this.#ISBN;
     }


};

const paducah = new Library('Paducah Public Library');
const capeG = new Library('Cape Girardeau Public Library');

paducah.addBook(new Book('9780884046813', 'Battlefield Earth', 'L. Ron Hubbard', 1982));
capeG.addBook(new Book('9780884046814', 'The Last Colony', 'John Scalzi', 2008));

const ISBN9780451530783 = new Book('9780451530783', 'Pride and Prejudice', 'Jane Austen', 1831)

const ISBN9780307969958 = new Book('9780307969958', 'Neuromancer', 'William Gibson', 1984);

const ISBN0764576593 = new Book('0764576593', 'Javascript for Dummies', 'Emily A. Vander Veer', 2004);

paducah.addBook(ISBN9780451530783);
capeG.addBook(ISBN9780451530783);
paducah.addBook(ISBN9780307969958);
capeG.addBook(ISBN0764576593);

// console.log(paducah);
// console.log(capeG);
console.log(paducah.findIndexByTitle('battle'));
console.log(paducah.collection[0])
console.log('############################');
paducah.removeBookByIndex(0);

paducah.listCollection();
console.log('############################');
capeG.listCollection();

console.log('############################');

capeG.sendBook(2, paducah);
paducah.sendBook(1, capeG);

paducah.listCollection();
console.log('############################');
capeG.listCollection();

//Known Issues: findIndexByTitle only returns the first result that qualifies. There could be multiple titles that contain a string fragment, so it's necessary to check by logging. I feel like there's better ways to automate search and removal, but what I've built here is kind of on the bleeding edge of my understanding for today. 

//Using Index to send/remove books is probably bad because the value corresponding to each indexed array item could change each time the array does.  A more robust version might use the ISBNs directly, but I only thought of that later. 

//You gotta admit the sendBook function is pretty sick though. Like why else would we have a Library Class if we weren't going to have multiple libraries in the network. Frankly I think Cape gets the better end of the bargin getting Neuromancer after sending Javascript for Dummies. 

//I also learned that Javascript isn't fond of nondecimal numbers leading with 0, which is why I changed ISBNs to strings. 

//This was a good exercise, I think I learned a lot. 




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
