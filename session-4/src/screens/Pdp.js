import React, { useState, useEffect } from 'react';
import {
  ScrollView, View, Text, TextInput, Button, Image
} from 'react-native';

const Detail = ({ route, navigation }) => {
  const { id, name, price, img } = route.params
  const [count, setCount] = useState(0);

  return (
    <ScrollView vertical>
      <View style={{ padding: 20 }}>
        <Image source={{uri: img}} style={{ width: '100%', height: 350 }}/>
        <Text style={{ fontWeight: "bold", fontSize: 30, textAlign: 'center' }}>{name}</Text>
        <Text style={{ fontWeight: "600", fontSize: 18, color: "#0f213a", textAlign: 'center'  }}>{price}</Text>
        <View style={{ flexDirection: 'row', paddingVertical: 10, alignSelf: 'center' }}>
          <Text style={{ padding: 5 }}>Qty</Text>
          <TextInput style={{ borderColor: "#000000", borderWidth: 1, padding: 5 }}>1</TextInput>
        </View>
        <Button
            color="#0f213a"
            title="Add to cart"
            onPress={() => navigation.navigate('Cart',{produt_id:route})}  
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

export default Detail