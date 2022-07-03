import React, { useState } from "react";
import { SafeAreaView, Text } from "react-native";

const PageNotFound = (props) => {
  let { item: { id } = {} } = props?.route?.params;
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Text
        style={{ fontSize: 15, fontWeight: "bold" }}
      >{`Page Not Found ${id}`}</Text>
    </SafeAreaView>
  );
};

export default PageNotFound;
