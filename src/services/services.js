import axios from "axios";

const baseUrl = "https://dummyjson.com/";
// Getting data from API Function
export async function logIn(userCredentials) {
  return await axios.post(`${baseUrl}auth/login`, userCredentials);
}
