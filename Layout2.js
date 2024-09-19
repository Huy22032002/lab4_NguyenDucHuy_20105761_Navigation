import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';

const App = () =>{
  return(
    <View style={{flex:1, alignItems:'center', backgroundColor:'yellow'}}>
    <LinearGradient
      colors={['#c5f9d7', '#f7d486']}
      style={styles.background}
    />
      <View id="circle" style={{alignItems:'center', justifyContent:'center',flex:4}}>
        <Image style={{width:120, height:120}}
          source={
            {
              uri:'https://clipartcraft.com/images/transparent-circle-black-8.png'
            }
          }
        />
      </View>

      <View id="title1" style={{flex:4, alignItems:'center',justifyContent:'center'}}>
        <View id="content1" style={{marginBottom:20 }}>
          <Text className="txtContent1" style={styles.txtContent1}>grow</Text>
          <Text className="txtContent1" style={styles.txtContent1}>your business</Text>
        </View>
        <View id="content2" style={{
          marginLeft:20,
          marginRight:20,
        }}>
          <Text style={{textAlign:'center', fontWeight:'bold'}}>We will help you to grow your business using online servers</Text>
        </View>

        <View id="btn" style={{
            flexDirection:'row',justifyContent:'space-around'
        }}>
          <TouchableOpacity style={styles.btn}>login</TouchableOpacity>
          <TouchableOpacity style={styles.btn}>sign up</TouchableOpacity>
        </View>
      </View>

      <View id="title2" style={{flex:2}}>
        <Text style={{
          textTransform:'uppercase', fontWeight:'bold',fontSize:19
        }}>how we work?</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  txtContent1:{
    textAlign:'center',
    fontWeight:'bold',
    fontSize: 27,
    textTransform:'uppercase'
  },
  btn:{
    height:45,
    width:120,
    paddingTop:8,
    paddingBottom:8,
    paddingLeft:5,
    paddingRight:5,
    backgroundColor:'#f27a7d',
    borderRadius:5,
    fontWeight:'bold',
    fontSize:23,
    textAlign:'center',
    textTransform:'uppercase',
    marginRight:20,
    marginLeft:20,
    marginTop:30,
  },
  background:{
    position: 'absolute',
    left:0,
    right:0,
    top:0,
    height: 570,
  }
});

export default App;
