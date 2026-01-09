import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { COLORS, FONT, SHADOWS, SIZES } from "../../../../constants";

// ✅ Static styles
const styles = StyleSheet.create({
  logoImage: {
    width: "70%",
    height: "70%",
  } as ImageStyle,
  companyName: {
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
    color: "#B3AEC6",
    marginTop: SIZES.small / 1.5,
  } as TextStyle,
  infoContainer: {
    marginTop: SIZES.large,
  } as ViewStyle,
  infoWrapper: {
    flexDirection: "row",
    marginTop: 5,
    justifyContent: "flex-start",
    alignItems: "center",
  } as ViewStyle,
  location: {
    fontSize: SIZES.medium - 2,
    fontFamily: FONT.regular,
    color: "#B3AEC6",
  } as TextStyle,
});

export default styles;

export const container = (
  selectedJob: string,
  item: { job_id: string }
): ViewStyle => ({
  width: 250,
  padding: SIZES.xLarge,
  backgroundColor: selectedJob === item.job_id ? COLORS.primary : "#FFF",
  borderRadius: SIZES.medium,
  justifyContent: "space-between",
  ...SHADOWS.medium,
  shadowColor: COLORS.white,
});

export const logoContainer = (
  selectedJob: string,
  item: { job_id: string }
): ViewStyle => ({
  width: 50,
  height: 50,
  backgroundColor: selectedJob === item.job_id ? "#FFF" : COLORS.white,
  borderRadius: SIZES.medium,
  justifyContent: "center",
  alignItems: "center",
});

export const jobName = (
  selectedJob: string,
  item: { job_id: string }
): TextStyle => ({
  fontSize: SIZES.large,
  fontFamily: FONT.medium,
  color: selectedJob === item.job_id ? COLORS.white : COLORS.primary,
});

export const publisher = (
  selectedJob: string,
  item: { job_id: string }
): TextStyle => ({
  fontSize: SIZES.medium - 2,
  fontFamily: FONT.bold,
  color: selectedJob === item.job_id ? COLORS.white : COLORS.primary,
});
