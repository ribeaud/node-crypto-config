[![NPM](https://nodei.co/npm/crypto-config.svg?downloads=true&downloadRank=true)](https://nodei.co/npm/crypto-config/)
[![Build Status](https://travis-ci.org/ribeaud/node-crypto-config.svg?branch=master)](https://travis-ci.org/ribeaud/node-crypto-config)

node-crypto-config
=============

Small **Node** [Config](https://github.com/lorenwest/node-config) extension which supports encryption.

Installation
------------
```bash
  npm install crypto-config
```
Usage
-----
This library is a wrapper around [Config](https://github.com/lorenwest/node-config). On instantiation, each **string** property
value matching the pattern `ENC(<encrypted-value>)` will go through the _handler_ specified in the constructor.
```javascript
const assert = require('assert');
const crypto = require('crypto');
const algorithm = 'aes-256-ctr';
const Config = require('crypto-config';
// The key which has been used to encrypt the password
const salt = 'secret';

// This is the handler to decrypt your encrypted values
function decrypt(val) {
    assert(text, "Unspecified text");
    const decipher = crypto.createDecipher(algorithm, salt);
    let dec = decipher.update(text, 'hex', 'utf8');
    dec += decipher.final('utf8');
    return dec;
}

// 'crypto-config' instantiation with handler.
const config = new Config(val => {
    return decrypt(val);
}).config;
```
The **Config** contains two properties: _orig_ (original configuration values) and _config_ (the handled configuration values).