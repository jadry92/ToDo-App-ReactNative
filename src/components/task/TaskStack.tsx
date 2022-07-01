import React from 'react';
import colors from '../../res/colors';
import { createStackNavigator } from '@react-navigation/stack';
import TaskScreen from './TaskScreen';

const Stack = createStackNavigator();

const TaskStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.black,
          shadowColor: colors.black,
        },
        headerTintColor: colors.white,
      }}>
      <Stack.Screen name="task" component={TaskScreen} />
    </Stack.Navigator>
  );
};

export default TaskStack;
