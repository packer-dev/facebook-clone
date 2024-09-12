import { TouchableOpacity, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import tailwind from "@/tailwind";

const Button = ({
  text,
  onClick,
  style,
  isSmall,
  custom = {
    textColor: "text-white",
    content: "Button",
    bgColor: "bg-primary",
    icon: {
      size: 24,
      name: "",
      component: AntDesign,
      style: {},
    },
  },
}: any) => {
  const Icon = custom.icon.component;
  const customSize = isSmall ? "h-8" : "h-12";
  const sizeClass = custom ? customSize : "";
  return custom ? (
    <TouchableOpacity
      onPress={() => onClick?.()}
      style={{
        ...tailwind(
          `bg-primary flex-row justify-center items-center ${sizeClass} rounded-lg ${
            custom ? "" : "mt-5 w-full"
          }`.trim()
        ),
        ...(style || {}),
      }}
    >
      <Icon
        name={custom.icon.name}
        size={custom.icon.size}
        style={{ ...custom.icon.style, ...tailwind(`${custom.textColor}`) }}
      />
      <Text style={tailwind(`${custom.textColor} font-semibold`)}>{text}</Text>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity
      onPress={() => onClick?.()}
      style={{
        ...tailwind(
          `bg-primary flex-row justify-center items-center ${
            isSmall ? "h-8" : "h-12"
          } rounded-lg mt-5 w-full`
        ),
        ...(style || {}),
      }}
    >
      <Text style={tailwind(`text-white font-semibold`)}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
