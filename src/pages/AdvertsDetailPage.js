import React from 'react';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class AdvertsDetailPage extends React.Component {

  render() {
    const {advert} = this.props.navigation.state.params;
    const typePrice = "R$";
    const picture = advert.picture;
    const {amount} = advert;
    return (
    	<ParallaxScrollView
	      backgroundColor="#EBFCFB"
	      contentBackgroundColor="#EBFCFB"
	      parallaxHeaderHeight={300}
	      renderForeground={() => (
	       <View style={{ height: '100%', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
	          <Image style={style.avatar} source={{
          			uri: picture
        		}} />
	        </View>
	      )}>
	      <View style={style.content}>
	        <Text style={style.title} >{advert.title}</Text>
	        <View style={style.line} >
      			<Text style={style.price} >{typePrice} {advert.price}</Text>
      			<Text style={style.amount} >Quantidade: {amount ? amount : '-'}</Text>
      		</View>	
      		<Text style={style.description} >{advert.description}</Text>	
	      </View>
	    </ParallaxScrollView>
    );
  }
}

const style = StyleSheet.create({
  avatar: {
    aspectRatio: 1,
    width: '100%'
  },
  content: {
  	height: 'auto',
  	padding: 15
  },
  title: {
  	fontSize: 30,
  },
  price: {
  	paddingLeft: 5,
  	paddingRight: 5,
  	marginTop: 10,
  	textAlign: 'justify',
  	textDecorationLine: 'underline'
  },
  amount: {
  	paddingLeft: 5,
  	paddingRight: 5,
  	marginTop: 10,
  	textAlign: 'justify',
  	fontSize: 13
  },
  description: {
  	paddingLeft: 5,
  	paddingRight: 5,
  	marginTop: 20,
  },
  line: {
    flexDirection: 'row',
    alignItems: 'baseline'
  }
});