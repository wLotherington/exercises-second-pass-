// name property added to make objects easier to identify
Object.prototype.ancestors = function() {
  let chain = [];
  let obj = this;

  while (Object.getPrototypeOf(obj)) {
    obj = Object.getPrototypeOf(obj);
    if (obj.name) {
      chain.push(obj.name)
    } else {
      chain.push('Object.prototype');
    }
  }

  console.log(chain)
}

var foo = {name: 'foo'};
var bar = Object.create(foo);
bar.name = 'bar';
var baz = Object.create(bar);
baz.name = 'baz';
var qux = Object.create(baz);
qux.name = 'qux';

qux.ancestors();  // returns ['baz', 'bar', 'foo', 'Object.prototype']
baz.ancestors();  // returns ['bar', 'foo', 'Object.prototype']
bar.ancestors();  // returns ['foo', 'Object.prototype']
foo.ancestors();  // returns ['Object.prototype']