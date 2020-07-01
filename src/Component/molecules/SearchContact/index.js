import React from 'react';
import {Text, View} from 'react-native';
import {Icon} from 'native-base';
const SearchContact = () => {
  return (
    <View
      style={{
        paddingRight: 10,
        paddingLeft: 30,
        paddingVertical: 10,
        backgroundColor: '#888888',
        marginTop: 7,
        paddingRight: 70,
        position: 'relative',
      }}>
      <View
        style={{
          height: 26,
          borderRadius: 10,
          borderColor: '#808080',
          borderWidth: 1,
          backgroundColor: 'white',
        }}>
        <Icon
          name="search"
          style={{
            height: 20,
            width: 20,
            top: 3,
            position: 'absolute',
            left: 10,
            fontSize: 20,
          }}></Icon>
        <Text style={{paddingLeft: 40, fontSize: 12, paddingTop: 3}}>
          Search your contact here..
        </Text>
      </View>
    </View>
  );
};

export default SearchContact;
