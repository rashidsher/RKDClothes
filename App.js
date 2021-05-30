import * as React from 'react';
import { Button, View } from 'react-native';
import {createDrawerNavigator} from 'react-native-drawer';
import { NavigationContainer } from '@react-navigation/native';
import OnboardingScreen from './Onboarding';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}


const Drawer = createDrawerNavigator();
function AppStack(props) {
  return (
    <Drawer.Navigator
      style={{flex: 1}}
     
      drawerStyle={{
        backgroundColor: 'white',
        width: width * 0.8,
      }}
      drawerContentOptions={{
        activeTintColor: 'white',
        inactiveTintColor: '#000',
        activeBackgroundColor: materialTheme.COLORS.ACTIVE,
        inactiveBackgroundColor: 'transparent',
        itemStyle: {
          width: width * 0.74,
          paddingHorizontal: 12,
          // paddingVertical: 4,
          justifyContent: 'center',
          alignContent: 'center',
          // alignItems: 'center',
          overflow: 'hidden',
        },
        labelStyle: {
          fontSize: 18,
          fontWeight: 'normal',
        },
      }}
      initialRouteName="Home">
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          drawerIcon: ({focused}) => (
            <Icon
              size={16}
              name="shop"
             
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          drawerIcon: ({focused}) => (
            <Icon
              size={16}
              name="shop"
              
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Notification"
        component={NotificationsScreen}
        options={{
          drawerIcon: ({focused}) => (
            <Icon
              size={16}
              name="shop"
              
            
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function OnboardingStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="none">
      <Stack.Screen
        name="Onboarding"
        component={OnboardingScreen}
        option={{
          headerTransparent: true,
        }}
      />
      <Stack.Screen name="App" component={AppStack} />
    </Stack.Navigator>
  );
}