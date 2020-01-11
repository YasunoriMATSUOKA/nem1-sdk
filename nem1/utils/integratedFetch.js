import { isHttps, isHttp } from "./url.js";
import { proxyFetch } from "./proxyFetch.js";
import { usualFetch } from "./usualFetch.js";

export const integratedFetch = async (rawUrl) => {
    const url = rawUrl;
    if(isHttps(url)){
        return await proxyFetch(url);
    }else if(isHttp(url)){
        return  await usualFetch(url);
    }else{
        console.error("Bad URL!");
    }
}