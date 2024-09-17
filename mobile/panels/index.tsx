import { AppContext } from "@/contexts";
import tailwind from "@/tailwind";
import * as React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  StyleSheet,
} from "react-native";

type PanelProps = {
  children?: React.ReactNode;
  name?: string;
  hideOverlay?: boolean;
  backgroundColor?: string;
};

const Panel = ({
  children,
  name,
  hideOverlay,
  backgroundColor,
}: PanelProps) => {
  const {
    state: { panel },
    updateData,
  } = React.useContext(AppContext);
  if (panel?.payload?.hidden) return <></>;
  return hideOverlay ? (
    <View
      style={{ ...styles.container, ...tailwind(`border-t border-gray-300`) }}
    >
      <View style={styles.button} />
      {name && <Text style={styles.title}>{name}</Text>}
      {children}
    </View>
  ) : (
    <View
      style={[
        tailwind(`absolute right-0 bottom-0 top-0 left-0 z-50`),
        {
          backgroundColor: "rgba(0, 0, 0, 0.8)",
        },
      ]}
    >
      <TouchableOpacity
        onPress={() => updateData("panel", null)}
        style={tailwind(`flex-1`)}
      />
      <Animated.View
        style={[
          styles.container,
          backgroundColor ? { backgroundColor } : { backgroundColor: "#fff" },
        ]}
      >
        <View style={styles.button} />
        {name && <Text style={styles.title}>{name}</Text>}
        <View style={tailwind(`py-3`)}>{children}</View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingTop: 12,
    paddingHorizontal: 12,
    paddingBottom: 48,
    width: "100%",
  },
  title: {
    fontWeight: 600,
    fontSize: 20,
    textAlign: "center",
    marginTop: 12,
    marginBottom: 32,
  },
  button: {
    width: 60,
    margin: "auto",
    height: 5,
    borderRadius: 5,
    backgroundColor: "#ccc",
  },
});

export default Panel;
