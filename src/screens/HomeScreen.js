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
  const [key, setKey] = useState("");

  useEffect(() => {
    Font.loadAsync({
      'Montserrat-Light': require('../../assets/fonts/Montserrat-Light.ttf'),
      'Montserrat-Bold': require('../../assets/fonts/Montserrat-SemiBold.ttf'),
    });
    firebase
      .database()
      .ref("party/")
      .on("value", snapshot => {
        const data = snapshot.val();
        const prods = Object.values(data);
        const key = Object.keys(snapshot.val())[0];
        setPartyList(prods);
        setKey(key);
        console.log(key)
      });
  }, []);

  deleteData = () => {
    firebase.database().ref("party/"+ key).remove();
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
            {partyList.map((item, key) => {
              return (
                <View key={key} itemKey={key} style={HomeStyles.box}>
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
                        navigate("EditParty");
                      }}
                    />
                    <Icon
                      raised
                      name="trash"
                      type="font-awesome"
                      color="#f50"
                      onPress={deleteData}
                    />
                  </View>
                </View>
              );
            })}
          </View>
        </ScrollView>
        <Button
          title="Go to LoginScreen"
          type="clear"
          onPress={() => {
            navigate("LoginScreen");
          }}
        />
      </View>
    </View>
  );
}
