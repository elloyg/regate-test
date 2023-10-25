import { FC } from "react";
import { FlatList } from "react-native";
import { Cat } from "../../apis/cats-api";
import { CatListItem } from "./cat-list-item";
import { ActivityIndicator, Button, Text } from "react-native-paper";
import styled from "styled-components/native";

const ItemSeparator = styled.View`
  height: 16px;
`;

export type CatListProps = {
  readonly cats?: Cat[];
  readonly onPressCat?: (cat: Cat) => void;
  readonly loading?: boolean;
};

export const CatList: FC<CatListProps> = ({ cats, onPressCat, loading }) => {
  return (
    <FlatList
      data={cats}
      renderItem={({ item }) => (
        <CatListItem cat={item} onPressCat={onPressCat} />
      )}
      ListEmptyComponent={
        loading ? (
          <>
            <ActivityIndicator animating />
            <Text>{"Loading your cats 🙀"}</Text>
          </>
        ) : (
          <Text>{"No available cats for now 😿"}</Text>
        )
      }
      ItemSeparatorComponent={() => <ItemSeparator />}
      contentContainerStyle={{ padding: 16 }}
    />
  );
};
