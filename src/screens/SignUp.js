import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { useNavigation, useNavigationParam } from "react-navigation-hooks";
import { Button } from "react-native-elements";
import { HomeStyles } from "../styles/HomeStyles";
import * as firebase from "firebase";

export default function SignUp() {
  const { navigate } = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  handleSignUp = () => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((response) => {
      firebase.auth().currentUser.updateProfile({
        displayName : email,
      }).then(() => {
        firebase.database().ref("users/" + firebase.auth().currentUser.uid).set(firebase.auth().currentUser)
      })
    })
    .then(() => navigate("HomeScreen"))
    .catch(errorMessage => setErrorMessage(errorMessage)
    )
  }
  console.log(errorMessage)
    return (
      <View style={HomeStyles.container}>
          <Text style={{color:'#e93766', fontSize: 40}}>Sign Up</Text>
    {errorMessage && <Text style={{color: `red`}}>Some error ocurred </Text>
          }
          <TextInput
          style={HomeStyles.textInput}
          autoCapitalize="none"
          placeholder="Email"
          onChangeText={email => setEmail(email)}
          value={email}
        />
        <TextInput
          secureTextEntry
          placeholder="Password"
          autoCapitalize="none"
          style={HomeStyles.textInput}
          onChangeText={password => setPassword(password)}
          value={password}
        />
        <Button title="Sign Up"  type="clear" color="#e93766" onPress={() => handleSignUp()}/>
        <View>
        <Text> Already have an account? <Text onPress={() => navigate('LoginScreen')} style={{color:'#e93766', fontSize: 18}}> Login </Text></Text>
        </View>      
      </View>
    );
}