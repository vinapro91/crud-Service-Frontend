import axios from "axios";

export const api = axios.create({
  baseURL: "http://crud-teste-services.herokuapp.com",
  responseType: "json",
});