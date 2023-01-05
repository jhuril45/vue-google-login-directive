import directive from "./directive";
import googleApi from "./googleApi.js";
// const api_script = 'https://apis.google.com/js/api:client.js'

// let googleSignInAPI = document.createElement("script");
// googleSignInAPI.setAttribute(
//   "src",
//   api_script
// );
// document.head.appendChild(googleSignInAPI);
eval(googleApi)

const plugin = {
  install(Vue) {
    Vue.directive("google-login", directive);
  },
  directive,
};

export default plugin;
