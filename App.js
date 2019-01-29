import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import AdvertsPage from './src/pages/AdvertsPage';
import AdvertsDetailPage from './src/pages/AdvertsDetailPage';

const AppNavigator = createStackNavigator({
  'Home': {
    screen: AdvertsPage
  },
  'AdvertDetail': {
    screnn: AdvertsDetailPage,
  }
},{
  defaultNavigationOptions: {
    title: 'Sonata',
    headerTintColor: 'white',
    headerStyle: {
      borderBottomWidth: 1,
      borderBottomColor: '#cecece',
      backgroundColor: '#6ca2f7'
    },
    headerTitleStyle:{
      color: 'white',
      fontSize: 30,
      alignSelf: 'center'
    }
  }
});

export default createAppContainer(AppNavigator);
