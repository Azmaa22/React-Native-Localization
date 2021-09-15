import React, {useState, useEffect} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import ReduxTHunk from 'redux-thunk';
import Home from './screens/home';
import LanguageReducer from '../section15/store/reducers/language';

const rootReducer = combineReducers({
  language:LanguageReducer,
});

const store = createStore(rootReducer,applyMiddleware(ReduxTHunk));

const App = () => {
  return (
    <Provider store={store}>
      <View  style={styles.container}>
      
      <Home/>
    </View>
    </Provider>
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
