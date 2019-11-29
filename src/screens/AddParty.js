import React, { useState} from "react";
import * as firebase from "firebase";
import {View, Alert} from "react-native";
import { Input, Button } from "react-native-elements";
import { useNavigation } from "react-navigation-hooks";
import { HomeStyles } from "../styles/HomeStyles";

export default function Party() {
  const { navigate } = useNavigation();
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [location, setLocation] = useState("");
  const [time, setTime] = useState("");
  const currentUser  = firebase.auth().currentUser.uid

  const saveItem = () => {
    try{
      firebase
      .database()
      .ref("/users/" + currentUser + "/party/")
      .push({ name: name, content: content, location: location, time: time })
      .then(() => navigate("HomeScreen"))
      .then(() => {
        Alert.alert("New Party Created Successfully!")
      })
      .then((data) => {
        console.log("data ", data)
      })
      .catch((error) => {
        console.log("error ", error);
      })
    }catch(err){
      console.log(err)
    }
  };

  return (
    <View style={HomeStyles.addEditView}>
    <View style={HomeStyles.AEcontainer}>
      <Input
        placeholder="Name of the party"
        placeholderTextColor="#5E5E5E"
        label="Name"
        style={{ width: 200, borderColor: "gray", borderWidth: 1 }}
        onChangeText={name => setName(name)}
        value={name}
      ></Input>
      <Input
        placeholder="Content"
        placeholderTextColor="#5E5E5E"
        label="Content"
        style={{
          width: 200,
          borderColor: "gray",
          borderWidth: 1
        }}
        onChangeText={content => setContent(content)}
        value={content}
      ></Input>
      <Input
        placeholder="Location"
        placeholderTextColor="#5E5E5E"
        label="Location"
        style={{
          color:'white',
          width: 200,
          borderColor: "gray",
          borderWidth: 1
        }}
        onChangeText={location => setLocation(location)}
        value={location}
      ></Input>
      <Input
        placeholder="Time"
        placeholderTextColor="#5E5E5E"
        label="Time"
        style={{
          width: 200,
          borderColor: "gray",
          borderWidth: 1
        }}
        onChangeText={time => setTime(time)}
        value={time}
      ></Input>
      <Button
        buttonStyle={{ marginTop: 10 }}
        title="Save"
        onPress={saveItem}
      ></Button>
    </View>
    </View>
  );
}
