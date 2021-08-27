var SUNNY_DAY_MESSAGE = "It is sunny out today!";
var isSunny = true;
var numberSunnyDays = 1;
function sunnyDayMessage(isSunny, numberSunnyDays) {
    if (!isSunny) {
        return "Hi, its not sunny today";
    }
    else {
        return "Hi, it's sunny today and its been sunny for " + numberSunnyDays + " in a row";
    }
}
console.log(sunnyDayMessage(true, 5));
console.log(sunnyDayMessage(false, 5));
console.log(sunnyDayMessage(true, 12));
