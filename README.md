# nem1-sdk

Informal NEM1 Developer Kit implemented in ES Modules.

## note

Requests use fetch() method.
On https requests, this kit use proxy server to avoid CORS restriction.
In default settings, proxy server URL https://cors-anywhere.herokuapp.com/ is set.
If you wanna use another proxy server, you can set URL into ./nem1/utils/config.js.

## apis

Linked API can be used. Not linked API is now on development.

1. [nem1.heartbeat](#nem1heartbeat)
1. [nem1.status](#nem1status)
1. [nem1.account](#nem1account)
    1. [nem1.account.get](#nem1accountget)
    1. [nem1.account.transfers.incoming](#nem1accounttransfersincoming)
    1. [nem1.account.transfers.outgoing](#nem1accounttransfersoutgoing)
    1. [nem1.account.transfers.all](#nem1accounttransfersall)
    1. [nem1.account.unconfirmedTransactions](#nem1accountunconfirmedTransactions)
    1. [nem1.account.harvests](#nem1accountharvests)
    1. [nem1.account.importances](#nem1accountimportances)
    1. [nem1.account.namespace.page](#nem1accountnamespacepage)
    1. [nem1.account.mosaic.definition.page](#nem1accountmosaicdefinitionpage)
    1. [nem1.account.mosaic.owned](#nem1accountmosaicowned)
1. [nem1.chain](#nem1chain)
    1. [nem1.chain.height](#nem1chainheight)
    1. [nem1.chain.score](#nem1chainscore)
    1. [nem1.chain.lastBlock](#nem1chainlastBlock)
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

https://nemlovely1.supernode.me:7891/heartbeat

http://nemlovely1.supernode.me:7890/heartbeat

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

- result (json)

```json
{"code":1,"type":2,"message":"ok"}
```

- result (all)

```
proxyFetch.js:9 {code: 1, type: 2, message: "ok"}
main.js:6 heartbeat(https):  {code: 1, type: 2, message: "ok"}
usualFetch.js:6 {code: 1, type: 2, message: "ok"}
main.js:8 heartbeat(http):  {code: 1, type: 2, message: "ok"}
```

### nem1.status

- api

https://nemlovely1.supernode.me:7891/status

http://nemlovely1.supernode.me:7890/status

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

- result (json)

```json
{"code":6,"type":4,"message":"status"}
```

- result (all)

```
proxyFetch.js:9 {code: 6, type: 4, message: "status"}
main.js:19 status(https):  {code: 6, type: 4, message: "status"}
usualFetch.js:6 {code: 6, type: 4, message: "status"}
main.js:21 status(http):  {code: 6, type: 4, message: "status"}
```

### nem1.account

#### nem1.account.get

- api

https://nemlovely1.supernode.me:7891/account/get?address=NAX3EP4EKUMLH4T3N7GJSTQDG2AMUK5T26P5EA2M

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

- result (json)

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

- result (all)

```
proxyFetch.js:9 {meta: {…}, account: {…}}
main.js:30 accountGet(https):  {meta: {…}, account: {…}}
usualFetch.js:6 {meta: {…}, account: {…}}
main.js:32 accountGet(http):  {meta: {…}, account: {…}}
```

#### nem1.account.transfers.incoming

- api

address only (you can get 25 tx history.)

https://nemlovely1.supernode.me:7891/account/transfers/incoming?address=NAX3EP4EKUMLH4T3N7GJSTQDG2AMUK5T26P5EA2M

http://nemlovely1.supernode.me:7890/account/transfers/incoming?address=NAX3EP4EKUMLH4T3N7GJSTQDG2AMUK5T26P5EA2M

address and tx id (you can get 25 tx history from the tx id previous)

https://nemlovely1.supernode.me:7891/account/transfers/incoming?address=NAX3EP4EKUMLH4T3N7GJSTQDG2AMUK5T26P5EA2M&id=7577105

http://nemlovely1.supernode.me:7890/account/transfers/incoming?address=NAX3EP4EKUMLH4T3N7GJSTQDG2AMUK5T26P5EA2M&id=7577105

address, tx hash and tx id (you can get 25 tx history from the tx id and hash previous)

https://nemlovely1.supernode.me:7891/account/transfers/incoming?address=NAX3EP4EKUMLH4T3N7GJSTQDG2AMUK5T26P5EA2M&hash=2291488ec8f855e2854222f0f9fc8a42da2eba894b0a78ae8b368e28f16803c2&id=7562376

http://nemlovely1.supernode.me:7890/account/transfers/incoming?address=NAX3EP4EKUMLH4T3N7GJSTQDG2AMUK5T26P5EA2M&hash=2291488ec8f855e2854222f0f9fc8a42da2eba894b0a78ae8b368e28f16803c2&id=7562376

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

- result (json)

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

- result (all)

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

#### nem1.account.transfers.outgoing

- api

address only (you can get 25 tx history.)

https://nemlovely1.supernode.me:7891/account/transfers/outgoing?address=NAX3EP4EKUMLH4T3N7GJSTQDG2AMUK5T26P5EA2M

http://nemlovely1.supernode.me:7890/account/transfers/outgoing?address=NAX3EP4EKUMLH4T3N7GJSTQDG2AMUK5T26P5EA2M

address and tx id (you can get 25 tx history from the tx id previous)

https://nemlovely1.supernode.me:7891/account/transfers/outgoing?address=NAX3EP4EKUMLH4T3N7GJSTQDG2AMUK5T26P5EA2M&id=7742266

http://nemlovely1.supernode.me:7890/account/transfers/outgoing?address=NAX3EP4EKUMLH4T3N7GJSTQDG2AMUK5T26P5EA2M&id=7742266

address, tx hash and tx id (you can get 25 tx history from the tx id and hash previous)

https://nemlovely1.supernode.me:7891/account/transfers/outgoing?address=NAX3EP4EKUMLH4T3N7GJSTQDG2AMUK5T26P5EA2M&hash=4e993678493cdc6b11a79a44e54e5f63b99d1e34348b4687010fc3ed334a88bd&id=7742266

http://nemlovely1.supernode.me:7890/account/transfers/outgoing?address=NAX3EP4EKUMLH4T3N7GJSTQDG2AMUK5T26P5EA2M&hash=4e993678493cdc6b11a79a44e54e5f63b99d1e34348b4687010fc3ed334a88bd&id=7742266

- code example

```js
import { nem1 } from "./nem1-sdk.js";
(async () => {
    const httpsNodeUrl = "https://nemlovely1.supernode.me";
    const httpNodeUrl = "http://nemlovely1.supernode.me";
    const address = "NAX3EP4EKUMLH4T3N7GJSTQDG2AMUK5T26P5EA2M";
    const accountTransfersOutgoingHttps = await nem1.account.transfers.outgoing(httpsNodeUrl, address);
    console.log("accountTransfersOutgoing(https): ", accountTransfersOutgoingHttps);
    const accountTransfersOutgoingHttp = await nem1.account.transfers.outgoing(httpNodeUrl, address);
    console.log("accountTransfersOutgoing(http): ", accountTransfersOutgoingHttp);
    const id = accountTransfersOutgoingHttps.data.slice(-1)[0].meta.id;
    const hash = accountTransfersOutgoingHttps.data.slice(-1)[0].meta.hash.data;
    console.log("id: ", id);
    console.log("hash: ", hash);
    const accountTransfersOutgoingWithIdHttps = await nem1.account.transfers.outgoing(httpsNodeUrl, address, id);
    console.log("accountTransfersOutgoingWithId(https): ", accountTransfersOutgoingWithIdHttps);
    const accountTransfersOutgoingWithIdHttp = await nem1.account.transfers.outgoing(httpNodeUrl, address, id);
    console.log("accountTransfersOutgoingWithId(http): ", accountTransfersOutgoingWithIdHttp);
    const accountTransfersOutgoingWithHashAndIdHttps = await nem1.account.transfers.outgoing(httpsNodeUrl, address, hash, id);
    console.log("accountTransfersOutgoingWithHashAndId(https): ", accountTransfersOutgoingWithHashAndIdHttps);
    const accountTransfersOutgoingWithHashAndIdHttp = await nem1.account.transfers.outgoing(httpNodeUrl, address, hash, id);
    console.log("accountTransfersOutgoingWithHashAndId(http): ", accountTransfersOutgoingWithHashAndIdHttp);
})();
```

- result (json)

```json
{
	"data": [{
		"meta": {
			"innerHash": {},
			"id": 7742466,
			"hash": {
				"data": "5fb538e651ee77982c4991bf07991aae7cf4a15340d6bfdebdb31eafed9ddbb2"
			},
			"height": 2498258
		},
		"transaction": {
			"timeStamp": 151196522,
			"amount": 27800000,
			"signature": "408be825c380465d67cb9ebece4c96c43f9782f2260cbdd05c55b335df0b030d4e8fe0f0de171c1a7873f6a344aebefe9709666a177ccc182cc05b4c68075106",
			"fee": 100000,
			"recipient": "NAGJG3QFWYZ37LMI7IQPSGQNYADGSJZGJRD2DIYA",
			"mosaics": [],
			"type": 257,
			"deadline": 151282922,
			"message": {
				"payload": "35666638666665353933656230373837",
				"type": 1
			},
			"version": 1744830466,
			"signer": "051beb2871a4dad21bb8b241a49837442a46a5628fc0c3951ae322121508a4a1"
		}
	}, {
		"meta": {
			"innerHash": {},
			"id": 7711295,
			"hash": {
				"data": "4e993678493cdc6b11a79a44e54e5f63b99d1e34348b4687010fc3ed334a88bd"
			},
			"height": 2496807
		},
		"transaction": {
			"timeStamp": 151108271,
			"amount": 28400000,
			"signature": "27c1544d063383c69a76bc57095ee63c35574538d37adfbdd98a4511e926228061d3d567182b4fa3c8f8e4371559e1daddb7ebed7879662650aa41299781820c",
			"fee": 100000,
			"recipient": "NAGJG3QFWYZ37LMI7IQPSGQNYADGSJZGJRD2DIYA",
			"mosaics": [],
			"type": 257,
			"deadline": 151194671,
			"message": {
				"payload": "35666638666665353933656230373837",
				"type": 1
			},
			"version": 1744830466,
			"signer": "051beb2871a4dad21bb8b241a49837442a46a5628fc0c3951ae322121508a4a1"
		}
	}, ...max 25 times repeat]
}
```

- result (all)

```
proxyFetch.js:9 {data: Array(25)}
main.js:70 accountTransfersOutgoing(https):  {data: Array(25)}
usualFetch.js:6 {data: Array(25)}
main.js:72 accountTransfersOutgoing(http):  {data: Array(25)}
main.js:75 id:  6661885
main.js:76 hash:  1756feb260762f2382f34168efab36806bbf669980d5e1633e9036ae558a45c9
proxyFetch.js:9 {data: Array(25)}
main.js:78 accountTransfersOutgoingWithId(https):  {data: Array(25)}
usualFetch.js:6 {data: Array(25)}
main.js:80 accountTransfersOutgoingWithId(http):  {data: Array(25)}
proxyFetch.js:9 {data: Array(25)}
main.js:82 accountTransfersOutgoingWithHashAndId(https):  {data: Array(25)}
usualFetch.js:6 {data: Array(25)}
main.js:84 accountTransfersOutgoingWithHashAndId(http):  {data: Array(25)}
```

#### nem1.account.transfers.all

- api

address only (you can get 25 tx history.)

https://nemlovely1.supernode.me:7891/account/transfers/all?address=NAX3EP4EKUMLH4T3N7GJSTQDG2AMUK5T26P5EA2M

http://nemlovely1.supernode.me:7890/account/transfers/all?address=NAX3EP4EKUMLH4T3N7GJSTQDG2AMUK5T26P5EA2M

address and tx id (you can get 25 tx history from the tx id previous)

https://nemlovely1.supernode.me:7891/account/transfers/all?address=NAX3EP4EKUMLH4T3N7GJSTQDG2AMUK5T26P5EA2M&id=7742266

http://nemlovely1.supernode.me:7890/account/transfers/all?address=NAX3EP4EKUMLH4T3N7GJSTQDG2AMUK5T26P5EA2M&id=7742266

address, tx hash and tx id (you can get 25 tx history from the tx id and hash previous)

https://nemlovely1.supernode.me:7891/account/transfers/all?address=NAX3EP4EKUMLH4T3N7GJSTQDG2AMUK5T26P5EA2M&hash=4e993678493cdc6b11a79a44e54e5f63b99d1e34348b4687010fc3ed334a88bd&id=7742266

http://nemlovely1.supernode.me:7890/account/transfers/all?address=NAX3EP4EKUMLH4T3N7GJSTQDG2AMUK5T26P5EA2M&hash=4e993678493cdc6b11a79a44e54e5f63b99d1e34348b4687010fc3ed334a88bd&id=7742266

- code example

```js
import { nem1 } from "./nem1-sdk.js";
await (async () => {
    const httpsNodeUrl = "https://nemlovely1.supernode.me";
    const httpNodeUrl = "http://nemlovely1.supernode.me";
    const address = "NAX3EP4EKUMLH4T3N7GJSTQDG2AMUK5T26P5EA2M";
    const accountTransfersAllHttps = await nem1.account.transfers.all(httpsNodeUrl, address);
    console.log("accountTransfersAll(https): ", accountTransfersAllHttps);
    const accountTransfersAllHttp = await nem1.account.transfers.all(httpNodeUrl, address);
    console.log("accountTransfersAll(http): ", accountTransfersAllHttp);
    const id = accountTransfersAllHttps.data.slice(-1)[0].meta.id;
    const hash = accountTransfersAllHttps.data.slice(-1)[0].meta.hash.data;
    console.log("id: ", id);
    console.log("hash: ", hash);
    const accountTransfersAllWithIdHttps = await nem1.account.transfers.all(httpsNodeUrl, address, id);
    console.log("accountTransfersAllWithId(https): ", accountTransfersAllWithIdHttps);
    const accountTransfersAllWithIdHttp = await nem1.account.transfers.all(httpNodeUrl, address, id);
    console.log("accountTransfersAllWithId(http): ", accountTransfersAllWithIdHttp);
    const accountTransfersAllWithHashAndIdHttps = await nem1.account.transfers.all(httpsNodeUrl, address, hash, id);
    console.log("accountTransfersAllWithHashAndId(https): ", accountTransfersAllWithHashAndIdHttps);
    const accountTransfersAllWithHashAndIdHttp = await nem1.account.transfers.all(httpNodeUrl, address, hash, id);
    console.log("accountTransfersAllWithHashAndId(http): ", accountTransfersAllWithHashAndIdHttp);
})();
```

- result (json)

```json
{
	"data": [{
		"meta": {
			"innerHash": {},
			"id": 7742466,
			"hash": {
				"data": "5fb538e651ee77982c4991bf07991aae7cf4a15340d6bfdebdb31eafed9ddbb2"
			},
			"height": 2498258
		},
		"transaction": {
			"timeStamp": 151196522,
			"amount": 27800000,
			"signature": "408be825c380465d67cb9ebece4c96c43f9782f2260cbdd05c55b335df0b030d4e8fe0f0de171c1a7873f6a344aebefe9709666a177ccc182cc05b4c68075106",
			"fee": 100000,
			"recipient": "NAGJG3QFWYZ37LMI7IQPSGQNYADGSJZGJRD2DIYA",
			"mosaics": [],
			"type": 257,
			"deadline": 151282922,
			"message": {
				"payload": "35666638666665353933656230373837",
				"type": 1
			},
			"version": 1744830466,
			"signer": "051beb2871a4dad21bb8b241a49837442a46a5628fc0c3951ae322121508a4a1"
		}
	}, {
		"meta": {
			"innerHash": {},
			"id": 7711295,
			"hash": {
				"data": "4e993678493cdc6b11a79a44e54e5f63b99d1e34348b4687010fc3ed334a88bd"
			},
			"height": 2496807
		},
		"transaction": {
			"timeStamp": 151108271,
			"amount": 28400000,
			"signature": "27c1544d063383c69a76bc57095ee63c35574538d37adfbdd98a4511e926228061d3d567182b4fa3c8f8e4371559e1daddb7ebed7879662650aa41299781820c",
			"fee": 100000,
			"recipient": "NAGJG3QFWYZ37LMI7IQPSGQNYADGSJZGJRD2DIYA",
			"mosaics": [],
			"type": 257,
			"deadline": 151194671,
			"message": {
				"payload": "35666638666665353933656230373837",
				"type": 1
			},
			"version": 1744830466,
			"signer": "051beb2871a4dad21bb8b241a49837442a46a5628fc0c3951ae322121508a4a1"
		}
	}, ...max 25 times repeat]
}
```

- result (json)

```
proxyFetch.js:9 {data: Array(25)}
main.js:96 accountTransfersAll(https):  {data: Array(25)}
usualFetch.js:6 {data: Array(25)}
main.js:98 accountTransfersAll(http):  {data: Array(25)}
main.js:101 id:  7551438
main.js:102 hash:  694c89998cb079289f1956ee6006069a93bd02c59ffb776d72d0d726ac3b2caf
proxyFetch.js:9 {data: Array(25)}
main.js:104 accountTransfersAllWithId(https):  {data: Array(25)}
usualFetch.js:6 {data: Array(25)}
main.js:106 accountTransfersAllWithId(http):  {data: Array(25)}
proxyFetch.js:9 {data: Array(25)}
main.js:108 accountTransfersAllWithHashAndId(https):  {data: Array(25)}
usualFetch.js:6 {data: Array(25)}
main.js:110 accountTransfersAllWithHashAndId(http):  {data: Array(25)}
```

#### nem1.account.unconfirmedTransactions

- api

https://nemlovely1.supernode.me:7891/account/unconfirmedTransactions?address=NAX3EP4EKUMLH4T3N7GJSTQDG2AMUK5T26P5EA2M

http://nemlovely1.supernode.me:7890/account/unconfirmedTransactions?address=NAX3EP4EKUMLH4T3N7GJSTQDG2AMUK5T26P5EA2M

- code example

```js
import { nem1 } from "./nem1-sdk.js";
await (async () => {
    const httpsNodeUrl = "https://nemlovely1.supernode.me";
    const httpNodeUrl = "http://nemlovely1.supernode.me";
    const address = "NAX3EP4EKUMLH4T3N7GJSTQDG2AMUK5T26P5EA2M";
    const unconfirmedTransactionsHttps = await nem1.account.unconfirmedTransactions(httpsNodeUrl, address);
    console.log("unconfirmedTransactions(https): ", unconfirmedTransactionsHttps);
    const unconfirmedTransactionsHttp = await nem1.account.unconfirmedTransactions(httpNodeUrl, address);
    console.log("unconfirmedTransactions(http): ", unconfirmedTransactionsHttp);
})();
```

- result (json)

```json
//When there is no unconfirmed transactions.
{"data":[]}

//When there is an unconfirmed transadtion.
{
	"data": [{
		"meta": {
			"data": null
		},
		"transaction": {
			"timeStamp": 151302143,
			"amount": 27700000,
			"signature": "58b43560936f5937d2b3cbf754fa5a31b8a7a92d6faf91ae44b3a6c79b11c2d60d7582a0248b4997aca2f0a143632d0e92ff6349da48e0fce613c944a5ab9501",
			"fee": 100000,
			"recipient": "NAGJG3QFWYZ37LMI7IQPSGQNYADGSJZGJRD2DIYA",
			"mosaics": [],
			"type": 257,
			"deadline": 151388543,
			"message": {
				"payload": "35666638666665353933656230373837",
				"type": 1
			},
			"version": 1744830466,
			"signer": "051beb2871a4dad21bb8b241a49837442a46a5628fc0c3951ae322121508a4a1"
		}
	}]
}
```

- result (all)

```
//When there is no unconfirmed transactions.
proxyFetch.js:9 {data: Array(0)}
main.js:119 unconfirmedTransactions(https):  {data: Array(0)}
usualFetch.js:6 {data: Array(0)}
main.js:121 unconfirmedTransactions(http):  {data: Array(0)}

//When there is an unconfirmed transaction.
proxyFetch.js:9 {data: Array(1)}
main.js:119 unconfirmedTransactions(https):  {data: Array(1)}
usualFetch.js:6 {data: Array(1)}
main.js:121 unconfirmedTransactions(http):  {data: Array(1)}
```

#### nem1.account.harvests

- api

address only (you can get 25 harvests history.)

https://nemlovely1.supernode.me:7891/account/harvests?address=NCJZ2B4GU3XHL4PQ63CPOASKEDSHYQ7MZ5FTLAA2

http://nemlovely1.supernode.me:7890/account/harvests?address=NCJZ2B4GU3XHL4PQ63CPOASKEDSHYQ7MZ5FTLAA2

address and harvest id (you can get 25 harvests history from the harvest id previous)

https://nemlovely1.supernode.me:7891/account/harvests?address=NCJZ2B4GU3XHL4PQ63CPOASKEDSHYQ7MZ5FTLAA2&id=2218012

http://nemlovely1.supernode.me:7890/account/transfers/all?address=NCJZ2B4GU3XHL4PQ63CPOASKEDSHYQ7MZ5FTLAA2&id=2218012

- code example

```js
import { nem1 } from "./nem1-sdk.js";
(async () => {
    const httpsNodeUrl = "https://nemlovely1.supernode.me";
    const httpNodeUrl = "http://nemlovely1.supernode.me";
    const address = "NCJZ2B4GU3XHL4PQ63CPOASKEDSHYQ7MZ5FTLAA2";
    const accountHarvestsHttps = await nem1.account.harvests(httpsNodeUrl, address);
    console.log("accountHarvests(https): ", accountHarvestsHttps);
    const accountHarvestsHttp = await nem1.account.harvests(httpNodeUrl, address);
    console.log("accountHarvests(http): ", accountHarvestsHttp);
    const id = accountHarvestsHttp.data.slice(-2)[0].id;
    console.log("id: ", id);
    const accountHarvestsWithIdHttps = await nem1.account.harvests(httpsNodeUrl, address, id);
    console.log("accountHarvestsWithId(https): ", accountHarvestsWithIdHttps);
    const accountHarvestsWithIdHttp = await nem1.account.harvests(httpNodeUrl, address, id);
    console.log("accountHarvestsWithId(http): ", accountHarvestWithIdHttp);
})();
```

- result (json)

```json
{
	"data": [{
		"timeStamp": 149802915,
		"difficulty": 96341609702434,
		"totalFee": 50000,
		"id": 2487985,
		"height": 2475226
	}, {
		"timeStamp": 146544016,
		"difficulty": 99497620269574,
		"totalFee": 500000,
		"id": 2432855,
		"height": 2421349
	}, ...max 25 times repeat]
}
```

- result (all)

```
proxyFetch.js:9 {data: Array(16)}
main.js:134 accountHarvests(https):  {data: Array(16)}
usualFetch.js:6 {data: Array(16)}
main.js:136 accountHarvests(http):  {data: Array(16)}
main.js:138 id:  2218012
proxyFetch.js:9 {data: Array(1)}
main.js:140 accountHarvestWithId(https):  {data: Array(1)}
usualFetch.js:6 {data: Array(1)}
main.js:142 accountHarvestWithId(http):  {data: Array(1)}
```

#### nem1.account.importances

- api

https://nemlovely1.supernode.me:7891/account/importances

http://nemlovely1.supernode.me:7890/account/importances

- caution

This API returns very big data.

- code example

```js
import { nem1 } from "./nem1-sdk.js";
await (async () => {
    const httpsNodeUrl = "https://nemlovely1.supernode.me";
    const httpNodeUrl = "http://nemlovely1.supernode.me";
    const accountImportancesHttps = await nem1.account.importances(httpsNodeUrl);
    console.log("accountImportances(https): ", accountImportancesHttps);
    const accountImportancesHttp = await nem1.account.importances(httpNodeUrl);
    console.log("accountImportances(http): ", accountImportancesHttp);
})();
```

- result (json)

```json
{
    "data":[
        {
            "address":"NDUY7RHJIU62CEMQKFDZPKYAM34YOJN6EMQOQTCB",
            "importance":{
                "isSet":0
            }
        }, {
            "address":"NDXBZ4MXDT2NZF35LU76QERWD4XSGNQTBLAQK2XX",
            "importance":{
                "isSet":0
            }
        }, {
            "address":"NDUQZNOPQNVOB2KVMSTU6SWK7D5V2UJNYCA3PUYM",
            "importance":{
                "isSet":0
            }
        }, {
            "address":"NB36G62KEW736CARASY52J2HPC4QFFYN6SAI3VOZ",
            "importance":{
                "isSet":0
            }
        }, {
            "address":"NDFMTC2FKYFZGRSJ2GWTWJHINE3M76UCHK6I7KDA",
            "importance":{
                "isSet":0
            }
        }, {
            "address":"NB7YXGBFSWJ55P6WGARZZLK4HJT6HTFDPANLFWRW",
            "importance":{
                "isSet":0
            }
        }, {
            "address":"NAY5MLD233AF3Z7E2TQAEMO7THL75NDWQUA6ELVY",
            "importance":{
                "score":1.2164646962218025E-5,
                "ev":6.352851984647543E-5,
                "isSet":1,
                "height":2500076
            }
        }, {
            "address":"NBN72P4YU4LR5VC76XFRGMFRHWCNBJTVKQBZ3FRX",
            "importance":{
                "isSet":0
            }
        }, ...so many times repeat
    ]
}
```

- result (all)

```
proxyFetch.js:9 {data: Array(763646)}
main.js:150 accountImportances(https):  {data: Array(763646)}
usualFetch.js:6 {data: Array(763646)}
main.js:152 accountImportances(http):  {data: Array(763646)}
```

#### nem1.account.namespace.page

- api

https://nemlovely1.supernode.me:7891/account/importances

http://nemlovely1.supernode.me:7890/account/importances

- code example

```js
import { nem1 } from "./nem1-sdk.js";
(async () => {
    const httpsNodeUrl = "https://nemlovely1.supernode.me";
    const httpNodeUrl = "http://nemlovely1.supernode.me";
    const address = "NAX3EP4EKUMLH4T3N7GJSTQDG2AMUK5T26P5EA2M";
    const accountNamespacePageHttps = await nem1.account.namespace.page(httpsNodeUrl, address);
    console.log("accountNamespacePage(https): ", accountNamespacePageHttps);
    const accountNamespacePageHttp = await nem1.account.namespace.page(httpNodeUrl, address);
    console.log("accountNamespacePage(http): ", accountNamespacePageHttp);
    const parentNamespace = "crypt-asset-tool";
    console.log("parentNamespace: ", parentNamespace);
    const accountNamespacePageWithParentHttps = await nem1.account.namespace.page(httpsNodeUrl, address, parentNamespace);
    console.log("accountNamespacePageWithParent(https): ", accountNamespacePageWithParentHttps);
    const accountNamespacePageWithParentHttp = await nem1.account.namespace.page(httpNodeUrl, address, parentNamespace);
    console.log("accountNamespacePageWithParent(http): ", accountNamespacePageWithParentHttp);
})();
```

- result (json)

```json
{
	"data": [{
		"owner": "NAX3EP4EKUMLH4T3N7GJSTQDG2AMUK5T26P5EA2M",
		"fqn": "salaryman-toushi",
		"height": 2117209
	}, {
		"owner": "NAX3EP4EKUMLH4T3N7GJSTQDG2AMUK5T26P5EA2M",
		"fqn": "crypt-payment",
		"height": 2500214
	}, {
		"owner": "NAX3EP4EKUMLH4T3N7GJSTQDG2AMUK5T26P5EA2M",
		"fqn": "crypt-asset-tool.crypt-payment",
		"height": 2500211
	}, {
		"owner": "NAX3EP4EKUMLH4T3N7GJSTQDG2AMUK5T26P5EA2M",
		"fqn": "next-web-tech",
		"height": 2500251
	}, {
		"owner": "NAX3EP4EKUMLH4T3N7GJSTQDG2AMUK5T26P5EA2M",
		"fqn": "crypt-asset-tool",
		"height": 2500211
	}, {
		"owner": "NAX3EP4EKUMLH4T3N7GJSTQDG2AMUK5T26P5EA2M",
		"fqn": "crypto-payment",
		"height": 2500209
	}, {
		"owner": "NAX3EP4EKUMLH4T3N7GJSTQDG2AMUK5T26P5EA2M",
		"fqn": "crypt-asset-tool.test",
		"height": 2500211
	}]
}
```

- result (all)

```
proxyFetch.js:9 {data: Array(7)}
main.js:162 accountNamespacePage(https):  {data: Array(7)}
usualFetch.js:6 {data: Array(7)}
main.js:164 accountNamespacePage(http):  {data: Array(7)}
main.js:166 parentNamespace:  crypt-asset-tool
proxyFetch.js:9 {data: Array(2)}
main.js:168 accountNamespacePageWithParent(https):  {data: Array(2)}
usualFetch.js:6 {data: Array(2)}
main.js:170 accountNamespacePageWithParent(http):  {data: Array(2)}
```

#### nem1.account.mosaic.definition.page

- api

https://nemlovely1.supernode.me:7891/account/mosaic/definition/page?address=NAX3EP4EKUMLH4T3N7GJSTQDG2AMUK5T26P5EA2M

http://nemlovely1.supernode.me:7890/account/mosaic/definition/page?address=NAX3EP4EKUMLH4T3N7GJSTQDG2AMUK5T26P5EA2M

https://nemlovely1.supernode.me:7891/account/mosaic/definition/page?address=NAX3EP4EKUMLH4T3N7GJSTQDG2AMUK5T26P5EA2M&parent=salaryman-toushi

http://nemlovely1.supernode.me:7890/account/mosaic/definition/page?address=NAX3EP4EKUMLH4T3N7GJSTQDG2AMUK5T26P5EA2M&parent=salaryman-toushi

- code example

```js
import { nem1 } from "./nem1-sdk.js";
(async () => {
    const httpsNodeUrl = "https://nemlovely1.supernode.me";
    const httpNodeUrl = "http://nemlovely1.supernode.me";
    const address = "NAX3EP4EKUMLH4T3N7GJSTQDG2AMUK5T26P5EA2M";
    const accountMosaicDefinitionPageHttps = await nem1.account.mosaic.definition.page(httpsNodeUrl, address);
    console.log("accountMosaicDefinitionPage(https): ", accountMosaicDefinitionPageHttps);
    const accountMosaicDefinitionPageHttp = await nem1.account.mosaic.definition.page(httpNodeUrl, address);
    console.log("accountMosaicDefinitionPage(http): ", accountMosaicDefinitionPageHttp);
    const parentNamespace = "salaryman-toushi";
    console.log("parentNamespace: ", parentNamespace);
    const accountMosaicDefinitionPageWithParentNamespaceHttps = await nem1.account.mosaic.definition.page(httpsNodeUrl, address, parentNamespace);
    console.log("accountMosaicDefinitionPageWithParentNamespace(https): ", accountMosaicDefinitionPageWithParentNamespaceHttps);
    const accountMosaicDefinitionPageWithParentNamespaceHttp = await nem1.account.mosaic.definition.page(httpNodeUrl, address, parentNamespace);
    console.log("accountMosaicDefinitionPageWithParentNamesapce(http): ", accountMosaicDefinitionPageWithParentNamespaceHttp);
})();
```

- result (json)

```json
{
	"data": [{
		"creator": "051beb2871a4dad21bb8b241a49837442a46a5628fc0c3951ae322121508a4a1",
		"description": "This token is only for test.",
		"id": {
			"namespaceId": "crypt-asset-tool.test",
			"name": "test"
		},
		"properties": [{
			"name": "divisibility",
			"value": "0"
		}, {
			"name": "initialSupply",
			"value": "100"
		}, {
			"name": "supplyMutable",
			"value": "true"
		}, {
			"name": "transferable",
			"value": "true"
		}],
		"levy": {}
	}, {
		"creator": "051beb2871a4dad21bb8b241a49837442a46a5628fc0c3951ae322121508a4a1",
		"description": "This token is only for test.",
		"id": {
			"namespaceId": "salaryman-toushi",
			"name": "test"
		},
		"properties": [{
			"name": "divisibility",
			"value": "0"
		}, {
			"name": "initialSupply",
			"value": "100"
		}, {
			"name": "supplyMutable",
			"value": "true"
		}, {
			"name": "transferable",
			"value": "true"
		}],
		"levy": {}
	}, {
		"creator": "051beb2871a4dad21bb8b241a49837442a46a5628fc0c3951ae322121508a4a1",
		"description": "NEMもくもく会@東京のハンズオンで作成した記念のトークンです。\nThis token is memorial token in meet up Tokyo to learn about NEM.",
		"id": {
			"namespaceId": "salaryman-toushi",
			"name": "mokumoku"
		},
		"properties": [{
			"name": "divisibility",
			"value": "0"
		}, {
			"name": "initialSupply",
			"value": "20"
		}, {
			"name": "supplyMutable",
			"value": "true"
		}, {
			"name": "transferable",
			"value": "true"
		}],
		"levy": {}
	}]
}
```

- result (all)

```
proxyFetch.js:9 {data: Array(3)}
main.js:180 accountMosaicDefinitionPage(https):  {data: Array(3)}
usualFetch.js:6 {data: Array(3)}
main.js:182 accountMosaicDefinitionPage(http):  {data: Array(3)}
main.js:184 parentNamespace:  salaryman-toushi
proxyFetch.js:9 {data: Array(2)}
main.js:186 accountMosaicDefinitionPageWithParentNamespace(https):  {data: Array(2)}
usualFetch.js:6 {data: Array(2)}
main.js:188 accountMosaicDefinitionPageWithParentNamesapce(http):  {data: Array(2)}
```

#### nem1.account.mosaic.owned

- api

https://nemlovely1.supernode.me:7891/account/mosaic/owned?address=NAX3EP4EKUMLH4T3N7GJSTQDG2AMUK5T26P5EA2M

http://nemlovely1.supernode.me:7890/account/mosaic/owned?address=NAX3EP4EKUMLH4T3N7GJSTQDG2AMUK5T26P5EA2M

- code example

```js
import { nem1 } from "./nem1-sdk.js";
(async () => {
    const httpsNodeUrl = "https://nemlovely1.supernode.me";
    const httpNodeUrl = "http://nemlovely1.supernode.me";
    const address = "NAX3EP4EKUMLH4T3N7GJSTQDG2AMUK5T26P5EA2M";
    const accountMosaicOwnedHttps = await nem1.account.mosaic.owned(httpsNodeUrl, address);
    console.log("accountMosaicOwned(https): ", accountMosaicOwnedHttps);
    const accountMosaicOwnedHttp = await nem1.account.mosaic.owned(httpNodeUrl, address);
    console.log("accountMosaicOwned(http): ", accountMosaicOwnedHttp);
})();
```

- result (json)

```json
{
	"data": [{
		"quantity": 4448299306,
		"mosaicId": {
			"namespaceId": "nem",
			"name": "xem"
		}
	}, {
		"quantity": 2,
		"mosaicId": {
			"namespaceId": "opening-line",
			"name": "fific"
		}
	}, {
		"quantity": 12,
		"mosaicId": {
			"namespaceId": "salaryman-toushi",
			"name": "mokumoku"
		}
	}, {
		"quantity": 100,
		"mosaicId": {
			"namespaceId": "salaryman-toushi",
			"name": "test"
		}
	}, {
		"quantity": 100000000,
		"mosaicId": {
			"namespaceId": "prx",
			"name": "xpx"
		}
	}, {
		"quantity": 100,
		"mosaicId": {
			"namespaceId": "crypt-asset-tool.test",
			"name": "test"
		}
	}, {
		"quantity": 1,
		"mosaicId": {
			"namespaceId": "shizui",
			"name": "chiroru"
		}
	}, {
		"quantity": 1,
		"mosaicId": {
			"namespaceId": "tomato",
			"name": "ripe"
		}
	}, {
		"quantity": 1,
		"mosaicId": {
			"namespaceId": "happiness",
			"name": "kujibiki2019"
		}
	}, {
		"quantity": 100000000,
		"mosaicId": {
			"namespaceId": "comsa",
			"name": "cms"
		}
	}, {
		"quantity": 1000000,
		"mosaicId": {
			"namespaceId": "hase",
			"name": "coin"
		}
	}]
}
```

- result (all)

```
proxyFetch.js:9 {data: Array(11)}
main.js:197 accountMosaicOwned(https):  {data: Array(11)}
usualFetch.js:6 {data: Array(11)}
main.js:199 accountMosaicOwned(http):  {data: Array(11)}
```

### nem1.chain

#### nem1.chain.height

- api

https://nemlovely1.supernode.me:7891/chain/height

http://nemlovely1.supernode.me:7890/chain/height

- code example

```js
import { nem1 } from "./nem1-sdk.js";
(async () => {
    const httpsNodeUrl = "https://nemlovely1.supernode.me";
    const httpNodeUrl = "http://nemlovely1.supernode.me";
    const chainHeightHttps = await nem1.chain.height(httpsNodeUrl);
    console.log("chainHeight(https): ", chainHeightHttps);
    const chainHeightHttp = await nem1.chain.height(httpNodeUrl);
    console.log("chainHeight(http): ", chainHeightHttp);
})();
```

- result (json)

```json
{"height":2501758}
```

- result (all)

```
proxyFetch.js:9 {height: 2501766}
main.js:207 chainHeight(https):  {height: 2501766}
usualFetch.js:6 {height: 2501766}
main.js:209 chainHeight(http):  {height: 2501766}
```

#### nem1.chain.score

- api

https://nemlovely1.supernode.me:7891/chain/score

http://nemlovely1.supernode.me:7890/chain/score

- code example

```js
import { nem1 } from "./nem1-sdk.js";
(async () => {
    const httpsNodeUrl = "https://nemlovely1.supernode.me";
    const httpNodeUrl = "http://nemlovely1.supernode.me";
    const chainScoreHttps = await nem1.chain.score(httpsNodeUrl);
    console.log("chainScore(https): ", chainScoreHttps);
    const chainScoreHttp = await nem1.chain.score(httpNodeUrl);
    console.log("chainScore(http): ", chainScoreHttp);
})();
```

- result (json)

```json
{"score":"0e8604914c523c591e"}
```

- result (all)

```
proxyFetch.js:9 {score: "0e86043d175e83ed9e"}
main.js:217 chainScore(https):  {score: "0e86043d175e83ed9e"}
usualFetch.js:6 {score: "0e86043d175e83ed9e"}
main.js:219 chainScore(http):  {score: "0e86043d175e83ed9e"}
```

#### nem1.chain.lastBlock

- api

https://nemlovely1.supernode.me:7891/chain/last-block

http://nemlovely1.supernode.me:7890/chain/last-block

- code example

```js
await (async () => {
    const httpsNodeUrl = "https://nemlovely1.supernode.me";
    const httpNodeUrl = "http://nemlovely1.supernode.me";
    const chainLastBlockHttps = await nem1.chain.lastBlock(httpsNodeUrl);
    console.log("chainLastBlock(https): ", chainLastBlockHttps);
    const chainLastBlockHttp = await nem1.chain.lastBlock(httpNodeUrl);
    console.log("chainLastBlock(http): ", chainLastBlockHttp);
})();
```

- result (json)

```json
{
	"timeStamp": 151795395,
	"signature": "69d2edf5f9065f03fbdf87f2dd6f74e793df0089a8cd0d5522e123b2c181dcb72dfb95aa0a251cabd167146f678aeb4bbd52b375fcf0ef05f44193de657ba901",
	"prevBlockHash": {
		"data": "e10ec3756dee6d78b08a253374715039abe7c0da213aeaf61a65cd6c7c19510e"
	},
	"type": 1,
	"transactions": [{
		"timeStamp": 151795281,
		"amount": 1000000,
		"signature": "4202d0232d81a4503907a66482b677e64576b8c40cf740e61a0ad46f6ef7102b304f72b66bc3f8569cb35b38a27d966e3d7907d15f3d9fb67a4ebfd6b74af400",
		"fee": 50000,
		"recipient": "NATAW23QBGZAZI4B4HLZGWCA4UINHUF37F7ZI4ZP",
		"mosaics": [{
			"quantity": 1500,
			"mosaicId": {
				"namespaceId": "rubyplaynetwork",
				"name": "ruby"
			}
		}],
		"type": 257,
		"deadline": 151881681,
		"message": {},
		"version": 1744830466,
		"signer": "bb053caad60b5b8587475f06cb41284e15cd5de48dd9fb58fb9d928fc42cde3d"
	}, {
		"timeStamp": 151795283,
		"amount": 1000000,
		"signature": "7ca8cdc87d63eb0e2ce583e75d3df1e0c9d3e0cd9e0094ecda379a25093851c459a96bd7ff5407641f857086290d46769cd0facb650193842b39f06b5e16f60b",
		"fee": 50000,
		"recipient": "NDV2U5O7RROGOJP2XVP7EWBBFYCW67SI5RZ25KIG",
		"mosaics": [{
			"quantity": 1200,
			"mosaicId": {
				"namespaceId": "rubyplaynetwork",
				"name": "ruby"
			}
		}],
		"type": 257,
		"deadline": 151881683,
		"message": {},
		"version": 1744830466,
		"signer": "14d676b496124ba0cb446d2def0a8eea68cc82d74bc647f2ee865b20176b04db"
	}, ... max 120 repeat],
	"version": 1744830465,
	"signer": "c03ce79497758950485d7e140a79f70961ac65ddd7d79204ad4da013bab45fe0",
	"height": 2508166
}
```

- result (all)

```
usualFetch.js:6 {timeStamp: 151796183, signature: "eb89bfbfc6d65e6facd30ba1977ba526645fe973c67c8949ea…a170818d56334bdc9faa857b6edfe8c7a4425ab1c3a41c501", prevBlockHash: {…}, type: 1, transactions: Array(120), …}
main.js:229 chainLastBlock(http):  {timeStamp: 151796183, signature: "eb89bfbfc6d65e6facd30ba1977ba526645fe973c67c8949ea…a170818d56334bdc9faa857b6edfe8c7a4425ab1c3a41c501", prevBlockHash: {…}, type: 1, transactions: Array(120), …}
```