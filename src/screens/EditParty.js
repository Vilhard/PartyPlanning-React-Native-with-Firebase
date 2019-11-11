import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import firebase from "../../config/Firebase";
import { Input, Button } from "react-native-elements";
import { useNavigation, useNavigationParam } from "react-navigation-hooks";

export default function EditParty() {
  const { navigate } = useNavigation();
 const name = useNavigationParam("name");
 const location = useNavigationParam("location");
 const content = useNavigationParam("content");
 const time = useNavigationParam("time");
 const index = useNavigationParam("index")

 const [newName, setNewName] = useState(name);
 const [newLocation, setNewLocation] = useState(location);
 const [newContent, setNewContent] = useState(content);
 const [newTime, setNewTime] = useState(time);
  // Need to update the party by index... not working atm
 const updateParty = () => {
  firebase
  .database()
  .ref("party/" + index)
  .push({ name: newName, content: newContent, location: newLocation, time: newTime })
  .then(() => navigate("HomeScreen"))
 }
  return (
    <View style={{ padding: 20 }}>
      <Input
        placeholder={name}
        label="Name"
        style={{ width: 200, borderColor: "gray", borderWidth: 1 }}
        onChangeText={newName => setNewName(newName)}
        value={newName}
      ></Input>
      <Input
        placeholder={content}
        label="Content"
        style={{
          width: 200,
          borderColor: "gray",
          borderWidth: 1
        }}
        onChangeText={newContent => setNewContent(newContent)}
        value={newContent}
      ></Input>
      <Input
        placeholder={location}
        label="Location"
        style={{
          width: 200,
          borderColor: "gray",
          borderWidth: 1
        }}
        onChangeText={newLocation => setNewLocation(newLocation)}
        value={newLocation}
      ></Input>
      <Input
        placeholder="Time"
        label="Time"
        style={{
          width: 200,
          borderColor: "gray",
          borderWidth: 1
        }}
        onChangeText={newTime => setNewTime(newTime)}
        value={newTime}
      ></Input>
      <Button
        buttonStyle={{ marginTop: 10 }}
        title="Update"
        onPress={() => updateParty()}
      ></Button>
      <Button title="Go Home" onPress={() => navigate("HomeScreen")}/>
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
