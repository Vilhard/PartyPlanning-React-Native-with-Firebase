import React, { useState } from "react";
import { Text, View, TextInput, Alert, TouchableOpacity } from "react-native";
import { useNavigation, useNavigationParam } from "react-navigation-hooks";
import { HomeStyles } from "../styles/HomeStyles";
import * as firebase from "firebase";

export default function SignUp() {
  const { navigate } = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  handleSignUp = () => {
    try {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((response) => {
      firebase.auth().currentUser.updateProfile({
        displayName : email,
      }).then(() => {
        firebase.database().ref("users/" + firebase.auth().currentUser.uid).set(firebase.auth().currentUser)
      })
    }) 
    .then(() => navigate("HomeScreen"))
    .catch(error => {
      setError(Alert.alert(error.message));
    })
  }catch(err){
    Alert.alert(err)
  }
}
  
    return (
      <View style={HomeStyles.container}>
          <Text style={{color:'#FFF', fontSize: 40}}>Sign Up</Text>
          <TextInput
          style={HomeStyles.textInput}
          autoCapitalize="none"
          placeholder="Email"
          placeholderTextColor="#DCDEDD"
          onChangeText={email => setEmail(email)}
          value={email}
        />
        <TextInput
          secureTextEntry
          placeholder="Password"
          placeholderTextColor="#DCDEDD"
          autoCapitalize="none"
          style={HomeStyles.textInput}
          onChangeText={password => setPassword(password)}
          value={password}
        />
        <TouchableOpacity style={HomeStyles.buttonStyle} onPress={() => handleSignUp()}>
        <Text style={{color:'#FFF', textAlign: 'center', fontSize: 20}}>SIGN UP</Text>
        </TouchableOpacity>
        <View style={{padding: 10}}>
        <Text style={{color:'#DCDEDD'}}> Already have an account? <Text onPress={() => navigate('LoginScreen')} style={{color:'#BCD8C1', fontSize: 20}}> Login </Text></Text>
        </View>      
      </View>
    );
}