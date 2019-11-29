import React, { useState, useEffect } from "react";
import { View, Text} from "react-native";
import { useNavigationParam } from "react-navigation-hooks";
import { HomeStyles } from "../styles/HomeStyles";
import * as Font from 'expo-font';
import MapView, { Marker } from'react-native-maps';

export default function PartyInfo() {
    const name = useNavigationParam("name");
    const location = useNavigationParam("location");
    const content = useNavigationParam("content");
    const time = useNavigationParam("time");
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);

    useEffect(() => {
        Font.loadAsync({
            'Montserrat-Light': require('../../assets/fonts/Montserrat-Light.ttf'),
            'Montserrat-Bold': require('../../assets/fonts/Montserrat-SemiBold.ttf'),
          });
        getMapLocation();
    }, []);

    getMapLocation = async () => {
        const url =
        "http://open.mapquestapi.com/geocoding/v1/address?key=AvVkQo1KGhGm0NnPvD57XJChJfgwXdwg&location=" +
        location;
        fetch(url)
        .then(response => response.json())
      .then(responseJson => {
        setLongitude(responseJson.results[0].locations[0].latLng.lng);
        setLatitude(responseJson.results[0].locations[0].latLng.lat);
      })
      .catch(error => {
        Alert.alert("Error", error);
      });
  };
  
    return(
    <View style={HomeStyles.partyContainer}>
        <Text style={HomeStyles.partyTextBold}>{name}</Text>
        <Text style={HomeStyles.partyText}>Lisätietoa: <Text style={HomeStyles.partyText2}>{content}</Text></Text>
        <Text style={HomeStyles.partyText}>Alkaa : <Text style={HomeStyles.partyText2}>{time}</Text></Text>
        <Text style={HomeStyles.partyText}>Osoite:  <Text style={HomeStyles.partyText2}>{location}</Text></Text>
        
        <MapView 
        style={{ flex: 2}}
        region={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.0322,
          longitudeDelta: 0.0221
        }}
      >
        <Marker
          coordinate={{
            latitude: latitude,
            longitude: longitude
          }}
          title="Party Location"
        />
      </MapView>
      </View>
    );
}
