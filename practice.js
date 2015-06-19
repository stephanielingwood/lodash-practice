var _ = require("./node_modules/lodash/lodash");

// TODO: Erase this if statment before you start
if(_){
 console.log("lodash is defined!");
}

// ************* HELPER **************
function assert(expression, failureMessage) {
  if (!expression) {
    console.log("assertion failure: ", failureMessage);
  }
}

/*
var myArray = ['string', 'strang', 'strung'];
var random = _.sample(myArray);
console.log(random);

var favoriteAnimals = [ "elephant", "penguin", "eagle", "camel" ],
nextAnimal;
// TODO: select random animal and put that value in nextAnimal // use _.sample()
nextAnimal = _.sample(favoriteAnimals);
console.log(nextAnimal);
assert(nextAnimal, "assign something to nextAnimal");

console.log(_.contains(['beep', 'boop', 'bop'], 'bird') + " : " +
_.contains(['beep', 'boop', 'bop'], 'be') + " : " +
_.contains(['beep', 'boop', 'bop'], 'bop')); */


var wheresWaldo = function() {
    var name = "";
    var isFirst = false;
  _.each(arguments, function(val){
    var found = _.contains(val, "waldo");
    if (found && !isFirst) {
      console.log("waldo: " + found + " " + isFirst + " val: " + val);
      isFirst = true;
      name = val;
    }
  });
  return name;
}


assert(wheresWaldo("walls", "dr. seuss", "waldorf salad",
  "shel silverstein", "waldo") === "waldorf salad");
