import { nem1 } from "./nem1-sdk.js";

(async () => {
    //heartbeat
    await (async () => {
        const httpsNodeUrl = "https://nemlovely1.supernode.me";
        const httpNodeUrl = "http://nemlovely1.supernode.me";
        //const heartbeatHttps = await nem1.heartbeat(httpsNodeUrl);
        //console.log("heartbeat(https): ", heartbeatHttps);
        const heartbeatHttp = await nem1.heartbeat(httpNodeUrl);
        console.log("heartbeat(http): ", heartbeatHttp);
    })();

    //status
    await (async () => {
        const httpsNodeUrl = "https://nemlovely1.supernode.me";
        const httpNodeUrl = "http://nemlovely1.supernode.me";
        //const statusHttps = await nem1.status(httpsNodeUrl);
        //console.log("status(https): ", statusHttps);
        const statusHttp = await nem1.status(httpNodeUrl);
        console.log("status(http): ", statusHttp);
    })();

    //account/get?address={address}
    await (async () => {
        const httpsNodeUrl = "https://nemlovely1.supernode.me";
        const httpNodeUrl = "http://nemlovely1.supernode.me";
        const address = "NAX3EP4EKUMLH4T3N7GJSTQDG2AMUK5T26P5EA2M";
        //const accountGetHttps = await nem1.account.get(httpsNodeUrl, address);
        //console.log("accountGet(https): ", accountGetHttps);
        const accountGetHttp = await nem1.account.get(httpNodeUrl, address);
        console.log("accountGet(http): ", accountGetHttp);
    })();

    //account/transfers/incoming?address={address}&hash={hash}&id={id}
    //id is recomended. hash is not recomended.
    //because hash can't be used for old transactions not chached in many nodes.
    //if you wanna use hash, you should also use id.
    await (async () => {
        const httpsNodeUrl = "https://nemlovely1.supernode.me";
        const httpNodeUrl = "http://nemlovely1.supernode.me";
        const address = "NAX3EP4EKUMLH4T3N7GJSTQDG2AMUK5T26P5EA2M";
        //const accountTransfersIncomingHttps = await nem1.account.transfers.incoming(httpsNodeUrl, address);
        //console.log("accountTransfersIncoming(https): ", accountTransfersIncomingHttps);
        const accountTransfersIncomingHttp = await nem1.account.transfers.incoming(httpNodeUrl, address);
        console.log("accountTransfersIncoming(http): ", accountTransfersIncomingHttp);
        const id = accountTransfersIncomingHttp.data.slice(-1)[0].meta.id;
        const hash = accountTransfersIncomingHttp.data.slice(-1)[0].meta.hash.data;
        console.log("id: ", id);
        console.log("hash: ", hash);
        //const accountTransfersIncomingWithIdHttps = await nem1.account.transfers.incoming(httpsNodeUrl, address, id);
        //console.log("accountTransfersIncomingWithId(https): ", accountTransfersIncomingWithIdHttps);
        const accountTransfersIncomingWithIdHttp = await nem1.account.transfers.incoming(httpNodeUrl, address, id);
        console.log("accountTransfersIncomingWithId(http): ", accountTransfersIncomingWithIdHttp);
        //const accountTransfersIncomingWithHashAndIdHttps = await nem1.account.transfers.incoming(httpsNodeUrl, address, hash, id);
        //console.log("accountTransfersIncomingWithHashAndId(https): ", accountTransfersIncomingWithHashAndIdHttps);
        const accountTransfersIncomingWithHashAndIdHttp = await nem1.account.transfers.incoming(httpNodeUrl, address, hash, id);
        console.log("accountTransfersIncomingWithHashAndId(http): ", accountTransfersIncomingWithHashAndIdHttp);
    })();

    //account/transfers/outgoing?address={address}&hash={hash}&id={id}
    //id is recomended. hash is not recomended.
    //because hash can't be used for old transactions not chached in many nodes.
    //if you wanna use hash, you should also use id.
    await (async () => {
        const httpsNodeUrl = "https://nemlovely1.supernode.me";
        const httpNodeUrl = "http://nemlovely1.supernode.me";
        const address = "NAX3EP4EKUMLH4T3N7GJSTQDG2AMUK5T26P5EA2M";
        //const accountTransfersOutgoingHttps = await nem1.account.transfers.outgoing(httpsNodeUrl, address);
        //console.log("accountTransfersOutgoing(https): ", accountTransfersOutgoingHttps);
        const accountTransfersOutgoingHttp = await nem1.account.transfers.outgoing(httpNodeUrl, address);
        console.log("accountTransfersOutgoing(http): ", accountTransfersOutgoingHttp);
        const id = accountTransfersOutgoingHttp.data.slice(-1)[0].meta.id;
        const hash = accountTransfersOutgoingHttp.data.slice(-1)[0].meta.hash.data;
        console.log("id: ", id);
        console.log("hash: ", hash);
        //const accountTransfersOutgoingWithIdHttps = await nem1.account.transfers.outgoing(httpsNodeUrl, address, id);
        //console.log("accountTransfersOutgoingWithId(https): ", accountTransfersOutgoingWithIdHttps);
        const accountTransfersOutgoingWithIdHttp = await nem1.account.transfers.outgoing(httpNodeUrl, address, id);
        console.log("accountTransfersOutgoingWithId(http): ", accountTransfersOutgoingWithIdHttp);
        //const accountTransfersOutgoingWithHashAndIdHttps = await nem1.account.transfers.outgoing(httpsNodeUrl, address, hash, id);
        //console.log("accountTransfersOutgoingWithHashAndId(https): ", accountTransfersOutgoingWithHashAndIdHttps);
        const accountTransfersOutgoingWithHashAndIdHttp = await nem1.account.transfers.outgoing(httpNodeUrl, address, hash, id);
        console.log("accountTransfersOutgoingWithHashAndId(http): ", accountTransfersOutgoingWithHashAndIdHttp);
    })();

    //account/transfers/all?address={address}&hash={hash}&id={id}
    //id is recomended. hash is not recomended.
    //because hash can't be used for old transactions not chached in many nodes.
    //if you wanna use hash, you should also use id.
    await (async () => {
        const httpsNodeUrl = "https://nemlovely1.supernode.me";
        const httpNodeUrl = "http://nemlovely1.supernode.me";
        const address = "NAX3EP4EKUMLH4T3N7GJSTQDG2AMUK5T26P5EA2M";
        //const accountTransfersAllHttps = await nem1.account.transfers.all(httpsNodeUrl, address);
        //console.log("accountTransfersAll(https): ", accountTransfersAllHttps);
        const accountTransfersAllHttp = await nem1.account.transfers.all(httpNodeUrl, address);
        console.log("accountTransfersAll(http): ", accountTransfersAllHttp);
        const id = accountTransfersAllHttp.data.slice(-1)[0].meta.id;
        const hash = accountTransfersAllHttp.data.slice(-1)[0].meta.hash.data;
        console.log("id: ", id);
        console.log("hash: ", hash);
        //const accountTransfersAllWithIdHttps = await nem1.account.transfers.all(httpsNodeUrl, address, id);
        //console.log("accountTransfersAllWithId(https): ", accountTransfersAllWithIdHttps);
        const accountTransfersAllWithIdHttp = await nem1.account.transfers.all(httpNodeUrl, address, id);
        console.log("accountTransfersAllWithId(http): ", accountTransfersAllWithIdHttp);
        //const accountTransfersAllWithHashAndIdHttps = await nem1.account.transfers.all(httpsNodeUrl, address, hash, id);
        //console.log("accountTransfersAllWithHashAndId(https): ", accountTransfersAllWithHashAndIdHttps);
        const accountTransfersAllWithHashAndIdHttp = await nem1.account.transfers.all(httpNodeUrl, address, hash, id);
        console.log("accountTransfersAllWithHashAndId(http): ", accountTransfersAllWithHashAndIdHttp);
    })();

    //account/unconfirmedTransactions?address={address}
    await (async () => {
        const httpsNodeUrl = "https://nemlovely1.supernode.me";
        const httpNodeUrl = "http://nemlovely1.supernode.me";
        const address = "NAX3EP4EKUMLH4T3N7GJSTQDG2AMUK5T26P5EA2M";
        //const unconfirmedTransactionsHttps = await nem1.account.unconfirmedTransactions(httpsNodeUrl, address);
        //console.log("unconfirmedTransactions(https): ", unconfirmedTransactionsHttps);
        const unconfirmedTransactionsHttp = await nem1.account.unconfirmedTransactions(httpNodeUrl, address);
        console.log("unconfirmedTransactions(http): ", unconfirmedTransactionsHttp);
    })();
})();