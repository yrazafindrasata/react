// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { Icon } from 'react-native-elements'

import HomeScreen from './src/screens/HomeScreen';
import ScanScreen from './src/screens/ScanScreen';
import ProductScreen from './src/screens/ProductScreen';


// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text style={{color:"#FFCC00"}}>mon app</Text>
//       <StatusBar style="auto" />

//       <Text>mon app react</Text>
//     </View>
//   );
// }





// const MyComponent = (props) =>{
//   return(
//     <View style={StyleSheet.center}>
//       <Text>Hello {props.name} !</Text>
//     </View>
//   )
// }



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen}/>
      <Stack.Screen name="Product" component={ProductScreen}/>
    </Stack.Navigator>
  )
}

export default function App() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Home" 
            component={HomeStack}
            options={{
             tabBarLabel: 'Home',
             tabBarIcon: () =><Icon name="home" type="ionicons" size={32}/>
            }}
            />
          <Tab.Screen
            name="Scan" 
            component={ScanScreen}
            options={{
              tabBarLabel: 'scan !',
              tabBarIcon: () =><Icon name="barcode-scan" type="material-community"/>
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
