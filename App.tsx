import { StyleSheet, View } from "react-native";
import { Header } from "./components/Header";
import { Trendings } from "./components/Trendings";
import { defaultStyles } from "./styles/main";

export default function App() {
  return (
    <View style={styles.global}>
      <Header></Header>
      <Trendings></Trendings>
    </View>
  );
}

const styles = StyleSheet.create({
  global: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    backgroundColor: defaultStyles.white.color,
    minHeight: "100%",
  },
});
