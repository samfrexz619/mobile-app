
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