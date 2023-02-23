<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <Parent />
  </div>
</template>

<script>
import Parent from "./components/Parent.vue";

export default {
  name: "App",
  components: {
    Parent,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
button {
  font-size: 16px;
  padding: 12px 12px;
  cursor: pointer;
}
th,
td {
  border: 1px solid;
  padding: 8px;
  margin: 8px;
}

/* Select the button element */
button {
  background-color: white;
  color: black;
  font-size: 16px;
  padding: 12px 24px;
  border: 1px solid black;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  margin: 4px;
}
</style>
