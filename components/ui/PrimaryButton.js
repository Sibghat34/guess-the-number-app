import { View, Text, Pressable, StyleSheet } from "react-native";
import Color from "../../utils/colors";

function PrimaryButton({ children, onPress }) {
  
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({pressed}) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={onPress}
        android_ripple={{ color: Color.primary600 }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 15,
    margin: 5,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: Color.primary500,
    paddingHorizontal: 10,
    paddingVertical: 6,
    elevation: 5,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});

export default PrimaryButton;
