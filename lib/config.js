'use strict';

const _ = require('lodash');
const assert = require('assert');

const _start = 'ENC(';
const _end = ')';

class Config {

    constructor(decrypt) {
        this.orig = require('config');
        Object.freeze(this.orig);
        decrypt = decrypt || ((val) => {
                return val;
            });
        assert(typeof decrypt === 'function', "Given parameter MUST be a function");
        this.config = _.cloneDeepWith(this.orig, val => {
            if (typeof val === 'string' && this._isEncrypted(val)) {
                const real = val.substr(_start.length).slice(-(_end.length));
                return this._decrypt(real);
            }
        });
    }

    /**
     * Whether given <i>val</i> is encrypted.
     * <p>
     * For now, we expect a <code>string</p> here.
     * </p>
     *
     * @param val the value to check.
     */
    _isEncrypted(val) {
        return val.startsWith(this._start) && val.endsWith(this._end);
    }

    /**
     * Decrypts given <i>val</i>.
     *
     * @param val the value to decrypt.
     * @returns the decrypted value.
     */
    _decrypt(val) {
        return this._decrypt(val);
    }
}

module.exports.Config = Config;

