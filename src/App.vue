<template>
  <Header />
  <RouterView />
  <a
    class="whatsapp fixed bottom-[22px] right-[22px] z-[12] grid h-12 w-12 place-items-center rounded-full border-[3px] border-white bg-[#25d366] text-[10px] font-extrabold tracking-[0.5px] text-white shadow-lg"
    href="https://wa.me/576017420000"
    aria-label="Hablar por WhatsApp"
    >WA</a
  >
  <Footer />
  <CartDrawer />
</template>

<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import CartDrawer from "./components/CartDrawer.vue";
</script>
