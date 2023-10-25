import { FC } from "react";
import { CatBreed } from "../../apis/cats-api";
import { Button, Card } from "react-native-paper";
import * as WebBrowser from "expo-web-browser";

export type BreedListItemProps = {
  readonly breed: CatBreed;
};

export const BreedListItem: FC<BreedListItemProps> = ({ breed }) => {
  return (
    <Card>
      <Card.Title
        title={`${breed.name} - ${breed.origin}`}
        subtitle={breed.temperament}
      />
      <Button onPress={() => WebBrowser.openBrowserAsync(breed.wikipedia_url)}>
        {"More info 🔗"}
      </Button>
    </Card>
  );
};
