/**
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import colors from './src/res/colors';
import ListStack from './src/components/list/ListStack';
import TaskStack from './src/components/task/TaskStack';

const Tabs = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: colors.black,
          },
        }}>
        <Tabs.Screen
          name="List"
          component={ListStack}
          options={{
            tabBarIcon: ({ size, color }) => (
              <Image
                style={{ tintColor: color, width: size, height: size }}
                source={require('./src/assets/img/outline_playlist_add_white_48dp.png')}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="Task"
          component={TaskStack}
          options={{
            tabBarIcon: ({ size, color }) => (
              <Image
                style={{ tintColor: color, width: size, height: size }}
                source={require('./src/assets/img/outline_view_carousel_white_48dp.png')}
              />
            ),
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

export default App;
