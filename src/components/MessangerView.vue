<template lang="html">
    <div class="messanger">
        <h3>Here you can negotiate a deal</h3>
        <img @click="store.commit('ch_visible_text_or_blockMessanger', true)" width="30" height="30" src="https://img.icons8.com/material/48/ffffff/delete-sign--v1.png" alt="delete-sign--v1"/>
        <div class="messagnger__container">

        </div>

        <h1 v-if="!store.state.auth">You are currently not logged in 
            <span 
                @click="
                    store.commit('ch_visible_auth_window', true); 
                    store.commit('ch_visible_text_or_blockMessanger', true)
                "
                >Loggin
            </span>
        </h1>

        <div class="messanger__container">
            <div class="list__messages" id="chat-uid">
                <div 
                    v-for="(message, index) in messages" 
                    class="list__message"
                    :style="message.fromId == user.id ?
                    {'margin-left' : 'auto', 'background-color': '#c897ff' } 
                    :
                    {'margin-left' : '0'}"
                >
                    <div class="list__message__header">
                        <div class="list__message__header__text">
                            <!-- <span class="list__message__header__text__name">{{message.name}}</span> -->
                            <span class="list__message__header__text__time"
                                :style="message.fromId == user.id ? {'margin-left' : 'auto'} : {'margin-left' : '0'}"
                            >{{message.createdAt}}</span>
                        </div>
                    </div>
                    <div 
                        class="list__message__body"
                        >
                            {{message.text}}
                    </div>
                </div>
            </div>
        </div>

        <div class="form__group field">
                <textarea 
                    name="messText" id='messText'
                    class="form__field"
                    type="text" 
                    placeholder="0" 
                    @keyup.enter="sendMessage"
                    v-model="messageField"
                ></textarea>
                <label for="messText" class="form__label">Type your message here...</label>
                <button class="btn__sendMessage" @click="sendMessage">отправить</button>
        </div>

    </div>
</template>
<script setup>
import { useStore } from 'vuex';
import { onMounted } from 'vue';
import {getMessages, createMessage} from '../services/messageService';
import { ref } from 'vue';
const store = useStore();

const auth_localstorage = JSON.parse(localStorage.getItem('user'));
let messages = ref(undefined);
let user = undefined;
let messageField = ref(undefined);

function scrollDownChat() {
    let block = document.getElementById("chat-uid");
    block.scrollTop = block.scrollHeight;
}

async function sendMessage() {
    if (messageField.value.length > 0) {
        const message = {
            text: messageField.value,
            fromId: auth_localstorage.id,
            toId: 1,
            createdAt: new Date().toISOString()
        };
        await getMessages()
            .then(() => {
                messages.value = [...messages.value, message];
                messageField.value = '';
            })
        const data = await createMessage(message);
        console.log(data, 'data');
        scrollDownChat();
    }
}

onMounted(async () => {
    if(auth_localstorage === null || auth_localstorage === undefined || auth_localstorage === {}){
        store.commit('setAuth', false);
    } else {
        store.commit('setAuth', true);
        user = auth_localstorage;
        document.getElementById('messText').focus();
        await getMessages(user).then(data => {
            messages.value = data;
            console.log(data, 'data');
        }).catch(error => {console.log(error)});
        scrollDownChat();
    }
})

</script>
<style lang="scss" scoped>
$index: calc(1vw + 1vh);

$primary: #c897ff;
$secondary: #ffffff;
$white: #fff;
$gray: #9b9b9b;
.messanger {
    position: absolute;
    width: calc($index * 50); 
    height: calc($index * 25);
    background-color: rgba($color: #000000, $alpha: .2);
    backdrop-filter: blur(12px);
    border-radius: .3em;

    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    z-index: 2;

    .form__group {
        position: relative;
        display: flex;
        padding: 15px 0 0;
        margin-top: 10px;
        width: 100%;
    }

    .form__field {
        font-family: inherit;
        font-weight: 200;
        width: 100%;
        border: 0;
        border-bottom: 2px solid $gray;
        outline: 0;
        font-size: 1rem;
        color: $white;
        padding: 7px 0;
        background: transparent;
        transition: border-color 0.2s;
        max-height: 40px;
        min-height: 40px;
        max-width: 94%;
        min-width: 94%;

        &::-webkit-scrollbar {
            width: 0.2em;
        }

        &::-webkit-scrollbar-track {
            -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        }

        &::-webkit-scrollbar-thumb {
            background-color: darkgrey;
            outline: 0px solid slategrey;
        }

        &::placeholder {
            color: transparent;
        }

    &:placeholder-shown ~ .form__label {
        font-size: 1rem;
        cursor: text;
        top: 20px;
    }
    }

    .btn__sendMessage {
        margin-left: auto;
    }

    .form__label {
        position: absolute;
        top: 0;
        display: block;
        transition: 0.2s;
        font-size: 1rem;
        color: $gray;
    }

    .form__field:focus {
    ~ .form__label {
        position: absolute;
        top: 0;
        display: block;
        transition: 0.2s;
        font-size: 1rem;
        color: $primary;
        font-weight:700;    
    }
        padding-bottom: 6px;  
        font-weight: 700;
        border-width: 3px;
        border-image: linear-gradient(to right, $primary,$secondary);
        border-image-slice: 1;
    }
    
    .messanger__container {
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;

        .list__messages {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            border-radius: 1em;
            padding: 10px;
            overflow-x: hidden;
            overflow-y: auto;

            &::-webkit-scrollbar {
                width: 0.2em;
            }

            &::-webkit-scrollbar-track {
                -webkit-box-shadow: inset 0 0 6px #0000004d;
            }

            &::-webkit-scrollbar-thumb {
                background-color: #c897ff;
                outline: 0px solid #c897ff;
            }

            &::placeholder {
                color: transparent;
            }

            .list__message {
                width:fit-content;
                height:auto;

                background-color: rgba($color: #000000, $alpha: .5);
                padding: 10px 20px;
                margin-top: 10px;
                max-width: 50%;

                .list__message__header {
                    width: 100%;
                    height: auto;

                    .list__message__header__text {
                        color: white;
                        font-size: 0.8em;
                        font-weight: 100;
                        width: auto;
                        height: auto;
                        display: flex;
                    }
                }

                .list__message__body {
                    width: auto;
                    height: auto;
                    float: left;
                    text-align: left;
                    word-wrap: break-word;
                    margin-top: 5px;
                }
            }
        }
    }

    h3 {
        position: absolute;
        left: 0;
        height: 30px;
        transform: translateY(-30px);

        font-size: 18px;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        text-transform: uppercase;
        letter-spacing: calc(var(--index) * -0.01);
        line-height: 1.8em;
    }

    img {
        position: absolute;
        right: 0;
        transform: translateX(40px);
        &:hover {
            cursor: pointer;
            opacity: .5;
            transition: .3s;
        }
    }

    h1 {
        position: absolute;

        top: 50%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%);

        font-size: 18px;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        text-transform: uppercase;
        letter-spacing: calc(var(--index) * -0.01);
        line-height: 1.8em;

        span {
            color: #c897ff;
            cursor: pointer;
            display: block;

            &:hover {
                opacity: .5;
                transition: .3s;
            }
        }
    }
}


</style>