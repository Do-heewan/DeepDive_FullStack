import axios from "axios";

const instance = axios.create({
    baseURL : "https://api.themoviedb.org/3",
    params : {
        api_key : "bb39187cc49768621786e3240d16cf65",
        language : "ko-KR",
    },
});

export default instance;