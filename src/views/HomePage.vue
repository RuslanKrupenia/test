<template>
<div class="home__container">
    <HomeComponent/>
    <HomeMenuComponent v-on:categoryChanged="onCategoryChange"/>
    <HomeMenuListComponent/>

</div>
</template>

<script>
    import HomeComponent from '../components/HomeComponent.vue'
    import HomeMenuComponent from '../components/HomeMenuComponent.vue'
    import HomeMenuListComponent from '../components/HomeMenuListComponent.vue'
    export default {
        components: {HomeComponent, HomeMenuListComponent, HomeMenuComponent,}
    }
</script>


<style lang="scss" scoped>
.home{
    &__container{
        min-width: 100%;
        min-height: 100vh;
        background-image: url(../assets/image/home-bg.jpg);
        background-repeat: no-repeat;
        background-position: top center;
        background-size: cover;
    }
}
</style>