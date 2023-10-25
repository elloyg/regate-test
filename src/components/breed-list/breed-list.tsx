import { FC } from "react";
import { FlatList } from "react-native";
import { Cat } from "../../apis/cats-api";
import styled from "styled-components/native";
import { BreedListItem } from "./breed-list-item";
import { Card, Text } from "react-native-paper";

const ItemSeparator = styled.View`
  height: 8px;
`;

const Title = styled(Text).attrs({ variant: "headlineSmall" })`
  margin-top: 16px;
  margin-bottom: 8px;
`;

export type BreedListProps = {
  readonly cat: Cat;
};

export const BreedList: FC<BreedListProps> = ({ cat }) => {
  return (
    <FlatList
      data={cat.breeds}
      renderItem={({ item }) => <BreedListItem breed={item} />}
      ItemSeparatorComponent={() => <ItemSeparator />}
      contentContainerStyle={{ paddingHorizontal: 16 }}
      ListHeaderComponent={
        <>
          <Card.Cover source={{ uri: cat.url }} />
          <Title>{"His Breeds"}</Title>
        </>
      }
    />
  );
};
