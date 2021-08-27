const canvas = document.getElementById("my-canvas") as HTMLCanvasElement;
canvas.width = window.innerWidth; canvas.height = window.innerHeight*.7;
const ctx = canvas.getContext("2d");
clearCanvas();
drawBackground();

function clearCanvas() {
    ctx.clearRect(0,0, canvas.width, canvas.height);    // Clear the canvas
    drawBackground();
}

function drawBackground() {
    drawRectangle(0,canvas.height-20,canvas.width,20, 'rgb(49, 189, 44)'); // Draw ground
    drawRectangle(0,0,canvas.width,canvas.height-20, '#e6ffff');// Draw sky
    // Draw sun
    drawCircle(canvas.width, 0, 200, 'yellow');                 // Draw a sun
    ctx.strokeRect(0,0,canvas.width, canvas.height);    // Outline the canvas
}

/**
 * Draws a rectangle with upper-left corner at (x,y) and specified width and height
 * @param x 
 * @param y 
 * @param width 
 * @param height 
 */
function drawRectangle(x:number, y:number, width:number, height:number, color:string) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
}

/**
 * Draws an equilateral triangle with lower-left vertex (x,y)
 * and specified base and height
 * @param x 
 * @param y 
 * @param base 
 * @param height 
 */
function drawTriangle(x:number, y:number, base:number, height:number) {
    ctx.beginPath();
    ctx.moveTo(x, y);           // Lower-left vertex
    ctx.lineTo(x+base, y);      // Across to bottom-right vertex
    ctx.lineTo(x+base/2, height);   // Top midpoint
    ctx.fillStyle = "#663300";//'brown';
    ctx.fill();
}

/**
 * Draws a circle with center (x,y) and specified radius and color
 * @param x 
 * @param y 
 * @param radius 
 * @param color String color value (hex, rgb, valid names ('red'), etc)
 */
 function drawCircle(x:number, y:number, radius:number, color:string) {
    ctx.fillStyle = color;
    ctx.beginPath();
    // center (x,y), radius, startAngle, endAngle, anticlockwise?
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = 'black';
    ctx.stroke();
}

function drawHouse() {
//    clearCanvas();

    let height:number = Number( (<HTMLInputElement> document.getElementById("height")).value);
    let width:number = Number( (<HTMLInputElement> document.getElementById("width")).value);
    let xPos:number = Number( (<HTMLInputElement> document.getElementById("xPos")).value);
    // Make yPos relative to lower horizontal axis instead of upper
    let yPos:number = canvas.height - height - Number( (<HTMLInputElement> document.getElementById("yPos")).value);
    let isDoor:boolean = Boolean( (<HTMLInputElement> document.getElementById("chkDoor")).checked);
    let isChimney:boolean = Boolean( (<HTMLInputElement> document.getElementById("chkChimney")).checked);
    let numWindows = Number( (<HTMLInputElement> document.getElementById("numWins")).value);
    if (Number.isNaN(height) || Number.isNaN(width) || Number.isNaN(xPos) || Number.isNaN(yPos)) {
        alert("Please use only valid positive integers!");
        return;
    }
    let colorRadios = <NodeListOf<HTMLInputElement>> document.getElementsByName('houseColor');
    let houseColor:string=null;              
    for(let i = 0; i < colorRadios.length; i++) {
        if(colorRadios[i].checked)
        houseColor = colorRadios[i].value;
    }
    if(houseColor == null) houseColor = 'blue';

    drawRectangle(xPos, yPos, width, height, houseColor);//'#0043AD');       // Draw base
    drawTriangle(xPos-width/10, yPos, width*1.2, yPos-height/2); // Draw roof
    // Draw circle windows
 //   for (let i = 1; i <= 3; i++)
 //       drawCircle(xPos+i*Math.abs(width)/4, yPos+Math.abs(width)/4, Math.abs(width)/10, '#e6ffff');
    //drawCircle(xPos+2*Math.abs(width)/4, yPos+Math.abs(width)/4, Math.abs(width)/10, '#e6ffff');
    // Draw standard windows
    for (let i = 1; i <= numWindows; i++) {
        drawRectangle(xPos+i*width/(numWindows+1)-width/(3*numWindows+3), yPos+height/10,2*width/(3*numWindows+3),height/4,'#e6ffff');
        ctx.fillStyle = "#e6ffff";//'brown';
        ctx.strokeRect(xPos+i*width/(numWindows+1)-width/(3*numWindows+3), yPos+height/10,2*width/(3*numWindows+3),height/4);
        ctx.beginPath();
        ctx.moveTo(xPos+i*width/(numWindows+1)-width/(3*numWindows+3), yPos+height/10+height/8);
        ctx.lineTo(xPos+i*width/(numWindows+1)+width/(3*numWindows+3), yPos+height/10+height/8);
        ctx.moveTo(xPos+i*width/(numWindows+1), yPos+height/10);
        ctx.lineTo(xPos+i*width/(numWindows+1), yPos+height/10+height/4);
        ctx.stroke();
    }

    // Draw a door
    if (isDoor) {
        let doorWidth = width*.15;
        let doorHeight = height/3;
        let doorX = xPos+(width-doorWidth)/2;
        let doorY = yPos+height-doorHeight;
        drawRectangle(doorX, doorY, doorWidth, doorHeight, 'brown');
        drawCircle(doorX+doorWidth-2*doorWidth/10,doorY+doorHeight/2,doorWidth/10,'black');
    }

    // Draw a chimney
    if (isChimney) {

    }
}