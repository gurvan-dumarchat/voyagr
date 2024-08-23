import { StyleSheet, View } from "react-native";
import { Header } from "./components/Header";

export default function App() {
  return (
    <View>
      <Header></Header>
    </View>
  );
}

export const defaultStyles = StyleSheet.create({
  black: {
    color: "#171717",
  },
  white: {
    color: "#EBEBEB",
  },
  heading2: {
    fontSize: 48.83,
    fontWeight: "bold",
  },
  heading5: {
    fontSize: 25,
    fontWeight: "medium",
  },
});
