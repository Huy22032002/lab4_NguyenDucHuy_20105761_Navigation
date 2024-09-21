import React, { useState } from 'react';
import {
  View,
  Button,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  CheckBox,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { RadioButton } from 'react-native-paper';

const App = () => {
  const [checked, setChecked] = React.useState('Female');
  return (
    <View style={styles.container}>
      <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
        <Text
          style={{
            fontSize: 25,
            fontWeight: 'bold',
            textAlign: 'center',
            textTransform: 'uppercase',
          }}>
          Registers
        </Text>
      </View>
      <View style={{ flex: 1 }}>
        <TextInput placeholder="Name" style={styles.textInput} />
      </View>
      <View style={{ flex: 1 }}>
        <TextInput placeholder="Phone" style={styles.textInput} />
      </View>
      <View style={{ flex: 1 }}>
        <TextInput placeholder="Email" style={styles.textInput} />
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          width: 300,
          backgroundColor: 'gray',    marginTop:5

        }}>
        <TextInput
          secureTextEntry="true"
          placeholder="Password"
          style={{ marginLeft: 10, width: 220 }}
        />
        <Image
          style={{ alignSelf: 'center', height: 30, width: 40 }}
          source={require('./eye.png')}
        />
      </View>
      <View style={{ flex: 1 }}>
        <TextInput placeholder="Birthday" style={styles.textInput} />
      </View>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <RadioButton
            value="Male"
            status={checked === 'Male' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('Male')}
          />
          <Text>Male</Text>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <RadioButton
            value="Female"
            status={checked === 'Female' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('Female')}
          />
          <Text>Female</Text>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <TouchableOpacity
          style={{
            textTransform: 'uppercase',
            fontSize: 22,
            fontWeight: 'bold',
            backgroundColor: 'red',
            color: 'white',
            width: 300,
            padding: 10,
            textAlign: 'center',
          }}>
          register
        </TouchableOpacity>
      </View>
      <View style={{ flex: 2, marginTop:20}}>
        <Text>When you agree to terms and conditions</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'lightblue',
  },
  textInput: {
    height: 40,
    width: 300,
    backgroundColor: 'gray',
    paddingLeft: 10,
    marginTop:5
  },
  
});

export default App;
