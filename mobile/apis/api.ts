export default (
  url: string,
  options: RequestInit,
  mode: "form-data" | "json"
) => {
  const result = fetch(url, options);
  if (mode === "json") {
    result.then((res) => res);
  }
  result
    .then((res) => {
      return res;
    })
    .catch((e) => {
      console.log(e);
    });
};
