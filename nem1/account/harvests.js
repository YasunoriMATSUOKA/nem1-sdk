import { integratedFetch } from "../utils/integratedFetch.js";
import { portNo } from "../utils/portNo.js";

export const harvests = async (nodeUrl, rawAddress, id) => {
    const address = rawAddress; //Todo: Validate address here
    let url = nodeUrl + ":" + portNo(nodeUrl) + "/account/harvests?address=" + address;
    if((id !== undefined) && (Number.isInteger(Number(id)))){
        url = url + "&id=" + id;
    }
    const result = await integratedFetch(url);
    return result;
}