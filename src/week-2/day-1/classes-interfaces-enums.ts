enum Language {
  english = "english",
  french = "french",
  spanish = "spanish",
}

getSunnyCopy(Language.english);

function getSunnyCopy(language: any) {
  console.log(`enum value ${language}`);
  switch(language) {
    case Language.english:
      return "It's sunny! The sun is shining";
    case Language.french:
      return "same thing in french";
    case Language.spanish:
      return "same thing in spanish";
    default:
      throw Error(`Language ${language} not found.`);
  }
}

function getWeatherDescription(weatherType) {
  switch(weatherType) {
    case "sunny":
      return "It's sunny! The sun is shining";
    case "cloudy":
      return "It's cloudy! The sun is not shining";
    case "rainy":
      return "It's rainy! The sun is not shining";
  }
}
// Union type
const SUNNY = "sunny"

interface DailyForecast {
  date: string | Date,
  temperature: number,    // Fahrenheit
  description: WEATHER_DESCRIPTION,
  chanceOfRain?: number   // Integer percentage *i.e 15%
}

const todaysForecast: DailyForecast = {
  date: "2021-08-22",
  temperature: 75,
  description: "cloudy",
  chanceOfRain: 80,
}

const forecasts:Array<DailyForecast> = [todaysForecast];

const obj = {
  a: 1,
  b: 2,
};

const a: string = "hello";
const b = "world" as string;

const obj2 = {
  a,
  b,
}
