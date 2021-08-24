
type WEATHER_DESCRIPTION = "sunny" | "cloudy" | "rainy";

interface DailyForecast {
  date: string | Date,
  temperature: number,    // Fahrenheit
  description: WEATHER_DESCRIPTION,
  chanceOfRain?: number   // Integer percentage *i.e 15%
}

type DailyForecasts = Array<DailyForecast>
type DailyForecastID = number;

interface ForecastsHandler {
  addNextDaysForecast: (a: DailyForecast) => DailyForecastID;
  getMostRecentForecast: any,
  getForecastByID: (a: DailyForecastID) => DailyForecast,
  getForecastDescription: (a: DailyForecast) => string, 
}


class WeeklyForecasts implements ForecastsHandler {
  private forecasts: DailyForecasts;
  constructor(forecasts: Array<DailyForecast>) {
    this.forecasts = forecasts;
  }

  addNextDaysForecast(forecast: DailyForecast) {
    return this.forecasts.push(forecast) as DailyForecastID;
  }

  getForecastByID(id: DailyForecastID): DailyForecast {
    return  this.forecasts[id];
  } 

  getMostRecentForecast(): DailyForecast { 
    const mostRecentID: DailyForecastID = this.forecasts.length - 1;
    return this.getForecastByID(mostRecentID);
  } 

  getForecastDescription(forecast: DailyForecast): string { 
    const chanceOfRainMessage = ` Chance of rain is ${forecast.chanceOfRain}%.` || "";
    return `On ${forecast.date} the temperature is  ${forecast.temperature}.${chanceOfRainMessage}`;
  } 

  getMostRecentForecastDescription(): string {
    const mostRecent = this.getMostRecentForecast();
    return this.getForecastDescription(mostRecent);
  }
}

const today: DailyForecast = {
  date: "Monday",
  temperature: 78,
  description: "rainy",
  chanceOfRain: 70,
};

const tomorrow: DailyForecast = {
  date: "Tuesday",
  temperature: 78,
  description: "rainy",
};

const myWeatherHandler = new WeeklyForecasts([today]);
myWeatherHandler.addNextDaysForecast(tomorrow);


console.log(myWeatherHandler.getMostRecentForecastDescription())