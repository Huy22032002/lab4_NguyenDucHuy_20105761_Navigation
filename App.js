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
export default App;
