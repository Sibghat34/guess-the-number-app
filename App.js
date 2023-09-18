import { ImageBackground, StyleSheet, SafeAreaView } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import Color from "./utils/colors"

export default function App() {

  const [userInput, setUserInput] = useState();

  function pickedUserInputHandler(inputedNumber){
    setUserInput(inputedNumber);
  };

  let screen = <StartGameScreen onNumberInput= {pickedUserInputHandler} />;

  if (userInput){
    screen = <GameScreen userNumber={userInput}/>
  }

  return (
    <LinearGradient colors={[Color.priimary800, Color.accent500]} style={styles.rootScreen}>
      <ImageBackground
        source={require("./assets/images/background1.jpg")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style= {styles.rootScreen}>
        {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.05,
  },
});
