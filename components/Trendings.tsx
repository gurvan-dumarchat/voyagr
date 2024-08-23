import { StyleSheet, Text, View } from "react-native";
import { defaultStyles } from "../styles/main";
import { TravelCard } from "./TravelCard";

export const Trendings = () => {
  return (
    <View style={styles.container}>
      <Text style={[defaultStyles.heading5, defaultStyles.black]}>
        Populaires
      </Text>
      <View>
        <TravelCard
          img={require("../assets/maldives.png")}
          title="Maldives"
          price={7239}
          liked={true}
        ></TravelCard>
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
});
