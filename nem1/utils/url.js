export const isHttps = (rawUrl) => {
    return rawUrl.startsWith("https://") ? true : false;
}

export const isHttp = (rawUrl) => {
    return rawUrl.startsWith("http://") ? true : false;
}

export const isWss = (rawUrl) => {
    return rawUrl.startsWith("wss://") ? true : false;
}

export const isWs = (rawUrl) => {
    return rawUrl.startsWith("ws://") ? true : false;
}