/**
 * added by mehdi
 * conf of broker
 * @type {{url: string}}
 */
var brokerconfig = {
    SECURE_KEY : __dirname + '/../secure/localhost/localhost-key.pem',
    SECURE_CERT : __dirname + '/../secure/localhost/localhost.pem',
    SECURE_KEY20 : __dirname + '/../secure/iabroker.certificate.key',
    SECURE_CERT20 : __dirname + '/../secure/iabroker.certificate.crt',
};

let whichserver = require('./which.config').whichserver;

if(whichserver === 'iabt') {
    brokerconfig = {
        // SECURE_KEY : __dirname + '/../secure/iabroker.iabt.io/private.key',
        // SECURE_CERT : __dirname + '/../secure/iabroker.iabt.io/certificate.crt',
        SECURE_KEY : '/usr/local/directadmin/data/users/admin/domains/iabroker.iabt.io.key',
        SECURE_CERT : '/usr/local/directadmin/data/users/admin/domains/iabroker.iabt.io.cert',
        SECURE_KEY20 : __dirname + '/../secure/iabroker.certificate.key',
        SECURE_CERT20 : __dirname + '/../secure/iabroker.certificate.crt'
    }
} else if(whichserver === 'devcopa') {
    brokerconfig = {
        // SECURE_KEY : __dirname + '/../secure/iabroker.iabt.io/private.key',
        // SECURE_CERT : __dirname + '/../secure/iabroker.iabt.io/certificate.crt',
        SECURE_KEY : '/usr/local/directadmin/data/users/admin/domains/panel.devcopa.com.key',
        SECURE_CERT : '/usr/local/directadmin/data/users/admin/domains/panel.devcopa.com.cert',
        SECURE_KEY20 : __dirname + '/../secure/iabroker.certificate.key',
        SECURE_CERT20 : __dirname + '/../secure/iabroker.certificate.crt'
    }
} else if(whichserver === 'internetanywhere') {
    brokerconfig = {
        // SECURE_KEY : __dirname + '/../secure/iabroker.internetanywhere.io/private.key',
        // SECURE_CERT : __dirname + '/../secure/iabroker.internetanywhere.io/certificate.crt',
        SECURE_KEY : __dirname + '/../secure/iabroker.internetanywhere.io/privkey.pem',
        SECURE_CERT : __dirname + '/../secure/iabroker.internetanywhere.io/cert.pem',
        SECURE_KEY20 : __dirname + '/../secure/iabroker.certificate.key',
        SECURE_CERT20 : __dirname + '/../secure/iabroker.certificate.crt'
    }
} else if(whichserver === 'blocklychain') {
    brokerconfig = {
        SECURE_KEY : '/etc/letsencrypt/live/panel.blocklychain.io/privkey.pem',
        SECURE_CERT : '/etc/letsencrypt/live/panel.blocklychain.io/cert.pem',
        SECURE_KEY20 : __dirname + '/../secure/iabroker.certificate.key',
        SECURE_CERT20 : __dirname + '/../secure/iabroker.certificate.crt'
    }
}
// brokerUrl : 'mqtt://iabroker.internetanywhere.io:3008',
// brokerUrl : 'mqtts://localhost:3008',

module.exports = brokerconfig;