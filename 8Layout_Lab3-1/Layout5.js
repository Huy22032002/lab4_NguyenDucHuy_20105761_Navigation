import React from 'react';
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
const App = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 700 }}
        colors={['lightblue', 'white']}
      />
      <View style={{ flex: 2, alignSelf: 'center', marginTop: 40 }}>
        <Text
          style={{
            fontSize: 25,
            fontWeight: 'bold',
            textAlign: 'center',
            textTransform: 'uppercase',
          }}>
          Login
        </Text>
      </View>
      <View style={{ flex: 1 }}>
        <TextInput style={styles.textInput} placeholder="Email" />
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          backgroundColor: 'gray',
          height: 35,
          width: 300,
          justifyContent: 'space-between',
        }}>
        <TextInput
          secureTextEntry="true"
          placeholder="Password"
          style={{ marginLeft: 10, width: 220 }}
        />
        <Image
          style={{ marginRight: 10, alignSelf: 'center' }}
          source={require('./eye.png')}
        />
      </View>
      <View style={{ flex: 2, flexDirection: 'column-reverse' }}>
        <TouchableOpacity
          style={{
            height: 35,
            width: 300,
            backgroundColor: 'orange',
            padding: 10,
            textAlign: 'center',
            textTransform: 'uppercase',
            fontSize: 16,
            fontWeight: 'bold',
            marginBottom: 15,
          }}>
          login
        </TouchableOpacity>
      </View>
      <View style={{ flex: 3 }}>
        <Text style={styles.subLogin}>
          {' '}
          when you agree to terms and conditions{' '}
        </Text>
        <Text id="forget" style={[styles.subLogin, { color: 'red' }]}>
          {' '}
          Forgot your password ?{' '}
        </Text>
        <Text style={styles.subLogin}> Or login with </Text>
      </View>
      <View
        style={{
          margin: 40,
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          width: 300,
          justifyContent: 'center',
        }}>
        <View style={[styles.frameLogo, { backgroundColor: 'blue' }]}>
          <Image
            style={{ height: 30, width: 30 }}
            source={require('./fb.png')}
          />
        </View>
        <View style={[styles.frameLogo, { backgroundColor: 'yellow' }]}>
          <Image
            style={{ height: 30, width: 30 }}
            source={require('./gg.png')}
          />
        </View>
        <View style={[styles.frameLogo, { backgroundColor: 'green' }]}>
          <Image
            style={{ height: 30, width: 30 }}
            source={require('./fb.png')}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  textInput: {
    backgroundColor: 'gray',
    padding: 10,
    height: 45,
    width: 300,
  },
  subLogin: {
    textAlign: 'center',
    marginTop: 10,
    fontWeight: 'bold',
  },
  frameLogo: {
    paddingHorizontal:20,
    height: 40,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
