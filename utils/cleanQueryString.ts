export function cleanQueryString(queryString: string) {
  // Split into key-value pairs and filter out undefined values
  const filteredParams = queryString.split("&").filter((param) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [key, value] = param.split("=");
    return value !== "undefined" && value !== "";
  });

  // Join the remaining parameters back into a query string
  return filteredParams.length > 0 ? `?${filteredParams.join("&")}` : "";
}
