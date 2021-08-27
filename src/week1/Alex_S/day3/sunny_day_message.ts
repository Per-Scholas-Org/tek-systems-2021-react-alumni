const SUNNY_DAY_MESSAGE: string = "It is sunny out today!";
let isSunny: boolean = true;
let numberSunnyDays: number = 1;
​
function sunnyDayMessage(isSunny: boolean, numberSunnyDays: number): string {
    if(!isSunny){
        return "Hi, its not sunny today" ;
    } 
    else
    {
        return "Hi, it's sunny today and its been sunny for " + numberSunnyDays + " in a row" ;
    }
    
}
​
console.log(sunnyDayMessage(true, 5));
console.log(sunnyDayMessage(false, 5));
console.log(sunnyDayMessage(true, 12));