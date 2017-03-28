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
                const real = val.substr(_start.length).slice(0, -(_end.length));
                return decrypt(real);
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
        return val.startsWith(_start) && val.endsWith(_end);
    }
}

module.exports.Config = Config;

