import {Text, StyleSheet} from "react-native";
import Color from "../../utils/colors";

function title({children}){
    return(
        <Text style= {styles.title}>{children}</Text>

    );
};

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        padding: 10,
        fontSize: 20,
        fontWeight: "bold",
        color: Color.accent700,
        borderWidth: 1,
        borderColor: Color.accent700,
      },
});

export default title;