<template>
  <Header />
  <h1>Готовые опросы</h1>
  <h2>Список готовых опросов, можно открыть</h2>
  <h2>Здесь можно будет изменить или удалить созданный опрос</h2>
  <h2>Поиск по названию опроса или ID</h2>
</template>
<script>
import Header from "./Header.vue";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "quizList",
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
