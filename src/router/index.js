import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import NewsView from "../views/NewsView.vue";
import NewsDetailView from "../views/NewsDetailView.vue";
import ProductsView from "../views/ProductsView.vue";
import ProductDetailView from "../views/ProductDetailView.vue";
import AboutView from "../views/AboutView.vue";
import ContactView from "../views/ContactView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/noticias", component: NewsView },
  { path: "/noticias/energia-solar", component: NewsDetailView },
  { path: "/productos", component: ProductsView },
  { path: "/productos/cortacircuito", component: ProductDetailView },
  { path: "/nosotros", component: AboutView },
  { path: "/contacto", component: ContactView },
];

export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});
