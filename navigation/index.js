import React from 'react';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import AppStackNav from './stackNav';
import DrawerAppNavigatoer from './drawerNav';
import {useSelector} from 'react-redux';

const AppNavigation = () => {
  const isDark = useSelector(state => state.theme.isDark);
  const CustomDefualtTheme = {
    dark:false,
    colors: {
      //...DefaultTheme.colors,
      primary: 'blue',
      card: 'gray',
      text: 'white',
      border: 'rgb(199, 199, 204)',
      background:'white'
    },
  };
  const CustomDarkTheme = {
    dark: true,
    colors: {
      primary: 'yellow',
      background: 'black',
      card: 'green',
      text: 'white',
      border: 'rgb(199, 199, 204)',
    },
  };
  return (
    <NavigationContainer theme={isDark ? CustomDarkTheme : CustomDefualtTheme}>
      <DrawerAppNavigatoer />
    </NavigationContainer>
  );
};

export default AppNavigation;
