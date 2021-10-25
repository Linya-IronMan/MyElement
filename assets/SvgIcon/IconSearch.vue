<template>
  <svg
    t="1608728534055"
    class="IconSearch"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="1763"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    :width="width"
    :height="height"
  >
    <path
      d="M947.2 947.2c-19.2 19.2-57.6 19.2-76.8 0L691.2 768c-153.6 115.2-371.2 102.4-512-38.4C25.6 576 25.6 326.4 179.2 172.8 332.8 19.2 582.4 19.2 736 172.8c140.8 140.8 153.6 358.4 38.4 512l179.2 179.2c12.8 25.6 12.8 57.6-6.4 83.2zM652.8 256C544 147.2 364.8 147.2 256 256s-108.8 288 0 396.8 288 108.8 396.8 0 108.8-288 0-396.8z"
      p-id="1764"
      :fill="fill"
    ></path>
  </svg>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  name: "IconSearch",
})
export default class extends Vue {
  @Prop({ default: "18" }) readonly width!: string;

  @Prop({ default: "18" }) readonly height!: string;

  @Prop({ default: "#7D818A" }) readonly fill!: string;
}
</script>
