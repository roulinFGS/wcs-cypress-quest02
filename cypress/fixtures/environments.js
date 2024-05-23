export const env = () => {
  const baseUrl = "https://preprod.backmarket.fr/fr-fr"; // TODO Should be in env variables
  return {
    baseUrl,
    register: baseUrl + "/register",
    dashboard: baseUrl + "/dashboard/orders",
  };
};
