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

const Detail = ({ route, navigation }) => {
    const { id, name, price, img } = route.params
    const [count, setCount] = useState(0);

  return (
    <ScrollView>
        <Text style={styles.titleText}>Cart Page</Text>
        <View style={{ flexDirection: 'column'}}>
            <View style={{ paddingVertical: 5, paddingHorizontal: 10, borderBottomColor: "#000", borderBottomWidth: 1}}>
                <Text style={{ fontSize: 25}}>Nama :{name}</Text>
                <Text style={{ fontSize: 18}}>Harga : {price}</Text>
                <Text style={{ fontSize: 18}}>Qty : 2</Text>
            </View>
            <View style={{ paddingVertical: 5, paddingHorizontal: 10, borderBottomColor: "#000", borderBottomWidth: 1}}>
                <Text style={{ fontSize: 25}}>Nama : SKIN CARE CAPSULES</Text>
                <Text style={{ fontSize: 18}}>Harga : Rp 1.640.000</Text>
                <Text style={{ fontSize: 18}}>Qty : 1</Text>
            </View>
            <View style={{ marginTop: 100}}>
                <Text style={{textAlign:'center'}}>Total Price: 1.640.000</Text>
                <Text style={{textAlign:'center', marginBottom:30}}>Total Qty: 3</Text>
            <Button
            color="#0f213a"
            title="Add to cart"
            onPress={() => alert('Checkout Berhasil!')}  
          />
            </View>
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
export default Detail