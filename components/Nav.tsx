import { CircleDollarSign, Home, Map, User } from "lucide-react-native";
import { StyleSheet, View } from "react-native";
import { defaultStyles } from "../styles/main";

const Nav = () => {
  return (
    <View style={styles.container}>
      <Home color={defaultStyles.clearWhite.color}></Home>
      <Map color={defaultStyles.black.color}></Map>
      <CircleDollarSign color={defaultStyles.black.color}></CircleDollarSign>
      <User color={defaultStyles.black.color}></User>
    </View>
  );
};

export default Nav;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 20,
    justifyContent: "space-between",
    marginTop: 24,
    marginHorizontal: 20,
    backgroundColor: defaultStyles.blue.color,
    borderRadius: 16,
  },
});
