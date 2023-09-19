import { View, StyleSheet, Dimensions } from "react-native";
import Color from "../../utils/colors";


function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
};

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
    card: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: deviceWidth < 350 ? 18 : 25,
        marginHorizontal: 10,
        paddingHorizontal: 10,
        borderRadius: 10,
        backgroundColor: Color.priimary800,
        elevation: 10,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.5,
    },
});

export default Card;
