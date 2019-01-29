import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const AdvertItem = props => {
  const { advert } = props;
  const { title, picture } = advert;
  console.log(picture);
  return (
    <TouchableOpacity>
      <View style={style.line}>
        <Image style={style.avatar} source={{
          uri: picture
        }} />
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

const style = StyleSheet.create({
  avatar: {
    aspectRatio: 1,
    flex: 1
  },
  line:{
    borderBottomWidth: 1,
    borderBottomColor: "#bbb",
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default AdvertItem;
