<template>
  <svg
    t="1608728563946"
    class="IconMoreHorizontal"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="2463"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    :width="width"
    :height="height"
  >
    <path
      d="M865.49525068 512m2e-8-88.37381268a88.37381268 88.37381268 0 1 0 0 176.74762536 88.37381268 88.37381268 0 1 0 0-176.74762536Z"
      p-id="2464"
      :fill="fill"
    ></path>
    <path
      d="M512 512m0-88.37381269a88.37381268 88.37381268 0 1 0 0 176.74762538 88.37381268 88.37381268 0 1 0 0-176.74762538Z"
      p-id="2465"
      :fill="fill"
    ></path>
    <path
      d="M158.50474932 512m-2e-8-88.37381268a88.37381268 88.37381268 0 1 0 0 176.74762536 88.37381268 88.37381268 0 1 0 0-176.74762536Z"
      p-id="2466"
      :fill="fill"
    ></path>
  </svg>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  name: "IconMoreHorizontal",
})
export default class extends Vue {
  @Prop({ default: "32" }) readonly width!: string;

  @Prop({ default: "32" }) readonly height!: string;

  @Prop({ default: "#7D818A" }) readonly fill!: string;
}
</script>

<style lang="scss">
.IconMoreHorizontal {
  padding: $S2 !important;
  transform: translateY(-3px);
}
</style>
