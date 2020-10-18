import React from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    TouchableOpacity,
    TouchableHighlight,
    Dimensions,
    Platform,
    Image,
    Title
  } from 'react-native';
import { Card } from 'react-native-paper';

const dimensions = Dimensions.get('window');
const imageWidth = dimensions.width * 0.5 ;

const PLP = ({ route, navigation }) => {
    const { id } = route.params

  const category1 = [
    {
      id : 11,  
      name: 'SKIN CARE CAPSULES',
      price: 'Rp 1.640.000',
      img: 'https://id.elemis.com/media/catalog/product/cache/ccaa99522f4552b9892ec70fd74cc4c1/media/SKIN-BLISS-CAPSULES_MASTER_V04_RGB_CUTOUT_Caps_CMYK.jpg'
    },
    {
        id: 12,
      name: 'SKIN BUFF',
      price: 'Rp 720.000',
      img: 'https://id.elemis.com/media/catalog/product/cache/ccaa99522f4552b9892ec70fd74cc4c1/media/00255_Skin_Buff_Primary_Front.png'
    },
    {
        id: 13,
      name: 'SENSITIVE CLEANSING WASH', 
      price: 'Rp 570.000',
      img: 'https://id.elemis.com/media/catalog/product/cache/9acef7d1ef9b6ecea35dddea8ea8fdff/media/00302_Sensitive_Cleansing_Wash_Primary_Front.png'
    },
    {
        id: 14,
      name: 'PRO-COLLAGEN ROSE CLEANSING BALM', 
      price: 'Rp 990.000',
      img: 'https://id.elemis.com/media/catalog/product/cache/9acef7d1ef9b6ecea35dddea8ea8fdff/media/50173_Pro-Collagen_Rose_Cleansing_Balm_Primary_Back.png'
    }
  ]
  const category2 = [
    {
      id : 21,  
      name: 'SEA LAVENDER & SAMPHIRE SHOWER MILK',
      price: 'Rp 630.000',
      img: 'https://id.elemis.com/media/catalog/product/cache/ccaa99522f4552b9892ec70fd74cc4c1/media/50768_Sea_Lavender-And-Samphire-Bath-And-Shower-Milk_Primary_Front.png'
    },
    {
        id: 22,
      name: 'SEA LAVENDER & SAMPHIRE SALT SCRUB',
      price: 'Rp 940.000',
      img: 'https://id.elemis.com/media/catalog/product/cache/ccaa99522f4552b9892ec70fd74cc4c1/media/50816_Sea_Lavender_&_Samphire_Salt_Scrub_Primary_Front.png'
    },
    {
        id: 23,
      name: 'JAPANESE CAMELLIA BODY OIL BLEND', 
      price: 'Rp 890.000',
      img: 'https://id.elemis.com/media/catalog/product/cache/ccaa99522f4552b9892ec70fd74cc4c1/media/50763_Japanese_Camellia_Body_Oil_Blend_Primary_Front%20copy.png'
    }
  ]
  const category3 = [
    {
      id : 31,  
      name: 'PEPTIDE4 ADAPTIVE DAY CREAM',
      price: 'Rp 1.040.000',
      img: 'https://id.elemis.com/media/catalog/product/cache/ccaa99522f4552b9892ec70fd74cc4c1/media/50179_Peptide4_Adaptive_Day_Cream_Primary_Back.png'
    },
    {
        id: 32,
      name: 'Pro-COLLAGEN MARINE CREAM',
      price: 'Rp 1.040.000',
      img: 'https://id.elemis.com/media/catalog/product/cache/ccaa99522f4552b9892ec70fd74cc4c1/media/PRO-COLLAGEN-MARINE-CREAM_MASTER_V1_RGB_WEB.jpg'
    },
    {
        id: 33,
      name: 'SUPERFODD NIGHT CREAM', 
      price: 'Rp 770.000',
      img: 'https://id.elemis.com/media/catalog/product/cache/9acef7d1ef9b6ecea35dddea8ea8fdff/media/50137_Superfood_Night_Cream_Primary_Front.png'
    }
  ]
  const category4 = [
    {
      id : 41,  
      name: 'WHITE FLOWERS EYE & LIP MAKE-UP REMOVER',
      price: 'Rp 570.000',
      img: 'https://id.elemis.com/media/catalog/product/cache/ccaa99522f4552b9892ec70fd74cc4c1/media/00169_White_Flowers_Make_Up_Remover_Primary_Front.png'
    },
    {
        id: 42,
      name: 'Pro-COLLAGEN ADVANCED EYE TREATMENT',
      price: 'Rp 1.070.000',
      img: 'https://id.elemis.com/media/catalog/product/cache/ccaa99522f4552b9892ec70fd74cc4c1/media/00231_Pro-Collagen_Advanced_Eye_Treatment_Primary_Front.png'
    }
  ]
    if ( id == 1 ){
        return (
            <ScrollView>
                <View style={styles.parent}>

                    <Text style={styles.titleText}>SKINCARE</Text>
                    {
                    category1.map((product, index) => {
                        return (
                            
                            <Card  key={index} style={styles.child}>
                                <TouchableOpacity onPress={() => navigation.navigate('Detail', 
                                { 
                                    id: product.id,
                                    name: product.name,
                                    price: product.price,
                                    img: product.img
                                })}>

                                <Image source={{uri: product.img}} style={{ width: '100%', height: 150 }}/>
                                <Text style={{ paddingTop: 5, textAlign: "center", fontWeight: '800'}}>{product.name}</Text>
                                <Text style={{ textAlign: "center", color: '#0f213a', fontSize: 10, marginBottom:50}}>{product.price}</Text>

                                </TouchableOpacity>
                            </Card>
                        )
                    })
                    }
                </View>
            </ScrollView>
        )
    }
    if ( id == 2 ){
        return (
            <ScrollView>
                <View style={styles.parent}>

                    <Text style={styles.titleText}>Body Bath</Text>
                    {
                    category2.map((product, index) => {
                        return (
                            
                            <Card  key={index} style={styles.child}>
                                <TouchableOpacity onPress={() => navigation.navigate('Detail', 
                                { 
                                    id: product.id,
                                    name: product.name,
                                    price: product.price,
                                    img: product.img
                                })}>

                                <Image source={{uri: product.img}} style={{ width: '100%', height: 150 }}/>
                                <Text style={{ paddingTop: 5, textAlign: "center", fontWeight: '800'}}>{product.name}</Text>
                                <Text style={{ textAlign: "center", color: 'red', fontSize: 10, marginBottom:50}}>{product.price}</Text>

                                </TouchableOpacity>
                            </Card>
                        )
                    })
                    }
                </View>
            </ScrollView>
        )
    }
    if ( id == 3 ){
        return (
            <ScrollView>
                <View style={styles.parent}>

                    <Text style={styles.titleText}>Moisturisers</Text>
                    {
                    category3.map((product, index) => {
                        return (
                            
                            <Card  key={index} style={styles.child}>
                                <TouchableOpacity onPress={() => navigation.navigate('Detail', 
                                { 
                                    id: product.id,
                                    name: product.name,
                                    price: product.price,
                                    img: product.img
                                })}>

                                <Image source={{uri: product.img}} style={{ width: '100%', height: 150 }}/>
                                <Text style={{ paddingTop: 5, textAlign: "center", fontWeight: '800'}}>{product.name}</Text>
                                <Text style={{ textAlign: "center", color: 'red', fontSize: 10, marginBottom:50}}>{product.price}</Text>

                                </TouchableOpacity>
                            </Card>
                        )
                    })
                    }
                </View>
            </ScrollView>
        )
    }
    if ( id == 4 ){
        return (
            <ScrollView>
                <View style={styles.parent}>

                    <Text style={styles.titleText}>Eye Care</Text>
                    {
                    category4.map((product, index) => {
                        return (
                            
                            <Card  key={index} style={styles.child}>
                                <TouchableOpacity onPress={() => navigation.navigate('Detail', 
                                { 
                                    id: product.id,
                                    name: product.name,
                                    price: product.price,
                                    img: product.img
                                })}>

                                <Image source={{uri: product.img}} style={{ width: '100%', height: 150 }}/>
                                <Text style={{ paddingTop: 5, textAlign: "center", fontWeight: '800'}}>{product.name}</Text>
                                <Text style={{ textAlign: "center", color: 'red', fontSize: 10, marginBottom:50}}>{product.price}</Text>

                                </TouchableOpacity>
                            </Card>
                        )
                    })
                    }
                </View>
            </ScrollView>
        )
    }
}   




const styles = StyleSheet.create({
    titleText: {
      width: "100%",
      textAlign: "center",
      paddingBottom: 15,
      paddingTop: 10,
      fontWeight: "700",
      fontSize: 25,
      backgroundColor: '#0f213a',
      color: '#fff',
      marginBottom: 20
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
    },
    parent: {
        width: '100%', 
        flexDirection: 'row', 
        flexWrap: 'wrap'
    },
    child: {
        width: '48%', 
        margin: '1%', 
        aspectRatio: 1,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
        elevation: 10
    }
  });
export default PLP