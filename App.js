import React from "react";
import AppNavigator from "./src/screens/AppNavigator";
import HomeHeader from "./src/Header/HomeHeader";
import { YellowBox } from "react-native";

export default class App extends React.Component {
  render() {
    return <AppNavigator />;
  }
}
