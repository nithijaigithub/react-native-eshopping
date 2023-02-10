import React, { useEffect, useReducer, useMemo } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';

import HomeScreen from './screens/HomeScreen';
import ContactScreen from './screens/ContactScreen';
import AboutScreen from './screens/AboutScreen';
import LoginScreen from './screens/LoginScreen';
import { DrawerContent } from './screens/DrawerContent';
import {ProductList} from './screens/ProductList';

import { CartItemsProvider } from './context/CartItems.js';
import { ShoppingCart } from './screens/ShoppingCart';
import { CartIcon } from './components/CartIcon.js';
import { ProductDetails } from './screens/ProductDetails';

import { AuthorizeContext } from './context/AuthorizeContext';

const Drawer = createDrawerNavigator();

function App() {
  // Authorize section
  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
    fullName: null
  };
  
  const loginReducer = (prevState, action) => {
    
    switch( action.type ) {
      case 'RETRIEVE_TOKEN': 
        return {
          ...prevState,
          userToken: action.token,
          userName: action.id,
          fullName: action.fullName,
          isLoading: false,
        };
      case 'LOGIN': 
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
          fullName: action.fullName
        };
      case 'LOGOUT': 
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
          fullName: null,
        };
    }
  };

  const [loginState, dispatch] = useReducer(loginReducer, initialLoginState);
  
  const authorizeContext = useMemo(() => ({
    logIn: async(foundUser) => {
      const userToken = String(foundUser[0].userToken);
      const userName = foundUser[0].username;
      const fullName = foundUser[0].fullName;
      try {
        await AsyncStorage.setItem('userToken', userToken);
        await AsyncStorage.setItem('id', userName);
        await AsyncStorage.setItem('fullName', fullName);
      } catch(e) {
        console.log(e);
      }
      dispatch({ type: 'LOGIN', id: userName, token: userToken, fullName: fullName });
    },
    signOut: async() => {
      try {
        await AsyncStorage.removeItem('userToken');
        await AsyncStorage.removeItem('id');
        await AsyncStorage.removeItem('fullName');
      } catch(e) {
        console.log(e);
      }
      dispatch({ type: 'LOGOUT' });
    }
  }), []);

  useEffect(() => {

    setTimeout(async() => {
      let userToken;
      userToken = null;
      let id = null;
      let fullName = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
        id = await AsyncStorage.getItem('id');
        fullName = await AsyncStorage.getItem('fullName');
      } catch(e) {
        console.log(e);
      }
      dispatch({ type: 'RETRIEVE_TOKEN', token: userToken, id: id, fullName: fullName });
    }, 1000);

  }, []);
  
  return (
    <AuthorizeContext.Provider value={authorizeContext}>
    <CartItemsProvider>
    <NavigationContainer>
        <Drawer.Navigator
        initialRouteName="Home_Screen"
        drawerPosition='left'
        drawerType="front"
        edgeWidth={100}
        hideStatusBar={false}
        
        screenOptions={{
          headerShown: true,
          swipeEnabled: true,
          gestureEnabled: true,
          headerTitleAlign: 'left',
          headerStyle: {
            backgroundColor: '#7fad39'
          },
          headerTintColor: '#ffffff',
          headerTitleStyle: {
            fontSize: 18,
            fontWeight: 'bold',
            textTransform: 'uppercase'
          },
        }}
        drawerContent={props => <DrawerContent {...props} loginState={loginState} />}
      >
        <Drawer.Screen
          name="Home_Screen"
          component={HomeScreen}
          options={{
            title: 'e-Shopping',
            headerRight: () => <CartIcon />
          }}
        />
        <Drawer.Screen
          name="AboutUs_Screen"
          component={AboutScreen}
          options={{
            title: 'About Us',
            headerRight: () => <CartIcon />
          }}
        />
        <Drawer.Screen
          name="ContactUs_Screen"
          component={ContactScreen}
          options={{
            title: 'Help & Support',
            headerRight: () => <CartIcon />
          }}
        />
        <Drawer.Screen
          name="ProductList"
          component={ProductList}
          options={{
            headerRight: () => <CartIcon />
          }}
        />
        <Drawer.Screen
          name="ProductDetails"
          component={ProductDetails}
          options={{
            headerRight: () => <CartIcon />
          }}
        />
        <Drawer.Screen
          name="Shopping_Cart"
          component={ShoppingCart}
          options={{
            title: 'Shopping Cart',
            headerRight: () => <CartIcon />
          }}
        />
        <Drawer.Screen
          name="Login"
          component={LoginScreen}
          options={{
            title: 'Login',
            headerRight: () => <CartIcon />
          }}
        />
        </Drawer.Navigator>      
    </NavigationContainer> 
    </CartItemsProvider>
    </AuthorizeContext.Provider>
  )
}

export default App;