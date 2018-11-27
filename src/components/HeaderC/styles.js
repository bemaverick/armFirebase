import { StyleSheet, Platform } from "react-native";
import { Colors } from './../../constants'

export default StyleSheet.create({
  container: {
    height: 65,
    paddingTop: Platform.OS = 'ios' ? 20 : 0,
    flexDirection: 'row',
    backgroundColor: '#020',
    borderBottomWidth: 2,
    borderColor: '#033'
  },
  leftBlock: {
    height: 45,
    width: 45,
    justifyContent: 'center',
    alignItems: 'center'
  },
  centralBlock: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  rightBlock: {
    height: 45,
    width: 45,
    justifyContent: 'center',
    alignItems: 'center'
  },
  mainText: {
    color: Colors.white,
    letterSpacing: 1,
    fontSize: 16
  },

});
