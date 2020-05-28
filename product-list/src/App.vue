<template>
  <div id="app">
    <product-list></product-list>
  </div>
</template>

<script>
import productList from "./components/product-list.vue";

export default {
  components: {
    "product-list": productList
  }
};
</script>

<style>
body {
  background: #000;
  color: #fff;
}
</style>
