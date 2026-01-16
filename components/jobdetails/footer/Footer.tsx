import { Image, Linking, Text, TouchableOpacity } from "react-native";

import { Footerprops } from "@/type";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons } from "../../../constants";
import styles from "./footer.style";

const Footer = ({ url }: Footerprops) => {
  return (
    <SafeAreaView style={styles.container} edges={["bottom"]}>
      <TouchableOpacity style={styles.likeBtn}>
        <Image
          source={icons.heartOutline}
          resizeMode="contain"
          style={styles.likeBtnImage}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.applyBtn}
        onPress={() => Linking.openURL(url)}
      >
        <Text style={styles.applyBtnText}>Apply for job</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Footer;
