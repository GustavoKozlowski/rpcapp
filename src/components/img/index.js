import React from "react";
import { Image } from "react-native";


export default function Img ({ width, url, height }) {
  return (
<>
<Image source={{ uri: url  }} style={{ width: width || 100, height: height || 100, resizeMode: 'contain', borderRadius: 10, borderColor: '#000', borderWidth: "1px" }} />
</>
)
};
