<template>
    <div>
        <div class="top">
        <HomeLeft />
        <HomeRight />
        </div>
        <HomeSwiper />
        <HomeHeader />
         <router-link to='/mine'>
        Mine
        </router-link>
    </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeLeft from './components/Left'
import HomeRight from './components/Right'
import HomeSwiper from './components/Swiper'
export default {
name: 'Home',
components:{
HomeHeader,
HomeLeft,
HomeRight,
HomeSwiper
},
data(){
return {

}
},
methods:{

},
computed:{

}

}
</script>

<style lang="stylus" scoped>


</style>

