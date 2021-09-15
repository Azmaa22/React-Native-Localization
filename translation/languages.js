import I18n, {getLanguages} from 'react-native-i18n';
import ar from './ar';
import en from './en';
import fr from './fr';

I18n.fallbacks = true;

I18n.translations = {
  en,
  ar,
  fr,
};
getLanguages()
  .then((languages) => {
    console.log('getLanguages', languages); // ['en-US', 'en']
    console.log('defualt Language',I18n.defaultLocale);
    console.log('Local Language', I18n.locale);
    console.log('current Language',I18n.currentLocale());


  })
  .catch((error) => {
    console.log('getLanguages error : ', error);
  });

//I18n.defaultLocale = "ar-EG";

  export default I18n;
