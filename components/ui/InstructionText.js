import { Text, StyleSheet } from "react-native";
import Color from "../../utils/colors";

function instructionText({ children, style }) {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  instructionText: {
    color: Color.accent600,
    fontSize: 20,
  },
});

export default instructionText;
