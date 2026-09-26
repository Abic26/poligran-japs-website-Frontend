<script setup>
import { useShop } from "../composables/useShop";
defineProps({ producto: Object });
const { addToCart } = useShop();
const money = (value) =>
  new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(value);
</script>
<template>
  <article
    class="min-w-0 overflow-hidden border border-[#e8edef] bg-white p-3.5 text-center shadow-none transition duration-200 hover:-translate-y-1 hover:border-[#b9dce8]"
  >
    <img
      class="block h-[145px] w-full object-contain"
      :src="producto.imagen"
      :alt="producto.nombre"
    /><span
      class="my-1.5 inline-block rounded-xl px-2 py-0.5 text-[9px]"
      :class="
        producto.estadoClase === 'orange'
          ? 'bg-[#fff0d7] text-[#b66e00]'
          : 'bg-[#dff4e8] text-[#148044]'
      "
      >{{ producto.estado }}</span
    >
    <h3 class="min-h-[31px] text-xs">{{ producto.nombre }}</h3>
    <p class="text-[10px]">{{ producto.referencia }}</p>
    <p class="my-2 text-xs font-bold text-japs-navy">
      {{ money(producto.precio || 0) }}
    </p>
    <div class="flex justify-center gap-1.5">
      <RouterLink
        class="inline-flex min-h-[29px] items-center justify-center bg-japs-blue px-3 text-[10px] font-extrabold text-white no-underline transition hover:-translate-y-0.5 hover:shadow-lg"
        to="/productos/cortacircuito"
        >Ver más</RouterLink
      ><button
        class="min-h-[29px] bg-japs-yellow px-3 text-[10px] font-extrabold text-japs-navy transition hover:-translate-y-0.5"
        type="button"
        @click="addToCart(producto)"
      >
        Agregar
      </button>
    </div>
  </article>
</template>
