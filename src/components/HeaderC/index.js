/**
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Dimensions, Text, Image, FlatList, View, Button } from 'react-native';
import styles from './styles';


const { width } = Dimensions.get('window');

type _t_props = {
  title: string
};
const HeaderC = (props: _t_props) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftBlock}>

      </View>
      <View style={styles.centralBlock}>
        <Text style={styles.mainText}>
          {props.title && props.title.toUpperCase()}
        </Text>
      </View>
      <View style={styles.rightBlock}>

      </View>
    </View>
  )
};
export default HeaderC;
