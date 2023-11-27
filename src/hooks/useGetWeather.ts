import { useEffect, useState} from 'react';
import * as Location from 'expo-location'
import { WEATHER_API_KEY } from '@env'
import { api } from '../services/data';
import { WeatherData } from '../lib/types';



export const useGetWeather =()=> {

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [weather, setWeather] = useState<WeatherData>()
  const [lat, setLat] = useState(0)
  const [lon, setLon] = useState(0)

  const fetchWeatherData = async()=> {
    try {
      const res = await fetch(
        `${api}?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
      )
      const data = await res.json()
      setWeather(data)
    } catch (err) {
        setError('could not fetch weather data')
    } finally {
        setLoading(false)
    }
  }
  // console.log(weather?.list);
  
  useEffect(()=> {
    (async()=> {
      const { status } = await Location.requestForegroundPermissionsAsync()
      if(status !== 'granted'){
        setError('permission to access location was denied')
        return
      }
      const location = await Location.getCurrentPositionAsync({})
      setLat(location.coords.latitude)
      setLon(location.coords.longitude)
      await fetchWeatherData()
    })()
  }, [lat, lon]) 

  return [weather, loading, error]
}