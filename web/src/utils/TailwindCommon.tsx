export const tailwindCommonClasses = (...additionalClasses: string[]) => {
  return `${additionalClasses.join(" ")}`;
};
