import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Button, Text } from 'react-native';
import Layout2 from './Layout2';
import Lay1 from './Layout1';
import Lay3 from './Layout3';
import Lay4 from './Layout4';
import Lay5 from './Layout5';
import Lay6 from './Layout6';
import Lay7 from './Layout7';
import Lay8 from './Layout8';
const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={{ alignContent: 'center', justifyContent: 'center', flex: 1, marginHorizontal:10 }}>
      <Button
        title="layout 1" color = "red"
        onPress={() => navigation.navigate('layout1')}></Button>
      <Button
        title="Layout 2"
        onPress={() => navigation.navigate('layout2')}></Button>
      <Button
        title="Layout 3" color="gray"
        onPress={() => navigation.navigate('layout3')}></Button>
      <Button
        title="Layout 4" color="purple"
        onPress={() => navigation.navigate('layout4')}></Button>
      <Button
        title="Layout 5" color="orange"
        onPress={() => navigation.navigate('lay5')}></Button>
        <Button title="Layout6" color="green" onPress = {()=>navigation.navigate('lay6')} />
        <Button title='Layout7' onPress = {()=> navigation.navigate('lay7')} />
        <Button title="Layout 8" color="red" onPress = {() => navigation.navigate('lay8')} />
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
          options={{ title: 'home' }}
        />
        <Stack.Screen
          name="layout2"
          component={Layout2}
          options={{ title: 'layout2' }}
        />
        <Stack.Screen
          name="layout1"
          component={Lay1}
          options={{ title: 'layout 1' }}
        />
        <Stack.Screen name="layout3" component={Lay3} title="Lay 3" />

        <Stack.Screen name="layout4" component={Lay4} title="lay4" />
        <Stack.Screen name="lay5" component={Lay5} title="Lay out 5" />
        <Stack.Screen
          name="lay6"
          component={Lay6}
          options={{title:'Layout so 6'}}
        />
        <Stack.Screen 
          name="lay7"
          component={Lay7}
          options={{title:'Layout 7'}}
        />
         <Stack.Screen 
          name="lay8"
          component={Lay8}
          options={{title:'Layout 8'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
