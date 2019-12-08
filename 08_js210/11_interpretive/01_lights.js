/*
PROBLEM
- bank of "switches" from 1 to n
- each switch controls 1 light
- all lights start in off position
- passes
  1. you toggle every light
  2. toggle 2, 4, 6, ...
  3. toggle 3, 6, 9, ...
  .
  .
  .
  n
- function
  - takes one argument which is the total number of switches (n)
  - returns array of lights that are on after n repetitions

INPUT
- positive int representing number of light switches

OUTPUT
- arr containing indicies of "on" lights after n toggle passes

ALGORITHM
- create arr containing 0 that is n elements long
- loop from 1 to n
  - if (idx + 1) % i === 0, toggle (1 - current state) 
  - else leave
- map array replacing each with idx * state
- filter array to remove all zeros
- return
*/

function lightsOn(switches) {
  let states = new Array(switches).fill(0);
  
  for (let i = 1; i <= switches; i += 1) {
    states = states.map(function(state, idx) {
      return ((idx + 1) % i === 0) ? 1 - state : state;
    });
  }

  return states.map((state, idx) => state * (idx + 1)).filter(light => light > 0);
}

console.log(lightsOn(5));        // [1, 4]
// 1. 1 1 1 1 1
// 2. 1 0 1 0 1
// 3. 1 0 0 0 1
// 4. 1 0 0 1 1
// 5. 1 0 0 1 0

console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]