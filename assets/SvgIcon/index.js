import IconCheckBig from "./IconCheckBig";

const components = {
    IconCheckBig,
}

const install = function (Vue) {
    Object.values(components).forEach(component => {
        Vue.component(component.name, component)
    })
}

export default {
    ...components,
    install
}