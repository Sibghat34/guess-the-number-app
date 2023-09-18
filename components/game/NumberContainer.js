import { View, Text, StyleSheet } from "react-native";
import Color from "../../utils/colors";

function NumberConatiner({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Color.accent500,
    padding: 20,
    margin: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: Color.accent500,
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default NumberConatiner;
