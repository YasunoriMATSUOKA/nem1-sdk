# nem1-sdk

Informal NEM1 Developer Kit implemented in ES Modules.

## note

Requests use fetch() method.
On https requests, this kit use proxy server to avoid CORS restriction.
In default settings, proxy server URL https://cors-anywhere.herokuapp.com/ is set.
If you wanna use another proxy server, you can set URL into ./nem1/utils/config.js.

## apis

1. nem1.heartbeat
1. nem1.status
1. nem1.account
    1. nem1.account.get
    1. nem1.account.transfers.incoming
    1. nem1.account.transfers.outgoing
    1. nem1.account.transfers.all
    1. nem1.account.unconfirmedTransactions
    1. nem1.account.harvests
    1. nem1.account.namespace.page
    1. nem1.account.mosaic.definition.page
    1. nem1.account.mosaic.owned
1. nem1.chain
    1. nem1.chain.height
    1. nem1.chain.score
    1. nem1.chain.last-block
1. nem1.node
    1. nem1.node.info
    1. nem1.node.extended-info
    1. nem1.node.peer-list.all
    1. nem1.node.peer-list.reachable
    1. nem1.node.peer-list.active
    1. nem1.node.active-peers.max-chain-height
    1. nem1.node.experiences
1. nem1.namespace
    1. nem1.namespace.root.page
    1. nem1.namespace
    1. nem1.namespace.mosaic.definition.page

### nem1.heartbeat

- api

<pre>
http://nemlovely1.supernode.me:7890/heartbeat
https://nemlovely1.supernode.me:7891/heartbeat
</pre>

- code example

```js
import { nem1 } from "./nem1-sdk.js";
(async () => {
    const httpsNodeUrl = "https://nemlovely1.supernode.me";
    const httpNodeUrl = "http://nemlovely1.supernode.me";
    const heartbeatHttps = await nem1.heartbeat(httpsNodeUrl);
    console.log("heartbeat(https): ", heartbeatHttps);
    const heartbeatHttp = await nem1.heartbeat(httpNodeUrl);
    console.log("heartbeat(http): ", heartbeatHttp);
})();
```

- result (JSON)

```json
{"code":1,"type":2,"message":"ok"}
```

- Code Result (All)

```
proxyFetch.js:9 {code: 1, type: 2, message: "ok"}
main.js:6 heartbeat(https):  {code: 1, type: 2, message: "ok"}
usualFetch.js:6 {code: 1, type: 2, message: "ok"}
main.js:8 heartbeat(http):  {code: 1, type: 2, message: "ok"}
```