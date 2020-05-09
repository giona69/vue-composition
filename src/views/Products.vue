<template>
  <div class="home">
    <h1>Add Product</h1>
    <div :key="product" v-for="product in products">{{ product }}</div>
    <img alt="Vue logo" src="../assets/logo.png" />
    <button @click="onButtonClick">click</button>
    <ViewProducts />
  </div>
</template>

<script>
import { watchEffect } from "vue";
import useProduct from "../compositions/products";
import ViewProducts from "../components/ViewProducts";

export default {
  components: { ViewProducts },
  setup() {
    console.log("setup!");
    const { products, addProduct } = useProduct();
    console.log(products);

    watchEffect(() => console.log(products));

    const onButtonClick = () => {
      console.log("onButtonClick");
      addProduct("new product");
    };

    return { products, onButtonClick };
  }
};
</script>
