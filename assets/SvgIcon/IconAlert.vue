<template>
  <svg
    t="1616046221115"
    class="IconAlert"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="2519"
    :width="width"
    :height="height"
  >
    <path
      d="M512 981.333333a467.2 467.2 0 1 0-332.501333-136.832A469.333333 469.333333 0 0 0 512 981.333333z m0-853.333333a384 384 0 1 1-384 384 384 384 0 0 1 384-384z"
      p-id="2520"
      :fill="fill"
    ></path>
    <path
      d="M512 597.333333a42.666667 42.666667 0 0 0 42.666667-42.666666V298.666667a42.666667 42.666667 0 0 0-85.333334 0v256a42.666667 42.666667 0 0 0 42.666667 42.666666z"
      p-id="2521"
      :fill="fill"
    ></path>
    <path
      d="M512 725.333333m-42.666667 0a42.666667 42.666667 0 1 0 85.333334 0 42.666667 42.666667 0 1 0-85.333334 0Z"
      p-id="2522"
      :fill="fill"
    ></path>
  </svg>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  name: "IconAlert",
})
export default class extends Vue {
  @Prop({ default: "16" }) readonly width!: string;

  @Prop({ default: "16" }) readonly height!: string;

  @Prop({ default: "#FD3636" }) readonly fill!: string;
}
</script>

<style lang="scss">
.IconAlert {
  padding: 0 !important;
}
</style>
