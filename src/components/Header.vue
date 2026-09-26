<script setup>
import logoJaps from "../assets/logo-japs.png";
import { useShop } from "../composables/useShop";
const { cartCount, cartOpen } = useShop();
</script>

<template>
  <header
    class="sticky top-0 z-10 border-b border-japs-line bg-white/95 backdrop-blur"
  >
    <div
      class="header-inner mx-auto flex min-h-[72px] w-full max-w-[1100px] items-center justify-between gap-6 px-6"
    >
      <RouterLink
        class="inline-flex shrink-0 items-center"
        to="/"
        aria-label="JAPS, inicio"
      >
        <img
          class="h-[58px] w-[92px] object-contain mix-blend-multiply max-[430px]:h-[45px] max-[430px]:w-[72px]"
          :src="logoJaps"
          alt="JAPS Electrical equipment"
        />
      </RouterLink>
      <nav
        class="flex items-center gap-7 max-[750px]:flex-wrap max-[750px]:justify-end max-[750px]:gap-x-3 max-[750px]:gap-y-0"
        aria-label="Navegación principal"
      >
        <RouterLink
          class="relative py-6 text-xs font-extrabold text-japs-navy no-underline transition-colors hover:text-japs-blue max-[750px]:py-1 max-[750px]:text-[10px]"
          to="/"
          >Inicio</RouterLink
        >
        <RouterLink
          class="relative py-6 text-xs font-extrabold text-japs-navy no-underline transition-colors hover:text-japs-blue max-[750px]:py-1 max-[750px]:text-[10px]"
          to="/productos"
          >Productos</RouterLink
        >
        <RouterLink
          class="relative py-6 text-xs font-extrabold text-japs-navy no-underline transition-colors hover:text-japs-blue max-[750px]:py-1 max-[750px]:text-[10px]"
          to="/noticias"
          >Noticias</RouterLink
        >
        <RouterLink
          class="relative py-6 text-xs font-extrabold text-japs-navy no-underline transition-colors hover:text-japs-blue max-[750px]:py-1 max-[750px]:text-[10px]"
          to="/nosotros"
          >Nosotros</RouterLink
        >
        <RouterLink
          class="border border-japs-navy px-4 py-2.5 text-xs font-extrabold text-japs-navy no-underline transition-colors hover:bg-japs-navy hover:text-white max-[750px]:border-0 max-[750px]:px-0 max-[750px]:py-1 max-[750px]:text-[10px]"
          to="/contacto"
          >Contacto</RouterLink
        >
        <button
          class="relative grid size-9 place-items-center rounded-full bg-japs-navy text-sm text-white"
          aria-label="Abrir carrito"
          @click="cartOpen = true"
        >
          🛒<span
            v-if="cartCount"
            class="absolute -right-1.5 -top-1.5 grid size-5 place-items-center rounded-full bg-japs-yellow text-[9px] font-bold text-japs-navy"
            >{{ cartCount }}</span
          >
        </button>
      </nav>
    </div>
  </header>
</template>
