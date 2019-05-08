import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import {Input, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class VehicleScreen extends React.Component {
  static navigationOptions = {
    title: 'Vehicle',
  };

  render() {
    return (
      <View>
        <Text>
          What kind of vehicle are you driving for your road trip?
        </Text>
        <Input 
          leftIcon={
            <Icon 
              name="year"
              color="black"
              />} />
        <Input placeholder="Make" />
        <Input placeholder="Model" />
        <Button
           />
      </View>
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
