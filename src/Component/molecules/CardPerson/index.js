import React, {Component} from 'react';
import {Body, Card, CardItem, Icon} from 'native-base';
import {Image, Text, View} from 'react-native';
import axios from 'axios';

class CardPerson extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    axios
      .get('https://simple-contact-crud.herokuapp.com/contact')
      .then((response) => {
        console.log(response.data);
        this.setState({
          data: response.data,
        });
      });
  }

  render(props) {
    return (
      <View>
        <Card style={{width: '100%', flexDirection: 'row'}}>
          {/* {
              this.state.data.map(data => {
                return ( */}
          <CardItem header style={{height: 70}}>
            <Image
              source={require('../../../../assets/test1.jpeg')}
              style={{
                height: 50,
                width: 50,
                resizeMode: 'cover',
                borderRadius: 400,
                borderWidth: 1,
                borderColor: '#363636',
              }}></Image>
          </CardItem>
          <CardItem style={{flexDirection: 'column'}}>
            <Body style={{width: 160}}>
              <View>
                <View style={{padding: 5}}>
                  <Text style={{fontSize: 12}}>
                    Name : {this.state.data.firstname}
                  </Text>
                </View>
                <View style={{paddingHorizontal: 5}}>
                  <Text style={{fontSize: 10, color: '#808080'}}>
                    Age : {this.state.data.age}
                  </Text>
                </View>
              </View>
            </Body>
          </CardItem>
          <View
            style={{
              flexDirection: 'row',
              flex: 1,
              paddingTop: 20,
              marginLeft: 22,
            }}>
            <Icon
              name="ios-arrow-forward"
              style={{height: 25, width: 25}}></Icon>
          </View>

          {/* )
              })
            } */}
        </Card>
      </View>
    );
  }
}

export default CardPerson;
