import React from 'react'

import {createStackNavigator} from '@react-navigation/stack'

import SignInScreen from './SignIn'
import SignUpScreen from './SignUp'
import HomeScreen from './Home'
import MainTabScreen from './MainTabScreen'

const RootStack = createStackNavigator()

const RootStackScreen = ({navigation,props}) => (
  <RootStack.Navigator initialRouteName='SignInScreen' headerMode='none'>
    <RootStack.Screen name='SignInScreen' component={SignInScreen} />
    <RootStack.Screen name='SignUpScreen' component={SignUpScreen} />
    <RootStack.Screen name='Home' component={MainTabScreen} />
  </RootStack.Navigator>
)

export default RootStackScreen
