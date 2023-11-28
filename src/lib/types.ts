
type Main = {
  temp_min: number;
  temp_max: number;
}

type Weather = {
  main: string;
}

export interface Data {
  dt_txt: string;
  main: Main;
  weather: Weather[]
}

export type ItemProps = {
  item: Data;
}

type Details = {
  icon: string;
  msg: string;
  backgroundColor: string;
}
export interface WeatherType {
  Thunderstorm: Details;
  Drizzle: Details;
  Rain: Details;
  Snow: Details;
  Mist: Details;
  Haze: Details;
  Clear: Details;
  Clouds: Details;
}

type Weathers = {
  id: number,
  main: string,
  description: string,
}

type Mains = {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
}

type Coord = {
  lat: number;
  lon: number;
}

export type City = {
  id?: number;
  name: string;
  coord?: Coord;
  country: string;
  population: number;
  timezone?: number;
  sunrise: number;
  sunset: number;
}

export type List = {
  dt: string;
  main: Mains;
  weather: Weathers[];
  dt_txt: string;
}
export interface WeatherData {
  list: List[];
  city: City;
}
