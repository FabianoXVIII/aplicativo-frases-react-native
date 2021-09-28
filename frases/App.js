import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  Button,
  Alert,
  AppRegistry,
  TouchableOpacity,
  StyleProp,
  StyleSheetProperties,
  StatusBar,
} from 'react-native';
import Login from './components'

export default function App() {
  return (
    <View style={styles.container}>
      <Login/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FF9',
  },
});
