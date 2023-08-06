import { Text, View } from "react-native";
import styles from "./styles";

const ColorBoxComponent = ({ colorName, colorHex, variant }) => {
    return (
        <View style={[styles.page.colorView, styles.colors[variant]]}>
            <Text style={styles.page.colorText}>{colorName}: {colorHex}</Text>
        </View>
    )
};

export default ColorBoxComponent;