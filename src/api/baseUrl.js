import axios from "axios";

/* axios.defaults.withCredentials = true;
axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken'; */

const BASEURL = axios.create({
    baseURL: "https://e-commerce-api-bwhg.onrender.com/api",
    headers: {
        "Content-Type": "application/json",
    },
})

BASEURL.interceptors.request.use(
    (config) => {
      const token = window.sessionStorage.getItem("token");
      if (token) {
        config.headers.Authorization = "Bearer " + token;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
)


export default BASEURL