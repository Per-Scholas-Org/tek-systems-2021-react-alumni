/***
 * Shows how Javascript is asynchronous - execution of code is not blocked by the timeout. Rather,
 * that clsoure created by the timeout is placed on the call stack, execution continues, and then JS
 * will execute that closure when the timeout completes
 */
var print_two = function(call_back){

  var thisVariableBecomesPartOfTheClosure = 'timeout just finished - ';

  setTimeout(function(){
    console.log(thisVariableBecomesPartOfTheClosure + '2');
    call_back();
  }, 2000);

};

// code
console.log('1');
print_two(function(){ console.log('3'); });
console.log('4');