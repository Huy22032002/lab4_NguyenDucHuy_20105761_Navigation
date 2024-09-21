import React from 'react';
import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native';

const App = () => {
  return (
      <View style={{flex:1, backgroundColor:'#E5D9F2'}}>
        <View id="circle" style={{flex:4,justifyContent:'center', alignItems:'center'}}>
          <Image 
            source={
              {uri:'https://clipartcraft.com/images/transparent-circle-black-8.png'}
            } 
            style={{width:110, height:110}}
          />
        </View>

        <View id="content" style={{flex:2, justifyContent:'center', alignItems:'center'}}>
          <Text style={styles.txtTitle}>
            grow
          </Text>
          <Text style={styles.txtTitle}>
            your business
          </Text>
        </View>

        <View id="subcontent" style={{flex:2, justifyContent:'center'}}>
          <Text style={{fontWeight:'bold', textAlign:'center'}}>
            We will help you to grow your business using online server
          </Text>
        </View>

        <View style={{flex:2, flexDirection: 'row', justifyContent:'space-around'}}>
          <TouchableOpacity style={styles.btn}>
            login
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            sign up
          </TouchableOpacity>
        </View>
      </View>
  );
};

const styles = StyleSheet.create(
  {
    txtTitle:{
      textTransform: 'uppercase', 
      fontWeight: 'bold',
      fontSize: 25,
    },
    btn:{
      fontWeight:'bold',
      backgroundColor:'#A594F9',
      justifyContent:'center',
      textAlign:'center',
      borderRadius: 10,
      fontSize:21,
      textTransform:'uppercase',
      height: 45,
      width: 110
    }
  }
);

export default App;