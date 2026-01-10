import { ImageSourcePropType } from "react-native";

interface ScreenHeaderBtnProps {
  iconUrl: ImageSourcePropType;
  dimension: string;
}

interface PopularJobcardProps {
  item: any;
  handleCardPress: any;
  selectedJob: any;
}

interface UseFetchOptions {
  query: string;
  num_pages: number;
}
