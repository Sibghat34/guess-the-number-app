import { View, TextInput, StyleSheet, Alert, KeyboardAvoidingView, useWindowDimensions, ScrollView } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Color from "../utils/colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import { useState } from "react";

function StartGameScreen({ onNumberInput }) {
  const [input, setInput] = useState("");
  const {width, height} = useWindowDimensions();

  function inputHandler(inputText) {
    setInput(inputText);
  }

  function restInputHnadler() {
    setInput("");
  }

  function confirmInputHandler() {
    const choosenNumber = parseInt(input);

    if (isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99) {
      Alert.alert("Invalid number", "Number must be between 1 and 99", [
        { text: "Okay", style: "cancel", onPress: restInputHnadler },
      ]);
      return;
    }
    onNumberInput(choosenNumber);
  }

  const marginTopDistance = height < 380 ? 30 : 100;

  return (
    <ScrollView style= {styles.screen}>
    <KeyboardAvoidingView style= {styles.screen} behavior="position">
    <View style={[styles.rootContainer, {marginTop: marginTopDistance}]}>
      <Title>Guess My Number</Title>
      <Card>
        <InstructionText>Enter Number</InstructionText>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          onChangeText={inputHandler}
          value={input}
        />
        <View style={styles.buttonsConatiner}>
          <View style={styles.buttonConatiner}>
            <PrimaryButton onPress={restInputHnadler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonConatiner}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
    </KeyboardAvoidingView>
    </ScrollView>
  );
};

// const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    // marginTop: deviceHeight <380 ? 30 : 100,
    alignItems: "center",
  },
 
  numberInput: {
    height: 40,
    width: 150,
    borderBottomColor: Color.accent500,
    borderBottomWidth: 1,
    borderRadius: 15,
    color: Color.accent500,
    marginVertical: 10,
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
 
  buttonsConatiner: {
    flexDirection: "row",
  },
  buttonConatiner: {
    flex: 1,
  },
});

export default StartGameScreen;
