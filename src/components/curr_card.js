import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function CurrCard() {
  return (
    <View style={styles.container}>

      <View style={styles.column}>
       
        <View style={styles.card}>
          <Text style={styles.label}>From</Text>
          <TouchableOpacity><Text style={styles.curr}>USD</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.num}>100</Text></TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Text style={styles.label}>To</Text>
         <TouchableOpacity><Text style={styles.curr}>INR</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.num}>8000</Text></TouchableOpacity>
        </View>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    padding: 20,
  },
  column: {
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "stretch",
    gap: 20,
  },
  card: {
    backgroundColor: "#1e1e1e",
    borderRadius: 12,
    padding: 20,
  },
  label: {
    color: "grey",
    fontSize: 14,
    marginBottom: 8,
  },
  curr: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  num: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#00ffae",
  },
});
