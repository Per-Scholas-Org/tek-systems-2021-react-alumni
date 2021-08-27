/*
 *Here are the formulas to get information about a circle:
 pi is 3.14159
 x^2 means "x squared": example: 3^2 = 3*3 = 9
 area = pi * radius^2
 diameter = radius*2
 circumfrence = pi * diameter
​
 Complete the following functions and add function param and return type annotations
 */
 let pi: number = 3.14159;​
 let area: number; 

 function getArea(radius):number {
​     return  pi * (radius^2);
 }
​
 function getDiameter(radius):number {
​   return radius*2;
 }
​
 function getCircumfrence(radius):number {
​   return pi * (radius*2);
 }

 console.log("Area " + getArea(3));
 console.log("Diameter " + getDiameter(3));
 console.log("Circumference " + getCircumfrence(3));