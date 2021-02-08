import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { AppStackNavigator } from './AppStackNavigator'
import { AppStackNavigator2 } from './AppStackNavigator2'
import { Icon } from 'react-native-elements'
import SearchLaptops from '../screens/SearchLaptops';


export const AppTabNavigator = createBottomTabNavigator({
  SearchLaptops: {
    screen: AppStackNavigator2,
    navigationOptions: {
      tabBarIcon: <Icon name="bullseye" type="font-awesome" />,
      tabBarLabel: "Search Laptops",
    }
  },
  Recommendations: {
    screen: AppStackNavigator,
    navigationOptions: {
      tabBarIcon: <Icon name="briefcase" type="font-awesome" />,
      tabBarLabel: "See Recommendations",
    }
  }
});
