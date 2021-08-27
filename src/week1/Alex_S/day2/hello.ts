const getFive = () => 5;
console.log("getFive  ", getFive());

// exactly the same as "anotherWeatherDescription"
const anotherWeatherDescription = (isItSunny: boolean) =>
  isItSunny ? "sunny" : "cloudy";

type WeatherDescription = "sunny" | "cloudy";
const getWeatherDescription = (isItSunny: boolean): WeatherDescription => {
  // example of a "guard" pattern
  if (isItSunny) {
    return "sunny";
  } else {
    return "cloudy";
  }
};

type Callback = (a: boolean) => WeatherDescription;

// example of type annotation for a function argument
function sayHi(
  name: string,
  isSunny: boolean,
  getWeatherCallback: Callback
): string {
  // example of type annotation for a variable
  let messageIntro: string = "Good day";

  const weather = getWeatherCallback(isSunny);

  const completeMessage = `${messageIntro}, ${name}. It is ${weather}`;

  return completeMessage;
}

console.log(sayHi("Adam", true, getWeatherDescription));