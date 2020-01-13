import { integratedFetch } from "../utils/integratedFetch.js";
import { portNo } from "../utils/portNo.js";

export const importances = async (nodeUrl) => {
    const url = nodeUrl + ":" + portNo(nodeUrl) + "/account/importances";
    const result = await integratedFetch(url);
    return result;
}