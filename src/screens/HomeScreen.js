import React, {useState, useEffect } from "react";
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image,
  Alert,
  ActivityIndicator
} from "react-native";
import { Button, Icon } from "react-native-elements";
import { useNavigation, useNavigationParam } from "react-navigation-hooks";
import firebase from "../../config/Firebase";
import * as Font from 'expo-font';
import { HomeStyles } from "../styles/HomeStyles";
import * as ImagePicker from 'expo-image-picker';

export default function HomeScreen() {
  const { navigate } = useNavigation();
  const [partyList, setPartyList] = useState([]);
  const [key, setKey] = useState([]);
  const currentUser  = firebase.auth().currentUser.uid
  const showUser = firebase.auth().currentUser
  const [ photo, setPhoto ] = useState(null)

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
      getImage();
  }, []);

  handleSignout = () => {
    try {
      firebase.auth().signOut()
      navigate("LoginScreen")
    } catch (e) {
      console.log(e)
    }
  } 

  getImage = () => {
    const images = firebase.storage().ref().child('images/');
    const image = images.child('test-image');
    image.getDownloadURL().then((url) => {setPhoto(url)})
  }

  onChooseImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync();
    if (!result.cancelled) {
      uploadImage(result.uri, "test-image")
      .then(() => {
          Alert.alert("Success");
          getImage();
      })
      .catch((e) => {
        Alert.alert(e);
      })
    }
  }
  
  uploadImage = async (uri, imageName) => {
    const response = await fetch(uri);
    const blob = await response.blob();
    var ref = firebase.storage().ref("images/" + imageName);
    return ref.put(blob)
    .then(() => {
      return ref.getDownloadURL();
    })
  }
  
  deleteData = (index) => {
      firebase.database().ref("/users/" + currentUser + "/party/" + key[index]).remove()
    }

  return (
    <View
      style={HomeStyles.main}
    >
      <View style={HomeStyles.sideBySide}>
        <View style={HomeStyles.padding}>
        <Text style={{color: "white", fontSize: 18}}>
          Hi {showUser && showUser.email}!
          </Text>
          <Image style={HomeStyles.img} source={{uri: photo}}/>
          <TouchableOpacity style={HomeStyles.buttonStyle} onPress={() => onChooseImage()}>
            <Text style={HomeStyles.buttonText}>Display Image</Text>
          </TouchableOpacity>
          </View>
          <Icon name="sign-out" type='font-awesome' color="#FFF" size={30} onPress={() => Alert.alert(
                        "Logout",
                        "Are you sure you wanna logout?",
                        [
                          {text: 'Cancel', onPress: () => console.log('Cancel Pressed!')},
                          {text: 'Yes', onPress: () => handleSignout()},
                        ],
                        { cancelable: false }
                      )}/>
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
                      onPress={() => Alert.alert(
                        "Delete",
                        "Are you sure you wanna delete this Party?",
                        [
                          {text: 'Cancel', onPress: () => console.log('Cancel Pressed!')},
                          {text: 'Yes', onPress: () => deleteData(index)},
                        ],
                        { cancelable: false }
                      )}
                    />
                    <Icon
                      raised
                      name="info-circle"
                      type="font-awesome"
                      size={20}
                      color="#f50"
                      onPress={() => {
                        navigate("PartyInfo");
                      }}
                    />
                  </View>
                </View>
              );
            })}
          </View>
        </ScrollView>
        <TouchableOpacity style={HomeStyles.add}>
          <Icon name="plus" type='font-awesome' size={40} color="#FFF" onPress={() => navigate("AddParty")} />
          </TouchableOpacity>
      </View>
      </View>
  );
}
