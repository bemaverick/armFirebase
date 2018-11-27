/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { View } from 'react-native';
import firebase from 'react-native-firebase';
import { createStackNavigator, createNavigationContainer } from 'react-navigation';
import Home from './src/containers/Home';
import AddingChampion from './src/containers/AddingChampion';


const MainNavigator = createStackNavigator({
  Home: {
    screen: Home,
  },
  AddingChampion: {
    screen: AddingChampion,
    navigationOptions: ({ navigation }) => ({
      title: "AddingChampion",
    }),
  },
}, {
  defaultNavigationOptions: {
    header: null,
    // headerStyle: {
    //   backgroundColor: "#600",
    // },
    headerTitleStyle: {
      color: "#fff"
    }
  }

});



const AppNavigator = createNavigationContainer(MainNavigator);

const config = {
  apiKey: "AIzaSyCWB4BMveCqZsvc8n2FjEGV6diNDCC7vtg",
  authDomain: "armfirebase.firebaseapp.com",
  databaseURL: "https://armfirebase.firebaseio.com",
  projectId: "armfirebase",
  storageBucket: "armfirebase.appspot.com",
  messagingSenderId: "982619270313"
};

const rootRef = firebase.database().ref();
const user = rootRef.child('Users');



type Props = {};
export default class App extends Component<Props> {
  componentDidMount() {
    // console.log(firebase.database().getServerTime())
    firebase.initializeApp(config);

  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <AppNavigator />
      </View>
    );
  }
}

