import React, { Component } from "react";
import {
  Container, Header, Content, Form, Item, Input, Label, Button
} from "native-base";

export default class SignInScreen extends Component {
  static navigationOptions = {
    title: 'Please sign in',
  };

  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Item fixedLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item fixedLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
            <Button title="Sign in!" onPress={this._signInAsync} />
          </Form>
        </Content>
      </Container>
    );
  }

  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('App');
  };
}
