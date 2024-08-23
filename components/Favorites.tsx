import { StyleSheet, Text, View } from "react-native";
import { defaultStyles } from "../styles/main";
import type { CardProps } from "./TravelCard";
import TravelMapper from "./TravelMapper";

const favoritesData: CardProps[] = [
  {
    img: require("../assets/maldives.png"),
    title: "Maldives",
    price: 7239,
    liked: true,
  },
  {
    img: require("../assets/suisse.png"),
    title: "Suisse",
    price: 2389,
    liked: true,
  },
  {
    img: require("../assets/ibiza.png"),
    title: "Ibiza",
    price: 798,
    liked: true,
  },
];

const Favorites = () => {
  return (
    <View style={styles.container}>
      <Text style={defaultStyles.heading5}>Favoris</Text>
      <TravelMapper trendingsData={favoritesData}></TravelMapper>
    </View>
  );
};

export default Favorites;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    padding: 10,
  },
  list: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
  },
});
