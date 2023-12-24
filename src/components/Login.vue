<template>
  <img class="logo" src="../assets/znak1.png" />
  <h1>Вход в аккаунт</h1>
  <div class="login">
    <input type="text" v-model="email" placeholder="Укажите почту" />
    <input type="password" v-model="password" placeholder="Введите пароль" />
    <button v-on:click="login">Войти</button>
    <p>
      <router-link to="/sign-up">Зарегистрироваться</router-link>
    </p>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Login",
  data()
  {
    return {
        email:'',
        password:''
    }
  },
  methods:{
    async login()
    {
        let result = await axios.post("http://localhost:8080/api/auth/authenticate", {
        email: this.email,
        password: this.password
      });

      console.warn(result);
      if (result.status == 200) 
      {
        localStorage.setItem("auth-token", result.data.token);
        this.$router.push({ name: "Home" });
      }
    }
  },

  //функция запоминания 

  mounted() {
    let user = localStorage.getItem("user-info");
    if (user) {
      this.$router.push({ name: "Home" });
    }
  },
};
</script>
