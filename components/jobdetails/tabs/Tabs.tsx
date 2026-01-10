import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";

import { tabButtonprops, tabsProps } from "@/type";

import { SIZES } from "@/constants";
import styles, { getBtnStyle, getBtnTextStyle } from "./tabs.style";

function TabButton({ name, activeTab, onHandleSearchType }: tabButtonprops) {
  return (
    <TouchableOpacity
      style={getBtnStyle(name, activeTab)}
      onPress={onHandleSearchType}
    >
      <Text style={getBtnTextStyle(name, activeTab)}>{name}</Text>
    </TouchableOpacity>
  );
}

const Tabs = ({ tabs, activeTab, setActiveTab }: tabsProps) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={tabs}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TabButton
            name={item}
            activeTab={activeTab}
            onHandleSearchType={() => setActiveTab(item)}
          />
        )}
        contentContainerStyle={{ columnGap: SIZES.small / 2 }}
        keyExtractor={(item) => item}
      />
    </View>
  );
};

export default Tabs;
