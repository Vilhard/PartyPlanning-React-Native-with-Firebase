import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { fromLeft } from 'react-navigation-transitions';
import Loading from "./Loading"
import LoginScreen from "./LoginScreen";
import HomeScreen from "./HomeScreen";
import AddParty from "./AddParty";
import EditParty from "./EditParty";
import SignUp from "./SignUp";
import PartyInfo from "./PartyInfo";

const handleCustomTransition = ({ scenes }) => {
  const prevScene = scenes[scenes.length - 2];
  const nextScene = scenes[scenes.length - 1];

  if (prevScene
    && prevScene.route.routeName === 'HomeScreen'
    && nextScene.route.routeName === 'PartyInfo') {
    return fromLeft();
  } 
}

const AppNavigator = createStackNavigator(
  {
    Loading: {
    screen: Loading,
    navigationOptions: {
      header: null
    }
  },
    LoginScreen: {
      screen: LoginScreen,
      navigationOptions: {
        header: null
      }
    },
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: {
        title: "PartyPlanner",
        headerLeft: null,
      }
    },
    AddParty: {
      screen: AddParty,
      navigationOptions: {
        title: "Create a New Party"
      }
    },
    EditParty: {
      screen: EditParty,
      navigationOptions: {
        title: "Edit Party"
      }
    },
    SignUp: {
      screen: SignUp, 
      navigationOptions: {
        title: "",
      }
    },
    PartyInfo: {
      screen: PartyInfo,
      navigationOptions: {

      }
    }
  },
  {
    defaultNavigationOptions: {
      headerTintColor: '#FFF',
      headerStyle: {
        fontWeight: 'bold',
        backgroundColor: "#222E50",
        elevation: 0, 
        shadowOpacity: 0, 
      },
      headerTitleStyle: {
        fontSize: 30,
      }
    },
    initialRouteName: "Loading",
    transitionConfig: (nav) => handleCustomTransition(nav)
  },
);
export default createAppContainer(AppNavigator);
