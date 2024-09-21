import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Button,
  Image,
  TextInput,
  Text,
} from 'react-native';

const App = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#FFFBE6' }}>
      <View style={{ flex: 3, justifyContent:'center' }}>
        <Image source={require('./eyeball.svg')} />
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center', justifyContent:'space-between',
          width: 300,
          borderBottomColor:'black', borderBottomWidth:1
        }}>
        <Image
          style={{ height: 28, width: 28 }}
          source={require('./Group3.svg')}
        />
        <TextInput
          style={[styles.textInput, {}]}
          placeholder="please input username"
        />
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center', justifyContent:'space-between',
          width: 300,
          borderBottomColor:'black', borderBottomWidth:1
        }}>
        <Image
          style={{ height: 28, width: 28 }}
          source={require('./lock8.png')}
        />
        <TextInput
          style={[styles.textInput, {}]}
          placeholder="please input password"
        />
      
      </View>
      <View style={{ flex: 1 }}>
        <TouchableOpacity style={styles.btn}>login </TouchableOpacity>
      </View>
      <View style={{ flex: 1 , flexDirection:'row-reverse', justifyContent:'space-between', width:300, marginTop:20}}>
        <Text>Forgot Password</Text>
        <Text>Register</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text>Orther login methods </Text>
      </View>
      <View style={{ marginBottom:30,flex: 1, flexDirection:'row', justifyContent:'space-between' ,width:300}}>
        <Image source={require('./Group8.svg')} />
        <Image source={require('./Group9.svg')} />
        <Image source={require('./Rectangle19.png')} />
        <Image style = {{position:'absolute', bottom:-10,right:20}} source={require('./brandico_facebook.png')}/>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  textInput: {
    padding: 10,
    width:250
  },
  btn:{
    marginTop:20,
    padding:10,
    width:300,
    textAlign:'center',
    backgroundColor:'#FCCD2A',
    textTransform:'uppercase',
    fontSize:22,
    fontWeight:'bold',
    borderRadius:10
  }
});

export default App;
