<script setup>
import ProductCard from "../components/ProductCard.vue";
const relacionados = [
  {
    nombre: "Cortacircuito 15 kV",
    referencia: "REF-001",
    estado: "Disponible",
    estadoClase: "",
    imagen:
      "https://ik.imagekit.io/ftuu3w4hn/cortacirtuitos-de-15-kv/thumbnail/cortacirtuitos-de-15-kv.webp?updatedAt=1746641165006",
  },
  {
    nombre: "Aislador loza carrete",
    referencia: "REF-002",
    estado: "Disponible",
    estadoClase: "",
    imagen:
      "https://ik.imagekit.io/ftuu3w4hn/aislador-loza-carrete-53-3/thumbnail/aislador-loza-carrete-53-3.webp?updatedAt=1746640240391",
  },
  {
    nombre: "Aislador polimérico",
    referencia: "REF-003",
    estado: "Consultar",
    estadoClase: "orange",
    imagen:
      "https://ik.imagekit.io/ftuu3w4hn/Aislador-Suspension-Polimerico-115-kv-120-kn/thumbnail/Aislador-Suspension-Polimerico-115-kv-120-kn.webp?updatedAt=1746639891995",
  },
  {
    nombre: "Conector media tensión",
    referencia: "REF-004",
    estado: "Disponible",
    estadoClase: "",
    imagen:
      "https://ik.imagekit.io/ftuu3w4hn/conector-media-tension/conector-media-tension-miniatura.webp?updatedAt=1772038099338",
  },
];
relacionados.forEach(
  (producto, index) => (producto.precio = 90000 + index * 25000),
);
</script>
<template>
  <main
    class="mx-auto w-[calc(100%-3rem)] max-w-[1100px] py-12 max-[750px]:w-[calc(100%-2rem)]"
  >
    <div class="mb-6 text-xs text-[#6c7f89]">
      <RouterLink class="text-[#087faa] no-underline" to="/">Inicio</RouterLink>
      &gt;
      <RouterLink class="text-[#087faa] no-underline" to="/productos"
        >Productos</RouterLink
      >
      &gt; Cortacircuitos
    </div>
    <section
      class="grid grid-cols-2 items-start gap-12 max-[750px]:grid-cols-1 max-[750px]:gap-9"
    >
      <div class="bg-japs-soft p-5">
        <img
          class="h-[360px] w-full object-contain"
          src="https://ik.imagekit.io/ftuu3w4hn/cortacirtuitos-de-15-kv/thumbnail/cortacirtuitos-de-15-kv.webp?updatedAt=1746641165006"
          alt="Cortacircuito eléctrico para distribución"
        />
        <div class="flex justify-center gap-3">
          <img
            class="h-14 w-16 border border-japs-line bg-white p-1 object-contain"
            src="https://ik.imagekit.io/ftuu3w4hn/cortacirtuitos-de-15-kv/thumbnail/cortacirtuitos-de-15-kv.webp?updatedAt=1746641165006"
            alt="Vista frontal"
          /><img
            class="h-14 w-16 border border-japs-line bg-white p-1 object-contain"
            src="https://ik.imagekit.io/ftuu3w4hn/aislador-loza-carrete-53-3/thumbnail/aislador-loza-carrete-53-3.webp?updatedAt=1746640240391"
            alt="Detalle"
          /><img
            class="h-14 w-16 border border-japs-line bg-white p-1 object-contain"
            src="https://ik.imagekit.io/ftuu3w4hn/Aislador-Suspension-Polimerico-115-kv-120-kn/thumbnail/Aislador-Suspension-Polimerico-115-kv-120-kn.webp?updatedAt=1746639891995"
            alt="Vista lateral"
          />
        </div>
      </div>
      <div>
        <span
          class="text-[11px] font-extrabold uppercase tracking-[1.2px] text-japs-blue"
          >Cortacircuitos</span
        >
        <h1 class="my-5 text-[clamp(27px,3vw,35px)] leading-tight">
          Cortacircuito para 15 - 27 kV - 200 AMP 125 kV BIL
        </h1>
        <h2>Características</h2>
        <table class="mb-5 w-full border-collapse text-xs">
          <tbody>
            <tr class="bg-[#f6f9fa]">
              <th class="w-[43%] p-2.5 text-left font-normal text-japs-text">
                Voltaje
              </th>
              <td class="p-2.5 text-left">15 - 27 kV</td>
            </tr>
            <tr>
              <th class="w-[43%] p-2.5 text-left font-normal text-japs-text">
                Corriente
              </th>
              <td class="p-2.5 text-left">200 A</td>
            </tr>
            <tr class="bg-[#f6f9fa]">
              <th class="w-[43%] p-2.5 text-left font-normal text-japs-text">
                BIL
              </th>
              <td class="p-2.5 text-left">125 kV</td>
            </tr>
            <tr>
              <th class="w-[43%] p-2.5 text-left font-normal text-japs-text">
                Frecuencia
              </th>
              <td class="p-2.5 text-left">60 Hz</td>
            </tr>
            <tr class="bg-[#f6f9fa]">
              <th class="w-[43%] p-2.5 text-left font-normal text-japs-text">
                Material
              </th>
              <td class="p-2.5 text-left">Porcelana y aleación de cobre</td>
            </tr>
          </tbody>
        </table>
        <p>
          Equipo diseñado para proteger redes de distribución eléctrica, con
          desempeño confiable para operación y mantenimiento.
        </p>
        <RouterLink
          class="inline-flex min-h-10 items-center justify-center bg-japs-blue px-[22px] text-xs font-extrabold text-white no-underline"
          to="/contacto"
          >Cotizar</RouterLink
        >
      </div>
    </section>
    <section class="mt-16 border-t border-japs-line pt-10">
      <h2>Productos relacionados</h2>
      <div class="grid grid-cols-2 gap-3.5 md:grid-cols-3 lg:grid-cols-4">
        <ProductCard
          v-for="producto in relacionados"
          :key="producto.referencia"
          :producto="producto"
        />
      </div>
    </section>
  </main>
</template>
