import React from 'react';
import { View, Text, StyleSheet } from 'react-native'; 

export default function Display({ expression, result }) {
  return (
    <View style={styles.display}>
      <View>
        <Text style={styles.primary}>{expression}</Text>
      </View>
      <View>
        <Text style={styles.secondary}>{result}</Text>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
    display: {
        flex: 1,
        backgroundColor: "black",
        justifyContent: "flex-end",
        alignItems: "flex-end",
    },

    primary: {
        color: "white",
        fontSize: 30,
        padding: 10,
        fontWeight: "bold",

    },

    secondary: {
        color: "grey",
        fontSize: 20,
        padding: 10,
    },


})

