import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Dimensions,
  Platform,
  Image,
  Title
} from 'react-native';
import { Card } from 'react-native-paper';


const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 9 / 16);
const imageWidth = dimensions.width * 0.33 ;

const Home = ({ navigation }) => {
  const [categories, setCategories] = useState()
  const [sale, setSale] = useState()

  useEffect(() => {
    setCategories([
      {
        id:1,
        name: 'Skin Care',
        img: 'https://id.elemis.com/media/catalog/product/cache/ccaa99522f4552b9892ec70fd74cc4c1/media/50173_Pro-Collagen_Rose_Cleansing_Balm_Primary_Back.png'
      },
      {
        id:2,
        name: 'Body Bath',
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
    ])
    setSale([
      {
        id: 32,
      name: 'Pro-COLLAGEN MARINE CREAM',
      price: 'Rp 1.040.000',
      img: 'https://id.elemis.com/media/catalog/product/cache/ccaa99522f4552b9892ec70fd74cc4c1/media/PRO-COLLAGEN-MARINE-CREAM_MASTER_V1_RGB_WEB.jpg'
    },
      {
        id : 41,  
        name: 'WHITE FLOWERS EYE & LIP MAKE-UP REMOVER',
        price: 'Rp 570.000',
        img: 'https://id.elemis.com/media/catalog/product/cache/ccaa99522f4552b9892ec70fd74cc4c1/media/00169_White_Flowers_Make_Up_Remover_Primary_Front.png'
      },
      {
        id : 21,  
        name: 'SEA LAVENDER & SAMPHIRE SHOWER MILK',
        price: 'Rp 630.000',
        img: 'https://id.elemis.com/media/catalog/product/cache/ccaa99522f4552b9892ec70fd74cc4c1/media/50768_Sea_Lavender-And-Samphire-Bath-And-Shower-Milk_Primary_Front.png'
      },
      {
        id : 11,  
        name: 'SKIN CARE CAPSULES',
        price: 'Rp 1.640.000',
        img: 'https://id.elemis.com/media/catalog/product/cache/ccaa99522f4552b9892ec70fd74cc4c1/media/SKIN-BLISS-CAPSULES_MASTER_V04_RGB_CUTOUT_Caps_CMYK.jpg'
      },
    ])
  }, [])



  return (
    <ScrollView vertical style={{backgroundColor:'white'}}>
        <ScrollView horizontal style={{width:'100%'}}>
          <Image source={require('../assets/Banner.jpg')} style={{ width: 450, height: 200 }}/>
          <Image source={require('../assets/Banner2.jpg')} style={{ width: 450, height: 200 }}/> 
        </ScrollView>
      <View style={{ marginBottom: 30}}>
          <Text style={styles.titleText}>Top Product!</Text>
          <RenderSale sale={sale} navigation={navigation} />
      </View>
    </ScrollView>
  )
}

const RenderSale = ({ sale, navigation }) => {
  if(sale && sale.length > 0){
    return (
      <ScrollView horizontal>
          {
            sale.map((product, idx) => {
              return (
                <View key={idx} style={styles.card}>
                  <Card style={{ paddingBottom: 10 }} onPress={() => navigation.navigate('Detail', 
                                {   
                                  id: product.id,
                                  name: product.name,
                                  price: product.price,
                                  img: product.img
                                })}>
                      <Image source={{uri: product.img}} style={{ width: '100%', height: 150 }}/>
                      <Text style={{ paddingTop: 5, textAlign: "center", fontWeight: '800'}}>{product.name}</Text>
                      <Text style={{ textAlign: "center", color: '#0f213a', fontSize: 10}}>{product.price}</Text>
                  </Card>
                </View>
              )
            })
          }
      </ScrollView>
    )
  }
  return null
}

const styles = StyleSheet.create({
  titleText: {
    width: "100%",
    textAlign: "center",
    paddingBottom: 15,
    paddingTop: 30,
    fontWeight: "700",
    color:"#0f213a"
  },
  card : {
    width: imageWidth,
    marginRight: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    
    elevation: 15,
    borderRadius: 50
  }
});


export default Home