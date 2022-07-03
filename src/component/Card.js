import React from "react";
import { View, StyleSheet, Text, Image, Pressable } from "react-native";
import COLORS from "../colors";

const CardItem = (props) => {
  const { item, index, cardWidth } = props;
  let balanceStyle = { fontWeight: "bold", fontSize: 17 };
  if (item?.balance) {
    balanceStyle = { fontSize: 16, color: COLORS.grayColor };
  }
  return (
    <Pressable
      style={[styles.containerItem, { width: cardWidth - 30 }]}
      key={index}
      onPress={() => {
        props?.navigation?.navigate("PageNoFound", { item });
      }}
    >
      <View style={styles.childItem}>
        <View>
          <Text style={balanceStyle}>{item?.text || ""}</Text>
          {item?.balance ? (
            <Text style={styles.textBalanceStyle}>{item?.balance}</Text>
          ) : null}
        </View>
        <Text style={styles.titleStyle}>{item?.title || ""}</Text>
      </View>
      <Image source={item?.image} style={[styles.imageStyle]} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  containerItem: {
    height: "45%",
    marginHorizontal: 15,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 24,
    backgroundColor: COLORS.white,
    shadowColor: COLORS.black,
    shadowOffset: { width: 1, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  childItem: {
    height: "100%",
    width: "50%",
    borderTopLeftRadius: 28,
    borderBottomLeftRadius: 28,
    paddingHorizontal: 15,
    paddingTop: 15,
    justifyContent: "space-between",
    paddingBottom: 15,
  },
  imageStyle: {
    resizeMode: "contain",
    height: "100%",
    width: "50%",
    paddingRight: 15,
    borderTopRightRadius: 28,
    borderBottomRightRadius: 28,
  },
  textBalanceStyle: { paddingTop: 10, fontSize: 17, fontWeight: "bold" },
  titleStyle: { fontSize: 13, fontWeight: "bold", color: "blue" },
});

export default CardItem;
