import { integratedFetch } from "../utils/integratedFetch.js";
import { portNo } from "../utils/portNo.js";

export const chainHeight = async (nodeUrl) => {
    const url = nodeUrl + ":" + portNo(nodeUrl) + "/chain/height";
    const result = await integratedFetch(url);
    return result;
}