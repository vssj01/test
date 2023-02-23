<template>
  <div class="card">
    <h1>Child 2</h1>
    <p>{{ greet }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      greet: "",
    };
  },
  created() {
    this.$root.$on("child1to2", (m) => {
      this.greet = m;
    });
  },
};
</script>

<style lang="scss" scoped></style>
