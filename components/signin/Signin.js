import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TextInput } from 'react-native';
import { Container, Header, Left, Right, Body, Footer, Content, Form, Item, Input, Icon, Button, Title, FooterTab } from 'native-base';
import firebaseRef from '../../firebase/config.js';

export default class Signin extends Component {
  constructor(props){
    super(props);
    this.state ={
      email: '',
      password: ''
    };

  }

  signup () {
    firebaseRef.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).catch((error) => {console.log(`Error ${error}`)});
  }

  login () {

  }

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
              <Title>Gaggle!</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Form>
            <Item regular>
              <Input 
                placeholder="Username" 
              />
              <Icon name='checkmark-circle'/>  
            </Item>
            <Item regular>
              <Input 
                placeholder="Password" />
            </Item>
          </Form>
          <Button block>
            <Text>Sign-up</Text>
          </Button>
          <Button block>
            <Text>Log-in</Text>
          </Button>
        </Content>
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Gaggle Feet</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}