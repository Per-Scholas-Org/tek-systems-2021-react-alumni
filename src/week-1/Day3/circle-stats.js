/**
 *Here are the formulas to get information about a circle:
 pi is 3.14159
 x^2 means "x squared": example: 3^2 = 3*3 = 9
 area = pi * radius^2
 diameter = radius*2
 circumfrence = pi * diameter
 ​
 Complete the following functions and add function param and return type annotations
 */
function getArea(radius) {
    return (Math.PI * Math.pow(radius, 2));
}
function getDiameter(radius) {
    return 2 * radius;
}
function getCircumference(radius) {
    return Math.PI * getDiameter(radius);
}
function circleStats(radius) {
    return "A circle with radius " + radius + " has a diameter of " + getDiameter(radius) + ", a circumference of " + getCircumference(radius) + ", and an area of " + getArea(radius) + ".";
}
console.log(circleStats(5));
