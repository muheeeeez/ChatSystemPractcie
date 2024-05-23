import { createRouter, createWebHistory } from "vue-router";
import LoginForm from "./components/LoginForm.vue";
import RegisterForm from "./components/RegisterForm.vue";
import ChatView from "./components/ChatView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/login",
   
    },
    {
      path: "/login",
      component: LoginForm,
    },
    {
      path: "/chat/:username",
      name: "chat",
      component: ChatView,
      props: true,
    },
    {
      path: "/register",
      component: RegisterForm,
    },
  ],
});
export default router;
