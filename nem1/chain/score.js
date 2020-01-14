import { integratedFetch } from "../utils/integratedFetch.js";
import { portNo } from "../utils/portNo.js";

export const chainScore = async (nodeUrl) => {
    const url = nodeUrl + ":" + portNo(nodeUrl) + "/chain/score";
    const result = await integratedFetch(url);
    return result;
}