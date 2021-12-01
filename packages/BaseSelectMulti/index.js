import BaseseSelectMulti from "./src/index.vue";

const components = {
  BaseseSelectMulti,
};

/* istanbul ignore next */
BaseseSelectMulti.install = function (Vue) {
  Object.values(components).forEach((comp) => {
    Vue.component(comp.name, comp);
  });
};

export default BaseseSelectMulti;
