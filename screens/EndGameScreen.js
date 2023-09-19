import { Image, View, StyleSheet, Text } from "react-native";
import Title from "../components/ui/Title";
import Color from "../utils/colors";

function EndGameScreen() {
  return (
    <View style= {styles.mainContainer}>
      <Title>GAME OVER....!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/game-over.jpg")}
        />
      </View>
      <Text>Your Phone Uses X Rounds To Guess Y Number</Text>
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
});

export default EndGameScreen;
