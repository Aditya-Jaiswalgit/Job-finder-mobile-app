import React from "react";
import { TouchableOpacity, Image } from "react-native";

import { ScreenHeaderBtnProps } from "@/type";
import styles, { btnImg } from "./screenheader.style";

const ScreenHeaderBtn = ({ iconUrl, dimension }: ScreenHeaderBtnProps) => {
  return (
    <TouchableOpacity style={styles.btnContainer}>
      <Image
        source={iconUrl}
        resizeMode="cover"
        style={btnImg(dimension)} // ✅ no need to cast anymore
      />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
