import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class AdvertsDetailPage extends React.Component {

  render() {
    const {advert} = this.props.navigation.state.params;
    return (
      <View>
        <Text>{advert.title}</Text>
        <Text>{advert.price}</Text>
      </View>
    );
  }
}
