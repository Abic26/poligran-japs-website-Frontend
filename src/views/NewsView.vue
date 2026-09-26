<script setup>
import NewsCard from "../components/NewsCard.vue";
const fotos = [
  "https://www.valoraanalitik.com/wp-content/uploads/2026/09/Martha-Villarreal-presidenta-de-la-Junta-Directiva-de-Acipet-1024x597.webp",
  "https://www.minenergia.gov.co/media/images/Colombia_cierra_su_presidencia_pro_tempore_del_.original.jpg",
  "https://imagenes.portafolio.co/files/image_1200_600/files/fp/uploads/2026/01/09/696172f20a9b1.r_d.783-1037.jpeg",
  "https://imagenes.portafolio.co/files/image_1200_600/files/fp/uploads/2026/09/18/6aad88e76083f.r_d.2129-706-4499.jpeg",
];
const noticias = [
  {
    categoria: "Actualidad",
    titulo: "Energía y desarrollo en Colombia",
    descripcion:
      "Nuevas iniciativas fortalecen el desarrollo del sector energético.",
    imagen: fotos[0],
  },
  {
    categoria: "Proyectos",
    titulo: "Colombia impulsa la transición energética",
    descripcion:
      "El país avanza con proyectos para diversificar su matriz energética.",
    imagen: fotos[1],
  },
  {
    categoria: "Innovación",
    titulo: "Más oportunidades para la energía limpia",
    descripcion:
      "La innovación abre caminos hacia una industria más sostenible.",
    imagen: fotos[2],
  },
  {
    categoria: "Energía",
    titulo: "Un sector que sigue creciendo",
    descripcion:
      "Conoce las novedades que mueven el panorama eléctrico nacional.",
    imagen: fotos[3],
  },
  {
    categoria: "Sostenibilidad",
    titulo: "Nuevas metas para el futuro energético",
    descripcion:
      "Empresas y comunidades trabajan por un suministro responsable.",
    imagen: fotos[1],
  },
  {
    categoria: "Actualidad",
    titulo: "Tecnología para conectar al país",
    descripcion: "La infraestructura eléctrica continúa modernizándose.",
    imagen: fotos[2],
  },
];
</script>
<template>
  <main>
    <section
      class="relative grid min-h-[280px] place-items-end overflow-hidden bg-japs-navy px-6 pb-[55px] text-left"
    >
      <h1 class="text-[clamp(38px,5vw,58px)] tracking-[-2px] text-white">
        Sección de Noticias
      </h1>
    </section>
    <section class="bg-[#f7f5f5] py-14">
      <div
        class="mx-auto w-[calc(100%-3rem)] max-w-[1100px] max-[750px]:w-[calc(100%-2rem)]"
      >
        <div
          class="mb-5 flex justify-end gap-2.5 border-b border-[#dce5e8] pb-[18px]"
        >
          <select
            class="min-h-9 border-0 border-b bg-transparent px-3"
            aria-label="Categoría"
          >
            <option>Actualidad</option>
            <option>Proyectos</option></select
          ><input
            class="min-h-9 border-0 border-b bg-transparent px-3"
            placeholder="Buscar noticias..."
          />
        </div>
        <div class="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
          <NewsCard
            v-for="noticia in noticias"
            :key="noticia.titulo"
            :noticia="noticia"
          />
        </div>
        <nav class="mt-7 flex justify-center gap-2">
          <a
            class="bg-white px-3 py-2 text-xs text-japs-navy no-underline"
            href="#"
            >Anterior</a
          ><a
            class="bg-japs-blue px-3 py-2 text-xs text-white no-underline"
            href="#"
            >1</a
          ><a
            class="bg-white px-3 py-2 text-xs text-japs-navy no-underline"
            href="#"
            >2</a
          ><a
            class="bg-white px-3 py-2 text-xs text-japs-navy no-underline"
            href="#"
            >3</a
          ><a
            class="bg-white px-3 py-2 text-xs text-japs-navy no-underline"
            href="#"
            >Siguiente</a
          >
        </nav>
      </div>
    </section>
  </main>
</template>
