import * as React from "react";
import { Animated, Keyboard } from "react-native";

const useOverrideKeyboard = () => {
  const keyboardHeight = new Animated.Value(0);
  const [isKeyboardVisible, setIsKeyboardVisible] = React.useState(false);

  React.useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      (event) => {
        setIsKeyboardVisible(true);
        Animated.timing(keyboardHeight, {
          duration: 300,
          toValue: event.endCoordinates.height,
          useNativeDriver: false,
        }).start();
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setIsKeyboardVisible(false);
        Animated.timing(keyboardHeight, {
          duration: 300,
          toValue: 0,
          useNativeDriver: false,
        }).start();
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, [keyboardHeight]);
  return { isKeyboardVisible };
};

export default useOverrideKeyboard;
