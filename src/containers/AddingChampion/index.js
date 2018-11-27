/**
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Button, ActivityIndicator, View, TextInput } from 'react-native';
import styles from './styles';
import firebase from "react-native-firebase";


const rootRef = firebase.database().ref();
const user = rootRef.child('Users');

type Props = {};
export default class AddingChampion extends Component<Props> {
  state = {
    firstName: '',
    lastName: '',
    avatarUrl: '',
    loading: false,
    error: ''
  };

  componentDidMount() {

  }

  add = () => {
    this.setState({ loading: true})
    user.push({
      first_name: this.state.firstName,
      last_name: this.state.lastName,
      avatar_url: this.state.avatarUrl,

    }).then((data)=>{
      //success callback
      this.setState({
        firstName: '',
        lastName: '',
        avatarUrl: '',
        loading: false,
        error: ''
      })
      console.log('data ' , data)
    }).catch((error)=>{
      //error callback
      this.setState({ error})
      console.log('error ' , error)
    })
  };

  render() {
    return (
      <View style={{flex :1}}>
        <TextInput
          placeholder="first Name"
          onChangeText={(firstName) => this.setState({firstName})}
          value={this.state.firstName}
          style={styles.textInput}
        />
        <TextInput
          placeholder="last Name"
          onChangeText={(lastName) => this.setState({lastName})}
          value={this.state.lastName}
          style={styles.textInput}
        />

        <TextInput
          placeholder="avatar"
          onChangeText={(avatarUrl) => this.setState({avatarUrl})}
          value={this.state.avatarUrl}
          style={styles.textInput}
        />
        {

        }
        {this.state.loading && <ActivityIndicator />}
        {
          !!this.state.error && (
            <Text>{this.state.error}</Text>
          )
        }
        <Button
          onPress={this.add}
          title="add"
        />
      </View>
    );
  }
}

