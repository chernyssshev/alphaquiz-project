<template>
  <img class="logo" src="../assets/znak1.png" />
  <h1>Регистрация</h1>
  <div class="register">
    <input type="text" v-model="email" placeholder="Укажите почту" />
    <input type="text" v-model="name" placeholder="Укажите ваше имя" />
    <input type="password" v-model="password" placeholder="Придумайте пароль" />
    <button v-on:click="signUp">Зарегистрироваться</button>
    <p>
      <router-link to="/login">Войти</router-link>
    </p>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "SignUp",
  data() {
    return {
      email: "",
      name: "",
      password: "",
    };
  },

  //регистрация

  methods: {
    async signUp() {
      let result = await axios.post("http://localhost:8080/api/auth/register", {
        email: this.email,
        password: this.password,
        fullName: this.name,
      });

      console.warn(result);
      if (result.status == 200) 
      {
        localStorage.setItem("auth-token", result.data.token);
        this.$router.push({ name: "Home" });
      }
    },
  },

  //функция запоминания авторизации

  mounted() {
    let user = localStorage.getItem("user-info");
    if (user) {
      this.$router.push({ name: "Home" });
    }
  },
};
</script>
