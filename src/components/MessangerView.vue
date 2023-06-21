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

    </div>
</template>
<script setup>
import { useStore } from 'vuex';
const store = useStore();

</script>
<style lang="scss" scoped>
$index: calc(1vw + 1vh);
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