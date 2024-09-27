const api = (
  input: RequestInfo | URL,
  init?: RequestInit
): Promise<Response> => {
  return fetch(input, init);
};

export default api;
