# v-google-login
A simple Vue directive to include Google Sign-In Button behavior in any component.

## Install

```bash
$ npm install --save vue-google-login-directive
```

```bash
$ yarn add vue-google-login-directive
```

## Vue2

```js
import Vue from 'vue'
import vGoogleLogin from 'vue-google-login-directive'

Vue.use(vGoogleLogin)
```


## Vue 3

```js
import vGoogleLogin from 'vue-google-login-directive'
import { ref } from "vue";

<script setup>
  const googleSettings = ref({
    client_id: "google_client_id",
    OnSuccess: googleCallBackSuccess,
    Onfail: googleCallBackError,
  });

  function googleCallBackSuccess(data) {
    console.log('googleCallBackSuccess', data);
  }

  function googleCallBackError(error) {
    console.log('googleCallBackError', error);
  }
</script>

<template>
  <div v-google-login="googleSettings"></div>
</template>
```