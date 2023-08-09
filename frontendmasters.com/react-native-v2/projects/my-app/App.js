import { SafeAreaView, StyleSheet } from "react-native";

// Components
import ColorsBoxComponent from "./src/components/ColorsBoxComponent";

const App = () => {
    return (
        <SafeAreaView style={styles.safeAreaView}>
            <ColorsBoxComponent />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeAreaView: {
        height: "100%",
        backgroundColor: "#fbefe6",
    }
});

export default App;