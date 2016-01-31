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

class Home extends React.Component {
        constructor(props) {
         super(props);
         this.state={
         title:'Podcasts',
         navTouch:
             {
             height:60
             }

     }
        }
    
    animateNav(){
    //let callback = this.onViewLayout.bind(this);
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)
        this.setState({
        navTouch:{
        height: this.state.navTouch.height > 60 ? 60 : 360
        }
        })
    }
    onViewLayout(){
    this.setState({})
    }
    render(){
        let navTouch = [styles.nav, this.state.navTouch];
    return(
        <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.animateNav.bind(this)}>
           <View style={navTouch}>
               <View style={{margin:15, flexDirection:'row'}}>
            <Text style={styles.white}>Podcasts</Text>
        <Image source={require('image!down')} resizeMode="contain" style={styles.icon} /></View>
        </View></TouchableWithoutFeedback>
    <ScrollView style={styles.body}>    
        <View style={styles.recomends}>
            <View style={styles.scrollV}><Text style={styles.sectTitle}>RECOMENDED EPISODES</Text>
            <ScrollView contentContainerStyle={styles.row} horizontal={true}
             automaticallyAdjustContentInsets={false} vertical={false}>
                 
                <View style={styles.col}><Image source={require('image!rec')} resizeMode="contain" style={styles.bigImage} />
                    <Text style={styles.caption}>THE BEST OF</Text>
                        </View>
                    <View style={styles.col}><Image source={require('image!fanmail')} resizeMode="contain" style={styles.bigImage} />
                    <Text style={styles.caption}>FAN MAIL FRIDAY</Text>
                        </View>
                    <View style={styles.col}><Image source={require('image!toolbox')} resizeMode="contain" style={styles.bigImage} />
                    <Text style={styles.caption}>THE TOOLBOX</Text>
                        </View>
                     <View style={styles.col}><Image source={require('image!fanmail')} resizeMode="contain" style={styles.bigImage} />
                    <Text style={styles.caption}>MORE FAN MAIL</Text>
                        </View>
                </ScrollView>
                    <View style={styles.divider}/>
            </View>
            </View>
        <View style={styles.feed}>
            <Text style={styles.sectTitle}>THE PODCAST FEED</Text>
            <ScrollView  contentContainerStyle={styles.row} horizontal={true}
             automaticallyAdjustContentInsets={false} vertical={false}>
                <View><Image source={require('image!linda')} resizeMode="contain" style={styles.boxImage} /> 
                    <Image source={require('image!44')} resizeMode="contain" style={styles.boxImage} />
                    </View>
                    <View><Image source={require('image!kamp')} resizeMode="contain" style={styles.boxImage} /> 
                    <Image source={require('image!47')} resizeMode="contain" style={styles.boxImage} />
                    </View>
                    <View><Image source={require('image!maria')} resizeMode="contain" style={styles.boxImage} /> 
                    <Image source={require('image!bill')} resizeMode="contain" style={styles.boxImage} />
                    </View>
                    <View><Image source={require('image!44')} resizeMode="contain" style={styles.boxImage} /> 
                    <Image source={require('image!47')} resizeMode="contain" style={styles.boxImage} />
                    </View>
                  
                </ScrollView>
                    <View style={styles.divider}/>
            </View>
        <View style={styles.sponsore}>
            <Text style={styles.sponsoreTitle}>SPONSOR</Text>
            <Image source={require('image!meundies')} resizeMode="contain" style={{width:350,height:200, borderRadius:10,marginTop:5, alignSelf:'center'}} />
            </View>
        <View style={styles.favs}></View>
        </ScrollView>
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
     scrollV: {
         margin: 10,
     }, feed: {
         margin: 10,
          marginTop: -5,
         
     },
    sponsore: {
        flex:1,
         margin: 15,
        marginTop:0,
         justifyContent:'center'
         
     },
     bigImage: {
         height: 120,
         width: 100,
         padding: 0,
         margin: 15,
         marginLeft: 0,
         marginRight: 10
     },
     boxImage: {
         height: 100,
         width: 100,
         padding: 0,
         margin: 3,
         marginLeft: 0,
         marginRight: 10,
         marginTop:20
     },
     recomends: {
         flex: 4,
         marginTop: -10,
         flexDirection: 'column',

     },
     nav: {
         height:60,
         backgroundColor: '#202224',
         justifyContent: 'center',
         flexDirection: 'row',
         marginTop: 20,
         alignItems: 'flex-start',

     }, white: {
         color: "#fff",
         fontSize: 20,
     

     },
     welcome: {
         fontSize: 20,
         textAlign: 'center',
         margin: 10,
     },
     divider: {
         flex: 1,
         marginTop: 15,
         marginBottom: 15,
         height: 2,
         backgroundColor: '#f1f1f1',
     }, sectTitle: {
         fontSize: 14,
       
     },
     icon: {
         width: 14,
         margin: 5,
     },
     instructions: {
         textAlign: 'center',
         color: '#333333',
         marginBottom: 5,
     }, thumbnail: {
         width: 53,
         height: 81,
     },
 });


module.exports = Home;