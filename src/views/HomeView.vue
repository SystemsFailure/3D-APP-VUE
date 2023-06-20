<template lang="html">
    <section class="layers">
        <NavView></NavView>
        
        <img 
            v-if="!store.state.auth"
            @click="store.commit('ch_visible_auth_window', true);"
            class="icon__user" 
            width="32" 
            height="32" 
            src="https://img.icons8.com/material/48/ffffff/gender-neutral-user--v1.png" 
            alt="gender-neutral-user--v1"
        />
        <img 
            v-else 
            @click="store.commit('ch_visible_auth_window', true);"
            class="icon__user" 
            width="32" 
            height="32" 
            src="https://img.icons8.com/material/48/ffffff/checked-user-male--v1.png" 
            alt="checked-user-male--v1"
        />


        <div class="layers__container">
            <div class="layers__item layer-1" :style="{'background-image': 'url(' + require('../assets/layers/walp_main.png') + ')'}"></div>
            <div class="layers__item layer-2" :style="{'background-image': 'url(' + require('../assets/layers/Лавочка.png') + ')'}"></div>
            
            
            <div class="layers__item layer-6">
                <div class="hero-content">
                    <h1 v-if="store.state.visible_text_or_blockMessanger">Portfolio 3D site for <span>our deal</span></h1>
                    <button class="button-start" id="btn-deal-start">Start Deal</button>
                </div>
            </div>

            <div class="layers__item layer-3" :style="{'background-image': 'url(' + require('../assets/layers/Фонарь_1.png') + ')'}"></div>
            <div class="layers__item layer-7" :style="{'background-image': 'url(' + require('../assets/layers/BlurBlink.png') + ')'}"></div>
            <div class="layers__item layer-8" :style="{'background-image': 'url(' + require('../assets/layers/layer-6.png') + ')'}"></div>
        </div>
    </section>
    
    <AuthView v-if="store.state.visible_auth_window"></AuthView>
    <MessangerView v-if="!store.state.visible_text_or_blockMessanger"></MessangerView>

</template>
<script setup>
import MessangerView from '@/components/MessangerView.vue';
import AuthView from '@/components/AuthView.vue';
import NavView from '@/components/NavView.vue'

import { onMounted } from 'vue';
import { useStore } from 'vuex';
import { io } from "socket.io-client";

const store = useStore();

onMounted(() => {
    connect_socket();

    document.addEventListener('mousemove', e => {
    Object.assign(document.documentElement, {
        style: `
            --move-x: ${(e.clientX - window.innerWidth / 2) * -0.003}deg;
            --move-y: ${(e.clientY - window.innerHeight / 2) * -0.009}deg;
        `
        })
    })

    document.getElementById('btn-deal-start').addEventListener('click', e => {
        store.commit('ch_visible_text_or_blockMessanger', false);
    })
})

function connect_socket() {
    const URL = process.env.NODE_ENV === "production" ? undefined : "http://localhost:3000";
    const socket = io(URL);
    socket.on("connect", () => {
        console.log('conn');
    });

}
</script>
<style lang="scss" scoped>


.layers  {
    perspective: 1600px;
    overflow: hidden;
    
}

.icon__user {
    position: absolute;
    z-index: 1;
    right: 20px;
    top: 20px;
    cursor: pointer;
    &:hover {
        opacity: .5;
        transition: .3s;
    }
}

.layers__container {
    height: 100vh;
    transform-style: preserve-3d;
    transform: rotateX(var(--move-y)) rotateY(var(--move-x));
    will-change: transform;
    transition: transform var(--transition);
}

.layers__item {
    position: absolute;
    background-size: cover;
    background-position: center;
    inset: -2vw;
    display: flex;
    align-items: center;
    justify-content: center;
}

.layer-1 {
    transform: translateZ(-55px) scale(1.05);
}

.layer-2 {
    transform: translateZ(60px) scale(.88);
}

.layer-3 {
    transform: translateZ(50px) scale(.88);
}

.layer-4 {
    transform: translateZ(10px) scale(.88);
}

.layer-5 {
    transform: translateZ(10px) scale(.88);
}

.layer-7 {
    transform: translateZ(120px) scale(1.5);
    opacity: 0.5;
}

.layer-8 {
    transform: translateZ(120px) scale(1.5);
}

.layer-6 {
    position: absolute;
    transform: translateZ(100px);
}

.hero-content {
    font-size: calc(var(--index) * 2);
    text-transform: uppercase;
    letter-spacing: calc(var(--index) * -.15);
    line-height: 1.3em;
}

.hero-content span {
    display: block;
}

.button-start {
    display: block;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 600;
    text-transform: uppercase;
    font-size: calc(var(--index) * .50);
    letter-spacing: -.02vw;
    padding: calc(var(--index) * 0.5);
    background-color: transparent;
    color: white;
    border-radius: 1em;
    margin-top: calc(var(--index) * 0.5);
    border: 1px solid rgb(255, 255, 255 / .3);
    outline: none;
    cursor: pointer;
}

.layer-3 .layer-7 .layer-3 .layer-2{
    pointer-events: none;
}

.layer-7 {
    pointer-events: none;
}

.layer-8 {
    pointer-events: none;
}
</style>