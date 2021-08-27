/**
 * Draws a length 1 width 1 pizza slice
 * Length 1 width 1:
  -
 |_|
​
 */
function drawSmallPizzaSlice() {

    return ' - ' + '\n' + '|_| ' + '\n';

}
​
/**
 * Draw a length 1 width 2 pizza slice 
 * Medium - Length 1 width 2:
  
   --
  |__|
 * 
 */

  

  ​
function drawMediumPizzaSlice() {
    return ' -- ' + '\n' + '|__| ' + '\n';
}
​
/**
 * 
 * Draws a length 2 width 2 pizza slice 
 * @returns {string}
 * Length 2 width 2:
  
   --
  | .|
  |__|
​
 */
function drawLargePizzaSlice() {
    return ' -- ' + '\n' + '| .| ' + '\n' + '|__|' + '\n';
}
​
/**
 * @param {string} sliceSize
 *                 size of slice
 * @return {string}
 *         Returns a string which is a "drawing" of the slice. Examples
 * 
 * Small - Length 1 width 1:
   -
  |_|
​
 * 
 * Medium - Length 1 width 2:
  
   --
  |__|
 * 
​
 * 
 * Large - Length 2 width 2:
 * 
  
   --
  | .|
  |__|
​
 */
function drawAnyPizzaSlice(slice:string):string {

  if(slice == 'small')
  {
    return 'Small' + '\n' + ' - ' + '\n' + '|_| ' + '\n' + '\n';
  }
  else if(slice == 'medium')
  {
    return 'medium' + '\n' + '\n' + ' -- ' + '\n' + '|__|' + '\n' + '\n';
  }
  else if(slice == 'large')
  {
    return 'large' + '\n' + '\n' + ' -- ' + '\n' + '| .| ' + '\n' + '|__| ';
  }


   /*  return   'Small' + '\n' + ' - ' + '\n' + '|_| ' +  '\n' + '\n' +
  'medium' + '\n' + '\n' + ' -- ' + '\n' + '|__|' + '\n' + '\n' +
  'large' + '\n' + '\n' + ' -- ' + '\n' + '| .| ' + '\n' + '|__| '; */
  
}
​
console.log(drawSmallPizzaSlice());
 console.log(drawMediumPizzaSlice());
 console.log(drawLargePizzaSlice());
 
 console.log(drawAnyPizzaSlice('small'));
console.log(drawAnyPizzaSlice('medium'));
console.log(drawAnyPizzaSlice('large'));