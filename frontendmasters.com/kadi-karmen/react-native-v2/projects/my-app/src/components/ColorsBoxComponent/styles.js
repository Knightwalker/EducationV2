import { StyleSheet } from "react-native";

const styles = {
    page: StyleSheet.create({
        colorView: {
            padding: 10,
            width: "100%",
            alignItems: "center",
            marginBottom: 10
        },
        colorText: {
            fontSize: 18,
            fontWeight: "bold",
            color: "white"
        }
    }),
    colors: StyleSheet.create({
        cyan: {
            backgroundColor: "#2aa198"
        },
        blue: {
            backgroundColor: "#268bd2"
        },
        magenta: {
            backgroundColor: "#d33682"
        },
        orange: {
            backgroundColor: "#cb4b16"
        }
    })
}

export default styles;