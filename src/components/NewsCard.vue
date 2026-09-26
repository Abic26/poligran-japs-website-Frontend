<script setup>
import { computed } from "vue";
import { useShop } from "../composables/useShop";
const props = defineProps({ noticia: Object });
const { favorites, toggleFavorite } = useShop();
const isFavorite = computed(() =>
  favorites.value.includes(props.noticia.titulo),
);
</script>
<template>
  <article
    class="relative overflow-hidden border-b-4 border-transparent bg-white shadow-none transition duration-200 hover:-translate-y-1 hover:border-japs-yellow"
  >
    <button
      class="absolute right-3 top-3 z-1 grid size-9 place-items-center rounded-full bg-white text-xl shadow-md"
      :class="isFavorite ? 'text-red-500' : 'text-japs-text'"
      :aria-label="isFavorite ? 'Quitar de favoritos' : 'Agregar a favoritos'"
      :title="isFavorite ? 'Quitar de favoritos' : 'Agregar a favoritos'"
      @click="toggleFavorite(noticia.titulo)"
    >
      {{ isFavorite ? "♥" : "♡" }}
    </button>
    <img
      class="block h-[185px] w-full object-cover"
      :src="noticia.imagen"
      :alt="noticia.titulo"
    />
    <div class="p-5">
      <span
        class="text-[11px] font-extrabold uppercase tracking-[1.2px] text-japs-blue"
        >{{ noticia.categoria }}</span
      >
      <h2 class="mt-2 min-h-[42px] text-[17px]">{{ noticia.titulo }}</h2>
      <p class="min-h-[54px] text-xs">{{ noticia.descripcion }}</p>
      <RouterLink
        class="text-xs font-extrabold text-[#087faa] no-underline"
        to="/noticias/energia-solar"
        >Ver noticia →</RouterLink
      >
    </div>
  </article>
</template>
