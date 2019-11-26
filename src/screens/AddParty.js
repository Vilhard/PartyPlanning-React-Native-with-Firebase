import React, { useState, useEffect } from "react";
import * as firebase from "firebase";
import { StyleSheet, Text, View } from "react-native";
import { Input, Button } from "react-native-elements";
import { useNavigation, useNavigationParam } from "react-navigation-hooks";


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
    <View style={{flex:2, backgroundColor: "#007284" }}>
    <View style={{ flex:3, padding: 20, backgroundColor: "##0B52B6" }}>
      <Input
        placeholder="Name of the party"
        label="Name"
        style={{ width: 200, borderColor: "gray", borderWidth: 1 }}
        onChangeText={name => setName(name)}
        value={name}
      ></Input>
      <Input
        placeholder="Content"
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
