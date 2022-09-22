import React from "react";
import { Image } from "react-native";

export default function Img({ width, url, height }) {
  return (
    <>
      <Image
        source={{ uri: url }}
        style={{
          width: width,
          height: height,
          resizeMode: "contain",
          borderRadius: 10,
          borderColor: "#000",
          borderWidth: "1px",
        }}
      />
    </>
  );
}
