import axios from "axios";

axios.defaults.baseURL = "https://fisntagram-f2918720a69f.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;
