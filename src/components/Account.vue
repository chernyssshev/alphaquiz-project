<template>
  <Header />
  <h1>Настройки профиля</h1>
  <h2>Тут заполнить профиль: фио, аватар, номер телефона, компания, должность и т.д</h2>
  <h1></h1>
  <h1>Имя: {{ name }}</h1>
  <h1>Почта: {{ email }}</h1>
  <h1>Пароль: {{ password }}</h1>
</template>
<script>
import Header from "./Header.vue";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Account",
  data(){
    return {
      name:''
    }
  },
  components: {
    Header,
  },

  //функция запоминания авторизации

  mounted() {
    let user = localStorage.getItem('user-info');
    this.name = JSON.parse(user).name;
    this.email = JSON.parse(user).email;
    this.password = JSON.parse(user).password;
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
  },
};
</script>
