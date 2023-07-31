<template>
<div class="menu__container">
    <div class="menu__content">
        <div class="menu__list">
            <div :href="menulist.href"  v-for="menulist in menu" @click="onCategorySelected(menulist.category)" :key="menulist.name" class="menu__link">{{menulist.name}}</div>
        </div>
    </div>
</div>

</template>

<script>
    export default {
        name:"HomeMenuComponent",
        data(){
            return{
                menu:[
                    {href:"#", name:"cats", category:"cats"},
                    {href:"#", name:"dogs", category:"dogs"},
                    {href:"#", name:"parrot", category:"parrot"},
                    {href:"#", name:"hamster", category:"hamster"},
                    {href:"#", name:"rabbit", category:"rabbit"},
                ]
            }
        },
        methods:{
            onCategorySelected(category){
                console.log(category);
                this.$emit("categoryChanged",category)
            }
        }
    }
</script>

<style lang="scss" scoped>
.menu{
    &__container{
        margin: 0 auto; 
        max-width: 80%;
        text-align: center;
        margin-bottom: 50px;
    }
    &__list{
        display: flex;
        justify-content: space-between;
        
    }
    &__link{
        color: black;
        font-size: 24px;
        text-decoration: none;
        background-color: #fff;
        padding: 5px 15px;
        border-radius: 15px;
    }
}
</style>