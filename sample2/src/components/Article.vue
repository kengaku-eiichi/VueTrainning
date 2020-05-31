<template>
  <button @click="onclick">this.$router.push("top");</button>
</template>

<script>
export default {
  methods: {
    onclick: function() {
      this.$router.push("top");
    }
  }
};
</script>
