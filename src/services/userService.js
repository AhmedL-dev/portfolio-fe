import http from "./httpService";
import config from "../config.json";

const userEndpoint = config.apiEndpoint + "/auth/register/";

const register = async (user) => {
  return http.post(userEndpoint, {
    email: user.email,
    password: user.password,
    username: user.username,
  });
};

export { register };
