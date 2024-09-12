import * as React from "react";
import { Keyboard, Dimensions } from "react-native";
import { AppContext } from "../contexts/index";

const useKeyboard = () => {
  const { updateData } = React.useContext(AppContext);
  const [height, setHeight] = React.useState(Dimensions.get("window").height);
  const [keyboardHeight, setKeyboardHeight] = React.useState(0);
  React.useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      (e) => {
        updateData("showKeyboard", true);
        setHeight(Dimensions.get("window").height - e.endCoordinates.height);
        setKeyboardHeight(e.endCoordinates.height);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        updateData("showKeyboard", false);
        setHeight(Dimensions.get("window").height);
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    height,
    width: Dimensions.get("window").width,
    keyboardHeight,
  };
};

export default useKeyboard;
