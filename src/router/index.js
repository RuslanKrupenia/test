import {createRouter, createWebHistory} from 'vue-router';
import HomePage from "@/views/HomePage.vue";

export default createRouter ({
    history: createWebHistory(),
    routes :[
        {path:'/', component:HomePage, alias:'/'},
    ],
    scrollBehavior(to) {
        if (to.hash) {
          return {
            el: to.hash,
            top: 100,
          }
        }
        else{
            return{
                top:0
            }
        }
    },
})