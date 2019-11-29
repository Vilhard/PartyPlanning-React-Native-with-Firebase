import { StyleSheet } from "react-native";

export const HomeStyles = StyleSheet.create({
  main: {
    backgroundColor: "#222E50",
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 20,
    paddingLeft: 15,
    paddingRight: 15
  },
  sideBySide: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  padding: {
    alignItems: "center",
    paddingRight: 20,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 40
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#222E50',
  },
  buttonText: {
    fontSize: 16,
    color: "white",
    textAlign: "center"
  },
  textInput: {
    height: 40,
    fontSize:20,
    width: '90%',
    borderColor: '#9b9b9b',
    borderBottomWidth: 1,
    marginTop: 8,
    marginVertical: 15,
    color:"white"
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
    fontSize: 16,
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
  ContentBox: {
    flex: 2,
    justifyContent: "center",
    backgroundColor: "#FFF",
    width: "100%",
    borderRadius: 15,
    marginTop: 10
  },
  addEditView: {
    flex:1, 
    backgroundColor: "#E5E5E5" 
  }, 
  AEcontainer: {
    padding: 20, 
  },
  partyContainer: {
    flex:1, 
    backgroundColor: "#222E50",
  },
  partyText: {
    fontFamily: "Montserrat-Light",
    fontSize: 20,
    color: "white",
    marginLeft: 10,
    marginRight: 5,
    paddingBottom: 10
  },
  partyText2: {
    
    fontSize: 16,
    color: "white",
  },
  partyTextBold: {
    fontFamily: 'Montserrat-Bold',
    textAlign:"center",
    fontWeight: "bold",
    fontSize: 28,
    color: "white",
    marginLeft: 5,
    marginBottom: 10
  },
  map: {
    marginTop: 30,
    marginBottom: 30
  },
  box: {
    width: "80%",
    backgroundColor: "#45C1EE",
    borderWidth: 1,
    borderColor: "#45C1EE",
    borderBottomWidth: 0,
    borderRadius: 10,
    shadowColor: "#C9CFCC",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 4,
    paddingBottom: 20,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 20,
    marginBottom: 20
  },
  signOut: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  }, 
  buttonStyle: {
    padding: 5,
    marginTop: 10,
    borderWidth:1,
    borderColor:'rgba(0,0,0,0.2)',
    backgroundColor: '#497A99',
    borderRadius:5,
    width:"60%"
  },
  add: {
    borderWidth:1,
    borderColor:'rgba(0,0,0,0.2)',
    alignItems:'center',
    justifyContent:'center',
    width:60,
    position: 'absolute',                                          
    bottom: 10,                                                    
    right: 10,
    height:60,
    backgroundColor:'#0B52B6',
    borderRadius:100,
  },
  img: {
    borderRadius: 10,
    width: 100,
    height: 100,
    justifyContent: "center",
    marginTop: 10
  },
});
