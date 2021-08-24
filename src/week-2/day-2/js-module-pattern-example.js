/**
 * Example of the module pattern in javascript, for prior to ES2016 when there were no modules or classes
 * You won't use this but this is similar to how typescript compiles a class into javascript, and it illustrates
 * important parts of how the javascript language works.
 */

// example of an immediately invoked function expression
(function() {
  //console.log("hi!!")
})();

/**
 * We used to create "modules" this way because everything is function-scoped in javascript (or was, until ES2016)
 */
var MODULE = (function () {
	var moduleObject = {}; 
  var privateVariable = 1;

	function privateMethod() {
		// ...
	}

	moduleObject.moduleProperty = 1;
	moduleObject.moduleMethod = function () {
    var x = privateMethod(privateVariable);
    return x;
	};

	return moduleObject;
}());

MODULE.moduleMethod
MODULE.moduleMethod();
