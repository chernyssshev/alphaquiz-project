<template>
  <Header />
  <h1>Главная страница</h1>
  <h2>
    пока не знаю что на ней будет, скорее всего какая-то информация о том что
    это и зачем
  </h2>
  <h2>
    плюс можно показать какие опросы были недавно созданы или находятся в топе
  </h2>
</template>
<script>
import Header from "./Header.vue";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  
  components: {
    Header,
  },

  //функция запоминания авторизации

  mounted() {
    let user = localStorage.getItem('users-info');
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
  },
};
</script>
