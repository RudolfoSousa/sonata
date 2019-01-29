import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const AdvertItem = props => {
  const { advert, onPress } = props;
  const { title, picture, price } = advert;
  const typePrice = "R$";
  console.log(picture);
  return (
    <TouchableOpacity onPress={() => onPress({ advert })}>
      <View style={style.item}>
        <Image style={style.avatar} source={{
          uri: picture
        }} />
        <View style={style.line}>
          <Text style={style.title} >{title}</Text>
          <Text style={style.text} >{typePrice} {price}</Text>
        </View> 
      </View>
    </TouchableOpacity>
  )
}

const style = StyleSheet.create({
  avatar: {
    aspectRatio: 1,
    flex: 1,
  },
  item:{
    backgroundColor: '#FFFFFF',
    margin: 5,
    borderRadius: 15,
  },
  title: {
    fontSize: 20,
    marginLeft: 15,
    marginBottom: 10,
    marginTop: 10,
    flex: 1
  },
  text: {
    fontSize: 15,
    marginTop: 15,
    marginBottom: 10,
    flex: 2
  },
  line: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});

export default AdvertItem;
