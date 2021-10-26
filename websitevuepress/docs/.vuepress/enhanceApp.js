import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import BaseSelectMulti from "@sdfz/baseselectmulti"

// console.log(BaseSelectMulti, "===>>>>>>");

export default async ({
  Vue
}) => {
  if (typeof process === 'undefined') {
    Vue.use(ElementUI)
    // Vue.use(BaseSelectMulti)
  }
}