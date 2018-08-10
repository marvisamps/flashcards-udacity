import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import Home from './containers/Home';
import CardsList from './containers/CardsList';

const RootStack = createStackNavigator(
  {
    Home: Home,
    CardsList: CardsList,
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends Component {
  render() {
    return <RootStack />;
  }
}