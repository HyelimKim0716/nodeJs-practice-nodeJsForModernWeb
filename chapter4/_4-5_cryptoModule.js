const crypto = require('crypto');

const shasum = crypto.createHash('sha256');
shasum.update('crypto_hash');

const output = shasum.digest('hex');
console.log('crypto_hash:', output);

const key = 'mySecretKey';
const input = 'PASSWORD';

const cipher = crypto.createCipher('aes192', key);
cipher.update(input, 'utf8', 'base64');
const cipheredOutput = cipher.final('base64');

const decipher = crypto.createDecipher('aes192', key);
decipher.update(cipheredOutput, 'base64', 'utf8');
const decipheredOutput = decipher.final('utf8');

console.log('original String: ' + input);
console.log('ciphered string: ' + cipheredOutput);
console.log('deciphered string: ' + decipheredOutput);