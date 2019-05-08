import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

export default class RoadTripScreen extends React.Component {
  static navigationOptions = {
    title: 'Road Trip',
  };

  render() {
    return ( 
    <ScrollView style={styles.container}>
      <Text>
        TEST
      </Text>
    </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  marginTop: 15
}
})
