/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  StatusBar,
  Platform
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {MyTab} from './src/component/bottomTab';
import {client} from './service';
import {ApolloProvider} from '@apollo/client';

const App = () => {
  return (
    <ApolloProvider client={client}>
        <StatusBar barStyle="dark-content" />
        <NavigationContainer>
          <MyTab />
        </NavigationContainer>
    </ApolloProvider>
  );
};

// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: '#fff',
//   },
//   engine: {
//     position: 'absolute',
//     right: 0,
//   },
//   body: {
//     backgroundColor: '#fff',
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: '#000',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//     color: 'black',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   footer: {
//     color: 'black',
//     fontSize: 12,
//     fontWeight: '600',
//     padding: 4,
//     paddingRight: 12,
//     textAlign: 'right',
//   },
//   box: { 
//     height: 200, 
//   },
//   red: { 
//     backgroundColor: 'red' 
//   },
//   blue: { 
//     backgroundColor: 'blue' 
//   }
// });

export default App;