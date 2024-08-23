import React from "react";
import { FlatList } from "react-native";
import { CardProps, TravelCard } from "./TravelCard";

type TravelMapperProps = {
  trendingsData: CardProps[];
};

const TravelMapper = (props: TravelMapperProps) => {
  return (
    <FlatList
      data={props.trendingsData}
      numColumns={props.trendingsData.length}
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
  );
};

export default TravelMapper;
