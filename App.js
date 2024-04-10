/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Provider} from 'react-redux';
import {persistor, store} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import HomeScreen from './src/screen/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Lab0602 from './src/screen/Lab0602';
import Lab0603 from './src/screen/Lab0603';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{
                title: 'Lab 05 - 06',
              }}
            />

            <Stack.Screen
              name="Lab0602"
              component={Lab0602}
              options={{
                title: 'Lab 06 - 02',
              }}
            />

            <Stack.Screen
              name="Lab0603"
              component={Lab0603}
              options={{
                title: 'Lab 06 - 03',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;
