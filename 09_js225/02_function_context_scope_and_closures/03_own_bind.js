function myBind(func, context) {
  return function() {
    return func.apply(context, arguments);
  };
}

var obj = {
  a: 10,
};

let show = function() {
  console.log(this.a);
}

let test = myBind(show, obj);

test();