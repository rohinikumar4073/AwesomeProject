import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppRegistry,Image } from 'react-native';

export default class App extends React.Component {
  render() {
	 
		
    return (
      <View style={styles.container,flex:1,flexdirection:'row'}>
        <Text>Awesome Project Started</Text>
		
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
