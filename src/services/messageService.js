import store from "@/store";
import axios from "axios";

async function getMessages (user) {
    let messages = undefined;
    if(user) {
        await axios.post(store.state.url + '/messages/getMessages', {
            // headers: {
            //     Authorization: `Bearer ${store.state.token}`
            // }
            fromId: user.id,
            toId: 1,
        }).then(res => {
            console.log(res.data, res.headers, res.status,"success");
            if(res.status === 200) {
                messages = res.data;
            }
        }).catch(err => {console.log(err);});
    }
    return messages;
}

async function createMessage (message) {
    let result = undefined;
    await axios.post(store.state.url + '/messages/createMessage', message).then(res => {
        console.log(res.data, res.headers, res.status,"success");

        if(res.status === 200) result = true;
        else result = false;
        
    }).catch(err => {console.log(err);});
    return result;
}

export {
    getMessages,
    createMessage,
}