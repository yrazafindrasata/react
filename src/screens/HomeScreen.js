import React from 'react';
import { Text, View, Button, FlatList, StyleSheet, StatusBar, Image, TouchableOpacity } from 'react-native';
import ListItem from '../components/ListItem';


// const ListItem = ({item}) =>(
//     <View style={styles.item}>
//         <Text>{item.product_name_fr}</Text>
//         <Text style={styles.second}>{item.brands_tags}</Text>
//         <Image
//             style={styles.stretch}
//             source={{
//                 uri: item.image_thumb_url,
//             }}
//         />
//     </View>
// )




class HomeScreen extends React.Component {

  constructor(props){
    super(props);

    this.state = {
        DATA: false
    }
  }

  

  componentDidMount(){
    return fetch('https://fr-en.openfoodfacts.org/category/pizzas.json')
      .then((response) => response.json())
      .then((json) => {
        this.setState({
            DATA: json.products
        })
      })
      .catch((error) => {
        console.error(error);
      });
  }
  
  render(){
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <FlatList
            data= {this.state.DATA}
            renderItem={({item}) => <ListItem item={item} navigation={this.props.navigation} />}
            keyExtractor={item=>item.id}
          />
        </View>
        
      );
  }
}


export default HomeScreen;