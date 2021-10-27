import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import MyComponent from "@sdfz/mycomponent";

export default async ({ Vue }) => {
  if (typeof process === "undefined") {
    Vue.use(ElementUI);
    Vue.use(MyComponent);
  }
};
