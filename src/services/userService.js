import axios from "axios";
import store from "@/store";
import { mutationPassword } from "./hashPassword";

const User = {
    userName: undefined,
    userEmail: undefined,
    userPassword: undefined,
    
    set_userName(value) {
        this.userName = value;
    },
    
    set_userEmail(value) {
        this.userEmail = value;
    },
    
    set_userPassword(value) {
        this.userPassword = value;
    }
}

async function regisUser(name, email, password) {
    let result = undefined;
    const hashPassword = mutationPassword(password);
    await axios.post(store.state.url + '/users/createUser', {name: name, email: email, password: hashPassword}).then(res => {
        console.log(res.data, res.headers, res.status);
        result = res?.data?.result;
    }).catch(err => console.log(err));
    return result;
}

async function authUser(email, password) {
    const hashPassword = mutationPassword(password);
    await axios.post(store.state.url + '/users/authUser', {email: email, password: hashPassword}).then(res => {
        console.log(res.data, res.headers, res.status);
    }).catch(err => console.log(err));
}

export {
    User,
    authUser,
    regisUser,
}