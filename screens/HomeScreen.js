import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.welcomeTitle}>
          Welcome to Gas It Up!
        </Text>
        <Text style={styles.info}>
          Find out how much money
          it will cost for your road trip
          BEFORE you go on your trip.
        </Text>
      </ScrollView>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15
  },
  welcomeTitle: {
    textAlign: "center",
    fontSize: 25,
    color: "red",
  },
  info: {
    marginTop: 20,
    textAlign: "center",
    fontSize: 20,
    color: "black"
  }
});
