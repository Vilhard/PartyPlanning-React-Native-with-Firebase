import React, { useState } from "react";
import { Text, View, TextInput, Alert, TouchableOpacity } from "react-native";
import { useNavigation } from "react-navigation-hooks";
import { HomeStyles } from "../styles/HomeStyles";
import * as firebase from "firebase";

export default function LoginScreen() {
  const { navigate } = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  handleSignUp = () => {
    try {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => navigate('HomeScreen'))
        .catch(error => {
          setError(Alert.alert(error.message));
        })
    } catch (err) {
      Alert.alert(err)
    }
  }
  return (
    <View style={HomeStyles.container}>
      <Text style={{ color: '#FFF', fontSize: 40 }}>Login</Text>
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
        <Text style={{ color: '#FFF', textAlign: 'center', fontSize: 20 }}>LOGIN</Text>
      </TouchableOpacity>
      <View style={{ paddingTop: 10 }}>
        <Text style={{ color: '#DCDEDD' }}> Don't have an account? <Text onPress={() => navigate('SignUp')} style={{ color: '#BCD8C1', fontSize: 20 }}> Sign Up </Text></Text>
      </View>
    </View>
  );
}
