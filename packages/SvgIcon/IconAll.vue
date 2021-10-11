<template>
  <svg
    t="1617346783964"
    class="IconAll"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="2457"
    :width="width"
    :height="height"
  >
    <path
      d="M966.4 300.8L512 128 57.6 300.8a19.2 19.2 0 0 0 0 38.4L512 512l454.4-172.8a19.2 19.2 0 0 0 0-38.4zM512 420.288L245.312 320 512 219.712 778.688 320z"
      p-id="2458"
      :fill="fill"
    ></path>
    <path
      d="M923.776 471.424L512 633.6 100.288 471.424A43.2 43.2 0 1 0 70.4 552.512l441.6 172.8 441.6-172.8a43.2 43.2 0 1 0-29.888-81.088z"
      p-id="2459"
      :fill="fill"
    ></path>
    <path
      d="M923.776 684.8L512 846.976 100.288 684.8a43.2 43.2 0 1 0-29.888 81.088l441.6 172.8 441.6-172.8a43.2 43.2 0 1 0-29.888-81.088z"
      p-id="2460"
      :fill="fill"
    ></path>
  </svg>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  name: "IconAll",
})
export default class extends Vue {
  @Prop({ default: "20" }) readonly width!: string;

  @Prop({ default: "20" }) readonly height!: string;

  @Prop({ default: "#000000" }) readonly fill!: string;
}
</script>
