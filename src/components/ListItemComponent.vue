<template>
<div v-for="items in item" :key="items.name" class="item__content">
    <div class="item__info">
        <div class="item__img"><img  :src="getIcon(items.img)" :alt="items.name"></div>
        <div class="item__info">
            <div class="item__name">{{items.name}}</div>
            <div class="item__price">{{items.price}}</div>
        </div>
    </div>
</div>

</template>

<script>
    export default {
        name:"ListItemComponent",
        data(){
            return{
                item:[
                    {name:"Кіт", img:"image/home-bg.jpg", price:"100$", category:"cats"},
                    {name:"Кіт", img:"image/home-bg.jpg", price:"100$", category:"cats"},
                    {name:"Кіт", img:"image/home-bg.jpg", price:"100$", category:"cats"},

                    {name:"собака", img:"image/home-bg.jpg", price:"100$", category:"dogs"},
                    {name:"собака", img:"image/home-bg.jpg", price:"100$", category:"dogs"},
                    {name:"собака", img:"image/home-bg.jpg", price:"100$", category:"dogs"},
                ],
                activeCategory:null
            }
        },
        computed:{
            filteredProducts(){
                if(this.activeCategory===null){
                    return this.product
                }
                return this.product.filter(item=>item.category==this.activeCategory)
            }
        },

        methods:{
            getIcon(iconPath)
            {
                return require('../assets/'+ iconPath)
            },
            onCategoryChange(value){
                console.log("asdasd")
                this.activeCategory=value
            }
        }
    }

</script>

<style lang="scss" scoped>
.item{
    &__content{
        width: 300px;
        height: 300px;
        background-color: #fff;
        margin-bottom: 50px;
        border-radius: 20px;
        padding: 20px;

        
    }
    &__info{
        text-align: center;
        
    }
    &__img{
        width: 200px;
        height: 200px;
        margin: 0 auto;
        margin-bottom: 10px;
        & img{
             width: 100%;
             height: 100%;
        }
    }
    &__name{
        font-size: 20px;
        
    }
    &__price{
        font-style: 18px;
        color:indianred;
        font-weight: 800;
    }
    
}

</style>