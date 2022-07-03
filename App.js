import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./Home"
import PageNoFound from "./src/PageNoFound"
const Stack = createNativeStackNavigator();

const Route = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen name="PageNoFound" component={PageNoFound} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Route
