import axios from "axios";
const api = axios.create({
  baseURL: "https://store.convertize.com.br/api/v1/public/license/accounts/hosts/"
});

export default api;