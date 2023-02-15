import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";
import { app as webglApp } from "./WebglApp/App";
import "./assets/styles/main.scss";
import router from "./router";
import { createI18n } from "vue-i18n";
import messages from "@intlify/unplugin-vue-i18n/messages";

webglApp.init();

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: "en",
  fallbackLocale: "en",
  availableLocales: ["en", "fr", "es"],
  messages: messages,
});

const vueApp = createApp(App);
vueApp.use(createPinia());
vueApp.use(router);
vueApp.use(i18n);
vueApp.mount("#vue-app");
