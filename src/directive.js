import { directiveHooks } from "./utils";

let auth2 = null;

function signInGoogle(value) {
  auth2
    .signIn()
    .then(function (googleUser) {
      value.OnSuccess(googleUser.getAuthResponse().id_token);
      googleUser.disconnect();
    })
    .catch(function (error) {
      value.Onfail(error);
    });
}

function CheckComponentMethods(value) {
  if (!value.OnSuccess) {
    throw new Error(
      "The method OnSuccess must be passed"
    );
  }

  if (!value.Onfail) {
    throw new Error(
      "The method Onfail must be passed"
    );
  }
}

function initSignInGoogle(el, value) {
  CheckComponentMethods(value);

  window.gapi.load("auth2", () => {
    auth2 = window.gapi.auth2.init({
      client_id: value.client_id,
      cookiepolicy: "single_host_origin",
      plugin_name: "well_scape",
    });
    
    el.removeEventListener("click", () => signInGoogle(value));
    el.addEventListener("click", () => signInGoogle(value));
  });
}

function bind(el, { value }) {
  initSignInGoogle(el, value);
}

function unbind(el, { value }) {
  el.removeEventListener("click", () => signInGoogle(value));
}

function update(el, { value, oldValue }) {
  initSignInGoogle(el, value);
}

const directive = {
  [directiveHooks.mounted]: bind,
  [directiveHooks.updated]: update,
  [directiveHooks.unmounted]: unbind,
};

export default directive;