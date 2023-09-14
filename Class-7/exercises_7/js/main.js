//E1

// class Subject {
// 	constructor() {
// 		this.observers = [];
// 	}
//      addObserver(observer) {
//           this.observers.push(observer);
//      }
//      removeObserver(subject) {
//           const index = this.observers.indexOf(observer);
//           this.observers.splice(index, 1);
//      }
//      notifyObservers(data) {
//           this.observers.forEach(observer => observer.update(data));
//      }
// }

// class Observer {
// 	update(data) {
// 		console.log(`Observer updated with template ${data}!`);
// 	}
// }

// const database = new Subject();
// const observer1 = new Observer();
// const observer2 = new Observer();

// database.addObserver(observer1);
// database.addObserver(observer2);

// database.notifyObservers("Here's some data");

//E2
// const person = {
// 	name: 'John',
// 	age: 30,
// 	address: {
// 		city: 'New York',
// 		country: 'USA',
// 	},
// };

// const fruits = ['apple', 'banana', 'cherry', 'date'];

// // const {name, age} = person;

// // console.log(name);
// // console.log(age);

// const [,a,,b] = fruits;

// console.log(a);
// console.log(b);

// const {name, age, address, address:{city, country}} = person;

// console.log(name);
// console.log(age);
// console.log(address);
// console.log(city);
// console.log(country);

//E3
// async function fetchPosts() {
// 	const url = 'https://jsonplaceholder.typicode.com/posts?_limit=10';
//           try {
//                let response = await fetch(url);
//                let data = await response.json();
//                await console.log('ASYNC/AWAIT:', data);
//         } catch (error) {
//                console.log('BIG FAIL', error)
//         }
// }

// fetchPosts();

//E4
class Subject {
	constructor() {
		this.observers = [];
	}

	addObserver(observer) {
		this.observers.push(observer);
	}

	removeObserver(observer) {
          const index = this.observers.indexOf(observer);
          this.observers.splice(index, 1);
	}

	notifyObservers(data) {
		this.observers.forEach(observer => observer.update(data));
	}

	async fetchAndNotifyasync() {
	const url = 'https://jsonplaceholder.typicode.com/posts?_limit=10';
          try {
               let response = await fetch(url);
               let data = await response.json();
               this.notifyObservers(data);
        } catch (error) {
               this.notifyObservers(error)
        }
}
}


class Observer {
	update(data) {
          if (Array.isArray(data)) {
          let [{title}, ...rest] = data;
          console.log(title);
          } else {
               console.log(data);
          }
     }
}


const database = new Subject();
const observer1 = new Observer();
const observer2 = new Observer();

database.addObserver(observer1);
database.addObserver(observer2);

database.fetchAndNotifyasync();

//Exercises completed.  I still feel really fuzzy on being able to follow functions being passed into functions, but I feel like these exercises helped. I ultimately really enjoyed the destructuring of objects, arrays, arrays inside of objects, etc.  I am not sure I always find the syntax intuitive, but it was cool. Having E4 be basically E1,2,3 stitched together was well-designed. It "felt" good to be able to copy and paste code I'd already built and understood. 