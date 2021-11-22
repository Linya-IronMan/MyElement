const mdList = ["log.md", "开发指南.md", "安装.md"];
module.exports = {
  theme: "",
  title: "VuePress + Element",
  description: "VuePress搭建Element的组件库文档教程示例代码",
  base: "/",
  port: "8080",
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
      "/comps/": mdList.map((mdname) => `/comps/${mdname}`),
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
