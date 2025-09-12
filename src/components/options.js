import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useNavigation } from "@react-navigation/native";

export default function Options ({deleteLast})
{
    const navigation = useNavigation()
    return (
        <View style = {styles.container}>
        <View style = {styles.row}>
           <TouchableOpacity onPress={() => navigation.navigate("CurrencyScreen")}>
                <Text style = {styles.button}> CURRENCY </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={deleteLast}> 
                <Text style = {styles.button}>DEL</Text>
            </TouchableOpacity>
        </View>
        </View>
    );
}

const styles = StyleSheet.create ({
    container:{
        flex: 1,
        justifyContent: 'flex-end',
    },
    row: {
        backgroundColor: 'black',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },

    button: {
        fontWeight: 'bold',
        backgroundColor: 'black',
        color: 'white',
        fontSize: 20,
    },
})
