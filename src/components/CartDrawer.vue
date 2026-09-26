<script setup>
import { useShop } from "../composables/useShop";

const { cart, cartOpen, cartTotal, changeQuantity, removeFromCart } = useShop();
const money = (value) =>
  new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(value);
</script>

<template>
  <div
    v-if="cartOpen"
    class="fixed inset-0 z-30 bg-japs-navy/45"
    @click.self="cartOpen = false"
  >
    <aside
      class="ml-auto flex h-full w-full max-w-[390px] flex-col bg-white p-6 shadow-2xl"
      aria-label="Carrito de compras"
    >
      <div
        class="flex items-center justify-between border-b border-japs-line pb-4"
      >
        <h2 class="m-0 text-xl">Tu carrito</h2>
        <button
          class="text-2xl"
          aria-label="Cerrar carrito"
          @click="cartOpen = false"
        >
          ×
        </button>
      </div>
      <p v-if="!cart.length" class="my-auto text-center">
        Tu carrito está vacío.
      </p>
      <div v-else class="flex-1 overflow-auto py-3">
        <article
          v-for="item in cart"
          :key="item.referencia"
          class="grid grid-cols-[64px_1fr] gap-3 border-b border-japs-line py-4"
        >
          <img
            class="size-16 object-contain"
            :src="item.imagen"
            :alt="item.nombre"
          />
          <div>
            <h3 class="m-0 text-xs">{{ item.nombre }}</h3>
            <p class="my-1 text-[11px]">{{ money(item.precio) }}</p>
            <div class="flex items-center gap-2">
              <button
                class="size-7 border border-japs-line"
                @click="changeQuantity(item.referencia, -1)"
              >
                −
              </button>
              <span class="text-xs">{{ item.cantidad }}</span>
              <button
                class="size-7 border border-japs-line"
                @click="changeQuantity(item.referencia, 1)"
              >
                +
              </button>
              <button
                class="ml-auto text-[10px] text-red-600"
                @click="removeFromCart(item.referencia)"
              >
                Eliminar
              </button>
            </div>
          </div>
        </article>
      </div>
      <div v-if="cart.length" class="border-t border-japs-line pt-4">
        <div class="mb-4 flex justify-between font-bold">
          <span>Total</span><span>{{ money(cartTotal) }}</span>
        </div>
        <RouterLink
          class="flex min-h-10 items-center justify-center bg-japs-yellow text-xs font-extrabold text-japs-navy no-underline"
          to="/contacto"
          @click="cartOpen = false"
          >Solicitar cotización</RouterLink
        >
      </div>
    </aside>
  </div>
</template>
