(function() {
  'use strict';

  window._ = {};

  // Returns whatever value is passed as the argument. This function doesn't
  // seem very useful, but remember it--if a function needs to provide an
  // iterator when the user does not pass one in, this will be handy.
  _.identity = function(val) {
    /* START SOLUTION */

     return val;

    /* END SOLUTION */
  };

  /**
   * COLLECTIONS
   * ===========
   *
   * In this section, we'll have a look at functions that operate on collections
   * of values; in JavaScript, a 'collection' is something that can contain a
   * number of values--either an array or an object.
   *
   *
   */

  // Return an array of the first n elements of an array. If n is undefined,
  // return just the first element.
  _.first = function(array, n) {
    /* START SOLUTION */

   if(Array.isArray(array) && typeof(n)=="undefined"){

     return array[0];

   }else if (Array.isArray(array) && typeof(n)=="number" && n>array.length){

        return array;

   }else if(Array.isArray(array) && typeof(n)=="number" && n<=array.length){

   	return array.slice(0,n);
   
   }else if(Array.isArray(array) && array.length===0){

   	return undefined;
   
   }else if(!Array.isArray(array) && typeof(n)!=="undefined"){

   	return [];
   
   }else{

   	return undefined;
   }




    /* END SOLUTION */
  };

  // Like first, but for the last elements. If n is undefined, return just the
  // last element.
  _.last = function(array, n) {
    /* START SOLUTION */

    if(Array.isArray(array) && typeof(n)==="undefined") {

    	return array[array.length-1];
  
    }else if(Array.isArray(array) && array.length>=n && n>0) {

    	return array.slice(n-1,array.length);
    
    }else if(Array.isArray(array) && array.length<n) {

    	return array;

    }else if(Array.isArray(array) && n<=0) {

    	return [];
    }


    /* END SOLUTION */
  };

  // Call iterator(value, key, collection) for each element of collection.
  // Accepts both arrays and objects.
  //
  // Note: _.each does not have a return value, but rather simply runs the
  // iterator function over each item in the input collection.
  _.each = function(collection, iterator) {
    /* START SOLUTION */

      if(Array.isArray(collection)){

        for(var i=0;i<collection.length;i++){

        iterator(collection[i], i, collection);
  
         }
    }else {

        for(var i in collection){

          iterator(collection[i], i, collection);

        }



    }



    /* END SOLUTION */
  };

  // Returns the index at which value can be found in the array, or -1 if value
  // is not present in the array.
  _.indexOf = function(array, target){
    /* START SOLUTION */

    
    var index=-1;

   if(typeof arguments[2]==="undefined" ){  
      for(var i=0;i<array.length;i++){

      if(array[i]===target){
        index=i;
        break;
      }

    }

    return index;


   } else if(typeof arguments[2]==="number"){

    for(var i=arguments[2];i<array.length;i++){

      if(array[i]===target){

        index=i; 
        break;
      }

    }

    return index;

   }else if(typeof arguments[2]==="boolean"){


   }


 
    /* END SOLUTION */  
  };

  _.findIndex=function(array,value){

    var index=-1;
    var arr=[];
    arr=array;
    var i=0;
    do{

      var haha=value(arguments[0][i]);
      if(haha===true){

        index=i;
      }


    i+=1;
    }while(i<arr.length && index===-1);

    return index;

  };

  // Return all elements of an array that pass a truth test.
  _.filter = function(collection, test) {
    /* START SOLUTION */

    /* END SOLUTION */
  };

  // Return all elements of an array that don't pass a truth test.
  _.reject = function(collection, test) {
    /* START SOLUTION */

    /* END SOLUTION */
  };

  // Produce a duplicate-free version of the array.
  _.uniq = function(array, isSorted, iterator) {
    /* START SOLUTION */

    /* END SOLUTION */
  };


  // Return the results of applying an iterator to each element.
  _.map = function(collection, iterator) {
    /* START SOLUTION */

    /* END SOLUTION */
  };

  /*
   * TIP: map is really handy when you want to transform an array of
   * values into a new array of values. _.pluck() is solved for you
   * as an example of this.
   */

  // Takes an array of objects and returns and array of the values of
  // a certain property in it. E.g. take an array of people and return
  // an array of just their ages
  _.pluck = function(collection, key) {
    // TIP: map is really handy when you want to transform an array of
    // values into a new array of values. _.pluck() is solved for you
    // as an example of this.
    /* START SOLUTION */

    /* END SOLUTION */
  };

  // Reduces an array or object to a single value by repetitively calling
  // iterator(accumulator, item) for each item. accumulator should be
  // the return value of the previous iterator call.
  //
  // You can pass in a starting value for the accumulator as the third argument
  // to reduce. If no starting value is passed, the first element is used as
  // the accumulator, and is never passed to the iterator. In other words, in
  // the case where a starting value is not passed, the iterator is not invoked
  // until the second element, with the first element as its second argument.
  //
  _.reduce = function(collection, iterator, accumulator) {
    /* START SOLUTION */

    /* END SOLUTION */
  };


 

}());