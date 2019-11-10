import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useNavigation, useNavigationParam } from "react-navigation-hooks";
import firebase from "../../config/Firebase";
import { Button } from "react-native-elements";



export default function EditParty() {
  const [key, setKey] = useState("");
  const [name, setName] = useState("")
  const [content, setContent] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    
  })
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Edit Party</Text>
      <Button
        title="Go to Edit Party... again"
        type="clear"
        onPress={() => {navigate.push("Edit")}}
      />
      <Button
        title="Go to Home"
        type="clear"
        onPress={() => {navigate("Home")}}
      />
      <Button
        title="Go back"
        type="clear"
        onPress={() => {navigation.goBack()}}
      />
    </View>
  );
}


 /*export default class EditParty extends Component {

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
} */
