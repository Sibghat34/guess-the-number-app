import { View, Text, StyleSheet, Dimensions } from "react-native";
import Color from "../../utils/colors";

function GuessLogItems({ roundNumber, guess }) {
  return (
    <View style= {styles.listItem}>
      <Text style= {styles.listText}>{roundNumber}.</Text>
      <Text style= {styles.listText}>Opponent's Guess: {guess}</Text>
    </View>
  );
};

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: Color.primary500,
    borderRadius: 20,
    padding: 10,
    marginVertical: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    // width: '84%',
    elevation: 8,
    shadowColor: "black",
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  listText: {
    color: Color.accent500,
  },
});

export default GuessLogItems;
