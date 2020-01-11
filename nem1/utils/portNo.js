import { isHttps, isHttp, isWss, isws } from "./url.js"

export const portNo = (rawUrl) => {
    if(isHttps(rawUrl)){
        return 7891;
    }else if(isHttp(rawUrl)){
        return 7890;
    }else if(isWss(rawUrl)){
        return 7991;
    }else if(isws(rawUrl)){
        return 7990;
    }else{
        console.error("Bad Url!");
    }
}