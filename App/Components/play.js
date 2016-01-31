import React, {
    AppRegistry,
    Component,
    StyleSheet,
    LayoutAnimation,
    TouchableWithoutFeedback,
    Text,
    Image,
    ScrollView,
    SliderIOS,
    View
}
from 'react-native';

import VolumeSlider from 'react-native-volume-slider';

class Play extends React.Component {
        constructor(props) {
         super(props);
         this.state={
        time: "0:00",
        play:{uri: 'http://samokoro.com/play'},

     }
        }
      volumeChange(value) {
    // body 
  }
    animateView(){
            LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    this.setState({
    play:{uri: 'http://samokoro.com/pause.png'},
    });
    }
    pop(){
     this.props.navigator.pop();
    }
    
    // please read
    /** We could have a working volume slider or the app with the code below. Unfortunatly, this only works on devices so for the purpose of this demo, we'll use an image
    
    <VolumeSlider
          style={styles.slider}
          thumbSize={{
            width: 8,
            height: 8
          }}
          thumbTintColor="rgb(146,146,157)"
          minimumTrackTintColor="rgb(146,146,157)"
          maximumTrackTintColor="rgba(255,255,255, 0.1)"
          onValueChange={this.volumeChange.bind(this)} />
          
          */
 
    render(){
    return(
        <View style={{flex:1}}>
        <Image source={require('image!playback')} resizeMode="contain"
    style={styles.container}>
        <View style={{backgroundColor:'rgba(0,0,0,0)', margin:5}}>
        <Text style={styles.white}>LINDA CARROLL | LOVE CYCLES</Text>
        </View>
        <View style={{backgroundColor:'rgba(0,0,0,0)',alignSelf:'center', margin:5}}>
        <Text style={styles.whitexs}>Episode 480</Text>
        </View>
        <View style={styles.playbar}>
            <View style={styles.row}>
                <Text style={{color:'#cda154',fontWeight:'600'}}>{this.state.time}/</Text><Text style={{color:'#fff', fontWeight:'600'}}>32:30</Text>
                
                </View>
                 <Image source={require('image!vol')} resizeMode="contain"
    style={{height:15, width:350, margin:10,marginTop:0,alignSelf:'center' }}/>
            <View style={styles.rowx}>
                
    <TouchableWithoutFeedback onPress={this.pop.bind(this)}><Image source={require('image!back')} resizeMode="contain"
    style={{height:15, width:15, }}/></TouchableWithoutFeedback>
    
        <TouchableWithoutFeedback onPress={this.animateView.bind(this)}><Image source={this.state.play} resizeMode="contain"
    style={{height:15, width:15, }}/></TouchableWithoutFeedback>
    <Image source={require('image!forward')} resizeMode="contain"
    style={{height:15, width:15, }}/>
    
                
                </View>
            
           
                
        </View>
            
        </Image>
    </View>
    )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        flexDirection: 'column',
        backgroundColor: '#333',
        justifyContent: 'flex-end',
        alignSelf:'center'
    },
    slider: {
        height: 90,
        marginLeft: 0,
    },
    playbar: {
        height: 150,
        backgroundColor: '#202224',
        opacity: 0.7,
        flexDirection: 'column'
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
        justifyContent: 'flex-start',
        flexDirection: 'row',
        margin: 10,
        alignSelf:'center'
        

    },
    rowx: {
       
        flex: 1,
        justifyContent: 'space-around',
        flexDirection: 'row',
        margin: 10,
        width:300,
        alignSelf:'center',
       
    },
    white: {
        color: '#fff',
        fontSize: 16,
        alignSelf:'center'
    },
    whitexs: {
        color: '#fff',
        fontSize: 14
    },

    sponsore: {
        flex: 1,
        margin: 15,
        marginTop: 0,
        justifyContent: 'center'

    },

});
module.exports = Play;