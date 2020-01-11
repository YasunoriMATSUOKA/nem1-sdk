import { nem1 } from "./nem1-sdk.js";

(async () => {
    //heartbeat
    await (async () => {
        const httpsNodeUrl = "https://nemlovely1.supernode.me";
        const httpNodeUrl = "http://nemlovely1.supernode.me";
        const heartbeatHttps = await nem1.heartbeat(httpsNodeUrl);
        console.log("heartbeat(https): ", heartbeatHttps);
        const heartbeatHttp = await nem1.heartbeat(httpNodeUrl);
        console.log("heartbeat(http): ", heartbeatHttp);
    })();

    //status
    await (async () => {
        const httpsNodeUrl = "https://nemlovely1.supernode.me";
        const httpNodeUrl = "http://nemlovely1.supernode.me";
        const statusHttps = await nem1.status(httpsNodeUrl);
        console.log("status(https): ", statusHttps);
        const statusHttp = await nem1.status(httpNodeUrl);
        console.log("status(http): ", statusHttp);
    })();

    //account/get?address={address}
    await (async () => {
        const httpsNodeUrl = "https://nemlovely1.supernode.me";
        const httpNodeUrl = "http://nemlovely1.supernode.me";
        const address = "NAX3EP4EKUMLH4T3N7GJSTQDG2AMUK5T26P5EA2M";
        const accountGetHttps = await nem1.account.get(httpsNodeUrl, address);
        console.log("accountGet(https): ", accountGetHttps);
        const accountGetHttp = await nem1.account.get(httpNodeUrl, address);
        console.log("accountGet(http): ", accountGetHttp);
    })();
})();



