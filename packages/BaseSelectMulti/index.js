import BaseseSelectMulti from "./src/index.vue";
import ElementUI from "element-ui";

const components = {
  BaseseSelectMulti,
};

/* istanbul ignore next */
BaseseSelectMulti.install = function (Vue) {
  Vue.use(ElementUI);
  Object.values(components).forEach((comp) => {
    Vue.component(comp.name, comp);
  });
};

export default BaseseSelectMulti;
