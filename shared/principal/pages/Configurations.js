import React, {Component} from 'react';
import {View, Platform, StatusBar, Text} from 'react-native';

import {NavigationEvents} from 'react-navigation';

export class Configurations extends Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'flex-end',
        }}>
        <Text
          style={{
            alignSelf: 'center',
            textAlign: 'justify',
            fontSize: 25,
            marginTop: 250,
          }}>
          Config
        </Text>
      </View>
    );
  }
}
