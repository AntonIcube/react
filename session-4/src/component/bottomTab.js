import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from '../component/HomeStack'
import Category from '../screens/Category'
import CategoryStack from '../component/CategoryStack'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Tab = createBottomTabNavigator();

export function MyTab() {
  return (
    <Tab.Navigator initialRouteName="Home"      
    tabBarOptions={{
      tabStyle: {
        justifyContent: 'center', alignItems: 'center', paddingVertical: 10, backgroundColor:'#0f213a', shadowColor:'#fff'
      },
    }}>
      <Tab.Screen name="Home" component={HomeStack}/>
      <Tab.Screen name="Category" component={CategoryStack} />
    </Tab.Navigator>
  );
}
