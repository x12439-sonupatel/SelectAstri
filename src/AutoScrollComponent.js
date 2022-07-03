import React, { useEffect, useRef, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import COLORS from "./colors";
import DATA from "./data";
import { CardItem } from "./component";
let CurrentSlide = 0;
let IntervalTime = 4000;
const AutoScrollComponent = (props) => {
  const [scrollViewWidth, setScrollViewWidth] = useState(0);
  const cardWidth = scrollViewWidth * 1;
  const cardDistance = scrollViewWidth - cardWidth;
  const halfCardDistance = cardDistance / 2;
  let flatList = useRef(null);
  let timerId;

  const goToNextCard = () => {
    if (CurrentSlide >= DATA.length - 1) {
      CurrentSlide = -1;
    }
    flatList.current.scrollToIndex({
      index: ++CurrentSlide,
      animated: true,
    });
  };

  const startAutoPlay = () => {
    timerId = setInterval(goToNextCard, IntervalTime);
  };

  const stopAutoPlay = () => {
    if (timerId) {
      clearInterval(timerId);
      timerId = null;
    }
  };

  useEffect(() => {
    stopAutoPlay();
    startAutoPlay();
    return () => {
      stopAutoPlay();
    };
  }, []);

  const renderItem = ({ item, index }) => {
    return <CardItem item={item} index={index} cardWidth={cardWidth} {...props} />;
  };
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.containerList}
        data={DATA}
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
        contentInsetAdjustmentBehavior="never"
        snapToAlignment="center"
        decelerationRate="fast"
        automaticallyAdjustContentInsets={true}
        showsHorizontalScrollIndicator={false}
        flatListRef={useRef()}
        ref={flatList}
      />
    </View>
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
});

export default AutoScrollComponent;
