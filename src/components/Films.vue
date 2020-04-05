<template>
  <main>
    <div class="container">
      <div class="block counter" v-if="numFilms" v-cloak>Showing {{numFilms}} films</div>
      <transition-group name="fade" tag="div" style="display: contents">
        <div class="card" v-for="(f, index) in films" :key="f.id" v-cloak>
          <Singlefilm :film="f" :index="index" @remove="removeFilm" />
        </div>
      </transition-group>
    </div>
  </main>
</template>

<script>
import Singlefilm from "./Singlefilm.vue";

export default {
  name: "Films",
  components: {
    Singlefilm
  },
  props: ["films"],
  computed: {
    numFilms: function() {
      return this.films.length;
    }
  },
  methods: {
    removeFilm: function(index) {
      this.films.splice(index, 1);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
* {
  box-sizing: border-box;
}

html {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: "Dosis", sans-serif;
  line-height: 1.6;
  color: #666;
  background: #f6f6f6;
}

#app {
  max-width: 1200px;
  margin: 0 auto;
}

h1 {
  text-align: center;
  padding: 1.5rem 2.5rem;
  background-image: linear-gradient(120deg, #fbc2eb 0%, #a6c1ee 100%);
  margin: 0 0 2rem 0;
  font-size: 1.5rem;
  color: white;
}

h3 {
  padding: 0 2.5rem;
}

img {
  display: block;
  margin: 1rem auto;
  max-width: 100%;
}

.container {
  display: flex;
  flex-wrap: wrap;
}

.counter {
  color: grey;
  font-size: 0.8rem;
  margin-left: 1rem;
  text-align: left;
}
</style>
