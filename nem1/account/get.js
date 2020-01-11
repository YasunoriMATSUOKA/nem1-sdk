import { integratedFetch } from "../utils/integratedFetch.js";
import { portNo } from "../utils/portNo.js";

export const get = async (nodeUrl, rawAddress) => {
    const address = rawAddress; //Todo: Validate address here
    const url = nodeUrl + ":" + portNo(nodeUrl) + "/account/get?address=" + address;
    const result = await integratedFetch(url);
    return result;
}