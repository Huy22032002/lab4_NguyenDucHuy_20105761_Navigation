import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
  CheckBox,
} from 'react-native';
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

const App = () => {
  const [passWord, setPassword] = useState('');
  const [passwordLength, setPasswordLength] = useState(12);
  const [useSymbols, setUseSymbols] = useState(true);
  const [useNumbers, setUseNumbers] = useState(true);
  const [useLowerCase, setUseLowerCase] = useState(true);
  const [useUpperCase, setUseUpperCase] = useState(true);

  const getRandomLength = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const generatePassword = () => {
    let charset = '';
    let newPassword = '';

    if (useSymbols) charset += '!@#$%^&*()';
    if (useNumbers) charset += '0123456789';
    if (useLowerCase) charset += 'abcdefghijklmnopqrstuvwxyz';
    if (useUpperCase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    if (charset.length === 0) {
      setPassword('Select at least one option');
      return;
    }

    const randomLength = getRandomLength(8, 16);
    setPasswordLength(randomLength);

    for (let i = 0; i < randomLength; i++) {
      newPassword += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    setPassword(newPassword);
  };

  return (
    <LinearGradient
      style={style.container}
      colors={['#4c669f', '#3b5998', '#192f6a']}>
      <View style={style.header}>
        <Text style={style.headerText}>password {'\n'}generator</Text>
      </View>
       <TextInput editable={false} style={{backgroundColor:'#100421', width:'80%', height:50, marginBottom:40, color:'white'}} value={passWord}/>
      <View style={style.row}>
        <Text style={style.rowText}>Password Length</Text>
        <TextInput
          style={style.textInput}
          value={passwordLength.toString()}
          editable={false}
        />
      </View>

      <View style={style.row}>
        <Text style={style.rowText}>Include lower case letters</Text>
        <CheckBox
            value={useLowerCase}
            onValueChange={setUseLowerCase}
            style={{width:30, height:30}}
          />
      </View>

      <View style={style.row}>
        <Text style={style.rowText}>Include upper case letters</Text>
        <CheckBox
            value={useUpperCase}
            onValueChange={setUseUpperCase}
            style={{width:30, height:30}}
          />
      </View>

      <View style={style.row}>
        <Text style={style.rowText}>Include number</Text>
        <CheckBox
            value={useNumbers}
            onValueChange={setUseNumbers}
            style={{width:30, height:30}}
          />
      </View>

      <View style={style.row}>
        <Text style={style.rowText}>Include special symbol</Text>
        <CheckBox
            value={useSymbols}
            onValueChange={setUseSymbols}
            style={{width:30, height:30}}
          />
      </View>

      <View style={style.buttonContainer}>
        <TouchableOpacity style={style.button} onPress={generatePassword}>
          <Text style={style.buttonText}>GENERATE PASSWORD</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color:'white'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginBottom: 10,
  },
  rowText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  textInput: {
    width: 100,
    height: 30,
    backgroundColor: 'white',
    textAlign: 'center',
  },
  buttonContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 280,
    height: 50,
    backgroundColor: 'purple',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 25,
    textAlign: 'center',
  },
});

export default App;
