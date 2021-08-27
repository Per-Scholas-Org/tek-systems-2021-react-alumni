/**
 Complete the function in the editor. It has two parameters: a and b. It must return an object modeling a rectangle that has the following properties:

length: This value is equal to a.
width: This value is equal to b.
perimeter: This value is equal to 2*(a+b)
area: This value is equal to a*b
 */
function Rectangle(a, b) {
    var rect = {
        length: a,
        width: b,
        perimeter: 2 * (a + b),
        area: a * b
    };
    return rect;
}
function getArea(r) {
    return r.area;
}
function getPerimeter(r) {
    return r.perimeter;
}
var r = Rectangle(5, 6);
console.log(r);
