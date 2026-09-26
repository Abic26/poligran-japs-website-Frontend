<script setup>
import ProductCard from "../components/ProductCard.vue";
const categorias = [
  "Alta tensión",
  "Media tensión",
  "Baja tensión",
  "Aisladores",
  "Pararrayos",
  "Cortacircuitos",
  "Conectores",
  "Transformadores",
  "Cables",
];
const fotos = [
  "https://ik.imagekit.io/ftuu3w4hn/cortacirtuitos-de-15-kv/thumbnail/cortacirtuitos-de-15-kv.webp?updatedAt=1746641165006",
  "https://ik.imagekit.io/ftuu3w4hn/aislador-loza-carrete-53-3/thumbnail/aislador-loza-carrete-53-3.webp?updatedAt=1746640240391",
  "https://ik.imagekit.io/ftuu3w4hn/Aislador-Suspension-Polimerico-115-kv-120-kn/thumbnail/Aislador-Suspension-Polimerico-115-kv-120-kn.webp?updatedAt=1746639891995",
  "https://ik.imagekit.io/ftuu3w4hn/conector-4-salidas/conector-4-salidas-miniatura.webp",
  "https://ik.imagekit.io/ftuu3w4hn/conector-media-tension/conector-media-tension-miniatura.webp?updatedAt=1772038099338",
];
const nombres = [
  "Cortacircuito 15 kV",
  "Aislador loza carrete",
  "Aislador de suspensión",
  "Conector cuatro salidas",
  "Conector media tensión",
  "Cortacircuito 27 kV",
  "Aislador polimérico",
  "Conector de línea",
  "Pararrayos distribución",
  "Cortacircuito 200 A",
  "Aislador tipo poste",
  "Conector eléctrico",
];
const productos = nombres.map((nombre, index) => ({
  nombre,
  referencia: `REF-${String(index + 1).padStart(3, "0")}`,
  estado: index % 4 === 2 ? "Consultar" : "Disponible",
  estadoClase: index % 4 === 2 ? "orange" : "",
  precio: 85000 + index * 17500,
  imagen: fotos[index % fotos.length],
}));
</script>
<template>
  <main>
    <section
      class="relative grid min-h-[280px] place-items-end overflow-hidden bg-japs-navy px-6 pb-[55px] text-left"
    >
      <h1
        class="relative text-[clamp(38px,5vw,58px)] tracking-[-2px] text-white"
      >
        Catálogo de productos
      </h1>
    </section>
    <section class="bg-[#f7f5f5] py-14">
      <div
        class="mx-auto grid w-[calc(100%-3rem)] max-w-[1100px] gap-9 lg:grid-cols-[205px_1fr]"
      >
        <aside
          class="self-start border-t-4 border-japs-yellow bg-white p-5 shadow-lg"
        >
          <h2>Categorías</h2>
          <a
            class="block border-b border-[#edf0f1] py-2 text-xs text-japs-text no-underline hover:text-japs-blue"
            v-for="categoria in categorias"
            :key="categoria"
            href="#productos"
            >{{ categoria }}</a
          >
        </aside>
        <div>
          <div
            class="mb-5 flex justify-end gap-2.5 border-b border-[#dce5e8] pb-[18px]"
          >
            <select
              class="min-h-9 border-0 border-b bg-transparent px-3 text-xs"
            >
              <option>Todos los productos</option></select
            ><input
              class="min-h-9 border-0 border-b bg-transparent px-3 text-xs"
              placeholder="Buscar producto..."
            />
          </div>
          <div
            id="productos"
            class="grid grid-cols-2 gap-3.5 md:grid-cols-3 lg:grid-cols-4"
          >
            <ProductCard
              v-for="producto in productos"
              :key="producto.referencia"
              :producto="producto"
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
      </div>
    </section>
  </main>
</template>
