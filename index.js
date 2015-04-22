'use strict';

var bitcore = require('bitcore');

var Networks = bitcore.Networks;

var PrivateKey = bitcore.PrivateKey;


Networks.defaultNetwork = Networks.testnet;

var k = PrivateKey.fromRandom();
console.log('private', k.toString());

var pubKey = k.publicKey;
console.log('public', pubKey.toString());

var address = k.toAddress();
console.log('address', address.toString());

