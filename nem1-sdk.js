import { config } from "./nem1/utils/config.js";
import { integratedFetch } from "./nem1/utils/integratedFetch.js";
import { proxyFetch } from "./nem1/utils/proxyFetch.js";
import { usualFetch } from "./nem1/utils/usualFetch.js";
import { isHttps, isHttp, isWss, isws } from "./nem1/utils/url.js";
import { portNo } from "./nem1/utils/portNo.js";
import { heartbeat } from "./nem1/heartbeat.js";
import { status } from "./nem1/status.js";
import { get } from "./nem1/account/get.js";
import { incoming } from "./nem1/account/transactions/incoming.js";

export const nem1 =　{
    heartbeat: heartbeat,
    status: status,
    account: {
        get: get,
        transfers: {
            incoming: incoming,
        },
    },
    utils: {
        config: config,
        integratedFetch: integratedFetch,
        proxyFetch: proxyFetch,
        usualFetch: usualFetch,
        isHttps: isHttps,
        isHttp: isHttp,
        isWss: isWss,
        isWs: isws,
        portNo: portNo,
    },
}