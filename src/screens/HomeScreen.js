import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  View,
  Text
} from "react-native";
import { Card, ListItem, Button, Icon } from "react-native-elements";
import { useNavigation, useNavigationParam } from "react-navigation-hooks";
import LinearGradient from "react-native-linear-gradient";
import firebase from "../../Firebase";
import { HomeStyles } from "../Styles/HomeStyles";

export default function HomeScreen() {
  const { navigate } = useNavigation();
  const [partyList, setPartyList] = useState([]);

  useEffect(() => {
    firebase
      .database()
      .ref("party/")
      .on("value", snapshot => {
        const data = snapshot.val();
        const prods = Object.values(data);
        //const keys = Object.keys(data);
        setPartyList(prods);
        //setId(keys);
      });
  }, []);

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
              return (
                <View key={index} style={HomeStyles.box}>
                  <LinearGradient colors={["#4c669f", "#3b5998", "#192f6a"]}>
                    <Text style={HomeStyles.itemHeader}>{item.name}</Text>
                    <Text style={HomeStyles.itemContent}>{item.content}</Text>
                    <Text style={HomeStyles.itemText}>{item.location}</Text>
                    <Text style={HomeStyles.itemText}>{item.time}</Text>
                  </LinearGradient>
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
