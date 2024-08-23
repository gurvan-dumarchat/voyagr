import { Search } from "lucide-react-native";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { defaultStyles } from "../styles/main";

const Destination = () => {
  return (
    <View style={styles.container}>
      <Text style={[defaultStyles.black, defaultStyles.heading5]}>
        Choisissez votre destination
      </Text>
      <View style={styles.searchBar}>
        <Search size={16} color={defaultStyles.gray.color}></Search>
        <TextInput
          placeholder="Recherche"
          style={[defaultStyles.base, defaultStyles.gray]}
        ></TextInput>
      </View>
    </View>
  );
};

export default Destination;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    display: "flex",
    gap: 10,
  },
  searchBar: {
    display: "flex",
    flexDirection: "row",
    padding: 4,
    gap: 10,
    backgroundColor: defaultStyles.clearWhite.color,
    borderRadius: 8,
    overflow: "hidden",
    alignItems: "center",
  },
});
