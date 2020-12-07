import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#4b7bec' },
    }}
  >
    <Auth.Screen name="Dashboard" component={Dashboard} />
    <Auth.Screen name="SignUp" component={SignUp} />
  </Auth.Navigator>
);

export default AuthRoutes;
