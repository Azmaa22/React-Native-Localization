export const CHANGE_TO_DARK_MODE = 'CHANGE_TO_DARK_MODE';
export const CHANGE_TO_LIGHT_MODE = 'CHANGE_TO_LIGHT_MODE';


export const changeToDarkMode = () =>{
    return {
        type:CHANGE_TO_DARK_MODE,
        payload:true
    };
}

export const changeToLightMode = () =>{
    return {
        type:CHANGE_TO_LIGHT_MODE,
        payload:false
    };
}