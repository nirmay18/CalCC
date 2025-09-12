import React from "react";
import {View, Text, StyleSheet} from 'react-native';
import CurrCard from "../components/curr_card";
import ButtonGridCurr from "../components/curr_buttongrid";

export default function Converter() {
return (
    <View style = {styles.container}>
    <View style = {styles.buttoncards}> 
        <CurrCard/>
    </View>
    <View style = {styles.buttongrid}> 
        <ButtonGridCurr/>
    </View>
    </View>
)
}

const styles = StyleSheet.create ({

    container:{
        flex: 1,
        backgroundColor: 'black',
    },
    buttoncards: {
        flex: 0.4,
    },
    buttongrid: {
        flex: 0.5,
    }
})
