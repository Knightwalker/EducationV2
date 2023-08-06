import { Text, View, StyleSheet } from "react-native";
import ColorBoxComponent from "./ColorBoxComponent";

const ColorsBoxComponent = () => {
    return (
        <View style={styles.colorsView}>
            <View style={styles.colorView}>
                <Text style={styles.colorsText}>Here are some boxes of different colors</Text>
            </View>
            <ColorBoxComponent colorName="Cyan" colorHex="#2aa198" variant="cyan" />
            <ColorBoxComponent colorName="Blue" colorHex="#268bd2" variant="blue" />
            <ColorBoxComponent colorName="Magenta" colorHex="#d33682" variant="magenta" />
            <ColorBoxComponent colorName="Orange" colorHex="#cb4b16" variant="orange" />
        </View>
    )
};

const styles = StyleSheet.create({
    colorsView: {
        paddingTop: 20,
        paddingLeft: 10,
        paddingRight: 10,
        alignItems: "center",
        flexGrow: 1,
    },
    colorView: {
        padding: 10,
        width: "100%",
        alignItems: "center",
        marginBottom: 10
    },
    colorsText: {
        fontSize: 18,
        fontWeight: "bold"
    },
    colorText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "white"
    }
});

export default ColorsBoxComponent;