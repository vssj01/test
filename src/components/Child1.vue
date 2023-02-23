<template>
  <div class="card">
    <h1>Child 1</h1>
    <p>{{ message }}</p>
    <button @click="sendMessage">
      Click on me to communicate with Parent Component
    </button>
    <br />
    <button @click="communicateWithChild2">
      Click on me to communicate with Child 2
    </button>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      required: true,
    },
  },
  methods: {
    sendMessage() {
      this.$emit("childMessage", "Message Received from Child 1");
    },
    communicateWithChild2() {
      this.$root.$emit("child1to2", "Message Recieved from Child 1 Component");
    },
  },
};
</script>

<style scoped></style>
