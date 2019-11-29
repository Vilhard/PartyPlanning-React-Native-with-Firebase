import React, { useEffect } from "react";
import { Text, View, ActivityIndicator} from "react-native";
import { useNavigation } from "react-navigation-hooks";
import { HomeStyles } from "../styles/HomeStyles";
import * as firebase from "firebase";

export default function Loading() {
  const { navigate } = useNavigation();
  
  useEffect(() => {
    authSession();
}, []);

function authSession() {
  try {
     firebase.auth().onAuthStateChanged( async user => {
      if (user) {
        navigate("HomeScreen")
      } else {
        navigate("LoginScreen")
      }
    })
  } catch(e) {
    console.log(e)
  }
}

    return (
      <View style={HomeStyles.container}>
        <Text style={{color:'#43B8E5', fontSize: 40}}>Loading</Text>
        <ActivityIndicator color='#43B8E5' size="large" />
      </View>
    )
}

