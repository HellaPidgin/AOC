import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  Image,
      ScrollView,
  View
} from 'react-native';

class Home extends React.Component {
        constructor(props) {
         super(props);

     }
    render(){
    return(
        <View style={styles.container}>
        
           <View style={styles.nav}>
            <Text style={styles.white}>Podcasts</Text>
        <Image source={require('image!down')} resizeMode="contain" style={styles.icon} />
        </View>
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
            <Text style={styles.sectTitle}>The Feed</Text>
            <ScrollView style={styles.scrollV}>
                <View><Image source={require('image!rec')} resizeMode="contain" style={styles.bigImage} /><Text>HI</Text></View>
                </ScrollView>
            </View>
        <View style={styles.sponsore}></View>
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
    caption:{
        width:120,
        textAlign:'center',
       fontSize:11,
        color:'#555',
        justifyContent:'center',
    marginBottom:5,
        marginTop:-5
    },
    col: {
        flex: 1,
        flexDirection: 'column',
 
    },
    body:{
    flex:9
    },
    row: {
        flex: 1,
       justifyContent:'flex-start'
 
    },
    scrollV: {
        margin: 10,
    },
    bigImage: {
       height: 120,
        width:100,
        padding:0,
        margin:15,
        marginLeft:10,
    },
    recomends: {
        flex: 4,

        flexDirection: 'column',
       
    },
    nav: {
        flex: 1,
        backgroundColor: '#202224',
        justifyContent: 'center',
        flexDirection:'row',
        marginTop:20,
        alignItems: 'center',

    }, white: {
        color: "#fff",
        fontSize: 20,

    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }, divider: {
       flex:1,
        marginTop:15,
        marginBottom:15,
        height:1,
        backgroundColor:'#f1f1f1',
    },
    icon: {
        width: 14,
        margin:5,
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