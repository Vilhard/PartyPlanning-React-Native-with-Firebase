import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { useNavigation, useNavigationParam } from "react-navigation-hooks";
import firebase from 'react-native-firebase';

export default function Loading() {
    const { navigate } = useNavigation();
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      navigate(user ? 'HomeScreen' : 'SignUp')
    })
});
    return (
      <View style={HomeStyles.container}>
        <Text style={{color:'#e93766', fontSize: 40}}>Loading</Text>
        <ActivityIndicator color='#e93766' size="large" />
      </View>
    )
}