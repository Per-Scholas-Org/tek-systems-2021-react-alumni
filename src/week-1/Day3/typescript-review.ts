const SUNNY_DAY_MESSAGE:string = "It is sunny out today";
const CLOUDY_DAY_MESSAGE:string = "It is not sunny out today :(";
let isSunny:boolean = true;
let numberSunnyDays:number = 1;

console.log(SUNNY_DAY_MESSAGE);

function hello(name:string, isSunny:boolean):string {
    if (!isSunny) return `Hi, ${name}`;
    return `Hi, ${name}! ${SUNNY_DAY_MESSAGE}`;
}

console.log(hello("Michael", isSunny));

/**
 * 
 * @param isSunny If *today* it is sunny or not.
 * @param numberOfSunnyDays How many days in a row it has been sunny.
 * @returns Return a string saying whether it's sunny or not. If it's sunny, string declares how many days it has been sunny for.
 */
function sunny_day_message(isSunny:boolean, numberOfSunnyDays:number):string {
    if (isSunny) return `${SUNNY_DAY_MESSAGE}! There ha${(numberOfSunnyDays===1)?'s':'ve'} been ${numberOfSunnyDays} sunny day${(numberOfSunnyDays===1)?'':'s'}!`;
    return CLOUDY_DAY_MESSAGE;
}

console.log('\n'+sunny_day_message(isSunny, numberSunnyDays));
console.log('\n'+sunny_day_message(true, 4));
console.log('\n'+sunny_day_message(false, 3));

let obj:any = { x: 0 };
// None of the following lines of code will throw compiler errors.
// Using `any` disables all further type checking, and it is assumed
// you know the environment better than TypeScript.
/*obj.foo();
obj();
obj.bar = 1010;
obj = "hello";
const n: number = obj;*/

const recentWeather:Array<boolean> = [true, false, false, true, true, false, false, false];
function isItSunny(value) {
    return value;
}
type WEATHER_DESCRIPTION = "sunny" | "cloudy";
let numSunnyDays:number = recentWeather.filter(isItSunny).length;
let numCloudyDays:number = recentWeather.filter(status => !status).length;
//console.log(`${numSunnyDays}, ${numCloudyDays}`);

const getWeatherDescription = (isSunny:boolean):WEATHER_DESCRIPTION => isSunny?"sunny":"cloudy";
function getTodaysWeatherDescription(isSunny:boolean):string {
    return `Today is ${getWeatherDescription(isSunny)}.`;
}
function getRecentWeatherDescription(isSunny:boolean):string {
    return `There have been ${isSunny?numSunnyDays + ' sunny':numCloudyDays + ' cloudy'} days recently.`;
}
function describeTheWeather(isSunny:boolean):string {
    return getTodaysWeatherDescription(isSunny) + ' ' + getRecentWeatherDescription(isSunny); 
}
console.log(describeTheWeather(true));
console.log(describeTheWeather(false));

interface DailyForecast {
    date: string | Date,
    temperature: number,    // Fahrenheit
    description: WEATHER_DESCRIPTION,
    chanceOfRain?: number   // Integer percentage *i.e 15%
}

const forecasts:Array<DailyForecast> = [{date:"2021-08-22", temperature:75, description:"cloudy", chanceOfRain:80}];