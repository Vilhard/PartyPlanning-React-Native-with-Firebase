import React, { useState } from "react";
import { View, Alert } from "react-native";
import firebase from "../../config/Firebase";
import { Input, Button } from "react-native-elements";
import { useNavigation, useNavigationParam } from "react-navigation-hooks";
import { HomeStyles } from "../styles/HomeStyles";

export default function EditParty() {
  const { navigate } = useNavigation();
  const name = useNavigationParam("name");
  const location = useNavigationParam("location");
  const content = useNavigationParam("content");
  const time = useNavigationParam("time");
  const key = useNavigationParam("key")
  const [newName, setNewName] = useState(name);
  const [newLocation, setNewLocation] = useState(location);
  const [newContent, setNewContent] = useState(content);
  const [newTime, setNewTime] = useState(time);
  const currentUser  = firebase.auth().currentUser.uid
  
 const updateParty = (key) => {
   try {
     firebase
     .database()
     .ref("/users/" + currentUser + "/party/" + key)
     .set({ name: newName, content: newContent, location: newLocation, time: newTime })
     .then(() => { 
      Alert.alert('Edit was successful'); 
    }) 
     .then(() => navigate("HomeScreen"))
    } catch(err) {
      console.log(err)
   }
 }
  return (
    <View style={HomeStyles.addEditView}>
      <View style={HomeStyles.AEcontainer}>
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
        onPress={() => updateParty(key)}
      ></Button>
    </View>
    </View>
  );
}