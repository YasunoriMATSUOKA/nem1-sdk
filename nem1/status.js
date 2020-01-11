import { integratedFetch } from "./utils/integratedFetch.js";
import { portNo } from "./utils/portNo.js";

export const status = async (nodeUrl) => {
    const url = nodeUrl + ":" + portNo(nodeUrl) + "/status";
    const result = await integratedFetch(url);
    return result;
}