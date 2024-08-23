import { FlatList, StyleSheet, Text, View } from "react-native";
import { defaultStyles } from "../styles/main";
import type { CardProps } from "./TravelCard";
import { TravelCard } from "./TravelCard";
const trendingsData: CardProps[] = [
  {
    img: require("../assets/maldives.png"),
    title: "Maldives",
    price: 7239,
    liked: true,
  },
  {
    img: require("../assets/autriche.png"),
    title: "Autriche",
    price: 2356,
    liked: false,
  },
  {
    img: require("../assets/chine.png"),
    title: "Chine",
    price: 4529,
    liked: false,
  },
];

export const Trendings = () => {
  return (
    <View style={styles.container}>
      <Text style={[defaultStyles.heading5, defaultStyles.black]}>
        Populaires
      </Text>
      <View>
        <FlatList
          data={trendingsData}
          numColumns={trendingsData.length}
          columnWrapperStyle={{ justifyContent: "space-between" }}
          renderItem={({ item }) => (
            <TravelCard
              img={item.img}
              title={item.title}
              price={item.price}
              liked={item.liked}
            ></TravelCard>
          )}
        ></FlatList>
      </View>
    </View>
  );
};

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
