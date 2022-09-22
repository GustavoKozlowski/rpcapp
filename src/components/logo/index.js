import React from "react";
import { Image } from "react-native";

export default function Logo({ width, url, height }) {
  return (
    <>
      <Image
        source={{ uri: url }}
        style={{
          width: width || 100,
          height: height || 100,
          resizeMode: "contain",
        }}
      />
    </>
  );
}
