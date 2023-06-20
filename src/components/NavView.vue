<template lang="html">
    <div class="nav">
        <div class="nav__container">
            <h5>Accaut</h5>
            <h5>About me</h5>
            <h5>Skills</h5>
        </div>
    </div>
</template>
<script setup>
    
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