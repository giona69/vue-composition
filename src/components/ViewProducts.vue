<template>
  <div class="hello">
    <div :key="product" v-for="product in products">{{ product }}</div>
  </div>
</template>

<script>
import useProduct from "../compositions/products";

export default {
  name: "ViewProducts",
  setup() {
    const { products } = useProduct();
    return { products };
  }
};
</script>
