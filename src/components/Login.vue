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
        let result = await axios.get(
            `http://localhost:3000/users?email=${this.email}&password=${this.password}`
        )

        if (result.status == 200 && result.data.length>0) 
                {
                    localStorage.setItem("user-info", JSON.stringify(result.data[0]));
                    this.$router.push({ name: "Home" });
                }

        console.warn(result)
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
