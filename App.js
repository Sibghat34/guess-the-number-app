import { ImageBackground, StyleSheet, SafeAreaView } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import EndGameScreen from "./screens/EndGameScreen";
import Color from "./utils/colors"

export default function App() {

  const [userInput, setUserInput] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);

  function pickedUserInputHandler(inputedNumber){
    setUserInput(inputedNumber);
    setGameIsOver(false);
  };

  function gameEndHandler(){
    setGameIsOver(true);
  };

  let screen = <StartGameScreen onNumberInput= {pickedUserInputHandler} />;

  if (userInput){
    screen = <GameScreen userNumber={userInput} onGameEnd= {gameEndHandler}/>
  }

  if (gameIsOver && userInput){
    screen = <EndGameScreen/>;
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
