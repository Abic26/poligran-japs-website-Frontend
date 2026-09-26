<script setup>
defineProps({ noticia: Object });
</script>
<template>
  <article
    class="overflow-hidden border-b-4 border-transparent bg-white shadow-none transition duration-200 hover:-translate-y-1 hover:border-japs-yellow"
  >
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
