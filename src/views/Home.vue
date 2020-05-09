<template>
  <div class="home">
    <h1>{{ title }}</h1>
    <h1>{{ titleReactive.title }}</h1>
    <h1>{{ titleDesc.title }}</h1>
    <img alt="Vue logo" src="../assets/logo.png" />
    <button @click="onButtonClick">click</button>
    <ViewProducts />
  </div>
</template>

<script>
import { ref, reactive, watchEffect, onMounted } from "vue";
import ViewProducts from "../components/ViewProducts";

export default {
  components: { ViewProducts },
  setup() {
    console.log("setup!");
    const title = ref("Hello, Vue 3! REF");
    const titleDesc = ref({ title: "pippo", description: "topo" });
    let titleReactive = reactive({ title: "Hello, Vue 3! REACTIVE" });

    setTimeout(() => {
      console.log("timeout");
      title.value = "THIS IS A NEW TITLE REF";
      titleReactive.title = "THIS IS A NEW TITLE REACTIVE";
    }, 2000);

    onMounted(() => {
      console.log("mounted!");
      console.log(title);
      console.log(titleReactive);
      console.log(titleDesc);
    });

    watchEffect(() => console.log(title.value));

    const onButtonClick = () => {
      console.log("onButtonClick");
      title.value = "THIS IS A NEW TITLE CLICK";
      titleReactive.title = "THIS IS A NEW TITLE CLICK";
    };

    return { title, titleReactive, titleDesc, onButtonClick };
  }
};
</script>
