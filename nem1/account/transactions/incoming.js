import { integratedFetch } from "../../utils/integratedFetch.js";
import { portNo } from "../../utils/portNo.js";

export const incoming = async (nodeUrl, rawAddress, hash, id) => {
    const address = rawAddress; //Todo: Validate address here
    let url = nodeUrl + ":" + portNo(nodeUrl) + "/account/get?address=" + address;
    if(hash !== undefined){
        url = url + "&hash=" + hash;
    }
    if(id !== undefined){
        url = url + "&id=" + id;
    }
    const result = await integratedFetch(url);
    return result;
}