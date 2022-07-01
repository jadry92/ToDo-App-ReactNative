import React from 'react';
import colors from '../../res/colors';
import { createStackNavigator } from '@react-navigation/stack';
import ListScreen from './ListScreen';

const Stack = createStackNavigator();
const ListStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.black,
          shadowColor: colors.black,
        },
        headerTintColor: colors.white,
      }}>
      <Stack.Screen name="list" component={ListScreen} />
    </Stack.Navigator>
  );
};

export default ListStack;
