/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
      NavigatorIOS,
  Image,
  View
} from 'react-native';

var Home =  require("./App/Components/home");

var MOCKED_MOVIES_DATA = [
  {title: 'Title', year: '2015', posters: {thumbnail: 'http://i.imgur.com/UePbdph.jpg'}},
];


class AoC extends Component {
    constructor(props) {
    super(props);
   

  }
   render(){

     return (
    <NavigatorIOS
         style={styles.container}
          navigationBarHidden={true}
         initialRoute={{
         component: Home,
         
        title: 'My View Title',
        passProps: { myProp: 'foo' },
      }}
    />
  );
   
    
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
 
  
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },thumbnail: {
    width: 53,
    height: 81,
  },
});

AppRegistry.registerComponent('AoC', () => AoC);
