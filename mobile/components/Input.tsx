import {
  Text,
  TextInput,
  View,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import tailwind from "../tailwind";
import { AntDesign } from "@expo/vector-icons";

type InputProps = {
  type: any;
  disabled?: boolean;
  value?: string;
  placeholder?: string;
  label?: string;
  onChangeText: (value: string) => void;
  error: any;
};

const Input = ({
  type,
  value = "",
  placeholder,
  error,
  label,
  onChangeText,
  disabled,
}: InputProps) => {
  return (
    <View>
      <View
        style={{
          ...tailwind(`bg-gray-200 py-3 mb-2 pl-3 text-left`),
          ...(error ? tailwind(`border border-red-500`) : {}),
        }}
      >
        <Text
          style={tailwind(
            `pt-0.5 pb-1 text-xs ${error ? "text-red-600" : "text-gray-600"}`
          )}
        >
          {label}
        </Text>
        <TextInput
          defaultValue={value}
          placeholder={placeholder}
          textContentType="oneTimeCode"
          placeholderTextColor="gray"
          autoCapitalize="none"
          onChangeText={(newText) => onChangeText?.(newText)}
          secureTextEntry={type === "password"}
          blurOnSubmit={false}
          onSubmitEditing={() => Keyboard.dismiss()}
        />
        {value?.length > 0 && (
          <TouchableOpacity
            onPress={() => {
              if (error) {
                onChangeText("");
              }
            }}
            style={tailwind(`top-4 right-4 absolute`)}
          >
            <AntDesign
              name={error ? "close" : "check"}
              size={24}
              style={tailwind(`text-${error ? "red" : "green"}-500`)}
            />
          </TouchableOpacity>
        )}
      </View>
      {error && <Text style={tailwind(`text-red-600 pl-2 mb-2`)}>{error}</Text>}
    </View>
  );
};

export default Input;
