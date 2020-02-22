import { isHttps, isHttp, isWss, isWs } from "./url.js"

export const portNo = (rawUrl) => {
    if(isHttps(rawUrl)){
        return 7891;
    }else if(isHttp(rawUrl)){
        return 7890;
    }else if(isWss(rawUrl)){
        return 7991;
    }else if(isWs(rawUrl)){
        return 7990;
    }else{
        console.error("Bad URL!");
    }
}