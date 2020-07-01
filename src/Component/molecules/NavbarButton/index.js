import {Button, Footer, FooterTab, Icon} from 'native-base';
import React from 'react';
import {Image, View} from 'react-native';

const NavbarButton = () => {
  return (
    <View>
      <Footer>
        <FooterTab style={{backgroundColor: '#f4f6ff'}}>
          <Button>
            <Icon name="home"></Icon>
          </Button>
          <Button>
            <Image
              source={require('../../../../assets/plus.png')}
              style={{height: 40, width: 40}}
            />
          </Button>
          <Button>
            <Icon name="person" active></Icon>
          </Button>
        </FooterTab>
      </Footer>
    </View>
  );
};

export default NavbarButton;
