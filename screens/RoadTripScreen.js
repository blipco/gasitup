import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

export default class RoadTripScreen extends React.Component {
  static navigationOptions = {
    title: 'Road Trip',
  };

  render() {
    <ScrollView style={styles.container}>
      <Text>
        TEST
      </Text>
    </ScrollView>
    return ;
  }
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  marginTop: 15
}
});
