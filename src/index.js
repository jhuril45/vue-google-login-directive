import directive from "./directive";
import googleApi from "./googleApi.js";

eval(googleApi)

const plugin = {
  install(Vue) {
    Vue.directive("google-login", directive);
  },
  directive,
};

export default plugin;
