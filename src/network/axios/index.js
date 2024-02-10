import axios from "axios";
export const baseURL = "http://52.90.114.34:3000/";

const staticHeaders = () => ({
  Accept: "application/json",
  "Content-Type": "application/json",
});

export { staticHeaders };
