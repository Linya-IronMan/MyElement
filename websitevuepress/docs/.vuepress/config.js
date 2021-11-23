module.exports = {
  theme: "",
  title: "VuePress + Element",
  description: "VuePress搭建Element的组件库文档教程示例代码",
  base: "/",
  port: "8080",
  clearScreen: false,
  themeConfig: {
    nav: [
      {
        text: "首页",
        link: "/",
      },
      {
        text: "组件",
        link: "/comps/",
      },
    ],
    sidebar: {
      // 配置侧边栏部分
      "/comps/": ["/comps/", "安装", "开发指南", "Select", "BaseSelectMulti"],
    },
  },
  head: [],
  plugins: [
    "demo-container",
    [
      "vuepress-plugin-typescript",
      {
        tsLoaderOptions: {
          // ts-loader 的所有配置项
        },
      },
    ],
  ], // 配置插件
  markdown: {},
};
