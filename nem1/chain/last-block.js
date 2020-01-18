import { integratedFetch } from "../utils/integratedFetch.js";
import { portNo } from "../utils/portNo.js";

export const lastBlock = async (nodeUrl) => {
    const url = nodeUrl + ":" + portNo(nodeUrl) + "/chain/last-block";
    const result = await integratedFetch(url);
    return result;
}