<template>
  <svg
    t="1608889485690"
    class="IconExcel"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="1189"
    :width="width"
    :height="height"
  >
    <path
      d="M121.984 122.752l536.32-76.592a21.328 21.328 0 0 1 24.368 21.12v889.44a21.328 21.328 0 0 1-24.32 21.12L121.92 901.248a42.672 42.672 0 0 1-36.64-42.24V164.992c0-21.232 15.616-39.248 36.64-42.24h0.048z m48.688 79.28v619.936l426.656 60.976V141.056l-426.656 60.96z m554.656 608.64h128V213.328h-128V128H896a42.672 42.672 0 0 1 42.672 42.672v682.656A42.672 42.672 0 0 1 896 896H725.328v-85.328zM435.2 512l119.472 170.672h-102.4L384 585.12l-68.272 97.536h-102.4L332.8 512l-119.472-170.672h102.4L384 438.88l68.272-97.536h102.4L435.2 512z"
      p-id="1190"
      :fill="fill"
    ></path>
  </svg>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  name: "IconExcel",
})
export default class extends Vue {
  @Prop({ default: "48" }) readonly width!: string;

  @Prop({ default: "48" }) readonly height!: string;

  @Prop({ default: "#B9C2CB" }) readonly fill!: string;
}
</script>
