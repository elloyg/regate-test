import { FC } from "react";
import { Cat } from "../../apis/cats-api";
import { Card } from "react-native-paper";

export type CatListItemProps = {
  readonly cat: Cat;
  readonly onPressCat?: (cat: Cat) => void;
};

export const CatListItem: FC<CatListItemProps> = ({ cat, onPressCat }) => {
  return (
    <Card onPress={() => onPressCat && onPressCat(cat)}>
      <Card.Cover source={{ uri: cat.url }} />
      <Card.Title title={`This cat ID: ${cat.id}`} />
    </Card>
  );
};
