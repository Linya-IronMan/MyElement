import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import BaseseSelectMulti from "@sdfz/baseselectmulti";

export default async ({ Vue }) => {
  if (typeof process === "undefined") {
    Vue.use(ElementUI);
    Vue.use(BaseseSelectMulti);
  }
};
