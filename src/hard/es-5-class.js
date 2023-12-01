class Person {
  constructor(name) {
    this.name = name;
  }
}

new Person("John");

class AIHuman extends Person {}

const astro = new AIHuman("AI");

function Engine(name, model) {
  this.name = name;
  this.model = model;
}

function BMW(...args) {
  Engine.call(this, ...args);
}

console.log(new BMW("X7", "genx"));
