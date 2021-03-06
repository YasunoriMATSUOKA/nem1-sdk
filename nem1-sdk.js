import { config } from "./nem1/utils/config.js";
import { integratedFetch } from "./nem1/utils/integratedFetch.js";
import { proxyFetch } from "./nem1/utils/proxyFetch.js";
import { usualFetch } from "./nem1/utils/usualFetch.js";
import { isHttps, isHttp, isWss, isWs } from "./nem1/utils/url.js";
import { portNo } from "./nem1/utils/portNo.js";
import { heartbeat } from "./nem1/heartbeat.js";
import { status } from "./nem1/status.js";
import { get } from "./nem1/account/get.js";
import { incoming } from "./nem1/account/transfers/incoming.js";
import { outgoing } from "./nem1/account/transfers/outgoing.js";
import { all } from "./nem1/account/transfers/all.js";
import { unconfirmedTransactions } from "./nem1/account/unconfimedTransactions.js";
import { harvests } from "./nem1/account/harvests.js";
import { importances } from "./nem1/account/importances.js";
import { namespacePage } from "./nem1/account/namespace/page.js";
import { mosaicDefinitionPage } from "./nem1/account/mosaic/definition/page.js";
import { mosaicOwned } from "./nem1/account/mosaic/owned.js";
import { chainHeight } from "./nem1/chain/height.js";
import { chainScore } from "./nem1/chain/score.js";
import { lastBlock } from "./nem1/chain/last-block.js";

export const nem1 =　{
    heartbeat: heartbeat,
    status: status,
    account: {
        get: get,
        transfers: {
            incoming: incoming,
            outgoing: outgoing,
            all: all,
        },
        unconfirmedTransactions: unconfirmedTransactions,
        harvests: harvests,
        importances: importances,
        namespace: {
            page: namespacePage,
        },
        mosaic: {
            definition: {
                page: mosaicDefinitionPage,
            },
            owned: mosaicOwned,
        },
    },
    chain: {
        height: chainHeight,
        score: chainScore,
        lastBlock: lastBlock,
    },
    utils: {
        config: config,
        integratedFetch: integratedFetch,
        proxyFetch: proxyFetch,
        usualFetch: usualFetch,
        isHttps: isHttps,
        isHttp: isHttp,
        isWss: isWss,
        isWs: isWs,
        portNo: portNo,
    },
}