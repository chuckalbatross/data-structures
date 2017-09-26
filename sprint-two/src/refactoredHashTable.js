/*
 ********** NOTE: **********
 * Do not edit this code unless you see a bug!
 */


//compute index
//iterate through bucket
  //if key-value found
    //do foundAction
//else
  //do notFoundAction



// This class represents an array with limited functionality and a maximum size.
// It will ensure that you don't accidentally try to use up too much space.
//
// Usage:
//   limitedArray.set(3, 'hi');
//   limitedArray.get(3); // returns 'hi'

var LimitedArray = function(limit) {
  var storage = [];

  var limitedArray = {};
  limitedArray.get = function(index) {
    checkLimit(index);
    return storage[index];
  };
  limitedArray.set = function(index, value) {
    checkLimit(index);
    storage[index] = value;
  };
  limitedArray.each = function(callback) {
    for (var i = 0; i < storage.length; i++) {
      callback(storage[i], i, storage);
    }
  };

  var checkLimit = function(index) {
    if (typeof index !== 'number') {
      throw new Error('setter requires a numeric index for its first argument');
    }
    if (limit <= index) {
      throw new Error('Error trying to access an over-the-limit index');
    }
  };

  return limitedArray;
};

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between the
// numbers 0 and `max`
var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

/*
 * Complexity: What is the time complexity of the above functions?
  limitedArray.set(): O(1)
  limitedArray.get(): O(1)
  limitedArray.each(): O(n) * O(callback)
  getIndexBelowMaxForKey: O(1)
 */


var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.findTuple = function(k, v, cbFound, cbNotFound) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index) || [];

  this._storage[index] = bucket;

  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      return cbFound.call(this, bucket, tuple);
    }
  }
  return cbNotFound.call(this, bucket, tuple);
}

HashTable.prototype.insert = function(k, v) {
  this.findTuple(k, v, 
    function(bucket, tuple) {
      var oldVal = tuple[1];
      tuple[1] = v;
      return oldVal;
    }, 
    function(bucket, tuple) {
      bucket.push([k, v]);
    });
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  ////return this._storage[index];
  var bucket = this._storage[index];
  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      return tuple[1];  //if found action
    }
  }
  return undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  ////this._storage[index] = undefined;
  // for (var i = 0; i < this._storage[index].length; i++) {
  //   if (this._storage[index][i][0] === k) {
  //     this._storage[index][i].splice(i, 1);
  //   }
  // }
  var bucket = this._storage[index];
  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      bucket.splice(i, 1);  //if found action
    }
  }
  return undefined;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

var testHash = new HashTable();
var oldHashFunction = getIndexBelowMaxForKey;
//console.log(indexTest);

testHash.insert('Steven', 'Segall');
testHash.insert('Helen', 'Yii');
console.log('Should be Segall:', testHash.retrieve('Steven'));
console.log('Should be Yii:', testHash.retrieve('Helen'));


