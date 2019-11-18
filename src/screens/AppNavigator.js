import React, {useState, useEffect } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Loading from "./Loading"
import LoginScreen from "./LoginScreen";
import HomeScreen from "./HomeScreen";
import AddParty from "./AddParty";
import EditParty from "./EditParty";
import SignUp from "./SignUp";

const AppNavigator = createStackNavigator(
  {
    Loading: {
    screen: Loading,
    navigationOptions: {
      header: null
    }
  },
    LoginScreen: {
      screen: LoginScreen,
      navigationOptions: {
        header: null
      }
    },
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: {
        title: "My Parties",
        //headerLeft: null
      }
    },
    AddParty: {
      screen: AddParty,
      navigationOptions: {
        title: "Create a New Party"
      }
    },
    EditParty: {
      screen: EditParty,
      navigationOptions: {
        title: "Edit Party"
      }
    },
    SignUp: {
      screen: SignUp, 
      navigationOptions: {
        title: "Sign Up"
      }
    }
  },
  {
    defaultNavigationOptions: {
      headerTintColor: '#000',
      headerStyle: {
        fontWeight: 'bold',
        backgroundColor: "#fff",
        elevation: 0, // remove shadow on Android
        shadowOpacity: 0 // remove shadow on iOS
      },
      headerTitleStyle: {
        fontSize: 20,
      }
    },
    initialRouteName: "Loading"
  },
);
export default createAppContainer(AppNavigator);
