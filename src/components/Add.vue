<template>
  <Header />
  <h1>Создать опрос</h1>
  <h2>Создавать могут пользователи с определенными правами, может быть эта страница
    будет скрыта тех, кто таковые не имеет
  </h2>
</template>
<script>
import Header from "./Header.vue";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Add",
  components: {
    Header,
  },

  //функция запоминания авторизации

  mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
  },
};
</script>
