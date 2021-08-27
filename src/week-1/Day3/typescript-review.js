var SUNNY_DAY_MESSAGE = "It is sunny out today";
var CLOUDY_DAY_MESSAGE = "It is not sunny out today :(";
var isSunny = true;
var numberSunnyDays = 1;
console.log(SUNNY_DAY_MESSAGE);
function hello(name, isSunny) {
    if (!isSunny)
        return "Hi, " + name;
    return "Hi, " + name + "! " + SUNNY_DAY_MESSAGE;
}
console.log(hello("Michael", isSunny));
/**
 *
 * @param isSunny If *today* it is sunny or not.
 * @param numberOfSunnyDays How many days in a row it has been sunny.
 * @returns Return a string saying whether it's sunny or not. If it's sunny, string declares how many days it has been sunny for.
 */
function sunny_day_message(isSunny, numberOfSunnyDays) {
    if (isSunny)
        return SUNNY_DAY_MESSAGE + "! There ha" + ((numberOfSunnyDays === 1) ? 's' : 've') + " been " + numberOfSunnyDays + " sunny day" + ((numberOfSunnyDays === 1) ? '' : 's') + "!";
    return CLOUDY_DAY_MESSAGE;
}
console.log('\n' + sunny_day_message(isSunny, numberSunnyDays));
console.log('\n' + sunny_day_message(true, 4));
console.log('\n' + sunny_day_message(false, 3));
var obj = { x: 0 };
// None of the following lines of code will throw compiler errors.
// Using `any` disables all further type checking, and it is assumed
// you know the environment better than TypeScript.
/*obj.foo();
obj();
obj.bar = 1010;
obj = "hello";
const n: number = obj;*/
var recentWeather = [true, false, false, true, true, false, false, false];
function isItSunny(value) {
    return value;
}
var numSunnyDays = recentWeather.filter(isItSunny).length;
var numCloudyDays = recentWeather.filter(function (status) { return !status; }).length;
//console.log(`${numSunnyDays}, ${numCloudyDays}`);
var getWeatherDescription = function (isSunny) { return isSunny ? "sunny" : "cloudy"; };
function getTodaysWeatherDescription(isSunny) {
    return "Today is " + getWeatherDescription(isSunny) + ".";
}
function getRecentWeatherDescription(isSunny) {
    return "There have been " + (isSunny ? numSunnyDays + ' sunny' : numCloudyDays + ' cloudy') + " days recently.";
}
function describeTheWeather(isSunny) {
    return getTodaysWeatherDescription(isSunny) + ' ' + getRecentWeatherDescription(isSunny);
}
console.log(describeTheWeather(true));
console.log(describeTheWeather(false));
var forecasts = [{ "2021-08-22": as, string: string, 75: as, number: number, "cloudy": as, string: string, 80: as, number: number }, {}];
