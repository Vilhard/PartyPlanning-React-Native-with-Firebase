import React, { useState, useEffect } from "react";
import * as firebase from "firebase";
import { StyleSheet, Text, View } from "react-native";
import { Input, Button } from "react-native-elements";
import { ListItem } from "react-native-elements";

export default function Party() {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [location, setLocation] = useState("");
  const [time, setTime] = useState("");

  const saveItem = () => {
    firebase
      .database()
      .ref("party/")
      .push({ name: name, content: content, location: location, time: time }).key;
  };

  return (
    <View style={{ padding: 20 }}>
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
  );
}
