import {Text, StyleSheet} from "react-native";

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
        color: "#ad652a",
        borderWidth: 1,
        borderColor: "#ad652a",
      },
});

export default title;