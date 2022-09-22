import axios from "axios";

const instance = axios.create({
    baseURL: "https://epg-api.video.globo.com/programmes"
});

export default instance;