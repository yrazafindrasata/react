import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Vibration } from 'react-native';
import { Camera } from 'expo-camera';


export default class ScanScreen extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      hasPermission: null,
      hasScanned: null
    }
  }

  async componentDidMount(){
    const { status } = await Camera.requestPermissionsAsync();
    this.setState({
      hasPermission: status === 'granted'
    })
    
  }

  handleBarcode = ({ type, data }) =>{
    this.setState({
      hasScanned: true
    })
    Vibration.vibrate()
    fetch(`https://world.openfoodfacts.org/api/v0/product/${data}.json`)
     .then((response)=> response.json())
     .then((json)=>{
       this.props.navigation.navigate('Product',
       {
          item:json.product
       })
     })
     .catch((error)=>{
       console.error(error);
     })
  }

  render(){
    if (this.state.hasPermission === null) {
      return <View />;
    }
    if (this.state.hasPermission === false) {
      return <View><Text>No access to camera</Text></View>;
    }
    return (
      <View style={{ flex: 1 }}>
        <Camera 
          style={{ flex: 1 }} 
          type={Camera.Constants.Type.back}
          onBarCodeScanned={this.state.hasScanned ? undefined : this.handleBarcode}
          >
        </Camera>
      </View>
    );
  }
}