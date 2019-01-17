// import React from 'react';
// import { Image } from 'react-native';
// import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
// import { Linking, TouchableHighlight } from 'react-native';

// export default RecipeCard = (props) => {
//   // console.log(props)
//   const { title, href, ingredients, thumbnail} = props.data;
//     return (
//         <Content>
//           <Card>
//             <CardItem>
//               <Left>
//                 <Thumbnail source={{uri: thumbnail}} />
//                 <Body>
//                   <Text>{title}</Text>
//                 </Body>
//               </Left>
//             </CardItem>
//             <CardItem cardBody>
//               {/* <Image source={{uri: }} style={{height: 200, width: "100%"}}/> */}
//               <Text>Ingredients: {ingredients}</Text>
//             </CardItem>
//             <CardItem>
        
//                 <TouchableHighlight
//                       onPress={() => Linking.openURL(href)}>
//                   <Text style={{color: 'blue'}}>Go To Recipe</Text>
//                 </TouchableHighlight>
  
//             </CardItem>
//           </Card>
//         </Content>
//     );
// }

import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { Linking, TouchableHighlight } from 'react-native';
export default class RecipeCard extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content padder>
          <Card>
            <CardItem header bordered>
              <Text>NativeBase</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  NativeBase is a free and open source framework that enable
                  developers to build
                  high-quality mobile apps using React Native iOS and Android
                  apps
                  with a fusion of ES6.
                </Text>
              </Body>
            </CardItem>
            <CardItem footer bordered>
              <Text>GeekyAnts</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}