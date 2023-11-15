<template>
<div class="nav">
<router-link to="/">Главная</router-link>
<router-link to="/quizList">Опросы</router-link>
<router-link to="/add">Создать опрос</router-link>
<router-link to="/account">Аккаунт</router-link>
<a v-on:click="logout" href="#">Выйти из аккаунта</a>

</div>
</template>
<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Header',

    //выход из аккаунта

    methods:{
        logout()
        {
            localStorage.clear();
            this.$router.push({name:'Login'})
        }
    }    
}    
</script>
<style>
.nav{
    background-color:black;
    overflow: hidden;
}
.nav a{
    float: left;
    color: white;
    padding: 14px 16px;
    text-align: center;
    font-size: 17px;
    text-decoration: none;
    margin-right: 5px;
}
.nav a:hover{
    background:white;
    color:#333
}



</style>