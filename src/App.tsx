import 'react-native-gesture-handler';
import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes';

const App: React.FC = () => (
  <NavigationContainer>
    <View style={{ flex: 1, backgroundColor: '#1f89aa' }}>
      <Routes />
    </View>
  </NavigationContainer>
);

export default App;
