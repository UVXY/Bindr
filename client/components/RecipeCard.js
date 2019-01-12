import React from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { Linking, TouchableHighlight } from 'react-native';

export default RecipeCard = (props) => {
  // console.log(props)
  const { title, href, ingredients, thumbnail} = props.data;
    return (
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: thumbnail}} />
                <Body>
                  <Text>{title}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              {/* <Image source={{uri: }} style={{height: 200, width: "100%"}}/> */}
              <Text>Ingredients: {ingredients}</Text>
            </CardItem>
            <CardItem>
        
                <TouchableHighlight
                      onPress={() => Linking.openURL(href)}>
                  <Text style={{color: 'blue'}}>Go To Recipe</Text>
                </TouchableHighlight>
  
            </CardItem>
          </Card>
        </Content>
    );
}