import { Heart } from "lucide-react-native";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { defaultStyles } from "../styles/main";

type CardProps = {
  img: any;
  title: string;
  price: number;
  liked: boolean;
};

export const TravelCard = (props: CardProps) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={props.img}
        resizeMode="cover"
        style={styles.image}
      >
        <Heart
          color={
            props.liked ? defaultStyles.red.color : defaultStyles.gray.color
          }
          fill={props.liked ? defaultStyles.red.color : "transparent"}
          style={{ margin: 8 }}
        ></Heart>
      </ImageBackground>
      <View style={styles.content}>
        <Text style={defaultStyles.base}>{props.title}</Text>
        <Text style={[defaultStyles.small, defaultStyles.gray]}>
          {props.price}€/semaine
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 120,
    borderRadius: 8,
    backgroundColor: defaultStyles.clearWhite.color,
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    gap: 4,
  },
  image: {
    width: "100%",
    height: 116,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-end",
  },
  content: {
    padding: 4,
    display: "flex",
    flexDirection: "column",
    gap: 2,
  },
});
