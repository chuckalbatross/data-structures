var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  var storage = {};

  _.extend(someInstance, stackMethods);

  return someInstance;
};

var stackMethods = {
	size : function() {
      console.log('# of keys & object ' + Object.keys(this).length, this);
	  return Object.keys(this).length;
	},
	push : function(value) {
      this.value = value;  
	},
	pop : function() {
	  var lastKey = Object.keys(this)[Object.keys(this).length - 1];
	  popped = this[lastKey];
	  delete[lastKey];
	}
};

