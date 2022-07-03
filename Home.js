
import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import AutoScrollComponent from "./src/AutoScrollComponent";
import CardComponent from "./src/CardComponent";
const App = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <AutoScrollComponent {...props}/>
      <CardComponent {...props}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
