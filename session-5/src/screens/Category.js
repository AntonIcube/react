import React, { useState, useEffect } from 'react';
import {
  StyleSheet, ScrollView, View, Button, Text, Image,FlatList,
  TouchableOpacity,ActivityIndicator, 
} from 'react-native';
import { Card } from 'react-native-paper';
import {gql, useQuery} from '@apollo/client';

const categoryListSchema = gql`
{
  categoryList(filters: { ids: { eq: "2" } }) {
    children {
      id
      name
      url_key
    }
  }
}
`;

const Category = ({ navigation }) => {
  const [categories, setCategories] = useState([]);
  const {loading, error, data} = useQuery(categoryListSchema);
  
  const renderItem = ({item, index}) => {
    
    return (
      <TouchableOpacity key={index} style={styles.categoryList}  onPress={() => navigation.navigate('PLP', { id: item.id })}>
        <Text style={styles.titleText}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  if (loading) return <><ActivityIndicator size="large" /><Text>Loading ...</Text></>;

  return (
    <FlatList
      data={data === undefined ? [] : data.categoryList[0].children}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};



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