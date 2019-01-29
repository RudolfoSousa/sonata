import React from 'react';
import { StyleSheet, Text, FlatList } from 'react-native';
import AdvertItem from './AdvertItem';

const Advert = props => {

  const { adverts, onPress } = props;

  return (
    <FlatList style={style.container}
      data={adverts}
      renderItem={({item}) => (
        <AdvertItem style={style.item} advert={item}
        onPress={onPress} />
      )}
      keyExtractor = {(item) => item.id} />
  )

}

const style = StyleSheet.create({
  container: {
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: '#EBFCFB',
  },
  item: {
    flex: 2,
  }
});

export default Advert;
