import I18n from 'react-native-i18n';

export const  CHANGE_TO_ARABIC = 'CHANGE_TO_ARABIC'; 
export const  CHANGE_TO_ENGLISH = 'CHANGE_TO_ENGLISH'; 
export const  CHANGE_TO_FRANCE = 'CHANGE_TO_FRANCE'; 


export const changeLanguageToArabic = ()=>{
    I18n.locale = 'ar';
    console.log(I18n.t('greeting'));
    return {
        type:CHANGE_TO_ARABIC,
        payload:I18n.locale
    };
} 
export const changeLanguageToEnglish = ()=>{
    I18n.locale = 'en';
    console.log(I18n.t('greeting'));
    return {
        type:CHANGE_TO_ENGLISH,
        payload:I18n.locale
    };
} 
export const changeLanguageToFrance = ()=>{
    I18n.locale = 'fr';
    console.log(I18n.t('greeting'));
    return {
        type:CHANGE_TO_FRANCE,
        payload:I18n.locale
    };
} 