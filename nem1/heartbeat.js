import { integratedFetch } from "./utils/integratedFetch.js";
import { portNo } from "./utils/portNo.js";

export const heartbeat = async (nodeUrl) => {
    const url = nodeUrl + ":" + portNo(nodeUrl) + "/heartbeat";
    const result = await integratedFetch(url);
    return result;
}