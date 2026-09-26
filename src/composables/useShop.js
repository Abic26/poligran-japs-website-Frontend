import { computed, ref, watch } from "vue";

const readStorage = (key, fallback) => {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? fallback;
  } catch {
    return fallback;
  }
};

const cart = ref(readStorage("japs-cart", []));
const favorites = ref(readStorage("japs-favorites", []));
const cartOpen = ref(false);

watch(
  cart,
  (value) => localStorage.setItem("japs-cart", JSON.stringify(value)),
  {
    deep: true,
  },
);
watch(
  favorites,
  (value) => localStorage.setItem("japs-favorites", JSON.stringify(value)),
  {
    deep: true,
  },
);

export function useShop() {
  const cartCount = computed(() =>
    cart.value.reduce((total, item) => total + item.cantidad, 0),
  );
  const cartTotal = computed(() =>
    cart.value.reduce((total, item) => total + item.precio * item.cantidad, 0),
  );

  const addToCart = (product) => {
    const existing = cart.value.find(
      (item) => item.referencia === product.referencia,
    );
    if (existing) existing.cantidad += 1;
    else
      cart.value.push({ ...product, precio: product.precio || 0, cantidad: 1 });
    cartOpen.value = true;
  };

  const changeQuantity = (reference, amount) => {
    const item = cart.value.find((entry) => entry.referencia === reference);
    if (!item) return;
    item.cantidad += amount;
    if (item.cantidad <= 0) removeFromCart(reference);
  };

  const removeFromCart = (reference) => {
    cart.value = cart.value.filter((item) => item.referencia !== reference);
  };

  const toggleFavorite = (title) => {
    favorites.value = favorites.value.includes(title)
      ? favorites.value.filter((item) => item !== title)
      : [...favorites.value, title];
  };

  return {
    cart,
    favorites,
    cartOpen,
    cartCount,
    cartTotal,
    addToCart,
    changeQuantity,
    removeFromCart,
    toggleFavorite,
  };
}
