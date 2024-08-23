import { StyleSheet, Text, View } from "react-native";
import { defaultStyles } from "../styles/main";

export const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={[defaultStyles.white, defaultStyles.heading2, styles.title]}>
        Voyag'r
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    paddingTop: 40,
    paddingVertical: 16,
    backgroundColor: "#09A8D4",
  },
  title: {
    width: "100%",
    textAlign: "center",
  },
});
