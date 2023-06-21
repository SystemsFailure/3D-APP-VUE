import { SHA1, enc } from "crypto-js";

function mutationPassword(password) {
    const hashPassword = SHA1(password, 'phrase-secret');
    return hashPassword.toString(enc.Hex);
}

export {mutationPassword};