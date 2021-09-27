import React, {useEffect, useState} from 'react';
import {View, Text, Switch} from 'react-native';
import I18n from '../translation/languages';
import { useSelector, useDispatch } from 'react-redux';
import { changeToDarkMode, changeToLightMode } from '../store/actions/theme';

const Setting = props => {
  const isDark = useSelector(state=>state.theme.isDark);
  const [isEnabled, setIsEnabled] = useState(isDark);
  const dispatch = useDispatch();

  const toggleSwitch = () => {
    let dark;
    if(isDark){
      dispatch(changeToLightMode());
      dark = dispatch(changeToLightMode()).payload;
      console.log('mode after changing', dark);
    }else{
      dispatch(changeToDarkMode());
      dark = dispatch(changeToDarkMode()).payload;
      console.log('mode after changing', dark);
    }
    setIsEnabled(dark);
  }
  return (
    <View>
      <Text>Setting Screen</Text>
      <Text>currentLanguage  :   {I18n.locale}</Text>
      <Text>{I18n.t('Message')}</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

export default Setting;
