import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/home';
import About from '../screens/about';
import {ABOUT_ID, HOME_ID} from './screensId';

const AppStackNav = () => {
  const stack = createStackNavigator();
  return (
    <stack.Navigator initialRouteName="Home">
      <stack.Screen
        name={HOME_ID}
        component={Home}
        options={{title: 'Overview'}}
      />
      <stack.Screen name={ABOUT_ID} component={About} options={{title:'About App'}}/>
    </stack.Navigator>
  );
};

export default AppStackNav;
