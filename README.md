# nem1-sdk

Informal NEM1 Developer Kit implemented in ES Modules.

## note

Requests use fetch() method.
On https requests, this kit use proxy server to avoid CORS restriction.
In default settings, proxy server URL https://cors-anywhere.herokuapp.com/ is set.
If you wanna use another proxy server, you can set URL into ./nem1/utils/config.js.

## apis

1. [nem1.heartbeat](#nem1.heartbeat)
1. [nem1.status](#nem1.status)
1. nem1.account
    1. [nem1.account.get](#nem1.account.get)
    1. [nem1.account.transfers.incoming](#nem1.account.transfers.incoming)
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

http://nemlovely1.supernode.me:7890/heartbeat

https://nemlovely1.supernode.me:7891/heartbeat

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

### nem1.status

- api

http://nemlovely1.supernode.me:7890/status

https://nemlovely1.supernode.me:7891/status

- code example

```js
import { nem1 } from "./nem1-sdk.js";
(async () => {
    const httpsNodeUrl = "https://nemlovely1.supernode.me";
    const httpNodeUrl = "http://nemlovely1.supernode.me";
    const statusHttps = await nem1.status(httpsNodeUrl);
    console.log("status(https): ", statusHttps);
    const statusHttp = await nem1.status(httpNodeUrl);
    console.log("status(http): ", statusHttp);
})();
```

- result (JSON)

```json
{"code":6,"type":4,"message":"status"}
```

- Code Result (All)

```
proxyFetch.js:9 {code: 6, type: 4, message: "status"}
main.js:19 status(https):  {code: 6, type: 4, message: "status"}
usualFetch.js:6 {code: 6, type: 4, message: "status"}
main.js:21 status(http):  {code: 6, type: 4, message: "status"}
```

### nem1.account

#### nem1.account.get

- api

https://nemlovely1.supernode.me:7890/account/get?address=NAX3EP4EKUMLH4T3N7GJSTQDG2AMUK5T26P5EA2M

http://nemlovely1.supernode.me:7890/account/get?address=NAX3EP4EKUMLH4T3N7GJSTQDG2AMUK5T26P5EA2M

- code example

```js
import { nem1 } from "./nem1-sdk.js";
(async () => {
    const httpsNodeUrl = "https://nemlovely1.supernode.me";
    const httpNodeUrl = "http://nemlovely1.supernode.me";
    const address = "NAX3EP4EKUMLH4T3N7GJSTQDG2AMUK5T26P5EA2M";
    const accountGetHttps = await nem1.account.get(httpsNodeUrl, address);
    console.log("accountGet(https): ", accountGetHttps);
    const accountGetHttp = await nem1.account.get(httpNodeUrl, address);
    console.log("accountGet(http): ", accountGetHttp);
})();
```

- result (JSON)

```json
{
    "meta":{
        "cosignatories":[],
        "cosignatoryOf":[],
        "status":"LOCKED",
        "remoteStatus":"INACTIVE"
    },
    "account":{
        "address":"NAX3EP4EKUMLH4T3N7GJSTQDG2AMUK5T26P5EA2M",
        "harvestedBlocks":0,
        "balance":5000599306,
        "importance":0.0,
        "vestedBalance":4891309087,
        "publicKey":"051beb2871a4dad21bb8b241a49837442a46a5628fc0c3951ae322121508a4a1",
        "label":null,
        "multisigInfo":{}
    }
}
```

- Code Result (All)

```
proxyFetch.js:9 {meta: {…}, account: {…}}
main.js:30 accountGet(https):  {meta: {…}, account: {…}}
usualFetch.js:6 {meta: {…}, account: {…}}
main.js:32 accountGet(http):  {meta: {…}, account: {…}}
```

#### nem1.account.transfers.incoming

- api

address only (you can get 25 tx history.)

https://nemlovely1.supernode.me:7890/account/transfers/incoming?address=NAX3EP4EKUMLH4T3N7GJSTQDG2AMUK5T26P5EA2M

http://nemlovely1.supernode.me:7890/account/transfers/incoming?address=NAX3EP4EKUMLH4T3N7GJSTQDG2AMUK5T26P5EA2M

address and tx id (you can get 25 tx history from the tx id previous)

https://nemlovely1.supernode.me:7891/account/transfers/incoming?address=NAX3EP4EKUMLH4T3N7GJSTQDG2AMUK5T26P5EA2M&id=7577105

http://nemlovely1.supernode.me:7891/account/transfers/incoming?address=NAX3EP4EKUMLH4T3N7GJSTQDG2AMUK5T26P5EA2M&id=7577105

address, tx hash and tx id (you can get 25 tx history from the tx id and hash previous)

https://nemlovely1.supernode.me:7891/account/transfers/incoming?address=NAX3EP4EKUMLH4T3N7GJSTQDG2AMUK5T26P5EA2M&hash=2291488ec8f855e2854222f0f9fc8a42da2eba894b0a78ae8b368e28f16803c2&id=7562376

http://nemlovely1.supernode.me:7891/account/transfers/incoming?address=NAX3EP4EKUMLH4T3N7GJSTQDG2AMUK5T26P5EA2M&hash=2291488ec8f855e2854222f0f9fc8a42da2eba894b0a78ae8b368e28f16803c2&id=7562376

- code example

```js
import { nem1 } from "./nem1-sdk.js";
(async () => {
    const httpsNodeUrl = "https://nemlovely1.supernode.me";
    const httpNodeUrl = "http://nemlovely1.supernode.me";
    const address = "NAX3EP4EKUMLH4T3N7GJSTQDG2AMUK5T26P5EA2M";
    const accountTransfersIncomingHttps = await nem1.account.transfers.incoming(httpsNodeUrl, address);
    console.log("accountTransfersIncoming(https): ", accountTransfersIncomingHttps);
    const accountTransfersIncomingHttp = await nem1.account.transfers.incoming(httpNodeUrl, address);
    console.log("accountTransfersIncoming(http): ", accountTransfersIncomingHttp);
    const id = accountTransfersIncomingHttps.data.slice(-1)[0].meta.id;
    const hash = accountTransfersIncomingHttps.data.slice(-1)[0].meta.hash.data;
    console.log("id: ", id);
    console.log("hash: ", hash);
    const accountTransfersIncomingWithIdHttps = await nem1.account.transfers.incoming(httpsNodeUrl, address, id);
    console.log("accountTransfersIncomingWithId(https): ", accountTransfersIncomingWithIdHttps);
    const accountTransfersIncomingWithIdHttp = await nem1.account.transfers.incoming(httpNodeUrl, address, id);
    console.log("accountTransfersIncomingWithId(http): ", accountTransfersIncomingWithIdHttp);
    const accountTransfersIncomingWithHashAndIdHttps = await nem1.account.transfers.incoming(httpsNodeUrl, address, hash, id);
    console.log("accountTransfersIncomingWithHashAndId(https): ", accountTransfersIncomingWithHashAndIdHttps);
    const accountTransfersIncomingWithHashAndIdHttp = await nem1.account.transfers.incoming(httpNodeUrl, address, hash, id);
    console.log("accountTransfersIncomingWithHashAndId(http): ", accountTransfersIncomingWithHashAndIdHttp);
})();
```

- result (JSON)

```json
{
	"data": [{
		"meta": {
			"innerHash": {},
			"id": 7577105,
			"hash": {
				"data": "08f3fcb032d926c3898816b80cd8fba89e31900c1e5dbd2accac1c6fe8538d40"
			},
			"height": 2486931
		},
		"transaction": {
			"timeStamp": 150510974,
			"amount": 28977948,
			"signature": "4a9fc968b3c38aff084cf9304c04579cac802ab8e7053558b3f33cd8bf08fd4e851cfd288ce5eb53e7edc5263619d94cbbfbd8a72e2ed3a3457e5b962f22e001",
			"fee": 50000,
			"recipient": "NAX3EP4EKUMLH4T3N7GJSTQDG2AMUK5T26P5EA2M",
			"mosaics": [],
			"type": 257,
			"deadline": 150514574,
			"message": {},
			"version": 1744830466,
			"signer": "37f6ceb6093444db492530a2c529c5c16127209681c8af56239a4882cd3da273"
		}
	}, {
		"meta": {
			"innerHash": {},
			"id": 7562376,
			"hash": {
				"data": "2291488ec8f855e2854222f0f9fc8a42da2eba894b0a78ae8b368e28f16803c2"
			},
			"height": 2484235
		},
		"transaction": {
			"timeStamp": 150348197,
			"amount": 850000,
			"signature": "0df3f7896688710d731dbd4dc6c0ad451991891bbaa8d061448df761d50fad6bc00e5ef866b79a4765075a6fc1d163175dfb3f8244a99518aaf97bb1d6286707",
			"fee": 50000,
			"recipient": "NAX3EP4EKUMLH4T3N7GJSTQDG2AMUK5T26P5EA2M",
			"type": 257,
			"deadline": 150434597,
			"message": {},
			"version": 1744830465,
			"signer": "31fda6225f80c034ddc20312204bd1becf7d9cd1a93a9e1636a358f90b708b10"
		}
    }, ...max 25 times repeat]
}
```

- Code Result (All)

```
proxyFetch.js:9 {data: Array(25)}
main.js:44 accountTransfersIncoming(https):  {data: Array(25)}
usualFetch.js:6 {data: Array(25)}
main.js:46 accountTransfersIncoming(http):  {data: Array(25)}
main.js:49 id:  6995601
main.js:50 hash:  2b998762855ae5bf5c042a1dc19125656f4790b4a8b40793738e161edf311f25
proxyFetch.js:9 {data: Array(25)}
main.js:52 accountTransfersIncomingWithId(https):  {data: Array(25)}
usualFetch.js:6 {data: Array(25)}
main.js:54 accountTransfersIncomingWithId(http):  {data: Array(25)}
proxyFetch.js:9 {data: Array(25)}
main.js:56 accountTransfersIncomingWithHashAndId(https):  {data: Array(25)}
usualFetch.js:6 {data: Array(25)}
main.js:58 accountTransfersIncomingWithHashAndId(http):  {data: Array(25)}
```