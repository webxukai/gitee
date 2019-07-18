<template>
    <div>
        <LoginLogin />
         <router-link to='/login'>
        login
        </router-link>
         <router-link to='/home'>
        home
        </router-link>
         <router-link to='/mine'>
        Mine
        </router-link>

    </div>
</template>

<script>
import LoginLogin from "./components/Login"
export default {
name: 'Login',
components:{
LoginLogin
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