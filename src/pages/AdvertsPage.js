import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Axios from 'axios';

import Advert from '../components/Advert';

export default class AdvertsPage extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      adverts: []
    }

  }

  componentDidMount(){
    const url = "https://ddm-project.herokuapp.com/api/2/all";
    Axios.get(url)
    .then(response => {
      const results = response.data;
      this.setState({
        adverts: results
      })
    });
  }

  render() {
    return (
      <View>
        <Advert onPress={pageParams => {
          this.props.navigation.navigate('AdvertDetail', pageParams)
        }} adverts={this.state.adverts}/>
      </View>
    )
  }

}
