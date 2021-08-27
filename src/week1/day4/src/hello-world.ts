let name: string = "Adam";
console.log(name);

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d");
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
    this.endAngle = endAngle
    this.Cfill = Cfill;
}
// const colorCheck = ["red", "green", "blue", "yellow", "black"];

let color: string = "";
let x: number = 0;
let y: number = 0;

let width: number = 0;
let height: number = 0;

let i = 0;

let shape: string = "";

function selectShapes()
{
    let inputVal: string = document.getElementById("shape").value;
    shape = inputVal;

    // console.log(shape);
}

function selectColor()
{
    let inputVal: string = document.getElementById("color").value;
    color = inputVal;

    console.log(color);
}

function getInputYValue()
{
    let inputVal: number = document.getElementById("myInputY").value;

    y = inputVal;
}

function getInputXValue()
{
    let inputVal: number = document.getElementById("myInputX").value;

    x = inputVal;
}

function getWidthValue()
{
    let inputVal: number = document.getElementById("myInputWidth").value;

    width = inputVal;
}

function getHeightValue()
{
    let inputVal: number = document.getElementById("myInputHeight").value;

    height = inputVal;
}

function getInputValue()
{
                
    // for(let i = 0; i < inputVal; i++)
    // {
        //Generate x y coords, offset by the top x,y of the leaf:
        if(shape == "rectangle")
        {
            let rand = Math.floor(Math.random() * 5);
            //  //Translate
    
            // ctx.fillRect(x2, y2, x, y);
    
            
    
            myRect.push(new Rectangle(x, y, width, height, color));
    
    
            let oRec = myRect[i];
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
        else if(shape == "circle")
        {

        }
    // }
}