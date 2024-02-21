const otplib = require('otplib');
const data=require('./practise')
const secret = 'KVKFKRCPNZQUYMLXOVYDSQKJKZDTSRLD';
otplib.authenticator.epoch = Date.now();
//otplib.authenticator.step = 60;
//otplib.authenticator.window = 0;
//otplib.authenticator.algorithm = 'sha512';
const generateKeyUri = (emailAddress, issuer, secret) => {
    return otplib.authenticator.keyuri(emailAddress, issuer, secret);;
}
const generateTOTPToken = (secret) => {
    const token = otplib.authenticator.generate(secret);
    console.log(token);
    return token;
}
console.log(generateKeyUri('pavan@axivise.in', 'SDEX', secret))
generateTOTPToken(secret);
const verifyTOTPToken = (secret, token) => {
    const verified = otplib.authenticator.verify({
        secret: secret,
        token: token
    });
    console.log(verified)
    return verified
}