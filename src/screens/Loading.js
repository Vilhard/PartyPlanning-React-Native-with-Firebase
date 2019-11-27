import React, { useEffect, useState } from "react";
import { Text, View, ActivityIndicator} from "react-native";
import { useNavigation, useNavigationParam } from "react-navigation-hooks";
import { HomeStyles } from "../styles/HomeStyles";
import * as firebase from "firebase";

export default function Loading() {
  const { navigate } = useNavigation();
  
  useEffect(() => {
    async function authSession() {
      try {
        firebase.auth().onAuthStateChanged(user => {
          if (user) {
            console.log('user is logged');
            navigate("HomeScreen")
            console.log(user)
          } else {
            navigate("LoginScreen")
          }
        })
      } catch(e) {
        console.log(e)
      }
    }
    authSession();
}, []);

    return (
      <View style={HomeStyles.container}>
        <Text style={{color:'#43B8E5', fontSize: 40}}>Loading</Text>
        <ActivityIndicator color='#43B8E5' size="large" />
      </View>
    )
}

