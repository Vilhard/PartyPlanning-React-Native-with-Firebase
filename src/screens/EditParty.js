import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";

export default class EditParty extends Component {
  static navigationOptions = {
    title: "Edit Party"
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Add Board</Text>
        <Button
          title="Go to Edit Party... again"
          type="clear"
          onPress={() => this.props.navigation.push("Edit")}
        />
        <Button
          title="Go to Home"
          type="clear"
          onPress={() => this.props.navigation.navigate("Home")}
        />
        <Button
          title="Go back"
          type="clear"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}
