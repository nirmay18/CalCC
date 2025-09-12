
import {View, Text, TouchableOpacity, StyleSheet} from "react-native";




export default function ButtonGridCurr({onNumberPress, onDelete, onAllClear}) {
  return (
    <View style={styles.grid}>
      <View style={styles.row}>
      </View>

      <View style={styles.row}>
        <TouchableOpacity onPress={() => onNumberPress("7")} style={styles.button}><Text style={styles.buttonText}>7</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => onNumberPress("8")} style={styles.button}><Text style={styles.buttonText}>8</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => onNumberPress("9")} style={styles.button}><Text style={styles.buttonText}>9</Text></TouchableOpacity>
        <TouchableOpacity onPress={onAllClear} style={styles.operatorbutton}><Text style={styles.buttonText}>AC</Text></TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity onPress={() => onNumberPress("4")} style={styles.button}><Text style={styles.buttonText}>4</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => onNumberPress("5")} style={styles.button}><Text style={styles.buttonText}>5</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => onNumberPress("6")} style={styles.button}><Text style={styles.buttonText}>6</Text></TouchableOpacity>
        <TouchableOpacity onPress={onDelete} style={styles.operatorbutton}><Text style={styles.buttonText}>DEL</Text></TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity onPress={() => onNumberPress("1")} style={styles.button}><Text style={styles.buttonText}>1</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => onNumberPress("2")} style={styles.button}><Text style={styles.buttonText}>2</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => onNumberPress("3")} style={styles.button}><Text style={styles.buttonText}>3</Text></TouchableOpacity>
        <TouchableOpacity style = {styles.operatorbutton}><Text style={styles.buttonText}>GO</Text></TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity onPress={() => onNumberPress("0")} style={styles.button}><Text style={styles.buttonText}>0</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => onNumberPress("00")} style={styles.button}><Text style={styles.buttonText}>00</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => onNumberPress(".")} style={styles.button}><Text style={styles.buttonText}>.</Text></TouchableOpacity>
        <TouchableOpacity style = {styles.blank}></TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "space-around",
    maxHeight: "auto",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    marginBottom: 10,
  },
  operatorbutton: {
    backgroundColor: "#ff9500ff",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 35,
    width: 70,
    height: 70,
    marginHorizontal: 8,
  },
  button: {
    backgroundColor: "#5d5d5dff",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 35,
    width: 70,
    height: 70,
    marginHorizontal: 8,
  },
  buttonText: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
  },
  blank: {
     borderRadius: 35,
    width: 70,
    height: 70,
    marginHorizontal: 8,


  }
});

