# Select 选择器

当选项过多时，使用下拉菜单展示并选择内容。

## 基本用法

适用广泛的基础单选

::: demo

```html
<template>
  <el-select v-model="value" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    >
    </el-option>
  </el-select>
</template>

<script>
  export default {
    data() {
      return {
        options: [
          {
            value: "选项1",
            label: "黄金糕",
          },
          {
            value: "选项2",
            label: "双皮奶",
          },
        ],
        value: "",
      };
    },
  };
</script>
```

:::

select 基础用法 +1

## hello world

你好

:::demo

```html
<template>
  <BaseSelectMulti
    v-model="showedColSelected"
    :options="showedColOptions"
    selectName="展示列"
    :selectCountMax="6"
    :showDelIcon="false"
  >
  </BaseSelectMulti>
</template>

<script>
  export default {
    data() {
      return {
        showedColSelected: [],
        options: [
          {
            value: "选项1",
            label: "黄金糕",
          },
          {
            value: "选项2",
            label: "双皮奶",
          },
        ],
        showedColOptions: [
          { label: "项目名称", value: "项目名称", disabled: true },
          { label: "任务类型", value: "任务类型" },
          { label: "最优指标", value: "最优指标" },
          { label: "训练得分", value: "训练得分" },
          { label: "验证得分", value: "验证得分" },
          { label: "服务状态", value: "服务状态" },
          { label: "标签", value: "标签" },
          { label: "训练时长", value: "训练时长" },
          { label: "算子数", value: "算子数" },
          { label: "实验成功率", value: "实验成功率" },
        ],
        value: "",
      };
    },
    methods: {
      click() {
        this.$message.warning("hello world button click;");
      },
    },
  };
</script>
```

:::

