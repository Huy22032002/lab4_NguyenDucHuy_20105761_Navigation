import React from 'react';
import {
  View,
  Button,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const App = () => {
  return (
    <View style={{ flex: 1, marginLeft: 10, marginRight: 10 }}>
      <LinearGradient
        colors={['#c5f9d7', '#f7d486']}
        style={{ top: 0, right: 0, left: 0, height: 730, position: 'absolute' }}
      />
      <View style={{ flex: 3, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 50, fontWeight: 'bold',textTransform:'uppercase'}}> code </Text>
      
      </View>
      <View
        style={{
          flex: 3,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 0,
        }}>
        <Text
          style={{
            fontSize: 28,
            fontWeight: 'bold',
            textTransform: 'uppercase',
            textAlign: 'center',
          }}>
          verification
        </Text>
      </View>
      <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
        <Text
          style={{
            fontSize: 13,
            fontWeight: 'bold',
            textTransform: 'uppercase',
            textAlign: 'center',
          }}>
          Enter online password send on ++0858584232424
        </Text>
      </View>
      <View
        style={{
          flex: 2,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          alignSelf:'center'
        }}>
        <View style = {style.pin}></View>
        <View  style = {style.pin}></View>
        <View style = {style.pin}></View>
        <View  style = {style.pin}></View>
        <View style = {style.pin}></View>
        <View  style = {style.pin}></View>
      </View>
      <View style={{ flex: 3, alignItems: 'center' }}>
        <TouchableOpacity
          style={{
            backgroundColor: 'yellow',
            padding: 10,
            width: 230,
            textAlign: 'center',
            textTransform: 'uppercase',
            fontWeight: 'bold',
          }}>
          Verify Code
        </TouchableOpacity>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  pin: {
    borderColor:'black',
    borderWidth:1,
    width:40,
    height:40,
    
  },
});

export default App;
