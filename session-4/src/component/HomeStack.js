

import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import PLP from '../screens/PLP'
import Category from '../screens/Category'
import Home from '../screens/Home'
import Detail from '../screens/Pdp'
import Cart from '../screens/Cart'


const Stack = createStackNavigator();

const HomeStack = () =>{
    return(
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Category" component={Category}/>
            <Stack.Screen name="Detail" component={Detail}/>
            <Stack.Screen name="Home" component={Home}/>
        </Stack.Navigator>
    )
}
export default HomeStack