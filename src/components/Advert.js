import React from 'react';
import { StyleSheet, Text, FlatList } from 'react-native';
import AdvertItem from './AdvertItem';

const Advert = props => {

  const { adverts } = props;

  return (
    <FlatList
      data={adverts}
      renderItem={({item}) => (
        <AdvertItem  advert={item} />
      )}
      keyExtractor = {(item) => item.id} />
  )

}

export default Advert;
