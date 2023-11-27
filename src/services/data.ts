import { Data } from "../lib/types"

export const DATA: Data[] = [
  {
    dt_txt: "2023-11-30 17:00:00",
    main: {
      temp_min: 294.94,
      temp_max: 294.74,
    },
    weather: [
      {
        main: "Rain",
      }
    ]
  },
  {
    dt_txt: "2023-11-15 17:00:00",
    main: {
      temp_min: 295.94,
      temp_max: 295.74,
    },
    weather: [
      {
        main: "Rain",
      }
    ]
  },
  {
    dt_txt: "2022-08-30 17:00:00",
    main: {
      temp_min: 296.94,
      temp_max: 296.74,
    },
    weather: [
      {
        main: "Rain",
      }
    ]
  },
]

export const api = 'http://api.openweathermap.org/data/2.5/forecast'