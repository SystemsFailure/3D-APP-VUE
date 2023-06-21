<template lang="html">
    <div class="nav">
        <div class="nav__container">
            <h5 @click="reloadPage()">Home</h5>
            <h5 @click="store.commit('ch_visible_about_window', true)">About me</h5>
            <h5 @click="store.commit('cv_visible_skills_window', true)">Skills</h5>
        </div>
    </div>
</template>
<script setup>
import store from '@/store';

function reloadPage() {
    window.location.reload();
}
    
</script>
<style lang="scss" scoped>
.nav {
    width: 100%;
    height: calc(var(--index) * 2);
    position: fixed;
    top: 0;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    .nav__container {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        h5 {
            margin-left: 20px;
            font-size: 15px;
            text-transform: uppercase;
            cursor: pointer;

            &:hover {
                opacity: .5;
                transition: .3s;
                color: #c897ff;
            }
        }
    }
}

</style>