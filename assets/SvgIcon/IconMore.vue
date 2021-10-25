<template>
  <svg
    t="1618307523916"
    class="IconMore"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="3829"
    :width="width"
    :height="height"
  >
    <path
      d="M865.49525068 512m2e-8-88.37381268a88.37381268 88.37381268 0 1 0 0 176.74762536 88.37381268 88.37381268 0 1 0 0-176.74762536Z"
      p-id="3830"
      :fill="fill"
    ></path>
    <path
      d="M512 512m0-88.37381269a88.37381268 88.37381268 0 1 0 0 176.74762538 88.37381268 88.37381268 0 1 0 0-176.74762538Z"
      p-id="3831"
      :fill="fill"
    ></path>
    <path
      d="M158.50474932 512m-2e-8-88.37381268a88.37381268 88.37381268 0 1 0 0 176.74762536 88.37381268 88.37381268 0 1 0 0-176.74762536Z"
      p-id="3832"
      :fill="fill"
    ></path>
  </svg>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  name: "IconMore",
})
export default class extends Vue {
  @Prop({ default: "20" }) readonly width!: string;

  @Prop({ default: "20" }) readonly height!: string;

  @Prop({ default: "#000000" }) readonly fill!: string;
}
</script>
