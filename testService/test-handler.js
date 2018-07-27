const addHandler = require('./handler.js');

const event = {
 body: {
   Id: '123-456-789-0980'
 }
};

const context = {};
const callback = function callback(err, result) {
 console.log(result);
};
addHandler.hello(event, context, callback);