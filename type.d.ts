import { ImageSourcePropType } from "react-native";

interface ScreenHeaderBtnProps {
  iconUrl: ImageSourcePropType;
  dimension: string;
  handlePress: any;
}

interface PopularJobcardProps {
  item: any;
  handleCardPress: any;
  selectedJob: any;
}

interface NearbyJobCardProps {
  job: any;
  handleNavigate: any;
}

interface aboutProps {
  info: any;
}

interface specificProps {
  title: string;
  points: any;
}

interface companyprops {
  companyLogo: any;
  jobTitle: any;
  companyName: any;
  location: any;
}

interface Footerprops {
  url: string;
}

interface tabsProps {
  tabs: any;
  activeTab: any;
  setActiveTab: any;
}

interface tabButtonprops {
  name: string;
  activeTab: any;
  onHandleSearchType: any;
}

interface welcomeProps {
  searchTerm: any;
  setSearchTerm: any;
  handleClick: any;
}
