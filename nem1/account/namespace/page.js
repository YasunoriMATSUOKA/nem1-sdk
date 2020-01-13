import { integratedFetch } from "../../utils/integratedFetch.js";
import { portNo } from "../../utils/portNo.js";

export const namespacePage = async (nodeUrl, rawAddress, parentNamespace) => {
    const address = rawAddress; //Todo: Validate address here
    let url = nodeUrl + ":" + portNo(nodeUrl) + "/account/namespace/page?address=" + address;
    if((parentNamespace !== undefined) && (typeof(parentNamespace) === "string" || parentNamespace instanceof String)){
        url = url + "&parent=" + parentNamespace;
    }
    const result = await integratedFetch(url);
    return result;
}