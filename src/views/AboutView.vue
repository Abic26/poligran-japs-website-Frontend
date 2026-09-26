<script setup>
import logoJaps from "../assets/logo-japs.png";
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
          >NOSOTROS</span
        >
        <div>
          <span
            class="text-[11px] font-extrabold uppercase tracking-[1.2px] text-japs-yellow"
            >Quiénes somos</span
          >
          <h1
            class="mt-3 text-[clamp(42px,5.5vw,66px)] leading-none tracking-[-2.5px] text-white"
          >
            Conectamos experiencia<br />con
            <em class="font-serif font-normal text-japs-yellow">energía.</em>
          </h1>
        </div>
        <p class="border-l-2 border-japs-yellow pl-5 text-[#c2d1d8]">
          Somos aliados de los proyectos que construyen y mantienen la
          infraestructura eléctrica de Colombia.
        </p>
      </div>
    </section>
    <section class="py-24">
      <div
        class="mx-auto grid w-[calc(100%-3rem)] max-w-[1100px] grid-cols-[.9fr_1.1fr] items-center gap-20 max-[750px]:w-[calc(100%-2rem)] max-[750px]:grid-cols-1 max-[750px]:gap-9"
      >
        <div
          class="relative grid min-h-[390px] place-items-center bg-[#eef4f5] max-[750px]:min-h-[280px]"
        >
          <span
            class="absolute top-5 left-5 text-[9px] uppercase tracking-widest text-[#66808c]"
            >Desde Colombia</span
          ><img
            class="w-3/4 mix-blend-multiply"
            :src="logoJaps"
            alt="JAPS Electrical equipment"
          />
        </div>
        <div>
          <span
            class="text-[11px] font-extrabold uppercase tracking-[1.2px] text-japs-blue"
            >Nuestra esencia</span
          >
          <h2
            class="my-3 text-[clamp(34px,4vw,48px)] leading-tight tracking-[-1.7px]"
          >
            Respaldo técnico y relaciones que perduran.
          </h2>
          <p>
            En JAPS acercamos productos eléctricos confiables a las empresas y
            comunidades que los necesitan. Creemos en la calidad, la atención
            cercana y el desarrollo sostenible del sector.
          </p>
          <p>
            Nuestro equipo acompaña cada proyecto con experiencia y compromiso,
            ofreciendo soluciones para redes de distribución.
          </p>
          <RouterLink
            class="mt-3 inline-flex min-h-10 items-center justify-center bg-japs-blue px-[22px] text-xs font-extrabold text-white no-underline transition hover:-translate-y-0.5 hover:shadow-lg"
            to="/contacto"
            >Hablemos de tu proyecto</RouterLink
          >
        </div>
      </div>
    </section>
  </main>
</template>
