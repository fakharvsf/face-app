// Composables
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Login",
    component: () => import("@/views/LoginPage.vue"),
  },
  {
    path: "/sign-up",
    name: "Signup",
    component: () => import("@/views/SignupPage.vue"),
  },
  {
    path: "/register-id",
    name: "registerId",
    component: () => import("@/views/CameraPage.vue"),
  },
  {
    path: "/profile-page",
    name: "ProfilePage",
    component: () => import("@/views/ProfilePage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
