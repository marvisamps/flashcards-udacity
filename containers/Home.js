import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

export default class Home extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to CardsList"
          onPress={() => this.props.navigation.navigate('CardsList')}
        />
      </View>
    )
  }
}
