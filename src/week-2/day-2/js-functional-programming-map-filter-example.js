/**
 * Basic examples of a functional programming style in JS. Takes advantage of first-class functions
 * and Javascript's .map() and .filter() Array methods
 */


const forecast = ["sunny", "cloudy", "sunny", "cloudy", "sunny"]

const onlyGetSunny = (weather) => {
  if(weather === "sunny") {
    return true;
  } 

  return false;
}

const filteredArray = forecast.filter(onlyGetSunny) 
const filteredAndMapped =   filteredArray.map((sunnyBoolean, index) => ({ dayOfWeek: index, message: "It's sunny"}))

console.log(filteredAndMapped);
console.log(forecast);
const filteredArray  = isSunny.filter(isItSunny =>  isItSunny);

const mappedArray = filteredArray.map((element, index) => { return "sunny " })