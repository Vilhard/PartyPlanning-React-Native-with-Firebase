import React, {useState, useEffect } from "react";
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity
} from "react-native";
import { Button, Icon } from "react-native-elements";
import { useNavigation, useNavigationParam } from "react-navigation-hooks";
import firebase from "../../config/Firebase";
import * as Font from 'expo-font';
import { HomeStyles } from "../styles/HomeStyles";

export default function HomeScreen() {
  const { navigate } = useNavigation();
  const [partyList, setPartyList] = useState([]);
  const [key, setKey] = useState([]);
  const currentUser  = firebase.auth().currentUser.uid
  const showUser = firebase.auth().currentUser

  
  useEffect(() => {
    Font.loadAsync({
      'Montserrat-Light': require('../../assets/fonts/Montserrat-Light.ttf'),
      'Montserrat-Bold': require('../../assets/fonts/Montserrat-SemiBold.ttf'),
    });
    firebase
      .database()
      .ref("/users/" + currentUser + "/party/")
      .on("value", snapshot => {
        if (!snapshot.exists()) {
          console.log("data not found")
          const empty = 0
          const prods = Object.values(empty);
          setPartyList(prods);
        }else {
          const data = snapshot.val();
          const prods = Object.values(data);
          const key = Object.keys(data);
          console.log(data)
          setPartyList(prods);
          setKey(key);
        }
      });
  }, []);

  handleSignout = () => {
    try {
      firebase.auth().signOut()
      window.location.reload();
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
      style={HomeStyles.main}
    >
      <View style={HomeStyles.sideBySide}>
        <View style={HomeStyles.padding}>
        <Text style={{color: "white", fontSize: 18}}>
          Hi {showUser && showUser.email}!
          </Text>
          </View>
          <Icon name="sign-out" type='font-awesome' color="#FFF" size={30} onPress={() => handleSignout()}/>
          </View>
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
                      size={20}
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
                      size={20}
                      color="#f50"
                      onPress={() => deleteData(index)}
                    />
                  </View>
                </View>
              );
            })}
          </View>
        </ScrollView>
        <TouchableOpacity style={HomeStyles.add}>
          <Icon name="plus" type='font-awesome' size={30} color="#FFF" onPress={() => navigate("AddParty")} />
          </TouchableOpacity>
      </View>
      </View>
  );
}
