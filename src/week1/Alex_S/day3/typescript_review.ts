//const SUNNY_DAY_MESSAGE: string = "It is sunny out today.";

let isSunny: boolean = true;
let numberOfSunnyDays: number = 1;

function hello(name: string, isSunny: boolean): string {
    
    if(!isSunny){
        return "Hi, " + name;
    } 

    return "Hi, " + name + ",  it is sunny out today!";
}

console.log(hello("Alice" , isSunny));