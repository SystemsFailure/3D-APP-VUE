<template lang="html">
    <div class="auth">
        <h3>Registration and authorization window</h3>
        <img @click="store.commit('ch_visible_auth_window', false)" width="30" height="30" src="https://img.icons8.com/material/48/ffffff/delete-sign--v1.png" alt="delete-sign--v1"/>

        <div class="auth__container">

            <div class="loggin_form">
                <input id="em-id" type="text" placeholder="E-mail">
                <input type="text" placeholder="Password">
                <h5>Don't have a <span>account</span></h5>
                <button>auth</button>
            </div>

            <div class="signin_form">
                <input id="em-id" type="text" placeholder="E-mail">
                <input type="text" placeholder="Enter Password">
                <input type="text" placeholder="Repeat password">
                <h5>Already have an <span>account</span></h5>
                <button>auth</button>
            </div>
        </div>
    </div>
</template>
<script setup>
import store from '@/store';


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