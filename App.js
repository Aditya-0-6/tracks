import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SigninScreen from './src/screens/SigninScreen'
import SignupScreen from './src/screens/SignupScreen'
import TrackListScreen from './src/screens/TrackListScreen'
import TrackCreateScreen from './src/screens/TrackCreateScreen'
import AccountScreen from './src/screens/AccountScreen'
import TrackDetailScreen from './src/screens/TrackDetailScreen'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';



const Stack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator()


function Home() {
  return (
    <Tab.Navigator
    activeColor="#f0edf6"
    inactiveColor="#3e2465"
    barStyle={{ backgroundColor: '#694fad' }}
        >

      <Tab.Screen name="Account" component={AccountScreen} />
      <Tab.Screen name="Track List" component={TrackListScreen} />
      <Tab.Screen name="Track Create" component={TrackCreateScreen} />
    </Tab.Navigator>
  )
}




function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
             <Stack.Screen name="Sign Up" component={SignupScreen} />
             <Stack.Screen name="Sign In" component={SigninScreen} />
             <Stack.Screen name="Home" component={Home}/>
             <Stack.Screen name ="Detail" component={TrackDetailScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
      
    );
  }
  

  export default App;
