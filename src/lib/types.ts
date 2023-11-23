
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