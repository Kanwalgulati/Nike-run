/**
 *@  In this file we have the tabs navigator assembled for the Home screen
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import RunScreen from './RunScreen';
import ActivityScreen from './ActivityScreen';
import colors from '../../../constants/colors';

const HomeScreen = () => {
  const Tab = createMaterialTopTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: {color: colors.tabsColor, fontWeight: 'bold'},
        }}>
        <Tab.Screen
          name="StartaRun"
          component={RunScreen}
          options={{tabBarLabel: 'Start a Run'}}
        />
        <Tab.Screen
          name="Activity"
          component={ActivityScreen}
          options={{tabBarLabel: 'Activity'}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default HomeScreen;
