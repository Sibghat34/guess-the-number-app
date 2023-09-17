import { ImageBackground, StyleSheet } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";

export default function App() {

  const [userInput, setUserInput] = useState();

  function pickedUserInputHandler(inputedNumber){
    setUserInput(inputedNumber);
  };

  let screen = <StartGameScreen onNumberInput= {pickedUserInputHandler} />;

  if (userInput){
    screen = <GameScreen/>
  }

  return (
    <LinearGradient colors={["#451952", "#F39F5A"]} style={styles.rootScreen}>
      <ImageBackground
        source={require("./assets/images/background.webp")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        {screen}
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.1,
  },
});
