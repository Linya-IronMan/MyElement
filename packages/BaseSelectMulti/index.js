import BaseseSelectMulti from './src/index.vue';
import { Select, Option, Button } from "element-ui";

const components = {
    BaseseSelectMulti,
    Select,
    Option, 
    Button
}



/* istanbul ignore next */
BaseseSelectMulti.install = function (Vue) {
    Object.values(components).forEach(comp => {
        Vue.component(comp.name, comp);
    })
};

export default BaseseSelectMulti;
