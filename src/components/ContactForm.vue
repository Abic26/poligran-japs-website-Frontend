<script setup>
import { reactive, ref } from "vue";

const form = reactive({
  nombre: "",
  correo: "",
  telefono: "",
  asunto: "",
  mensaje: "",
});
const errors = reactive({});
const sent = ref(false);

const submit = () => {
  Object.keys(errors).forEach((key) => delete errors[key]);
  sent.value = false;
  if (form.nombre.trim().length < 3)
    errors.nombre = "Escribe al menos 3 caracteres.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.correo))
    errors.correo = "Ingresa un correo válido.";
  if (form.telefono && !/^\+?[0-9\s()-]{7,15}$/.test(form.telefono))
    errors.telefono = "Ingresa un teléfono válido.";
  if (form.asunto.trim().length < 3)
    errors.asunto = "Indica el motivo del mensaje.";
  if (form.mensaje.trim().length < 10)
    errors.mensaje = "El mensaje debe tener al menos 10 caracteres.";
  if (Object.keys(errors).length) return;
  sent.value = true;
  Object.keys(form).forEach((key) => (form[key] = ""));
};
</script>

<template>
  <form class="p-8" novalidate @submit.prevent="submit">
    <span
      class="text-[11px] font-extrabold uppercase tracking-[1.2px] text-japs-blue"
      >Escríbenos</span
    >
    <h3>Envíanos un mensaje</h3>
    <div
      v-if="sent"
      class="mb-4 border-l-4 border-green-500 bg-green-50 p-3 text-xs text-green-800"
      role="status"
    >
      ¡Mensaje enviado correctamente! Esta es una simulación; pronto nos
      pondremos en contacto.
    </div>
    <div class="grid grid-cols-2 gap-3 max-[430px]:grid-cols-1">
      <label class="grid gap-1 text-[11px] font-bold"
        >Nombre
        <input
          v-model.trim="form.nombre"
          class="w-full border bg-[#f1f9fc] p-2.5 text-xs"
          :class="errors.nombre ? 'border-red-500' : 'border-[#d6e8ef]'"
          placeholder="Tu nombre"
        />
        <small v-if="errors.nombre" class="font-normal text-red-600">{{
          errors.nombre
        }}</small>
      </label>
      <label class="grid gap-1 text-[11px] font-bold"
        >Correo
        <input
          v-model.trim="form.correo"
          type="email"
          class="w-full border bg-[#f1f9fc] p-2.5 text-xs"
          :class="errors.correo ? 'border-red-500' : 'border-[#d6e8ef]'"
          placeholder="correo@ejemplo.com"
        />
        <small v-if="errors.correo" class="font-normal text-red-600">{{
          errors.correo
        }}</small>
      </label>
      <label class="grid gap-1 text-[11px] font-bold"
        >Teléfono
        <input
          v-model.trim="form.telefono"
          class="w-full border bg-[#f1f9fc] p-2.5 text-xs"
          :class="errors.telefono ? 'border-red-500' : 'border-[#d6e8ef]'"
          placeholder="Tu teléfono"
        />
        <small v-if="errors.telefono" class="font-normal text-red-600">{{
          errors.telefono
        }}</small>
      </label>
      <label class="grid gap-1 text-[11px] font-bold"
        >Asunto
        <input
          v-model.trim="form.asunto"
          class="w-full border bg-[#f1f9fc] p-2.5 text-xs"
          :class="errors.asunto ? 'border-red-500' : 'border-[#d6e8ef]'"
          placeholder="Motivo del mensaje"
        />
        <small v-if="errors.asunto" class="font-normal text-red-600">{{
          errors.asunto
        }}</small>
      </label>
      <label
        class="col-span-full grid gap-1 text-[11px] font-bold max-[430px]:col-span-1"
        >Mensaje
        <textarea
          v-model.trim="form.mensaje"
          class="min-h-[76px] w-full border bg-[#f1f9fc] p-2.5 text-xs"
          :class="errors.mensaje ? 'border-red-500' : 'border-[#d6e8ef]'"
          placeholder="Cuéntanos sobre tu proyecto"
        ></textarea>
        <small v-if="errors.mensaje" class="font-normal text-red-600">{{
          errors.mensaje
        }}</small>
      </label>
    </div>
    <button
      class="mt-3.5 inline-flex min-h-10 w-full items-center justify-center bg-japs-yellow px-[22px] text-xs font-extrabold text-japs-navy transition hover:-translate-y-0.5 hover:shadow-lg"
    >
      Enviar mensaje
    </button>
  </form>
</template>
