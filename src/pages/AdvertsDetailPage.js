import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class AdvertsDetailPage extends React.Component {

  render() {
    const {people} = this.props.navigation.state.params;
    return (
      <View style={style.container}>
        <Text>
        <Image style={style.avatar} source={{uri: people.picture.large}}></Image>
          <Text style={style.name}>{capitalizeFirstLetter(people.name.first)}</Text>
        </Text>
      </View>
    );
  }
}
