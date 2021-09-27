import {Button, Text, View, Alert} from 'react-native';
import React, {useState, useEffect} from 'react';
import I18n from '../translation/languages';
import {useSelector, useDispatch} from 'react-redux';
import { useTheme } from '@react-navigation/native';
import {
  changeLanguageToArabic,
  changeLanguageToEnglish,
  changeLanguageToFrance,
} from '../store/actions/language';
import {ABOUT_ID} from '../navigation/screensId';

const Langs = ['en', 'ar', 'fr'];
const Home = props => {
  const {colors} = useTheme();
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
          const localLang = dispatch(changeLanguageToArabic()).payload;
          setLang(localLang);
        },
      },
      {
        text: 'English',
        onPress: () => {
          console.log('change Language to English');
          dispatch(changeLanguageToEnglish());
          console.log('changed', dispatch(changeLanguageToEnglish()).payload);
          const localLang = dispatch(changeLanguageToEnglish()).payload;

          setLang(localLang);
        },
      },
      {
        text: 'France',
        onPress: () => {
          console.log('change Language to France');
          dispatch(changeLanguageToFrance());
          console.log('changed', dispatch(changeLanguageToFrance()).payload);
          const localLang = dispatch(changeLanguageToFrance()).payload;

          setLang(localLang);
        },
      },
    ]);
    console.log('pressed');
  };
  const goToAbout = () => {
    //console.log(props);
    props.navigation.navigate(ABOUT_ID, {currentLanguage: localLang});
  };

  return (
    <View style={{direction: 'inherit'}}>
      <Text>{I18n.t('greeting')}</Text>
      <Text>{I18n.t('title')}</Text>
      <Button
        title={I18n.t('ChangeLanguage')}
        onPress={changeLang}
        color={colors.card}
      />
      <View style={{height: 50}} />
      <Button title="Go To About" onPress={goToAbout} color={colors.card} />
    </View>
  );
};

export default Home;
