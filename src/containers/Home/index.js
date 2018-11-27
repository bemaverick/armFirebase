/**
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Dimensions, Text, Image, FlatList, View, Button } from 'react-native';
import styles from './styles';
import firebase from "react-native-firebase";
import { HeaderC } from '../../components';

const rootRef = firebase.database().ref();
const user = rootRef.child('Users');

const { width } = Dimensions.get('window');

type Props = {};
export default class Home extends Component<Props> {
  state = {
    keys: [],
    data: {}
  }
  componentDidMount() {
    user.on('value', (childrenSnapshot) => {
      console.log(childrenSnapshot)
      this.setState({
        keys: childrenSnapshot._childKeys,
        data: childrenSnapshot._value
      })
    })

    firebase.database().ref('Users/').once('value', function (snapshot) {
      console.log(snapshot.val())
    });
  }

  renderItems = ({item, index}) => {
    return (
      <View style={{ width: width / 3, height: width / 3 + 15, justifyContent: 'center', alignItems: 'center'}}>
        <Image style={{ height: width*0.7/3, width: width*0.7/3, borderRadius:  width*0.7/6}} source={{uri: this.state.data[item].avatar_url}} />
        <Text style={{ paddingTop: 5, color: 'white', letterSpacing: 1}}>{this.state.data[item].last_name}</Text>
      </View>
    )
  }



  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <HeaderC
          title="Alley of glory"
        />
        <FlatList
          numColumns={3}
          keyExtractor = {(item, index) => item}
          data={this.state.keys}
          renderItem={this.renderItems}
        />
        {/*<Text style={styles.welcome}>Welcome to React Native!</Text>*/}
        <Button title="Add" onPress={() => navigation.navigate('AddingChampion')}/>

      </View>
    );
  }
}

