import {config} from "./config.js"

const proxy = config.proxy;
export const proxyFetch = async (rawUrl) => {
    const url = proxy + rawUrl;
    const result = fetch(url).then((res) => {
        return res.json();
    }).then((res) => {
        console.log(res);
        return res;
    }).catch((error) => {
        console.error(error);
    });
    return result;
}