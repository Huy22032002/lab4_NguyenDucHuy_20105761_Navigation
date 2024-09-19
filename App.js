<<<<<<< HEAD
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, Button, Text} from 'react-native';
import Layout2 from './Layout2';
import Lay1 from './Layout1';

const Stack = createNativeStackNavigator();

function HomeScreen({navigation}){
  return(
    <View style ={{alignContent:'center', justifyContent:'center', flex:1}}>
      <Button title = "layout 1" onPress = {() => navigation.navigate('layout1')}>
      </Button>
      <Button title ="Layout 2" onPress = {() => navigation.navigate('layout2')} >
      </Button>
    </View>
  );
} 

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={HomeScreen}
          options={{title: 'home'}}
        />
        <Stack.Screen
          name = "layout2"
          component={Layout2}
          options={{title:'layout2'}}
        />
        <Stack.Screen
          name = "layout1"
          component = {Lay1}
          options = {{title:'layout 1'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
=======
import { View, Text, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const imgColor = {
  blue : require('./assets/Rectangle7.png'),
  black : require('./assets/Rectangle6.png'),
  xanhnhat : require('./assets/Rectangle4.png'),
  red : require('./assets/Rectangle5.png')
}
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={{ flex: 6, alignItems: 'center', justifyContent: 'center' }}>
        <Image
          source={require('./assets/vs_blue.png')}
          style={{ height: 350 }}></Image>
      </View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
      </View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Chon mau"
          onPress={() => navigation.navigate('Details')}></Button>
      </View>
    </View>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={{ flex: 3, alignItems: 'center', justifyContent: 'center' }}>
        <Image
          source={require('./assets/vs_blue.png')}
          style={{ height: 70, width: 50 }}></Image>
        <Text>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
      </View>
      <View style={{ flex: 7, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Chọn 1 màu bên dưới</Text>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}>
          <Image
            source={require('./assets/Rectangle4.png')}
            style={{ height: 100, width: 100, margin: 5 }}
          />
          <Image
            source={require('./assets/Rectangle5.png')}
            style={{ height: 100, width: 100, margin: 5 }}
          />
          <Image
            source={require('./assets/Rectangle6.png')}
            style={{ height: 100, width: 100, margin: 5 }}
          />
          <Image
            source={require('./assets/Rectangle7.png')}
            style={{ height: 100, width: 100, margin: 5 }}
          />
        </View>
      </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

>>>>>>> 4e02854965b4bb859ffd1219ad85698e7c69bab8
export default App;
