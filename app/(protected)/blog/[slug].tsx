import { useLocalSearchParams } from "expo-router";
import React from "react";
import { View, Text } from "react-native";

export default function Page() {
  const local = useLocalSearchParams();

  return (
    <View>
      <Text> Welcome to blog, page:{local?.slug ?? ""} </Text>
    </View>
  );
}
