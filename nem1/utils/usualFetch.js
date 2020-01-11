export const usualFetch = async (rawUrl) => {
    const url = rawUrl;
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