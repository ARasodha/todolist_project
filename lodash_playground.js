// Importing entire lodash library
const _ = require('lodash');
console.log(_.chunk([1, 2, 3, 4, 5, 6, 7, 8], 2));
// logs [[1, 2], [3, 4], [5, 6], [7, 8]]

// Only needing chunk because that's all we need (more efficient loading/ less burdensome on memory
// only works on packages that multiple independent files like lodash) - each file must export its public
// names with module.exports

const chunk = require('lodash/chunk');
console.log(chunk([1,2,3,4,5,6,7,8], 2));
// logs [[1, 2], [3, 4], [5, 6], [7, 8]]

// When a package doesn't provide separate independent files we must use a different technique:
const chunk = require('lodash').chunk;
console.log(chunk([1,2,3,4,5,6,7,8], 2));
// logs [[1, 2], [3, 4], [5, 6], [7, 8]]
// this doesn't solve the processing issue; Node still needs to read the entire module
// However, thanks to garbage collection, it doesn't put much strain on memory resources;
// the imported but unneeded name are immediately eligible for garbage collection