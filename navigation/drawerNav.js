import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Setting from '../screens/setting';
import AppStackNav from './stackNav';

const DrawerAppNavigatoer = () =>{
    const drawer = createDrawerNavigator();
    return (
        <drawer.Navigator>
            <drawer.Screen name='Home' component={AppStackNav}/>
            <drawer.Screen name='Setting' component={Setting}/>
        </drawer.Navigator>
    )
}


export default DrawerAppNavigatoer;