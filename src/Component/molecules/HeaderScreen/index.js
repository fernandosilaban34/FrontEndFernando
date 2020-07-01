import {Header, Title} from 'native-base';
import React from 'react';
import {View} from 'react-native';

const HeaderScreen = () => {
  return (
    <View>
      <Header style={{backgroundColor: '#f4f6ff'}}>
        <View
          style={{
            backgroundColor: '#4fa154',
            width: 100,
            borderRadius: 500,
            marginVertical: 11,
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 1},
            shadowOpacity: 1,
            shadowRadius: 2,
            elevation: 5,
          }}>
          <Title
            style={{
              fontSize: 14,
              textAlign: 'center',
              borderRadius: 50,
              color: 'white',
              paddingTop: 7,
            }}>
            All Contact
          </Title>
        </View>
      </Header>
    </View>
  );
};

export default HeaderScreen;
