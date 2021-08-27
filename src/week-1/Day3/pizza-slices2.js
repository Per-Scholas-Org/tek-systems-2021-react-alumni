/* ASCII values for crust:
201 ╔
205 ═
187 ╗
186 ║
200 ╚
188 ╝

179 │   196 ─
191 ┐   192 └
217 ┘   218 ┌
183 ╖   184 ╕
189 ╜   190 ╛
213 ╒   214 ╓
212 ╘   211 ╙
*/
var edges = ["corner", "edge", "middle"];
function drawAnyPizza(length, width, edgeType) {
    var topLefts = ['╔', '╓', '┌']; // corner, edge, middle
    var tops = ['═', '─', '─']; // corner, edge, middle
    var lefts = ['║', '║', '│'];
    var bottomLefts = ['╙', '╙', '└'];
    var pizza = topLefts[edges.indexOf(edgeType)];
    var bottom = bottomLefts[edges.indexOf(edgeType)];
    for (var i = 0; i < width; i++) {
        pizza += tops[edges.indexOf(edgeType)];
        bottom += '─';
    }
    pizza += '┐\n'; // Finish off top
    for (var j = 0; j < length - 1; j++) { // Rando generate middle portions
        var middle = lefts[edges.indexOf(edgeType)];
        for (var i = 0; i < width; i++) {
            var toppingNum = Math.round((Math.random() * 20)); //**( Math.floor(Math.random()*23) ) ) *111);
            var topping = '';
            switch (toppingNum) {
                case 0:
                    topping = ' ';
                    break;
                case 1:
                    topping = '∙';
                    break;
                case 2:
                    topping = '°';
                    break;
                case 3:
                    topping = 'Θ';
                    break;
                case 4:
                    topping = '@';
                    break; //onion
                case 5:
                    topping = '*';
                    break;
                case 6:
                    topping = 'Φ';
                    break; //tomato
                default:
                    topping = ' ';
                    break;
            }
            middle += topping; //Math.floor(Math.random()*2)?'.':' ';
        }
        middle += '│\n';
        pizza += middle;
    }
    bottom += '┘';
    pizza += bottom;
    return pizza;
}
/* ASCII values for crust:
201 ╔
205 ═
187 ╗
186 ║
200 ╚
188 ╝

179 │   196 ─
191 ┐   192 └
217 ┘   218 ┌
183 ╖   184 ╕
189 ╜   190 ╛
213 ╒   214 ╓
212 ╘   211 ╙
*/
/**
 * Draws a length 1 width 1 pizza slice
 * Length 1 width 1:
  _
 |_|
 ​
 */
function drawSmallPizzaSlice(sliceLocation) {
    /*    let pizza = '';
        switch (sliceLocation) {            // Draw top
            case "corner":pizza+=`╔═╕`;break;
            case "edge":pizza+=`╓─┐`;break;
            case "middle":pizza+=`┌─┐`;break;
        }
        pizza+='\n';
        switch (sliceLocation) {            // Draw bottom
            case "corner":
            case "edge":pizza+=`╙─┘`;break;
            case "middle":pizza+=`└─┘`;break;
        }
        return pizza;*/
    //           ` _ \n`+
    //           `|_|`;
    return drawAnyPizza(1, 1, sliceLocation.toLowerCase());
}
/**
 * Draw a length 1 width 2 pizza slice
 * Medium - Length 1 width 2:
  
   __
  |__|
 *
 */
function drawMediumPizzaSlice(sliceLocation) {
    //    return  ` __ \n`+
    //            `|__|`;
    return drawAnyPizza(1, 2, sliceLocation.toLowerCase());
}
/**
 *
 * Draws a length 2 width 2 pizza slice
 * @returns {string}
 * Length 2 width 2:
  
   __
  | .|
  |__|
 ​
 */
function drawLargePizzaSlice(sliceLocation) {
    //    return  ` __ \n`+
    //            `| .|\n`+
    //            `|__|`;
    return drawAnyPizza(2, 2, sliceLocation.toLowerCase());
}
/**
 * @param {string} sliceSize
 *                 size of slice - "small", "medium", "large"
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
function drawAnyPizzaSlice(sliceSize, sliceLocation) {
    switch (sliceSize.toLowerCase()) {
        case "small":
            return drawSmallPizzaSlice(sliceLocation.toLowerCase());
            break;
        case "medium":
            return drawMediumPizzaSlice(sliceLocation.toLowerCase());
            break;
        case "large":
            return drawLargePizzaSlice(sliceLocation.toLowerCase());
            break;
        default:
            return '';
    }
}
/*console.log(drawSmallPizzaSlice("corner"));
console.log(drawSmallPizzaSlice("edge"));
console.log(drawSmallPizzaSlice("middle"));
console.log(drawMediumPizzaSlice("corner"));
console.log(drawMediumPizzaSlice("edge"));
console.log(drawMediumPizzaSlice("middle"));
console.log(drawLargePizzaSlice("corner"));
console.log(drawLargePizzaSlice("edge"));
console.log(drawLargePizzaSlice("middle"));
console.log('\n'+drawAnyPizzaSlice("laRGe", "corner"));
console.log(drawAnyPizzaSlice("medium", "middle"));
console.log(drawAnyPizzaSlice("small", "eDGe"));*/
for (var k = 0; k < 10; k++) {
    var rando = Math.floor(Math.random() * 20) + 1;
    console.log(drawAnyPizza(rando, rando * 2, edges[Math.floor(Math.random() * 3)]));
}
