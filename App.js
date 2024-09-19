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

export default App;
