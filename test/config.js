'use strict';

const should = require('should');
const Config = require('../lib/config').Config;

// This is how we specify the config directory
process.env.NODE_CONFIG_DIR = __dirname + '/config';

describe('default.json', () => {

    describe('No decrypt specified', () => {

        it('should return value unchanged', () => {
            const config = new Config();
            config.config.string.should.equal('a');
        });
    });

});

