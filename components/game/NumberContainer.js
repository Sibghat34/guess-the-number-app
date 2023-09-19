import { View, Text, StyleSheet, Dimensions } from "react-native";
import Color from "../../utils/colors";

function NumberConatiner({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

const deviceWidth = Dimensions.get("window").width; 

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Color.accent500,
    padding: deviceWidth < 350 ? 14 : 20,
    marginTop: deviceWidth < 350 ? 14 : 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: Color.accent500,
    fontSize: deviceWidth < 350 ? 20 : 30,
    fontWeight: "bold",
  },
});

export default NumberConatiner;
