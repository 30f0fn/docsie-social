import axios from 'axios';

const FOR_DJANGO = {
    API_URL : 'http://127.0.0.1:8000/api',
    axios_with_credentials : true,
    AXIOS : axios,
}

const FOR_PRISM = {
    API_URL : 'http://127.0.0.1:4010/api',
    axios_with_credentials : false,
}

export const settings = FOR_DJANGO;
// export const settings = FOR_PRISM;

axios.withCredentials = settings['axios_with_credentials'];

export const api = axios;

export default settings;
