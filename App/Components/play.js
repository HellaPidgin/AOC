import React, {
  AppRegistry,
  Component,
  StyleSheet,
      LayoutAnimation,
      TouchableWithoutFeedback,
  Text,
  Image,
      ScrollView,
  View
} from 'react-native';

class Play extends React.Component {
        constructor(props) {
         super(props);
         this.state={
        play: "image!play"

     }
        }
    
 
    render(){
    return(
        <View style={styles.container}>
        
        </View>
    )
    }
}

const styles = StyleSheet.create({
  container: {
         flex: 1,

         flexDirection: 'column',
         backgroundColor: '#FFF',
     },
 sponsoreTitle:{
 color:'#e5884f',
     margin:10,
     marginTop:0,
     marginLeft:0
 },
     caption: {
         width: 100,
         textAlign: 'center',
         fontSize: 11,
         color: '#555',
         justifyContent: 'center',
         marginBottom: 5,

         marginTop: -5
     },
     col: {
         flex: 1,
         flexDirection: 'column',

     },
     body: {
         flex: 9
     },
     row: {
         flex: 1,
         justifyContent: 'flex-start'

     },

    sponsore: {
        flex:1,
         margin: 15,
        marginTop:0,
         justifyContent:'center'
         
     },
     
 });


module.exports = Play;