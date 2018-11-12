'use strict';

const apickli = require('apickli');
const {Before, setDefaultTimeout} = require('cucumber');

Before(function() {
    this.apickli = new apickli.Apickli('http', 'apac-sg-partner04-test.apigee.net');
    this.apickli.addRequestHeader('Cache-Control', 'no-cache');
});

setDefaultTimeout(60 * 1000);
