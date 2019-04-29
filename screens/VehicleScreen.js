import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';

export default class VehicleScreen extends React.Component {
  static navigationOptions = {
    title: 'Vehicle',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>
          What kind of vehicle are you driving for your road trip?
        </Text>
        <FormLabel>Year</FormLabel>
        <FormInput/>
        <FormValidationMessage>{"This Field is Required"}</FormValidationMessage>
        <FormLabel>Make (Toyota, Honda, Jeep)</FormLabel>
        <FormInput/>
        <FormValidationMessage>{"This Field is Required"}</FormValidationMessage>
        <FormLabel>Model (Toyota, Honda, Jeep)</FormLabel>
        <FormInput/>
        <FormValidationMessage>{"This Field is Required"}</FormValidationMessage>



      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
