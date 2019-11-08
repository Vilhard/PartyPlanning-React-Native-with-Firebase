import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";

export default class LoginScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Button
          title="go back to home screen"
          type="clear"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}
