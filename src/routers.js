import Home from './components/Home.vue';
import SignUp from './components/SignUp.vue';
import { createRouter, createWebHistory } from 'vue-router';
import Login from './components/Login.vue'
import Add from './components/Add.vue'
import quizList from './components/quizList.vue'
import Account from './components/Account.vue'

const routes = [
    {
        name: 'Home',
        component: Home,
        path: "/",
    },
    {
        name: 'SignUp',
        component: SignUp,
        path: '/sign-up'
    },
    {
        name: "Login",
        component: Login,
        path: "/login"
    },
    {
        name: "Add",
        component: Add,
        path: "/add"
    },
    {
        name: "quizList",
        component: quizList,
        path: "/quizList"
    },
    {
        name: "Account",
        component: Account,
        path: "/account"
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;