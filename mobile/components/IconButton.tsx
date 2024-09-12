import * as React from "react";
import { TouchableOpacity, Text, ActivityIndicator, View } from "react-native";
import tailwind from "../tailwind";

type IconButtonProps = {
  IconContainer: any;
  text:
    | string
    | {
        after: string;
        before: string;
      };
  iconName:
    | string
    | {
        after: string;
        before: string;
      };
  changeColor?: boolean;
  iconSize: number;
  styles?: string;
  rollback?: any;
  onPress?: Function;
  loading?: boolean;
  haveBackground?: boolean;
  active?: boolean;
  hiddenIcon?: boolean;
};

const IconButton = ({
  IconContainer,
  text,
  iconName,
  changeColor,
  iconSize = 20,
  styles = "",
  onPress,
  rollback,
  loading,
  haveBackground,
  active,
  hiddenIcon,
}: IconButtonProps) => {
  const [status, setStatus] = React.useState<boolean>(!!active);
  const [_loading, setLoading] = React.useState(false);
  const handleClick = async () => {
    if (loading || _loading) return;
    setLoading(true);
    setStatus(!status);
    onPress && (await onPress());
    setLoading(false);
    if (rollback) {
      setStatus(false);
    }
  };
  const Touch: any = _loading || loading ? View : TouchableOpacity;
  const iconRender = (() => {
    if (typeof iconName === "string") return iconName;
    if (status) {
      return iconName?.after;
    } else {
      return iconName?.before;
    }
  })();
  const textRender = (() => {
    if (typeof text === "string") return text;
    if (typeof text === "object") {
      return status ? text?.after : text?.before;
    }
  })();
  const colorTextRender = (() => {
    if (haveBackground) return "white";
    if (status && changeColor && !_loading) {
      return "primary";
    } else {
      return "gray-700";
    }
  })();
  const colorIconRender = (() => {
    if (haveBackground) return "white";
    if (status && changeColor) {
      return "primary";
    } else {
      return "gray-700";
    }
  })();
  React.useEffect(() => {
    setStatus(!!active);
  }, [active]);
  return (
    <Touch
      onPress={handleClick}
      style={[
        tailwind(
          `mx-auto flex-row ${
            loading ? "opacity-50" : ""
          } gap-2 items-center rounded-lg ${hiddenIcon ? "justify-center" : ""}`
        ),
        tailwind(styles),
      ]}
    >
      {!hiddenIcon &&
        (_loading || loading ? (
          <ActivityIndicator
            size="small"
            color={haveBackground ? "white" : ""}
          />
        ) : (
          <IconContainer
            name={iconRender}
            size={iconSize}
            style={tailwind(`text-${colorIconRender}`)}
          />
        ))}

      {hiddenIcon && (_loading || loading) ? (
        <ActivityIndicator size="small" color={haveBackground ? "white" : ""} />
      ) : (
        <Text style={tailwind(`font-bold text-${colorTextRender}`)}>
          {textRender}
        </Text>
      )}
    </Touch>
  );
};

export default IconButton;
