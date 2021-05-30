import React from 'react';
import { ImageBackground, StyleSheet, StatusBar, Dimensions } from 'react-native';


const { height, width } = Dimensions.get('screen');



export default class Onboarding extends React.Component {
  render() {
    const { navigation } = this.props;

    return (
      <view>
      <Text> Starting the App</Text>
        <Button
          shadowless
          style={styles.button}
          color={materialTheme.COLORS.BUTTON_COLOR}
          onPress={() => navigation.navigate('App')}>
          GET STARTED
        </Button>
      </view>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
  },
  padded: {
    paddingHorizontal: theme.SIZES.BASE * 2,
    position: 'relative',
    bottom: theme.SIZES.BASE,
  },
  button: {
    width: width - theme.SIZES.BASE * 4,
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0,
  },
});
