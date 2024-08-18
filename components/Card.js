import { StyleSheet } from "react-native";
import { View } from "react-native";

export default function Card(props) {
    return (
        <View style={styles.card}>
            <View style={styles.cardContent}>
                {props.children}
            </View>
        </View>
    );

}


const styles = StyleSheet.create({
    card: {
        shadowColor: "#333",
        backgroundColor:"#fff",
        shadowOffset: {
            width: 1,
            height: 2,
        },
        shadowOpacity: 0.25,
        borderRadius: 6,
        shadowRadius: 2,
        marginHorizontal:6,
        marginVertical:6,

        elevation: 3,
    },
    cardContent: {
        marginHorizontal:18,
        marginVertical:10
    }
})