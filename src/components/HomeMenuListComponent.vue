<template>
<div class="list__container">
    <div class="list__content">
    <ListItemComponent v-on:menuclicked="onCategoryChange"/>
    </div>
</div>

</template>

<script>
import ListItemComponent from '../components/ListItemComponent.vue';
    export default {
    name: "HomeMenuListComponent",
    components: { ListItemComponent }
}
</script>

<style lang="scss" scoped>
.list{
    &__container{
        max-width: 80%;
        height: 100%;
        display: flex;
        align-items: center;
        margin: 0 auto;
    }
    &__content{
        margin: 0 auto;
    }
}
</style>