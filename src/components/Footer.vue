<template>
  <footer>
    Footer text
  </footer>
</template>

<script>
export default {
  name: "Footer",
  props: {
    msg: String
  }
};
</script>

<style scoped>
footer {
  background-color: #ddd;
  color: #fff;
  padding: 60px 30px;
}
</style>
