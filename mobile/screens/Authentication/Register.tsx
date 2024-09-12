import Authentication from "./index";
import * as React from "react";
import { Keyboard, Text } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { ramdomUser, validateEmail } from "@/utils";
import useForm from "@/hooks/useForm";
import { registerAPI } from "@/api";
import { userModel } from "@/models";
import Input from "@/components/Input";
import tailwind from "@/tailwind";

const random = ramdomUser();

const init = [
  {
    name: "name",
    type: "text",
    content: "Name is required.",
    label: "Name",
    value: random.name,
  },
  {
    name: "email",
    type: "email",
    content: "Email is required.",
    label: "Email",
    validate: validateEmail,
    value: random.email,
  },
  {
    name: "password",
    type: "password",
    content: "Password is required.",
    label: "Password",
    value: "@dev@",
  },
];

type ScreenList = NavigationProp<{
  Facebook: undefined;
}>;
const Register = () => {
  const { inputs, onSubmit, onInputChange, register } = useForm(init);
  const navigation = useNavigation<ScreenList>();
  const [error, setError] = React.useState(false);
  const handleSubmit = async (obj: any) => {
    const result = await registerAPI({ ...userModel(obj), ...obj });
    if (result.status === 1) {
      setError(true);
    } else {
      navigation.navigate("Facebook");
    }
    Keyboard.dismiss();
  };
  return (
    <Authentication
      buttonText="Register"
      type="Register"
      handleSubmit={() => onSubmit(handleSubmit)}
    >
      {inputs.map((item) => (
        <Input
          {...register(item)}
          key={item.name}
          onChangeText={(val) => {
            onInputChange(val, item);
          }}
        />
      ))}
      {error && (
        <Text style={tailwind(`text-red-500 pl-2 mt-2 mb-2`)}>
          Email exist in system.
        </Text>
      )}
    </Authentication>
  );
};

export default Register;
