import React from 'react';
import {
  View,
  Button,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const App = () => {
  return (
    <View style={{ flex: 1, marginLeft:10, marginRight:10 }}>
      <LinearGradient
        colors={['#c5f9d7', '#f7d486']}
        style={{ top: 0, right: 0, left: 0, height: 730, position: 'absolute' }}
      />
      <View style={{ flex: 3, justifyContent: 'center', alignItems: 'center' }}>
        <Image
          source={require('./lock.png')}
          style={{
            height: 110,
            width: 110,
            justifyContent: 'center',
            alignContent: 'center',
          }}
        />
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
            fontSize: 35,
            fontWeight: 'bold',
            textTransform: 'uppercase',
            textAlign: 'center',
          }}>
          forget password
        </Text>
      </View>
      <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{
            fontSize: 13,
            fontWeight: 'bold',
            textTransform: 'uppercase',
            textAlign: 'center',
          }}>
          provide your account's email for which you want to reset your password
        </Text>
      </View>
      <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <Image source={require('./mail.png')} />
          <TextInput
            placeholder="Email"
            style={{ backgroundColor: 'gray', padding: 10 }}
          />
        </View>
      </View>
      <View style={{ flex:3,alignItems: 'center' }}>
        <TouchableOpacity
          style={{
            backgroundColor: 'yellow',
            padding: 10,
            width: 230,
            textAlign: 'center',
            textTransform: 'uppercase',
            fontWeight: 'bold',
          }}>
          next
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default App;
