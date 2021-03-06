// var franchise = {
//   name: 'How to Train Your Dragon',
//   allMovies: function() {
//     var self = this;
//     return [1, 2, 3].map(function(number) {
//       return self.name + ' ' + number;
//     });
//   },
// };

var franchise = {
  name: 'How to Train Your Dragon',
  allMovies: function() {
    var self = this;
    return [1, 2, 3].map(function(number) {
      return self.name + ' ' + number;
    }.bind(this));
  },
};

console.log(franchise.allMovies());