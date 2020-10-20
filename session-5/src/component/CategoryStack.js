

import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import PLP from '../screens/PLP'
import Category from '../screens/Category'
import Home from '../screens/Home'
import Detail from '../screens/Pdp'
import Cart from '../screens/Cart'


const Stack = createStackNavigator();

const CategoryStack = () =>{
    return(
        <Stack.Navigator initialRouteName="Category">
            <Stack.Screen name="Category" component={Category}/>
            <Stack.Screen name="PLP" component={PLP}/>
            <Stack.Screen name="Detail" component={Detail}/>
            <Stack.Screen name="Cart" component={Cart}/>
            <Stack.Screen name="Home" component={Home}/>
        </Stack.Navigator>
    )
}
export default CategoryStack