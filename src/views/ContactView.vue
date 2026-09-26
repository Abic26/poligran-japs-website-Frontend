<script setup>
import ContactForm from "../components/ContactForm.vue";
</script>
<template>
  <main>
    <section
      class="relative overflow-hidden bg-japs-navy py-20 max-[430px]:py-14"
    >
      <div
        class="mx-auto grid w-[calc(100%-3rem)] max-w-[1100px] grid-cols-[110px_1.3fr_.7fr] items-end gap-11 max-[750px]:w-[calc(100%-2rem)] max-[750px]:grid-cols-1 max-[750px]:gap-6"
      >
        <span
          class="self-start pt-2 text-[9px] tracking-widest text-[#90a9b5] max-[750px]:hidden"
          >02 / CONTACTO</span
        >
        <div>
          <span
            class="text-[11px] font-extrabold uppercase tracking-[1.2px] text-japs-yellow"
            >Estamos para ayudarte</span
          >
          <h1
            class="mt-3 text-[clamp(42px,5.5vw,66px)] leading-none tracking-[-2.5px] text-white"
          >
            Construyamos algo<br />juntos.
          </h1>
        </div>
        <p class="border-l-2 border-japs-yellow pl-5 text-[#c2d1d8]">
          Cuéntanos qué necesita tu proyecto y nuestro equipo te ayudará a
          encontrar la solución adecuada.
        </p>
      </div>
    </section>
    <section class="bg-[#f4f7f7] py-24 max-[430px]:py-14">
      <div
        class="mx-auto grid w-[calc(100%-3rem)] max-w-[900px] grid-cols-[.9fr_1.1fr] overflow-hidden bg-white shadow-2xl max-[750px]:w-[calc(100%-2rem)] max-[750px]:grid-cols-1"
      >
        <div class="relative overflow-hidden bg-japs-yellow p-8">
          <span
            class="text-[11px] font-extrabold uppercase tracking-[1.2px] text-japs-navy"
            >Canales directos</span
          >
          <h3>Ponte en contacto</h3>
          <p class="text-[13px]">
            <strong class="block text-japs-navy">Ubicación</strong>Bogotá,
            Colombia
          </p>
          <p class="text-[13px]">
            <strong class="block text-japs-navy">Correo</strong
            >contacto@japs.com.co
          </p>
          <p class="text-[13px]">
            <strong class="block text-japs-navy">Teléfono</strong>+57 (601) 742
            00 00
          </p>
          <div class="mt-4 flex gap-2">
            <a
              class="grid size-[30px] place-items-center rounded-full bg-japs-blue text-[10px] text-white no-underline"
              href="#formulario"
              >f</a
            ><a
              class="grid size-[30px] place-items-center rounded-full bg-japs-blue text-[10px] text-white no-underline"
              href="#formulario"
              >ig</a
            ><a
              class="grid size-[30px] place-items-center rounded-full bg-japs-blue text-[10px] text-white no-underline"
              href="#formulario"
              >in</a
            >
          </div>
        </div>
        <ContactForm id="formulario" />
      </div>
    </section>
  </main>
</template>
