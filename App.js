import React from "react";
import AppNavigator from "./src/screens/AppNavigator";
import HomeHeader from "./src/Header/HomeHeader";
import Aux from "./src/Aux";
import { YellowBox } from "react-native";
export default class App extends React.Component {
  render() {
    return <AppNavigator />;
  }
}

YellowBox.ignoreWarnings([
  "Warning: isMounted(...) is deprecated",
  "Module RCTImageLoader"
]);
