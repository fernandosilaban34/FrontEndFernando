/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {Button, Container, Footer, FooterTab, Icon} from 'native-base';
import React, {Component} from 'react';
import {Image, ScrollView, View} from 'react-native';
import NavbarButton from './src/Component/molecules/NavbarButton';
import CardPerson from './src/Component/molecules/CardPerson';
import SearchContact from './src/Component/molecules/SearchContact';
import HeaderScreen from './src/Component/molecules/HeaderScreen';

export default class App extends Component {
  render() {
    return (
      <Container>
        {/* Header */}
        <HeaderScreen />
        {/* Search */}
        <SearchContact />
        {/* Card */}
        <ScrollView>
          <CardPerson name="Fernando" age="11" />
          <CardPerson name="Heriyanto" age="20" />
          <CardPerson name="Bayu" age="21" />
          <CardPerson name="Drylinn" age="22" />
          <CardPerson />
          <CardPerson />
          <CardPerson />
        </ScrollView>
        <View style={{flex: 1}} />
        {/* Navbar */}
        <NavbarButton />
      </Container>
    );
  }
}
