import React, {useState, useEffect } from "react";
import {
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  View,
  Text
} from "react-native";
import { Card, ListItem, Button, Icon } from "react-native-elements";
import { useNavigation, useNavigationParam } from "react-navigation-hooks";
import firebase from "../../config/Firebase";
import * as Font from 'expo-font';
import { HomeStyles } from "../styles/HomeStyles";

export default function HomeScreen() {
  const { navigate } = useNavigation();
  const [partyList, setPartyList] = useState([]);
  const [key, setKey] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    Font.loadAsync({
      'Montserrat-Light': require('../../assets/fonts/Montserrat-Light.ttf'),
      'Montserrat-Bold': require('../../assets/fonts/Montserrat-SemiBold.ttf'),
    });
    const { currentUser } = firebase.auth()
    setCurrentUser({currentUser})
    firebase
      .database()
      .ref("party/")
      .on("value", snapshot => {
        const data = snapshot.val();
        const prods = Object.values(data);
        const key = Object.keys(data);
        setPartyList(prods);
        setKey(key);
        console.log(key)
      });
  }, []);

  // Sign out 
  /*handleSignout = () => {
    Firebase.auth().signOut()
    this.props.navigation.navigate('Login')
} */

  const deleteData = (index) => {
    firebase.database().ref("party/"+ key[index]).remove();
  };

  return (
    <View
      style={{
        flex: 2,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20
      }}
    >
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
                      onPress={() => deleteData(key)}
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
