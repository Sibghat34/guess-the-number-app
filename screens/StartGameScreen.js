import { View, TextInput, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
      />
      <View style= {styles.buttonsConatiner}>
        <View style= {styles.buttonConatiner}>
        <PrimaryButton>Reset</PrimaryButton>
        </View>
        <View style= {styles.buttonConatiner}>
        <PrimaryButton>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 200,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: "#451952",
    elevation: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.5,
  },
  numberInput: {
    height: 40,
    width: 150,
    borderBottomColor: "#F39F5A",
    borderBottomWidth: 1,
    borderRadius: 15,
    color: "#F39F5A",
    marginVertical: 10,
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
  buttonsConatiner:{
    flexDirection: "row",
  },
  buttonConatiner: {
    flex: 1,
  }
});

export default StartGameScreen;
