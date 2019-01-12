import React from 'react';
import { View } from 'react-native';
import { Container, Header, Item, Input, Icon, Button, Text } from 'native-base';

export default SearchBar = (props) => {
    return (
      <View>
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input 
                placeholder="Search" 
                onChangeText={props.handleInputChange}
            />
            {/* <Icon name="ios-people" /> */}
          </Item>
          <Button 
            transparent
            onPress={props.search}
          >
            <Text>Search</Text>
          </Button>
        </Header>
      </View>
    );
  }