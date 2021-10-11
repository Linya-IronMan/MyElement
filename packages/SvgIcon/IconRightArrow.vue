<template>
  <svg
    t="1615980420525"
    class="IconRightArrow"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="2460"
    :width="width"
    :height="height"
  >
    <path
      d="M336.192 767.872l303.744-303.936 48.256 48.256-304 303.744z"
      p-id="2461"
    ></path>
    <path
      d="M336 255.936L384 207.68l304 303.936-48.256 48.064z"
      p-id="2462"
    ></path>
  </svg>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  name: "IconRightArrow",
})
export default class extends Vue {
  @Prop({ default: "16" }) readonly width!: string;

  @Prop({ default: "16" }) readonly height!: string;

  @Prop({ default: "#000000" }) readonly fill!: string;
}
</script>
