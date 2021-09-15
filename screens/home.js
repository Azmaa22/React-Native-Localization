//import I18n,{getLanguages} from 'react-native-i18n';
import {Button, Text, View, Alert} from 'react-native';
import React, {useState, useEffect} from 'react';
import I18n from '../translation/languages';
import {useSelector, useDispatch} from 'react-redux';
import {changeLanguageToArabic, changeLanguageToEnglish, changeLanguageToFrance} from '../store/actions/language';

const Langs = ['en', 'ar', 'fr'];
const Home = () => {
  const localLang = useSelector(state => state.language.language);
  const [lang, setLang] = useState(localLang);
  I18n.locale = lang;
  const dispatch = useDispatch();

  const changeLang = () => {
    Alert.alert('Languages', 'choose langauge', [
      {
        text: 'Arabic',
        onPress: () => {
          console.log('change Language to Arabic');
         dispatch(changeLanguageToArabic()); 
         console.log('changed',dispatch(changeLanguageToArabic()).payload);
         const localLang = dispatch(changeLanguageToArabic()).payload;
         setLang(localLang);
        },
      },
      {
        text: 'English',
        onPress: () => {
          console.log('change Language to English');
          dispatch(changeLanguageToEnglish()); 
          console.log('changed',dispatch(changeLanguageToEnglish()).payload);
          const localLang = dispatch(changeLanguageToEnglish()).payload;
         
          setLang(localLang);
        },
      },
      {
        text: 'France',
        onPress: () => {
          console.log('change Language to France');
          dispatch(changeLanguageToFrance()); 
          console.log('changed',dispatch(changeLanguageToFrance()).payload);
          const localLang = dispatch(changeLanguageToFrance()).payload;
         
          setLang(localLang);
        },
      },
    ]);
    console.log('pressed');
  };

 

  return (
    <View style={{direction:'inherit'}}>
      <Text>{I18n.t('greeting')}</Text>
      <Text>{I18n.t('title')}</Text>
      <Button
        title={I18n.t('ChangeLanguage')}
        onPress={changeLang}
      />
    </View>
  );
};


export default Home;
