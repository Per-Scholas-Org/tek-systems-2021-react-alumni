/*Complete the function in the editor. It has two parameters:  and .
 It must return an object modeling a rectangle that has the following properties:

length: This value is equal to a.
width: This value is equal to b.
perimeter: This value is equal to 2(a+b)
area : This value is equal to a*b
*/

function getArea(width: number, length: number): number{
    return length * width; 
}

function getPerimeter(width: number, length: number): number{
    return 2 * (length + width); 
}

console.log("Area = ", getArea(2,3));
console.log("Perimeter = ", getPerimeter(2,3));