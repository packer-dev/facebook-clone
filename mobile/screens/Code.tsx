import React from "react";
import { SafeAreaView } from "react-native";
import Story from "./Story";
import tailwind from "../tailwind";

const App = () => {
  return (
    <SafeAreaView style={tailwind(`flex-1`)}>
      <Story />
    </SafeAreaView>
  );
};

export default App;
