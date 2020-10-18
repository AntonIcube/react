import React, { useState, useEffect } from 'react';
import {
  StyleSheet, ScrollView, View, Button, Text, Image,
} from 'react-native';
import { Card } from 'react-native-paper';

const Category = ({ navigation }) => {

  const categories = [
    {
        id:1,
        name: 'Skin Care',
        child: 'child Skincare',
        img: 'https://id.elemis.com/media/catalog/product/cache/ccaa99522f4552b9892ec70fd74cc4c1/media/50173_Pro-Collagen_Rose_Cleansing_Balm_Primary_Back.png'
      },
      {
        id:2,
        name: 'Body Bath',
        child: 'child Body Bath',
        img: 'https://id.elemis.com/media/catalog/product/cache/ccaa99522f4552b9892ec70fd74cc4c1/media/50816_Sea_Lavender_&_Samphire_Salt_Scrub_Primary_Front.png'
      },
      {
        id:3,
        name: 'Moisturisers', 
        img: 'https://id.elemis.com/media/catalog/product/cache/ccaa99522f4552b9892ec70fd74cc4c1/media/50137_Superfood_Night_Cream_Primary_Front.png'
      },
      {
        id:4,
        name: 'Eye Care', 
        img: 'https://id.elemis.com/media/catalog/product/cache/ccaa99522f4552b9892ec70fd74cc4c1/media/00231_Pro-Collagen_Advanced_Eye_Treatment_Primary_Front.png'
      },
    ]



  return (
    <View>
        <Text style={styles.titleText}>CATEGORY</Text>
    <ScrollView horizontal >
    {
      categories.map((category, index) => {
        return (

          <View key={index}>
            <Card style={styles.card}>
                <Image source={{uri: category.img}} style={{ width: '100%', height: 150, resizeMode:'cover', marginTop:30, marginBottom:50}}/>
                <Button
                  color="gray"
                  title={category.name} 
                  style={{marginTop:50}}
                  onPress={() => navigation.navigate('PLP',{id:category.id})}  
                />
            </Card>
          </View>

        )
      })
    }
    </ScrollView>
   </View>
  )
}

const styles = StyleSheet.create({
  titleText: {
    width: "100%",
    textAlign: "center",
    marginTop:90, 
    fontSize:40,
    paddingBottom: 15,
    paddingTop: 10,
    fontWeight: "700",
    fontSize: 25,
    backgroundColor: '#0f213a',
    color: '#fff',
    marginBottom: 20
  },
  card : {
    height: 300,
    width: 175,
    marginTop: 35,
    marginLeft: 10,
    marginRight: 10,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 7,
      },
    shadowOpacity: 1,
    shadowRadius:10,
    borderRadius: 25
  }
});





export default Category