import Vue from "vue";
import App from "./App.vue";
import titleMixin from "./mixins/titleMixin";
//FontAwesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

Vue.mixin(titleMixin);

//FontAwesome
library.add(faStar);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
