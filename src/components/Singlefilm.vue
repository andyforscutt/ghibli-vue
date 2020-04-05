<template>
  <div class="single-film" :key="film.id">
    <div class="card-header">
      <h1>{{ film.title }}</h1>
    </div>
    <div class="card-body">
      <p class="bold director" :class="directorCheck">
        <font-awesome-icon icon="star" v-if="directorCheck !== null" />
        Directed by {{ film.director }}
      </p>

      <transition name="fade">
        <p v-show="details == true" :class="detailState">
          {{ film.description }}
          <br />
          <button @click="details = !details" class="btn">Show Less</button>
        </p>
      </transition>
      <p v-show="details == false">
        <button @click="details = !details" class="btn">Show More</button>
      </p>

      <p>
        <button @click="$emit('remove', index)" class="btn">X</button>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Singlefilm",
  data: function() {
    return {
      details: false
    };
  },
  props: ["film", "index"],
  computed: {
    detailState: function() {
      return this.details ? "detail-show" : "detail-hide";
    },
    directorCheck: function() {
      if (this.film.director == "Hayao Miyazaki") {
        return "highlight";
      } else return null;
    }
  }
};
</script>

<style>
.card {
  margin: 1rem;
  background: white;
  box-shadow: 2px 4px 25px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.2s linear;
}

.card:hover {
  box-shadow: 2px 8px 45px rgba(0, 0, 0, 0.15);
  transform: translate3D(0, -2px, 0);
}

@media screen and (min-width: 600px) {
  .card {
    flex: 1 1 calc(50% - 2rem);
  }
}

@media screen and (min-width: 900px) {
  .card {
    flex: 1 1 calc(33% - 2rem);
  }
}

.card:nth-child(2n) h1 {
  background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
}

.card:nth-child(4n) h1 {
  background-image: linear-gradient(120deg, #ff9a9e 0%, #fecfef 100%);
}

.card:nth-child(5n) h1 {
  background-image: linear-gradient(120deg, #ffc3a0 0%, #ffafbd 100%);
}

.card-body {
  color: grey;
  padding: 0 2.5rem 2.5rem;
}

.director {
  color: #000;
}

.btn {
  background-color: #ddd;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  color: #414141;
  margin-top: 10px;
  outline: none;
}

.btn:hover,
.btn:focus {
  background-color: silver;
  cursor: pointer;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.6s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(10px);
}

.highlight {
  background-color: gold;
  padding: 4px 0;
  opacity: 0.7;
}
</style>
      