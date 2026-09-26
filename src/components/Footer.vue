<script setup>
import logoJaps from "../assets/logo-japs.png";
</script>

<template>
  <footer
    class="border-t border-white/10 bg-japs-navy px-6 py-7 text-center text-[11px]"
  >
    <div
      class="mx-auto flex w-full max-w-[1100px] items-center justify-between gap-4 px-6 max-[750px]:flex-col"
    >
      <img
        class="h-[58px] w-[98px] rounded bg-white p-1 object-contain"
        :src="logoJaps"
        alt="JAPS Electrical equipment"
      />
      <p class="text-[#b1c4cd]">
        Energía para conectar el futuro · Bogotá, Colombia
      </p>
    </div>
  </footer>
</template>
