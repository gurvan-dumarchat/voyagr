import { StyleSheet, View } from "react-native";
import Destination from "./components/Destination";
import Favorites from "./components/Favorites";
import { Header } from "./components/Header";
import Nav from "./components/Nav";
import { Trendings } from "./components/Trendings";
import { defaultStyles } from "./styles/main";

export default function App() {
  return (
    <View style={styles.global}>
      <Header></Header>
      <Trendings></Trendings>
      <Destination></Destination>
      <Favorites></Favorites>
      <Nav></Nav>
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
