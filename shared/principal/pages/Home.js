import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export class Home extends Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={style.container}>
        <Text style={style.text}>Home</Text>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {flex: 1, alignItems: 'flex-end'},
  text: {
    alignSelf: 'center',
    textAlign: 'justify',
    fontSize: 25,
    marginTop: 250,
  },
});
