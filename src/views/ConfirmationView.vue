<template lang="html">
    <div class="confirmationWindow">
        <div class="confirmationWindow__container">
            confirm your email address, check your mail

            <div class="number_box">
                <input type="text" placeholder="numbers from mail..." max="6" min="0" v-model="fieldNumber">
                <button @click="confirmMail">confirm</button>
            </div>

            <div v-if="countdown > 0" class="time_container"><span>Осталось до повторной отправки письма вам на почту : {{ countdown }} second</span></div>
            <div v-else class="send_repeat_to_mail" @click="sendToMail">send to mail</div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import { onUpdated, onMounted } from 'vue';
import { SHA1,enc } from "crypto-js";
import sha256 from 'crypto-js/sha256';

let countdown = ref(countdown_());
let fieldNumber = ref(undefined);

setInterval(() => {
    if(countdown.value <= 0) return;
    else countdown.value -= 1;
}, 1000);

function countdown_() {
    let count_local = localStorage.getItem('time_countdown');
    if(count_local) {
        let parsed_count = parseInt(count_local);
        if(isNaN(parsed_count) || parsed_count === 0) return 30;
        else return parsed_count;
    } else {
        return 30;
    }
}

function confirmMail() {
    if(fieldNumber.value.length !== 0) {
        let parsed_num = parseInt(fieldNumber.value);
        if(isNaN(parsed_num) || parsed_num === 0) console.log('number invalid');
        else {
            parsed_num = sha256(`${parsed_num}`, '-random-');
            console.log(parsed_num.toString(enc.Hex) === localStorage.getItem('randomValues'))
        }
    }
}

function hashRandomNumbers() {
    let cryptoStor = new Uint16Array(8);
    const randomNumbers = window.crypto.getRandomValues(cryptoStor);
    console.log(randomNumbers[0]);
    const randomHash = sha256(`${randomNumbers[0]}`, '-random-');
    localStorage.setItem('randomValues', randomHash.toString(enc.Hex));
    console.log(randomHash.toString(enc.Hex), 'randomHash');
    
}

onMounted(() => {
    hashRandomNumbers();
})

onUpdated(() => {
    localStorage.setItem('time_countdown', countdown.value);
})

function sendToMail() {
    console.log('send to mail');
}

</script>
<style lang="scss" scoped>

.confirmationWindow {
    width: 100%;
    height: 100vh;
    background-color: white;
    color: black;

    .confirmationWindow__container {
        width: 100%;
        height: 100%;
        padding: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .send_repeat_to_mail {
            text-decoration: underline;
            &:hover {
                cursor: pointer;
                opacity: .5;
                transition: .3s;
            }
        }

        .number_box {
            width: 50%;
            height: 30%;
            display: flex;
            align-items: center;
            justify-content: center;

            input {
                width: calc(var(--index) * 10);
                padding: calc(var(--index) * 1) calc(var(--index) * 0.5);
                height: 30px;
                outline: none;
                border: none;
                color: black;
                background-color: antiquewhite;
            }
            button {
                width: calc(var(--index) * 6);
                padding: calc(var(--index) * 1) calc(var(--index) * 0.5);
                height: 30px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: black;
                // background-color: antiquewhite;
                text-transform: uppercase;
                text-align: center;
                font-weight: 500;
                font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                margin-left: 10px;

                &:hover {
                    cursor: pointer;
                    opacity: .5;
                    transition: .3s;
                }
            }
        }
    }
}

</style>