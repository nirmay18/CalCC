import React from "react";
import { StyleSheet, View } from "react-native";
import Options from "./src/components/options";
import ButtonGrid from "./src/components/buttongrid";
import Display from "./src/components/display";
import useBrain from "./src/components/brain";
 


export default function App() 
{
  const {
    expression,
    result,
    handleNumberPress,
    handleOperatorPress,
    clear_entry,
    delete_last,
    clear_all,
    calculate,
  } = useBrain();

  return (
    <View style={styles.container}>
      <View style={styles.displayContainer}>
        <Display expression={expression} result = {result}/>
      </View>
        
        <View style = {styles.options}>
        <Options deleteLast = {delete_last}/>
        </View>

      <View style={styles.divider}>
      </View>

      <View style={{ height: 20 }} />

      <View style={styles.buttonGridContainer}>
        <ButtonGrid
          onNumberPress={handleNumberPress}
          onOperatorPress={handleOperatorPress}
          onAllClear={clear_all}
          onClear={clear_entry}
          onDelete={delete_last}
          onEqual={calculate}  
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  displayContainer: {
    minHeight: "35%",
  },
  options: {
    backgroundColor: 'black',
    flex: 0.15,
  },
  divider: {
    height: 4,
    backgroundColor: "grey",
    width: "100%",
  },
  buttonGridContainer: {
    flex: 0.55,
    alignItems: "center",
  },
});
