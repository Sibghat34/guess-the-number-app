import { Text, View, StyleSheet, Alert } from "react-native";
import { useState, useEffect } from "react";
import Title from "../components/ui/Title";
import NumberConatiner from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minNumber = 1;
let maxNumber = 100;

function GameScreen({ userNumber, onGameEnd }) {
  const initialGuess = generateRandomBetween(minNumber, maxNumber, userNumber);
  const [currentguess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    if (currentguess === userNumber){
        onGameEnd();
    }
  }, [currentguess, userNumber, onGameEnd]);

  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentguess < userNumber) ||
      (direction === "greater" && currentguess > userNumber)
    ) {
      Alert.alert("Don't lie", "You know that this is wrong..!", [{text: "Sorry!", style: 'cancel'},]);
      return;
    }
    if (direction === "lower") {
      maxNumber = currentguess;
    } else {
      minNumber = currentguess + 1;
    }
    const newGuessNumber = generateRandomBetween(
      minNumber,
      maxNumber,
      currentguess
    );
    setCurrentGuess(newGuessNumber);
  }

  return (
    <View style={styles.screen}>
      <Title>Oppenent's Guess</Title>
      <NumberConatiner>{currentguess}</NumberConatiner>
      <View>
        <Text>higher and lower + -</Text>
        <View>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
            -
          </PrimaryButton>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
            +
          </PrimaryButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 50,
  },
});

export default GameScreen;
