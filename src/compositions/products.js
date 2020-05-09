import { ref, readonly } from "vue";

const products = ref(["prodotto 1", "prodotto 2"]);
const loading = ref(false);

export default function useProduct() {
  async function addProduct(product) {
    products.value.push(product);
  }

  return {
    loading,
    products: readonly(products),
    addProduct
  };
}
