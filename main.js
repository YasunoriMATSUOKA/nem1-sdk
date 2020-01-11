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
})();



