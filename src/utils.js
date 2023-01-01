// vue@3.x has named export, vue@2.6.x has not
// modern import Vue, { version } from 'vue' gives "export 'version' was not
// found in 'vue'" warnings, so inline require call was used instead.
// eslint-disable-next-line
const version = require("vue").version || require("vue").default.version;

export const isVue3 = /^3\./.test(version);

// eslint-disable-next-line
export const directiveHooks = {
  mounted: isVue3 ? "mounted" : "bind",
  updated: isVue3 ? "updated" : "update",
  unmounted: isVue3 ? "unmounted" : "unbind",
};
