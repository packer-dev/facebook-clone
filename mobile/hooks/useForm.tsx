import { AppContext } from "@/contexts";
import * as React from "react";

const useForm = (fields: any[] = []) => {
  const { state, updateData } = React.useContext(AppContext);
  const init = fields.map((item) => {
    return {
      ...item,
      value: item.value || "",
      error: false,
    };
  });
  const [inputs, setInputs] = React.useState(init);
  const onSubmit = async (callback: any) => {
    const checkValidation = [...inputs].map((item) => {
      let content = item.validate
        ? item.validate(inputs) || item.content
        : item.content;
      let invalid = item.validate
        ? !!item.validate({ inputs, item, value: item.value })
        : false;
      item.error = item.value ? invalid : true;
      item.content = content;
      return item;
    });
    setInputs([...checkValidation]);
    let obj: any = {};
    inputs.forEach((el) => {
      obj[el.name] = el.value;
    });
    if (checkValidation.filter((item) => item.error).length > 0) return;
    updateData("loading", true);
    await callback(obj);
    updateData("loading", false);
  };
  const resetForm = () => {
    setInputs(init);
  };
  const register = (item: any) => {
    return {
      ...item,
      error: item.error && item.content,
    };
  };
  const onInputChange = (val: string, item: any) => {
    let newValue = [...inputs].map((child) => {
      const field = fields.find((v) => v.name === child.name);

      if (child.name === item.name) {
        let content = item.validate
          ? item.validate(inputs) || item.content
          : item.content;
        let invalid = item.validate
          ? !!item.validate({ inputs, item, value: item.value })
          : false;
        child.error = item.value ? invalid : true;
        child.value = val;
        if (field) {
          child.content = field.content;
        }
        if (child.value) {
          child.content = content;
        }
      }
      return child;
    });
    setInputs(newValue);
  };
  return {
    inputs,
    setInputs,
    state,
    updateData,
    onSubmit,
    resetForm,
    register,
    onInputChange,
  };
};

export default useForm;
