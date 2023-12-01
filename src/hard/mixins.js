// For Questions open => ./src/questions.js
let sayHiMixin = {
  sayHi() {
    console.log(`Hello ${this.name}`);
  },
  sayBye() {
    console.log(`Bye ${this.name}`);
  },
};

class Person {
  constructor(name) {
    this.name = name;
  }
}

// copy the methods
Object.assign(Person.prototype, sayHiMixin);
new Person("John").sayHi();

class AIHuman extends Person {}

const astro = new AIHuman("AI");

console.log(astro.sayHi());
