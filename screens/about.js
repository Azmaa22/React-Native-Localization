import I18n from '../translation/languages';
import React, {useRef, useEffect} from 'react';
import {Animated, Button, Text, View} from 'react-native';



const About = props => {
  const {currentLanguage} = props.route.params;

  return (
    <View>
      <View
        style={{
          marginVertical: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>{currentLanguage}</Text>
      </View>
     <Text style={{
          margin: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}>{I18n.t('Message')}</Text>
    </View>
  );
};

export default About;
