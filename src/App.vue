<template>
  <div id="app">
    <Logo />
    <Films :films="films" />
    <Footer />
  </div>
</template>

<script>
import Logo from "./components/Logo.vue";
import Films from "./components/Films.vue";
import Footer from "./components/Footer.vue";
import axios from "axios";

export default {
  name: "App",
  components: {
    Films,
    Logo,
    Footer
  },
  title() {
    return `${this.pageTitle}`;
  },
  data() {
    return {
      films: {},
      pageTitle: "Studio Ghibli Films"
    };
  },
  created: function() {
    this.fetchFilms();
  },
  methods: {
    fetchFilms: function() {
      var url = "https://ghibliapi.herokuapp.com/films";
      axios.get(url).then(res => {
        this.films = res.data;
        //console.log(vm.films);
        // console.log(response.data);
        // console.log(response.status);
        // console.log(response.statusText);
        // console.log(response.headers);
        // console.log(response.config);
      });
    },
    remove: function(index) {
      this.films.splice(index, 1);
    }
  }
};
</script>

<style>
body {
  line-height: 1.4;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}
[v-cloak] {
  display: none;
}
main {
  min-height: 800px;
}
.container {
  padding-left: 40px;
  padding-right: 40px;
}
.block {
  display: block;
  width: 100%;
}
.bold {
  font-weight: 600;
}
</style>
