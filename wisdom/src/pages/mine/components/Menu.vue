<template>
    <div>
        <div class="wrapper">
            <div class="content-ul">
                <div class="item-li"  v-for="(item,index) of list" :key="index" @click="lookDetaile(index)" >
                    <div class="wrapper-img">
                        <img :src="item.img" alt="">
                    </div>
                    
                    <div class="title" :class="{ active: index == currentIndex }">
                        {{item.title}}
                    </div>
                </div>
            </div>
            <MenuFood v-show="currentIndex == 0"/>
            <MenuUser v-show="currentIndex == 1"/>
            <MenuAboutMarcket v-show="currentIndex == 2"/>
            <MenuDetection v-show="currentIndex == 3"/>
        </div>
    </div>
</template>

<script>
import MenuFood from './Food'
import MenuUser from './User'
import MenuAboutMarcket from './AboutMarcket'
import MenuDetection from './Detection'
export default {
name:'MineMenu',
components:{
MenuFood,
MenuUser,
MenuAboutMarcket,
MenuDetection
},
data(){
    return{
        list:[{
            img:'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
            title:'菜价公示'
        },
        {
            img:'http://img1.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png',
            title:'商户信息'
        },
        {
            img:'http://img1.qunarzz.com/piao/fusion/1803/b6/37560ece9c62b502.png',
            title:'市场介绍'
        },
        {
            img:'http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png',
            title:'农残检查'
        },
        {
            img:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
            title:'科普农贸'
        },
        {
            img:'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
            title:'市场动态'
        },
        {
            img:'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
            title:'行业规范'
        },
                {
            img:'http://img1.qunarzz.com/piao/fusion/1803/de/f26be47a6bf02a02.png',
            title:'追溯查询'
        },
        {
            img:'http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png',
            title:'会员查询'
        }],
        currentIndex : 0,

    }
},
methods:{
lookDetaile(index){
    console.log(index)
    this.currentIndex = index
    
}
}
}
</script>

<style lang="stylus" scoped>

.wrapper
    background-color #999
    // position relative
    width 100%
    padding 10px
    .content-ul
        display flex
        justify-content space-around
        background-color #eeeeee
        border-radius 10px
        .wrapper-img
            width 10%
            padding-bottom 10%
            // height 10%
            img 
                width 80px
                height 80px
        .title
            text-align center
            width 80px
            height 40px
            color #333333
            &.active
                border-bottom 5px solid yellow 



</style>
