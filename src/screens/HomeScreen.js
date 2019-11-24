import React, {useState, useEffect } from "react";
import { AppLoading } from 'expo';
import {
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  View,
  Text,
  TouchableOpacity
} from "react-native";
import { Button, Icon } from "react-native-elements";
import { useNavigation, useNavigationParam } from "react-navigation-hooks";
import firebase from "../../config/Firebase";
import * as Font from 'expo-font';
import { HomeStyles } from "../styles/HomeStyles";
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeScreen() {
  const { navigate } = useNavigation();
  const [partyList, setPartyList] = useState([]);
  const [key, setKey] = useState([]);
  const currentUser  = firebase.auth().currentUser.uid
  const showUser = firebase.auth().currentUser
  
// This is image branch
  useEffect(() => {
    Font.loadAsync({
      'Montserrat-Light': require('../../assets/fonts/Montserrat-Light.ttf'),
      'Montserrat-Bold': require('../../assets/fonts/Montserrat-SemiBold.ttf'),
    });
    firebase
      .database()
      .ref("/users/" + currentUser + "/party/")
      .on("value", snapshot => {
        const data = snapshot.val();
        const prods = Object.values(data);
        const key = Object.keys(data);
        console.log(data)
        setPartyList(prods);
        setKey(key);
      });
  }, []);
 
  console.log(currentUser)
  
  // Sign out 
  handleSignout = async () => {
    try {
      firebase.auth().signOut()
      navigate("LoginScreen")
    } catch (e) {
      console.log(e)
    }
    
  } 

  const deleteData = (index) => {
    firebase.database().ref("/users/" + currentUser + "/party/" + key[index]).remove();
  };

  return (
    <View
      style={{
        backgroundColor: "#FFF",
        flex: 2,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20
      }}
    >
      <LinearGradient
          colors={['#4c669f', '#3b5998', '#192f6a']}
          style={{ padding: 15, alignItems: 'center', borderRadius: 5 }}>
      <TouchableOpacity onPress={() => handleSignout()}>
        <Text style={{
              backgroundColor: 'transparent',
              fontSize: 15,
              color: '#fff',
            }}> Sign out</Text>
        </TouchableOpacity>
      </LinearGradient>
      <Text style={{fontSize: 18}}>
          Hi {showUser && showUser.email}!
        </Text>
      <Icon
        raised
        name="plus"
        type="font-awesome"
        color="#f50"
        onPress={() => {
          navigate("AddParty");
        }}
      />
      <View style={HomeStyles.ContentBox}>
        <ScrollView>
          <View style={HomeStyles.itemsList}>
            {partyList.map((item, index) => {
              console.log(key[0])
              return (
                <View key={index} style={HomeStyles.box}>
                    <Text  style={HomeStyles.itemHeader}>{item.name}</Text>
                    <Text style={HomeStyles.itemContent}>{item.content}</Text>
                    <Text style={HomeStyles.itemText}>{item.location}</Text>
                    <Text style={HomeStyles.itemText}>{item.time}</Text>
                  <View style={HomeStyles.iconList}>
                    <Icon
                      raised
                      name="edit"
                      type="font-awesome"
                      color="#f50"
                      onPress={() => {
                        navigate("EditParty", { key: key[index],
                          name: item.name, content:item.content, location:item.location, time: item.time
                        });
                      }}
                    />
                    <Icon
                      raised
                      name="trash"
                      type="font-awesome"
                      color="#f50"
                      onPress={() => deleteData(index)}
                    />
                  </View>
                </View>
              );
            })}
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
