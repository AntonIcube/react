import React, {useState} from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    TextInput,
    Button,
    Image,
    Title
  } from 'react-native';
import { gql, useQuery } from "@apollo/client";
export const GET_CART_ITEMS = gql`
  query GetCartItems {
  cartItems @client
  }
`;

const Cart = () => {
  const { data } = useQuery(GET_CART_ITEMS);
  const product = data.cartItems;

  return (
    <ScrollView>
        <Text style={styles.titleText}>Cart Page</Text>
        {product.map((item, key) => {
        return (
          <View key={key}>
              <View style={{ flexDirection: 'column'}}>
                  <View style={{ paddingVertical: 5, paddingHorizontal: 10, borderBottomColor: "#000", borderBottomWidth: 1}}>
                      <Text style={{ fontSize: 25}}>Nama : {item.name}</Text>
                      <Text style={{ fontSize: 18}}>Harga : IDR {item.price}</Text>
                      <Text style={{ fontSize: 18}}>Qty : {item.qty}</Text>
                  </View>
              </View>
          </View>
          )     
        })}
        <View style={{ marginTop: 100, marginBottom: 10}}>
            <Button
            color="#0f213a"
            title="Add to cart"
            onPress={() => alert('Checkout Berhasil!')}  
          />
            </View>
    </ScrollView>
  )
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
    }
  });
export default Cart