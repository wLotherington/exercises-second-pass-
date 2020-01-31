global.a = 10;
global.b = 20;

var obj = {
  a: 1,
  b: 2,
};

function myBind(func, context) {
  return function() {
    return func.apply(context, arguments);
  };
}

var add = function(test) {
  console.log(this.a + this.b);
  console.log(test);
};

var bound = myBind(add, obj);
bound('hi');