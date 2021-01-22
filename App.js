import * as React from 'react'
import {View, Text} from 'react-native'
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from '@react-navigation/native'
import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme,
} from 'react-native-paper'
//import { createStackNavigator } from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer'
import SignInScreen from './src/SignIn'
import SignUpScreen from './src/SignUp'
//import HomeScreen from './src/Home';
import MainTabScreen from './src/MainTabScreen'
import SupportsScreen from './src/SupportsScreen'
import SettingScreen from './src/SettingScreen'
import BookmarkScreen from './src/BookmarkScreen'
import {DrawerContent} from './src/DrawerContent'
import {AuthContext} from './components/context'
import RootStackScreen from './src/RootStackScreen'
//const Stack = createStackNavigator();
const Drawer = createDrawerNavigator()

const App = () => {
  const [isDarkThem, setDarkThem] = React.useState(false)

  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background: '#ffffff',
      text: '#333333',
    },
  }

  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background: '#333333',
      text: '#ffffff',
    },
  }
  const theme = isDarkThem ? CustomDarkTheme : CustomDefaultTheme

  const authContext = React.useMemo(
    () => ({
      toggleTheme: () => {
        setDarkThem(isDarkTheme => !isDarkTheme)
      },
    }),
    [],
  )
  return (
    <PaperProvider theme={theme}>
      <AuthContext.Provider value={authContext}>
        <NavigationContainer theme={theme}>
          <Drawer.Navigator
            drawerContent={props => <DrawerContent {...props} />}>
            <Drawer.Screen name="HomeDrawer" component={MainTabScreen}/>
            <Drawer.Screen name='SupportScreen' component={SupportsScreen} />
            <Drawer.Screen name='SettingsScreen' component={SettingScreen} />
            <Drawer.Screen name='BookmarkScreen' component={BookmarkScreen} />
          </Drawer.Navigator>
        </NavigationContainer>
      </AuthContext.Provider>
    </PaperProvider>
  )
}

export default App
