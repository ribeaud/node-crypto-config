'use strict';

const should = require('should');
const Config = require('../lib/config');

// This is how we specify the config directory
process.env.NODE_CONFIG_DIR = __dirname + '/encrypted';

describe("'encrypted' directory", () => {

    describe('Encryption', () => {

        it('should encrypt the value', () => {
            const config = new Config((val) => {
                // Duplicate the character
                return val.repeat(2);
            });
            config.config.string.should.equal('aa');
            config.config.array[1].should.equal('bb');
            config.config.obj.string.should.equal('');
            config.config.obj.array[1].should.equal('cc');
            config.orig.obj.array[1].should.equal('ENC(c)');
        });
    });

});

