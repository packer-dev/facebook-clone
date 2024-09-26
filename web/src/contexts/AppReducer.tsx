const AppReducer = <T,>(
  state: T,
  action: {
    type: "UPDATE_DATA";
    key: keyof T;
    value: any;
  }
) => {
  if (action.type === "UPDATE_DATA")
    return { ...state, [action.key]: action.value };

  return { ...state };
};

export default AppReducer;
