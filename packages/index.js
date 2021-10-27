import BaseSelectMulti from "./BaseSelectMulti/src/index.vue";

const components = {
  BaseSelectMulti,
};

const install = function (Vue) {
  Object.keys(components).forEach((component) => {
    Vue.component(component, components[component]);
  });
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  BaseSelectMulti,
};
