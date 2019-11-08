import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import LoginScreen from "./LoginScreen";
import HomeScreen from "./HomeScreen";
import AddParty from "./AddParty";
import EditParty from "./EditParty";

const AppNavigator = createStackNavigator(
  {
    LoginScreen: {
      screen: LoginScreen,
      navigationOptions: {
        header: null
      }
    },
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: {
        title: "Home"
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
    }
  },
  {
    defaultNavigationOptions: {
      headerTintColor: "#000",
      headerStyle: {
        backgroundColor: "#FFFFFF",
        elevation: 0, // remove shadow on Android
        shadowOpacity: 0 // remove shadow on iOS
      }
    },
    initialRouteName: "HomeScreen"
  }
);
export default createAppContainer(AppNavigator);
