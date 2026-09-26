<script setup>
import ProductCard from "../components/ProductCard.vue";
import ContactForm from "../components/ContactForm.vue";
import logoJaps from "../assets/logo-japs.png";
import servicios from "../data/servicios.json";

const noticias = [
  {
    titulo: "Colombia avanza hacia una matriz energética más sostenible",
    descripcion:
      "El país combina innovación y energía renovable para fortalecer el suministro eléctrico.",
    imagen:
      "https://www.minenergia.gov.co/media/images/Colombia_cierra_su_presidencia_pro_tempore_del_.original.jpg",
  },
  {
    titulo: "La energía solar toma fuerza en Colombia",
    descripcion:
      "La expansión de proyectos solares está transformando el panorama energético nacional.",
    imagen:
      "https://ik.imagekit.io/ftuu3w4hn/cards-home/rwpgfb0l7fytkcp9k6dj.webp?updatedAt=1731505667893",
  },
  {
    titulo: "Nuevos retos y oportunidades para el sector energético",
    descripcion:
      "El sector energético colombiano enfrenta importantes desafíos y nuevas oportunidades.",
    imagen:
      "https://ik.imagekit.io/ftuu3w4hn/cards-home/mhfs85kno4s2djffrmdp.webp?updatedAt=1731505667700",
  },
];

const productos = [
  {
    nombre: "Cortacircuito 15 kV",
    referencia: "REF-001",
    estado: "Disponible",
    estadoClase: "",
    precio: 185000,
    imagen:
      "https://ik.imagekit.io/ftuu3w4hn/cortacirtuitos-de-15-kv/thumbnail/cortacirtuitos-de-15-kv.webp?updatedAt=1746641165006",
  },
  {
    nombre: "Aislador polimérico",
    referencia: "REF-014",
    estado: "Disponible",
    estadoClase: "",
    precio: 142000,
    imagen:
      "https://ik.imagekit.io/ftuu3w4hn/Aislador-Suspension-Polimerico-115-kv-120-kn/thumbnail/Aislador-Suspension-Polimerico-115-kv-120-kn.webp?updatedAt=1746639891995",
  },
  {
    nombre: "Aislador loza carrete",
    referencia: "REF-021",
    estado: "Consultar",
    estadoClase: "orange",
    precio: 68000,
    imagen:
      "https://ik.imagekit.io/ftuu3w4hn/aislador-loza-carrete-53-3/thumbnail/aislador-loza-carrete-53-3.webp?updatedAt=1746640240391",
  },
  {
    nombre: "Conector media tensión",
    referencia: "REF-040",
    estado: "Disponible",
    estadoClase: "",
    precio: 96000,
    imagen:
      "https://ik.imagekit.io/ftuu3w4hn/conector-media-tension/conector-media-tension-miniatura.webp?updatedAt=1772038099338",
  },
];

const clientes = [
  { nombre: "EPM", logo: "/images/clientes/epm.webp" },
  { nombre: "CENS", logo: "/images/clientes/cens.webp" },
  { nombre: "CEDENAR", logo: "/images/clientes/cedenar.webp" },
  { nombre: "EMCALI", logo: "/images/clientes/emcali.webp" },
  { nombre: "EDEQ", logo: "/images/clientes/edeq.webp" },
  { nombre: "Air-e", logo: "/images/clientes/air-e.webp" },
];
</script>

<template>
  <main>
    <section
      class="relative flex min-h-[660px] items-center bg-linear-to-r from-[#f8faf9] from-38% to-white py-16 max-[750px]:min-h-0 max-[750px]:bg-[#f8faf9] max-[750px]:py-12"
    >
      <div
        class="mx-auto grid w-[calc(100%-3rem)] max-w-[1100px] grid-cols-[.86fr_1.14fr] items-center gap-20 max-[750px]:w-[calc(100%-2rem)] max-[750px]:grid-cols-1 max-[750px]:gap-9"
      >
        <div>
          <span
            class="text-[11px] font-extrabold uppercase tracking-[1.2px] text-japs-blue"
            >Soluciones para redes eléctricas</span
          >
          <h1
            class="my-4 text-[clamp(46px,5.4vw,69px)] leading-[1.02] tracking-[-3px] max-[430px]:text-[42px]"
          >
            Energía que<br /><em class="font-serif font-normal text-japs-blue"
              >conecta</em
            >
            proyectos.
          </h1>
          <p class="max-w-[400px] text-[15px]">
            Equipos confiables y acompañamiento cercano para construir la
            infraestructura eléctrica del país.
          </p>
          <div
            class="mt-7 flex items-center gap-6 max-[430px]:flex-col max-[430px]:items-start"
          >
            <RouterLink
              class="inline-flex min-h-10 items-center justify-center bg-japs-blue px-[22px] text-xs font-extrabold text-white no-underline"
              to="/productos"
              >Ver catálogo</RouterLink
            >
            <RouterLink
              class="inline-flex items-center gap-3 text-xs font-extrabold text-japs-navy no-underline"
              to="/nosotros"
              >Conocer JAPS
              <span class="grid size-7 place-items-center rounded-full border"
                >→</span
              ></RouterLink
            >
          </div>
        </div>
        <div
          class="relative pr-8 pt-8 before:absolute before:top-0 before:right-0 before:h-1/2 before:w-[46%] before:bg-japs-yellow"
        >
          <img
            class="relative z-1 h-[410px] w-full rounded-bl-[75px] object-cover saturate-80 max-[750px]:h-[300px]"
            src="https://www.jdelectricos.com.co/_vercel/image?url=%2Fimg%2Flogo%2FAislamientos.jpg&w=640&q=100"
            alt="Infraestructura eléctrica"
          />
          <div
            class="relative z-2 -mt-4 ml-7 flex w-fit items-center gap-2.5 bg-japs-navy px-4 py-3 text-[9px] uppercase tracking-wider text-white"
          >
            <span class="size-[7px] rounded-full bg-japs-yellow"></span>
            Potencia · seguridad · respaldo
          </div>
        </div>
      </div>
    </section>

    <section class="bg-japs-soft py-20">
      <div
        class="mx-auto w-[calc(100%-3rem)] max-w-[1100px] max-[750px]:w-[calc(100%-2rem)]"
      >
        <div class="mb-9 text-center">
          <span
            class="text-[11px] font-extrabold uppercase tracking-[1.2px] text-japs-blue"
            >Lo que hacemos</span
          >
          <h2 class="mt-2 text-[clamp(30px,4vw,48px)]">
            Servicios para tu proyecto
          </h2>
        </div>
        <div class="grid gap-5 md:grid-cols-3">
          <article
            v-for="servicio in servicios"
            :key="servicio.id"
            class="border-t-4 border-japs-yellow bg-white p-7 shadow-sm"
          >
            <span
              class="grid size-11 place-items-center rounded-full bg-japs-navy text-xl text-japs-yellow"
              >{{ servicio.icono }}</span
            >
            <h3 class="mt-5">{{ servicio.titulo }}</h3>
            <p class="text-sm">{{ servicio.descripcion }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="py-24">
      <div
        class="mx-auto w-[calc(100%-3rem)] max-w-[1100px] max-[750px]:w-[calc(100%-2rem)]"
      >
        <div
          class="mb-20 grid grid-cols-[1fr_.8fr] items-end gap-16 max-[750px]:grid-cols-1 max-[750px]:gap-6"
        >
          <div>
            <span
              class="text-[11px] font-extrabold uppercase tracking-[1.2px] text-japs-blue"
              >Actualidad JAPS</span
            >
            <h2
              class="mt-2 mb-3.5 text-[clamp(30px,4vw,48px)] leading-[1.05] tracking-[-1.5px]"
            >
              El sector está<br />en movimiento.
            </h2>
          </div>
          <p class="mb-2 border-l-[3px] border-japs-yellow pl-6">
            Noticias, tendencias y oportunidades para entender el presente de la
            energía en Colombia.
          </p>
        </div>
        <div class="grid gap-24">
          <article
            v-for="(noticia, index) in noticias"
            :key="noticia.titulo"
            class="grid grid-cols-[1.05fr_.95fr] items-center gap-20 max-[750px]:grid-cols-1 max-[750px]:gap-9"
          >
            <div
              class="relative"
              :class="index % 2 === 1 ? 'order-2 max-[750px]:order-none' : ''"
            >
              <span
                class="absolute -top-7 left-0 text-[11px] font-extrabold tracking-widest"
                >0{{ index + 1 }}</span
              ><img
                class="h-[315px] w-full rounded-tr-3xl object-cover saturate-80 max-[750px]:h-[245px]"
                :src="noticia.imagen"
                :alt="noticia.titulo"
              />
            </div>
            <div>
              <span
                class="text-[11px] font-extrabold uppercase tracking-[1.2px] text-japs-blue"
                >Energía en Colombia</span
              >
              <h3
                class="my-3 text-[clamp(24px,3vw,34px)] leading-tight tracking-[-1px]"
              >
                {{ noticia.titulo }}
              </h3>
              <p class="mb-6">{{ noticia.descripcion }}</p>
              <RouterLink
                class="inline-flex items-center gap-3 text-xs font-extrabold text-japs-navy no-underline"
                to="/noticias/energia-solar"
                >Leer historia <span>→</span></RouterLink
              >
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="bg-japs-navy py-11">
      <div
        class="mx-auto grid w-[calc(100%-3rem)] max-w-[1100px] grid-cols-[210px_1fr] items-center gap-12 max-[750px]:w-[calc(100%-2rem)] max-[750px]:grid-cols-1 max-[750px]:gap-6"
      >
        <div>
          <span
            class="text-[11px] font-extrabold uppercase tracking-[1.2px] text-japs-yellow"
            >Confianza que conecta</span
          >
          <h2 class="mt-1 text-[26px] text-white">Nuestros clientes</h2>
        </div>
        <div
          class="grid grid-cols-6 gap-4 border-l border-white/20 pl-11 max-[750px]:grid-cols-3 max-[750px]:border-l-0 max-[750px]:border-t max-[750px]:pt-5 max-[750px]:pl-0 max-[430px]:grid-cols-2"
        >
          <div
            v-for="cliente in clientes"
            :key="cliente.nombre"
            class="grid h-[58px] min-w-0 place-items-center rounded-sm bg-white px-3 py-2"
          >
            <img
              class="h-[38px] w-full max-w-[110px] object-contain"
              :src="cliente.logo"
              :alt="`Logo ${cliente.nombre}`"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="py-24">
      <div
        class="mx-auto grid w-[calc(100%-3rem)] max-w-[1100px] grid-cols-2 items-center gap-24 max-[750px]:w-[calc(100%-2rem)] max-[750px]:grid-cols-1 max-[750px]:gap-9"
      >
        <div
          class="relative grid min-h-[330px] place-items-center overflow-hidden border-b-[12px] border-japs-yellow bg-[#edf4f6]"
        >
          <img
            class="relative z-1 max-h-[195px] w-[270px] object-contain mix-blend-multiply"
            :src="logoJaps"
            alt="JAPS Electrical equipment"
          />
        </div>
        <div>
          <span
            class="text-[11px] font-extrabold uppercase tracking-[1.2px] text-japs-blue"
            >Quiénes somos</span
          >
          <h2
            class="mt-2 mb-3.5 text-[clamp(30px,4vw,48px)] leading-[1.05] tracking-[-1.5px]"
          >
            Conocimiento que se convierte en confianza.
          </h2>
          <p class="mb-6 max-w-[480px]">
            Distribuimos equipos eléctricos y acompañamos cada proyecto con
            experiencia, atención cercana y compromiso.
          </p>
          <RouterLink
            class="inline-flex items-center gap-3 text-xs font-extrabold text-japs-navy no-underline"
            to="/nosotros"
            >Nuestra historia <span>→</span></RouterLink
          >
        </div>
      </div>
    </section>

    <section class="bg-japs-soft py-20">
      <div
        class="mx-auto w-[calc(100%-3rem)] max-w-[1100px] max-[750px]:w-[calc(100%-2rem)]"
      >
        <div
          class="mb-9 flex items-end justify-between gap-8 max-[750px]:flex-col max-[750px]:items-start"
        >
          <div>
            <span
              class="text-[11px] font-extrabold uppercase tracking-[1.2px] text-japs-blue"
              >Selección JAPS</span
            >
            <h2
              class="mt-2 mb-3.5 text-[clamp(30px,4vw,48px)] leading-[1.05] tracking-[-1.5px]"
            >
              Productos destacados
            </h2>
          </div>
          <RouterLink
            class="inline-flex items-center gap-3 text-xs font-extrabold text-japs-navy no-underline"
            to="/productos"
            >Ver catálogo completo <span>→</span></RouterLink
          >
        </div>
        <div class="grid grid-cols-2 gap-4 md:grid-cols-4">
          <ProductCard
            v-for="producto in productos"
            :key="producto.referencia"
            :producto="producto"
          />
        </div>
      </div>
    </section>

    <section class="bg-japs-navy py-20">
      <div
        class="mx-auto w-[calc(100%-3rem)] max-w-[1100px] max-[750px]:w-[calc(100%-2rem)]"
      >
        <span
          class="block text-center text-[11px] font-extrabold uppercase tracking-[1.2px] text-japs-yellow"
          >Hablemos de tu proyecto</span
        >
        <h2
          class="mt-2 mb-3.5 text-center text-[clamp(30px,4vw,48px)] leading-[1.05] text-white"
        >
          Contacto
        </h2>
        <div
          class="mx-auto mt-9 grid max-w-[900px] grid-cols-[.9fr_1.1fr] overflow-hidden bg-white shadow-2xl max-[750px]:grid-cols-1"
        >
          <div class="relative overflow-hidden bg-japs-yellow p-8">
            <h3>Ponte en contacto</h3>
            <p class="text-[13px]">
              Cuéntanos qué necesitas. Nuestro equipo te ayudará a encontrar la
              solución adecuada.
            </p>
            <p class="text-[13px]">
              <strong class="block text-japs-navy">Correo</strong>
              contacto@japs.com.co
            </p>
            <p class="text-[13px]">
              <strong class="block text-japs-navy">Teléfono</strong> +57 (601)
              742 00 00
            </p>
            <div class="mt-4 flex gap-2">
              <a
                class="grid size-[30px] place-items-center rounded-full bg-japs-blue text-[10px] text-white no-underline"
                href="#contacto"
                >f</a
              ><a
                class="grid size-[30px] place-items-center rounded-full bg-japs-blue text-[10px] text-white no-underline"
                href="#contacto"
                >ig</a
              ><a
                class="grid size-[30px] place-items-center rounded-full bg-japs-blue text-[10px] text-white no-underline"
                href="#contacto"
                >in</a
              >
            </div>
          </div>
          <ContactForm id="contacto" />
        </div>
      </div>
    </section>
  </main>
</template>
