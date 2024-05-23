export const variableUser = {
  firstname: "Jean",
  lastname: "Porte",
  email: () => `bidulebuck${Math.floor(Math.random() * 10000)}@gmail.com`, // no teardown available in backmarket to remove user account
  password: "aaaaaaaaA1&",
};

export const staticUser = {
  firstname: "Jean",
  lastname: "Porte",
  email: "bidulebuck@gmail.com",
  password: "aaaaaaaaA1&",
};
