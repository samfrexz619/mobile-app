import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import City from '../components/City';
import CurrentWeather from '../screens/CurrentWeather';
import UpcomingWeather from '../screens/UpcomingWeather';
import { WeatherData } from '../lib/types';



interface Prop {
  weather: WeatherData;
}


const Tab = createBottomTabNavigator()

const Tabs = ({ weather }: Prop) => {
  return ( 
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'grey',
        tabBarStyle: {
          backgroundColor: 'lightblue'
        },
        headerStyle: {
          backgroundColor: 'lightblue'
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 25,
          color: 'tomato'
        }
      }}
    >
        <Tab.Screen 
          name='Current' 
          // component={CurrentWeather}
          options={{
            tabBarIcon: ({focused}) => (<Feather name='droplet' size={25} color={focused ? 'tomato' : 'black'}  />)
          }}
        >
          {()=> <CurrentWeather weatherInfo={weather.list[0]} />}
        </Tab.Screen>
        <Tab.Screen 
          name='Upcoming' 
          // component={UpcomingWeather} 
          options={{
            tabBarIcon: ({focused}) => (<Feather name='clock' size={25} color={focused ? 'tomato' : 'black'}  />)
          }}
        >
          { ()=> <UpcomingWeather weatherInfo={weather.list} />}
        </Tab.Screen>
        <Tab.Screen 
          name='City' 
          // component={City}
          options={{
            tabBarIcon: ({focused}) => (<Feather name='home' size={25} color={focused ? 'tomato' : 'black'}  />)
          }} 
        >
          {()=> <City weatherInfo={weather.city} />}
        </Tab.Screen>
     </Tab.Navigator>
   );
}
 
export default Tabs;