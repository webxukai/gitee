<template>
    <div>
        <div class="wrapper">
            <div class="header-left">
                精函LTE
            </div>
            <div class="header-right">
                <img src="https://cdn4.buysellads.net/uu/1/3386/1525189943-38523.png" alt="">
                <div>{{name}}</div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
name:'HomeHeader',
data(){
    return{
        name:'fanlong'
    }
}
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl';
.wrapper
    position relative
    top 0
    left 0
    width 100%
    height 60px
    color #ffffff
    // background-color: #3c8dbc;
    background-color: $bgColor
    .header-left
        float left  
        font-size 28px
        line-height 60px
        padding 0 20px
    .header-right
        font-size 28px
        line-height 60px
        padding 0 20px
        img
            float right 
            width 60px
            height 60px
            border-radius 50%
        div 
            float right

    
</style>

