import { ImageBackground, StyleSheet, SafeAreaView } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";

import GameScreen from "./screens/GameScreen";
import EndGameScreen from "./screens/EndGameScreen";
import Color from "./utils/colors"

export default function App() {

  const [userInput, setUserInput] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

 
  function pickedUserInputHandler(inputedNumber){
    setUserInput(inputedNumber);
    setGameIsOver(false);
  };

  function gameEndHandler(numberOfRounds){
    setGameIsOver(true);
    setGuessRounds(numberOfRounds);
  };

  function startNewGameHandler(){
    setUserInput(null);
    setGuessRounds(0);
  };

  let screen = <StartGameScreen onNumberInput= {pickedUserInputHandler} />;

  if (userInput){
    screen = <GameScreen userNumber={userInput} onGameEnd= {gameEndHandler}/>
  }

  if (gameIsOver && userInput){
    screen = <EndGameScreen roundsNumber= {guessRounds} userNumber= {userInput} onStartNewGame= {startNewGameHandler} />;
  }


  return (
    <>
    <StatusBar style="light"/>
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
    </>
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
