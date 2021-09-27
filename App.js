import React, {useState, useEffect} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import ReduxTHunk from 'redux-thunk';
import LanguageReducer from '../section15/store/reducers/language';
import AppNavigation from './navigation';
import {LogBox} from 'react-native';
import ThemeReducer from './store/reducers/theme';
LogBox.ignoreLogs(['Reanimated 2']);

const rootReducer = combineReducers({
  language: LanguageReducer,
  theme:ThemeReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxTHunk));


const App = () => {
  return (

 <View style={styles.container}> 
   <Provider store={store}>

      <AppNavigation />

    </Provider>
 </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 40,
  },
});
