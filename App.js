// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { GestureHandlerRootView} from 'react-native-gesture-handler'
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Smallscale from './components/Smallscale';
import Largescale from './components/Largescale';
import User from './components/user';
import Notification from './components/notification';
import Smallpeople from './components/smallpeople';
import Connect from './components/connect';
import Orders from './components/orders';
import Largepeople from './components/Largepeople';
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator  >
      <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
      <Stack.Screen name="Largepeople" component={Largepeople} options={{headerShown:false}}/>
      <Stack.Screen name="Orders" component={Orders} options={{headerShown:false}}/>
      <Stack.Screen name="Connect" component={Connect} options={{headerShown:false}}/>
      <Stack.Screen name="Smallpeople" component={Smallpeople} options={{headerShown:false}}/>
      <Stack.Screen name="Notification" component={Notification} options={{headerShown:false}}/>
      <Stack.Screen name="User" component={User} options={{headerShown:false}}/>
      <Stack.Screen name="Largescale" component={Largescale} options={{headerShown:false}}/>
      <Stack.Screen name="Smallscale" component={Smallscale} options={{headerShown:false}}/>
      <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
      <Stack.Screen name="Signup" component={Signup} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
