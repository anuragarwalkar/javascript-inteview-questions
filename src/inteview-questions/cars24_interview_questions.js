// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// What is Temporal Dead Zone
function callMe() {
  console.log(a, b, c);
  var a = "Anurag";
  let b = "BMW";
  const c = "CURL";
}

callMe();
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// What is implicit and explicit binding
const obj = {
  name: "Anurag",
  display: function () {
    console.log(this.name);
  },
};

const obj1 = {
  name: "Steve",
};

obj.display.call(obj1);
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
