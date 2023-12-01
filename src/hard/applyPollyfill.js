const anotherObject = {
  name: "anurag",
  callMe: function () {
    console.log(this.name);
  },
};

const me = anotherObject.callMe;

Object.prototype.myApply = function (context, args = []) {
  let randomProp = Math.random();

  while (context[randomProp] !== undefined) {
    randomProp = Math.random();
  }

  context[randomProp] = this;
  context[randomProp](...args);

  delete context[randomProp];
};

me.myApply(anotherObject);
