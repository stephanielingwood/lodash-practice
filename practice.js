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
