import { integratedFetch } from "../../utils/integratedFetch.js";
import { portNo } from "../../utils/portNo.js";

export const outgoing = async (nodeUrl, rawAddress, hashOrId, id) => {
    const address = rawAddress; //Todo: Validate address here
    let url = nodeUrl + ":" + portNo(nodeUrl) + "/account/transfers/outgoing?address=" + address;
    if(hashOrId !== undefined){
        if(Number.isInteger(Number(hashOrId))){
            url = url + "&id=" + Number(hashOrId);
        }else{
            url = url + "&hash=" + hashOrId;
        }
        if((id !== undefined) && (Number.isInteger(Number(id)))){
            url = url + "&id=" + id;
        }
    }
    const result = await integratedFetch(url);
    return result;
}