var name = "Adam";
console.log(name);
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");
var myRect = [];
function Rectangle(x, y, w, h, fill) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.fill = fill;
}
function Circle(Cx, Cy, radius, startAngle, endAngle, Cfill) {
    this.Cx = Cx;
    this.Cy = Cy;
    this.radius = radius;
    this.startAngle = startAngle;
    this.endAngle = endAngle;
    this.Cfill = Cfill;
}
// const colorCheck = ["red", "green", "blue", "yellow", "black"];
var color = "";
var x = 0;
var y = 0;
var width = 0;
var height = 0;
var i = 0;
var shape = "";
function selectShapes() {
    var inputVal = document.getElementById("shape").value;
    shape = inputVal;
    // console.log(shape);
}
function selectColor() {
    var inputVal = document.getElementById("color").value;
    color = inputVal;
    console.log(color);
}
function getInputYValue() {
    var inputVal = document.getElementById("myInputY").value;
    y = inputVal;
}
function getInputXValue() {
    var inputVal = document.getElementById("myInputX").value;
    x = inputVal;
}
function getWidthValue() {
    var inputVal = document.getElementById("myInputWidth").value;
    width = inputVal;
}
function getHeightValue() {
    var inputVal = document.getElementById("myInputHeight").value;
    height = inputVal;
}
function getInputValue() {
    // for(let i = 0; i < inputVal; i++)
    // {
    //Generate x y coords, offset by the top x,y of the leaf:
    if (shape == "rectangle") {
        var rand = Math.floor(Math.random() * 5);
        //  //Translate
        // ctx.fillRect(x2, y2, x, y);
        myRect.push(new Rectangle(x, y, width, height, color));
        var oRec = myRect[i];
        ctx.fillStyle = oRec.fill;
        ctx.fillRect(oRec.x, oRec.y, oRec.w, oRec.h);
        // x += 10;
        // y += 10;
        i += 1;
        x = 0;
        y = 0;
        width = 0;
        height = 0;
    }
    else if (shape == "circle") {
    }
    // }
}
