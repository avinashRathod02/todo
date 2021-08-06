import React from "react";
import { View, Image } from "react-native";
import img from "../../../assets/loader_ripple.gif";
const SimpleLoader = () => (
  <View
    style={{
      flex: 1,
      alignSelf: "center",
    }}
  >
    <Image style={{ width: 100, height: 100 }} source={img} />
  </View>
);
export default SimpleLoader;
