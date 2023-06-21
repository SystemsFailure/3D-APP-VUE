<template lang="html">
    <div class="auth">
        <h3>Registration and authorization window</h3>
        <img @click="store.commit('ch_visible_auth_window', false)" width="30" height="30" src="https://img.icons8.com/material/48/ffffff/delete-sign--v1.png" alt="delete-sign--v1"/>

        <div class="auth__container">
            <Transition name="slide-up">
                <div class="loggin_form" v-if="showAuthView">
                    <input id="em-id" type="text" placeholder="E-mail"  v-model="fieldEmail" @input="test_input">
                    <input type="text" placeholder="Password"  v-model="fieldPassword">
                    <h5>Don't have a <span @click="showAuthView = false">account</span></h5>
                    <button @click="auth">auth</button>
                </div>

            </Transition>
            <Transition name="slide-up">
                <div class="signin_form" v-if="!showAuthView">
                    <input id="name-id" type="text" placeholder="Enter name" v-model="fieldRegisName">
                    <input id="em-id" type="text" placeholder="E-mail" v-model="fieldRegisEmail">
                    <input type="text" placeholder="Password" v-model="fieldRegisPassword">
                    <h5>Already have an <span @click="showAuthView = true">account</span></h5>
                    <button @click="regis">regis</button>
                </div>
            </Transition>

        </div>
    </div>
</template>
<script setup>
import store from '@/store';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import { authUser, regisUser } from '@/services/userService';

const router = useRouter();

const fieldEmail = ref(undefined);
const fieldPassword = ref(undefined);

const fieldRegisName = ref(undefined);
const fieldRegisEmail = ref(undefined);
const fieldRegisPassword = ref(undefined);

let showAuthView = ref(true);

async function auth() {
    await authUser(fieldEmail.value, fieldPassword.value).then(resultData => {
        if(resultData.result === true) {
            console.log('rsData', resultData);
            fieldEmail.value = '';
            fieldPassword.value = '';
            localStorage.setItem('user', JSON.stringify(resultData.user));
            store.commit('setAuth', true);
        } else {
            console.log('so user is not defined in base, sorry');
            fieldEmail.value = '';
            fieldPassword.value = '';
            alert('so user is not exists');
            return;
        }
    })
}

function regis() {
    let result = regisUser(fieldRegisName.value, fieldRegisEmail.value, fieldRegisPassword.value);
    result ? router.push('/confirm') : console.log('dont regis'); return;
}

</script>

<style lang="scss" scoped>

.auth {
    position: absolute;
    top: 0;
    right: 0;
    width: calc(var(--index) * 20);
    height: 100%;
    background-color: rgba($color: #000000, $alpha: .2);
    backdrop-filter: blur(12px);

    display: flex;
    flex-direction: column;
    justify-content: center;

    z-index: 1;

    .auth__container {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .signin_form {
            width: 100%;
            height: 50%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            position: absolute;
            top: 50%;
            left: 50%;
            margin-right: -50%;
            transform: translate(-50%, -50%);
            
            input {
                width: calc(var(--index) * 14);
                height: calc(var(--index) * 1.2);
                margin-top: 10px;
                background-color: transparent;
                outline: none;
                border: 1px solid rgba($color: #c5c5c5, $alpha: .5);
                padding: calc(var(--index) * .7);
                color: white;
            }
    
            h5 {
                margin-top: 15px;
    
                span {
                    color:#c897ff;
                    &:hover {
                        cursor: pointer;
                        opacity: .5;
                        transition: .3s;
                    }
                }
            }

            button {
                position: absolute;
                right: 50px;
                bottom: 50px;
                padding: calc(var(--index) * .3) calc(var(--index) * 1);
            }
        }
        .loggin_form {
            width: 100%;
            height: 50%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            position: absolute;
            top: 50%;
            left: 50%;
            margin-right: -50%;
            transform: translate(-50%, -50%);
            
            input {
                width: calc(var(--index) * 14);
                height: calc(var(--index) * 1.2);
                margin-top: 10px;
                background-color: transparent;
                outline: none;
                border: 1px solid rgba($color: #c5c5c5, $alpha: .5);
                padding: calc(var(--index) * .7);
                color: white;
            }
    
            h5 {
                margin-top: 15px;
    
                span {
                    color:#c897ff;
                    &:hover {
                        cursor: pointer;
                        opacity: .5;
                        transition: .3s;
                    }
                }
            }

            button {
                position: absolute;
                right: 50px;
                bottom: 50px;
                padding: calc(var(--index) * .3) calc(var(--index) * 1);
            }
        }

    }

    h3 {
        margin-top: 3%;

        font-size: calc(var(--index) * 0.6);
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        text-transform: uppercase;
        letter-spacing: calc(var(--index) * -0.01);
        line-height: 1.8em;
    }

    img {
        position: absolute;
        left: 0;
        transform: translateX(-40px) translateY(10px);
        &:hover {
            cursor: pointer;
            opacity: .5;
            transition: .3s;
        }
    }
}

</style>