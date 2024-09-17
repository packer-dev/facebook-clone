export default (
  input: RequestInfo | URL,
  init?: RequestInit | undefined
): Promise<Response> => fetch(input, init);
