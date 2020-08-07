import React from 'react';
import { StyleSheet,Text, View, Image } from 'react-native';





const styles = StyleSheet.create({
  title: {
      fontSize: 18,
      fontWeight: 'bold',
  },
  stretch: {
      width: 100,
      height: 100,
      resizeMode: 'stretch',
      margin:15,
  },
  second_title: {
      fontSize: 17,
      color:'#224057',
      fontWeight: 'bold',

  },
});


export default function ProductScreen({ route }){
  return(
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.title}>Product:</Text>
    <Text style={styles.second_title}>{route.params.item.product_name_fr}</Text>
    <Image
        style={styles.stretch}
        source={{
            uri: route.params.item.image_thumb_url,
        }}
    />
    <Text style={styles.title}>Catégorie: </Text>
    <Text> {route.params.item.categories}</Text>

    <Text style={styles.title}>Ingredients : </Text>
    <Text> {route.params.item.ingredients_text_fr}</Text>
    
</View>
  )
}

 