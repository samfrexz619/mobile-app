import { WeatherType } from "../lib/types";

export const weatherType: WeatherType = {
  Thunderstorm: {
    icon: 'zap',
    msg: 'it could get noisy',
    backgroundColor: '#000'
  },
  Drizzle: {
    icon: 'cloud-rain',
    msg: 'it might rain a little',
    backgroundColor: '#36454f'
  },
  Rain: {
    icon: 'umbrella',
    msg: 'you\'ll need an umbrella',
    backgroundColor: '#0000ff'
  },
  Snow: {
    icon: 'cloud-snow',
    msg: 'let\'s build a snowman',
    backgroundColor: '#7f6065'
  },
  Clear: {
    icon: 'sun',
    msg: 'it\'s perfect t-shirt weather',
    backgroundColor: '#e47200'
  },
  Clouds: {
    icon: 'cloud',
    msg: 'you could live in the clouds',
    backgroundColor: '#363636'
  },
  Haze: {
    icon: 'wind',
    msg: 'it might be a bit damp',
    backgroundColor: '#58586e'
  },
  Mist: {
    icon: 'align-justify',
    msg: 'it might be hard to see',
    backgroundColor: '#3e3e37'
  }
}