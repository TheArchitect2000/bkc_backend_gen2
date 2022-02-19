/**
 * added by mehdi
 * conf of mail sender
 * @type {{url: string}}
 */

let mailconfig = {};
let whichserver = require('./which.config').whichserver;
if(whichserver === 'iabt') {
    mailconfig = {
        host: 'mail.iabt.io',
        port: 587,
        auth: {
            user: 'iasmarthome@iabt.io',
            pass: 'ghormehsabzi2020@'
        },
        tls: {rejectUnauthorized: false},
        templates: 'views/emailtemplates/'
    }
} else if(whichserver === 'devcopa') {
    mailconfig = {
        host: 'mail.devcopa.com',
        port: 587,
        auth: {
            user: 'panel@devcopa.com',
            pass: 'salam@123'
        },
        tls: {rejectUnauthorized: false},
        templates: 'views/emailtemplates/'
    }
} else if(whichserver === 'local') {
    mailconfig = {
        host: 'smtp.ipage.com',
        port: 587,
        auth: {
            user: 'iasmarthome@internetanywhere.io',
            pass: 'Salam@4321'
        },
        tls: {rejectUnauthorized: false},
        templates: 'views/emailtemplates/'
    }
} else if(whichserver === 'blocklychain') {
    mailconfig = {
        host: 'smtp.ipage.com',
        port: 587,
        auth: {
            user: 'panel@blocklychain.io',
            pass: 'Salam@1234'
        },
        tls: {rejectUnauthorized: false},
        templates: 'views/emailtemplates/'
    }
}

module.exports = {
    mailconfig : mailconfig
}
