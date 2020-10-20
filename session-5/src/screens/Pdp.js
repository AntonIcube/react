import React, { useState, useEffect } from 'react';
import {
  ScrollView, View, Text, TextInput, Button, Image, Title, ActivityIndicator, TouchableHighlight, StyleSheet
} from 'react-native';
import {gql, useQuery} from '@apollo/client';
import { cartItemsVar } from "../apollo/resolver";


const Product_Detail = gql`
  query Product($id: String!) {
		products(filter: { url_key: {eq: $id}}){
      items{
        id
        url_key
        name
        stock_status
        image{
          url
        }
        sku
        description{
          html
        }
        price_range{
          minimum_price{
            final_price{
              value
              currency
            }
          }
        }
      }
    }
  }
`;


const Detail = ({ route, navigation }) => {
  const { id, name, price, img } = route.params
  const [count, setCount] = useState(0);
  
  const response = useQuery(Product_Detail, {
    variables: { id: id },
  });

  const {loading, error, data } = response;

  if (loading) return <><ActivityIndicator size="large" /><Text>Loading ...</Text></>;

  const item = data.products.items;
  console.log('PDP id:');
  console.log(item);
  console.log('local state return');

  // local state apollo
  const cartItems = cartItemsVar();
  const itemCart = [
    {
      id: item[0].id,
      name: item[0].name,
      price: item[0].price_range.minimum_price.final_price.value.toFixed(2),
      img: item[0].image.url,
      qty: count,
      isDiscount: false
    }
  ];
  //
  console.log('start return');
  return (
    <ScrollView vertical>
      <View style={{ padding: 20 }}>
        <Image source={{uri: item[0].image.url}} style={{ width: '100%', height: 350 }}/>
        <Text style={{ fontWeight: "bold", fontSize: 30, textAlign: 'center' }}>{item[0].name}</Text>
        <Text style={{ fontWeight: "500", fontSize: 10, color: "#333" }}>{item[0].stock_status}</Text>
        <Text style={{ fontWeight: "600", fontSize: 10, color: "#333" }}>SKU : # {item[0].sku}</Text>
        <Text style={{ fontWeight: "700", fontSize: 18, color: "#0f213a", textAlign: 'center'  }}>{item[0].price}</Text>

        <View style={{ flexDirection: 'row', paddingVertical: 10 }}>
          <Text style={{ padding: 5 }}>Qty</Text>

          <TouchableHighlight onPress={() => setCount(count - 1)}>
            <View style={styles.buttonQty}>
              <Text>-</Text>
            </View>
          </TouchableHighlight>

          <TextInput style={{ borderColor: "#000000", borderWidth: 1, padding: 5, textAlign: "center" }}>{count} </TextInput>

          <TouchableHighlight onPress={() => setCount(count + 1)}>
            <View style={styles.buttonQty}>
              <Text>+</Text>
            </View>
          </TouchableHighlight>
        </View>
       
        <Button
            color="#0f213a"
            title="Add to cart"
            onPress={() => {
              if (count < 1 ){
                alert("Qty tidak boleh kurang dari 1")
              }else{
                cartItemsVar([...cartItems, ...itemCart]);
                navigation.navigate('Cart');
              }
            }}    
          />
        <Text style={{ fontWeight: "600", fontSize: 18, marginVertical: 10 }}>Detail</Text>
        <View style={{ borderTopColor: "#000000", borderTopWidth: 1 }}>
          <Text>Our No.1 bestselling cleanser, now with a delicate and soothing English Rose Oleo Extract, perfect for sensitive skin. This soothing balm melts into a rich cleansing oil to dissolve make-up and impurities on the skin.

Upon contact with water, it emulsifies to a hydrating milk that easily rinses off, creating an exceptional cleansing experience. The mineral oil-free formula also infuses Rose and Mimosa waxes with Elderberry, Starflower and Optimega Oils.

It nourishes the skin's lipid barrier, soothing it with hydration, leaving the skin feeling smooth and looking radiant.</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  buttonQty: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    paddingVertical: 10,
    paddingHorizontal: 15
  },
  countContainer: {
    alignItems: "center",
    padding: 10
  },
  countText: {
    color: "#FF00FF"
  }
});

export default Detail