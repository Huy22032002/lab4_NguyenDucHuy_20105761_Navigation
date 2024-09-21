import React, { useState } from 'react';
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
    <View style={styles.container}>
      <LinearGradient
        colors={['#FFF0D1', '#3B3030']}
        style={styles.container}
      />
      <View style={{ flex: 3, marginLeft: 15, justifyContent: 'center' }}>
        <Text style={[styles.text, { fontSize: 30 }]}>login</Text>
      </View>
      <View style={{ flex: 2, marginLeft: 15 }}>
        <View
          style={{
            flexDirection: 'row',
            width: 300,
            backgroundColor: '#795757',
            padding: 10,
          }}>
          <Image
            style={{ height: 30, width: 30 }}
            source={require('./user.png')}
          />
          <TextInput style={{ marginLeft: 10 }} placeholder="Username" />
        </View>
      </View>
      <View style={{ flex: 2, marginLeft: 15 }}>
        <View
          style={{
            flexDirection: 'row',
            width: 300,
            backgroundColor: '#795757',
            padding: 10,
            justifyContent: 'space-between',
          }}>
          <Image
            style={{ height: 30, width: 30 }}
            source={require('./lock.png')}
          />
          <TextInput style={{ marginLeft: -30 }} placeholder="Password" />
          <Image
            style={{ height: 30, width: 30 }}
            source={require('./eye.png')}
          />
        </View>
      </View>
      <View style={{ flex: 3, justifyContent: 'center', marginLeft:15}}>
        <TouchableOpacity
          style={
            [styles.text,
            { width: 300, backgroundColor: '#795757', color: 'white',textAlign:'center',padding:10 }]}
          >
          login{' '}
        </TouchableOpacity>
      </View>
      <View style={{ flex: 3, alignItems: 'center' }}>
        <Text style={[styles.text,{ color: 'red', textDecorationLine: 'underline' }]}>
          Create Account
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: 350,
    height: 500,
  },
  text: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});

export default App;
