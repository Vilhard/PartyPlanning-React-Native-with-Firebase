import React, { Component } from "react";
import { StyleSheet } from "react-native";

export const HomeStyles = StyleSheet.create({
  ContentBox: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#FFFAF3",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    width: "100%",
    elevation: 5
  },
  itemsList: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  itemText: {
    fontSize: 14,
    fontFamily: "Montserrat-Light",
    color: "white"
    
  },
  itemContent: {
    fontSize: 14,
    textAlign: "center",
    fontFamily: "Montserrat-Light",
    color: "white"
  },
  itemHeader: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 22, 
    textAlign:"center",
    color: "white"
  },
  iconList: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  box: {
    width: "80%",
    backgroundColor: "#FF7051",
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#ddd",
    borderBottomWidth: 0,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 4,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 20,
    paddingBottom: 30
  }
});
