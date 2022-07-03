import React, { useState } from "react";
import {
  SafeAreaView,
  FlatList,
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import COLORS from "./colors";
import DATA from "./data";
import CardItem from "./component/Card";
import { downIcon, upIcon } from "../assets";
const CardComponent = (props) => {
  let defaultData = [...DATA].splice(0, 3);
  const [scrollViewWidth, setScrollViewWidth] = useState(0);
  const [data, setAllData] = useState(defaultData);
  const cardWidth = scrollViewWidth * 1;
  const cardDistance = scrollViewWidth - cardWidth;
  const halfCardDistance = cardDistance / 2;
  const renderItem = ({ item, index }) => {
    return (
      <CardItem item={item} index={index} cardWidth={cardWidth} {...props} />
    );
  };
  let check = DATA.length == data.length;
  return (
    <SafeAreaView style={styles.container}>
      {DATA.length > 3 ? (
        <View style={styles.moreContainer}>
          <TouchableOpacity
            onPress={() => {
              if (check) {
                setAllData(defaultData);
              } else {
                setAllData(DATA);
              }
            }}
          >
            <View style={styles.moreStyle}>
              <Image
                style={{ width: 20, height: 20 }}
                source={check ? upIcon : downIcon}
              />
            </View>
            <Text style={{ color: "blue" }}>{check ? "Less" : "More"}</Text>
          </TouchableOpacity>
        </View>
      ) : null}
      <View style={{ height: "100%" }}>
        <FlatList
          style={styles.containerList}
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal
          snapToInterval={cardWidth}
          contentInset={{
            left: halfCardDistance,
            right: halfCardDistance,
          }}
          contentOffset={{ x: halfCardDistance * -1, y: 0 }}
          onLayout={(e) => {
            setScrollViewWidth(e.nativeEvent.layout.width);
          }}
          showsHorizontalScrollIndicator={false}
          contentInsetAdjustmentBehavior="never"
          snapToAlignment="center"
          decelerationRate="fast"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: COLORS.lightGray,
  },
  title: {
    fontSize: 32,
  },
  containerList: {
    marginTop: 30,
  },
  moreStyle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  moreContainer: {
    alignItems: "flex-end",
    paddingRight: 30,
    justifyContent: "center",
    paddingTop: 20,
  },
});

export default CardComponent;
