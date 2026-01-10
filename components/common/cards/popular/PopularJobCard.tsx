import { PopularJobcardProps } from "@/type";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles, {
  container,
  jobName,
  logoContainer,
} from "./popularjobcard.style";
import { checkImageURL } from "@/utils";

const PopularJobCard = ({
  item,
  selectedJob,
  handleCardPress,
}: PopularJobcardProps) => {
  return (
    <TouchableOpacity
      style={container(selectedJob, item)}
      onPress={() => handleCardPress(item)}
    >
      <TouchableOpacity style={logoContainer(selectedJob, item)}>
        <Image
          source={{
            uri: checkImageURL(item.employer_logo)
              ? item.employer_logo
              : "https://imgs.search.brave.com/8GvqyQPdAovpw-0UlLc5sE952T-5MrRksf9c0ax1Gic/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMDYv/OTg2LzE3Mi9zbWFs/bC9tb2Rlcm4tY29s/b3ItaW5pdGlhbC1s/ZXR0ZXItbi1oZXhh/Z29uLWxvZ28tZm9y/LXlvdXItYnVzaW5l/c3Mtb3ItY29tcGFu/eS1mcmVlLXZlY3Rv/ci5qcGc",
          }}
          style={styles.logoImage}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1}>
        {item.employer_name}
      </Text>

      <View style={styles.infoContainer}>
        <Text style={jobName(selectedJob, item)} numberOfLines={1}>
          {item.job_title}
        </Text>
        <Text style={styles.location}>{item.job_country}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PopularJobCard;
