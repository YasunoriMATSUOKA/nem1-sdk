import { integratedFetch } from "../../../utils/integratedFetch.js";
import { portNo } from "../../../utils/portNo.js";

export const mosaicDefinitionPage = async (nodeUrl, rawAddress, parentNamespace) => {
    const address = rawAddress; //Todo: Validate address here
    let url = nodeUrl + ":" + portNo(nodeUrl) + "/account/mosaic/definition/page?address=" + address;
    if(parentNamespace !== undefined){
        url = url + "&parent=" + parentNamespace;
    }
    const result = await integratedFetch(url);
    return result;
}