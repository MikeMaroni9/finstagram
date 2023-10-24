import axios from "axios";

axios.defaults.baseURL = "https://drf-api9-921f22751f01.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;
