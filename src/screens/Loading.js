import React, { useEffect, useState } from "react";
import { Text, View, ActivityIndicator} from "react-native";
import { useNavigation, useNavigationParam } from "react-navigation-hooks";
import { HomeStyles } from "../styles/HomeStyles";
import * as firebase from "firebase";

export default function Loading() {
  const { navigate } = useNavigation();
  const [loggedIn, setLoggedIn] = useState(null);
  
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setLoggedIn(true)
        console.log('user is logged');
      } else {
        setLoggedIn(false)
      }
      navigate(user ? 'HomeScreen' : 'LoginScreen')
    })
});
    return (
      <View style={HomeStyles.container}>
        <Text style={{color:'#43B8E5', fontSize: 40}}>Loading</Text>
        <ActivityIndicator color='#43B8E5' size="large" />
      </View>
    )
}

