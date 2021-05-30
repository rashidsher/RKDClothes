import React, {Component, component} from 'react';
import {View,Text} from 'react-native';
import LottieView from 'lottie-react-native';

export default class Splash extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#ffff4f '}}>
      
        <LottieView source={require('../component/splash.json')} 
        autoPlay
         loop={false} 
             speed ={0.5}
             onAnimationFinish={()=>{
                 console.log('Animated finished')
               
             }}
         
         />
      </View>
    );
  }
}
