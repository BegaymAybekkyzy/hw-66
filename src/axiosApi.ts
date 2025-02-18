import axios from "axios";

const axiosApi = axios.create({
  baseURL:
    "https://begaym-js-27-default-rtdb.europe-west1.firebasedatabase.app",
});

export default axiosApi;
