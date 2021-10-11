<template>
  <svg
    t="1632816281344"
    class="icon"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="4118"
    :width="width"
    :height="height"
  >
    <path
      :fill="fill"
      d="M814.336 364.288L448 749.44a58.24 58.24 0 0 1-85.312 0L209.664 588.608a65.92 65.92 0 0 1 0-89.792 58.304 58.304 0 0 1 85.312 0l110.336 116.032 323.648-340.224a58.24 58.24 0 0 1 85.376 0 65.664 65.664 0 0 1 0 89.664"
      p-id="4119"
    ></path>
  </svg>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  name: "IconCheckBig",
})
export default class extends Vue {
  @Prop({ default: "20" }) readonly width!: string;

  @Prop({ default: "20" }) readonly height!: string;

  @Prop({ default: "#000000" }) readonly fill!: string;
}
</script>
