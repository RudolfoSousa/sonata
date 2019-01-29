import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import Axios from 'axios';

import Advert from '../components/Advert';

export default class AdvertsPage extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      adverts: [],
      load: true
    }

  }

  componentDidMount(){
    const url = "https://ddm-project.herokuapp.com/api/2/all";
    Axios.get(url)
    .then(response => {
      const results = response.data;
      this.setState({
        adverts: results,
        load: false
      })
    });
  }

  render() {
    return (
      <View style={style.container}>
        {
          this.state.load 
           ? <ActivityIndicator size="large" color="#9B6A6C" />
           : <Advert onPress={pageParams => {
                this.props.navigation.navigate('AdvertDetail', pageParams)
              }} adverts={this.state.adverts}/>
        }  

      </View>
    )
  }

}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
});