import {
  Image,
  View,
  StyleSheet,
  Text,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import Title from "../components/ui/Title";
import Color from "../utils/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

function EndGameScreen({ roundsNumber, userNumber, onStartNewGame }) {
  const { width, height } = useWindowDimensions();

  let imageSize = 300;
  let marginTop = 100;

  if (width > 380) {
    imageSize = 200;
    marginTop = 30;
  }

  if (height < 350) {
    imageSize = 200;
    marginTop = 30;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };
  
  const mainContainerStyle = {
    marginTop: marginTop,
  };

  return (
    <ScrollView style={styles.screen}>
      <View style={[styles.mainContainer, mainContainerStyle]}>
        <Title>GAME OVER....!</Title>
        <View style={[styles.imageContainer, imageStyle]}>
          <Image
            style={styles.image}
            source={require("../assets/images/game-over.jpg")}
          />
        </View>
        <Text style={styles.summeryText}>
          Your Phone Uses{" "}
          <Text style={styles.heighlightText}>{roundsNumber}</Text> Rounds To
          Guess <Text style={styles.heighlightText}>{userNumber}</Text> Number
        </Text>
        <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
      </View>
    </ScrollView>
  );
}

// const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },
  imageContainer: {
    marginTop: 20,
    // width: deviceWidth < 30 ? 200 : 300,
    // height: deviceWidth < 30 ? 200 : 300,
    // borderRadius: deviceWidth < 350 ? 150 : 200,
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
  screen: {
    flex: 1,
  },
});

export default EndGameScreen;
