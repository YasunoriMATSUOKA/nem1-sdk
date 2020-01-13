import { integratedFetch } from "../utils/integratedFetch.js";
import { portNo } from "../utils/portNo.js";

export const unconfirmedTransactions = async (nodeUrl, rawAddress) => {
    const address = rawAddress; //Todo: Validate address here
    const url = nodeUrl + ":" + portNo(nodeUrl) + "/account/unconfirmedTransactions?address=" + address;
    const result = await integratedFetch(url);
    return result;
}