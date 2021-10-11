<template>
  <svg
    class="IconDataset"
    :width="width"
    :height="height"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="2747"
  >
    <path
      d="M512 164.288l113.088 177.088H396.8L512 164.288m0-121.6A44.8 44.8 0 0 0 475.712 64L281.6 362.688a49.088 49.088 0 0 0 0 42.688 40.512 40.512 0 0 0 36.288 21.312H704a44.8 44.8 0 0 0 36.288-21.312 38.4 38.4 0 0 0 0-42.688L548.288 64A40.512 40.512 0 0 0 512 42.688z"
      p-id="2748"
      :fill="fill"
    ></path>
    <path
      d="M917.312 917.376H618.688A42.688 42.688 0 0 1 576 874.688V576.064a42.688 42.688 0 0 1 42.688-42.688h298.688a42.688 42.688 0 0 1 42.688 42.688v298.688a42.688 42.688 0 0 1-42.752 42.624z m-256-85.312h213.312V618.688h-213.312z"
      p-id="2749"
      :fill="fill"
    ></path>
    <path
      d="M277.312 597.312a128 128 0 1 1-128 128 128 128 0 0 1 128-128m0-85.312a213.312 213.312 0 1 0 213.312 213.312A213.312 213.312 0 0 0 277.312 512z"
      p-id="2750"
      :fill="fill"
    ></path>
  </svg>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  name: "IconDataset",
})
export default class extends Vue {
  @Prop({ default: "20" }) readonly width!: string;

  @Prop({ default: "20" }) readonly height!: string;

  @Prop({ default: "#7D818A" }) readonly fill!: string;
}
</script>
