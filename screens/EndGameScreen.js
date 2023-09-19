import { Image, View, StyleSheet, Text } from "react-native";
import Title from "../components/ui/Title";
import Color from "../utils/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

function EndGameScreen({roundsNumber, userNumber, onStartNewGame}) {
  return (
    <View style={styles.mainContainer}>
      <Title>GAME OVER....!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/game-over.jpg")}
        />
      </View>
      <Text style={styles.summeryText}>
        Your Phone Uses <Text style={styles.heighlightText}>{roundsNumber}</Text> Rounds To
        Guess <Text style={styles.heighlightText}>{userNumber}</Text> Number
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    marginTop: 20,
    width: 300,
    height: 300,
    borderRadius: 200,
    borderWidth: 2,
    borderColor: Color.accent700,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summeryText: {
    color: Color.primary500,
    fontSize: 16,
    textAlign: "center",
    marginVertical: 30,
  },
  heighlightText: {
    fontWeight: "bold",
    color: Color.priimary800,
  },
});

export default EndGameScreen;
