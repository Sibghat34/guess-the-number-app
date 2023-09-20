import {
  View,
  StyleSheet,
  Alert,
  useWindowDimensions,
  Dimensions,
  FlatList,
} from "react-native";
import { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import Title from "../components/ui/Title";
import NumberConatiner from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import GuessLogItems from "../components/game/GuessLogItems";

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
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentguess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);
  const { width, height } = useWindowDimensions();

  useEffect(() => {
    if (currentguess === userNumber) {
      onGameEnd(guessRounds.length);
    }
  }, [currentguess, userNumber, onGameEnd]);
  useEffect(() => {
    minNumber = 1;
    maxNumber = 100;
  }, []);

  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentguess < userNumber) ||
      (direction === "greater" && currentguess > userNumber)
    ) {
      Alert.alert("Don't lie", "You know that this is wrong..!", [
        { text: "Sorry!", style: "cancel" },
      ]);
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
    setGuessRounds((previousGuessRounds) => [
      newGuessNumber,
      ...previousGuessRounds,
    ]);
  }

  const guessRoundListLenght = guessRounds.length;

  let content = 
    <>
      <NumberConatiner>{currentguess}</NumberConatiner>
      <Card>
        <InstructionText style={styles.instructionText}>
          Lower or Higher
        </InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonConatiner}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="md-remove" size={20} color="red" />
            </PrimaryButton>
          </View>
          <View style={styles.buttonConatiner}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
              <Ionicons name="md-add" size={20} color="green" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </>
  

  if (width > 500) {
    content = 
      <>
        {/* <InstructionText style={styles.instructionText}>
          Lower or Higher
        </InstructionText> */}
        <View style= {styles.buttonsContainerWide}>
          <View style={styles.buttonConatiner}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="md-remove" size={20} color="red" />
            </PrimaryButton>
          </View>
          <NumberConatiner>{currentguess}</NumberConatiner>
          <View style={styles.buttonConatiner}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
              <Ionicons name="md-add" size={20} color="green" />
            </PrimaryButton>
          </View>
        </View>
      </>
    
  }

  return (
    <View style={styles.screen}>
      <Title>Oppenent's Guess</Title>
      {content}
      <View style={styles.listContainer}>
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => (
            <GuessLogItems
              roundNumber={guessRoundListLenght - itemData.index}
              guess={itemData.item}
            />
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
};

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginTop: deviceWidth > 500 ? 50 : 130,
    alignItems: "center",
  },
  instructionText: {
    marginVertical: 15,
  },
  buttonsContainer: {
    flexDirection: "row",
    marginVertical: 15,
  },
  buttonConatiner: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 12,
  },
  buttonsContainerWide: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default GameScreen;
