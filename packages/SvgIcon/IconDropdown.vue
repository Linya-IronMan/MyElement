<template>
  <svg
    t="1608875755544"
    class="IconDropdown"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="1159"
    :width="width"
    :height="height"
  >
    <path
      d="M755.342 433.89L537.778 671.8a34.238 34.238 0 0 1-25.718 11.637A34.238 34.238 0 0 1 486.34 671.8L268.777 433.89c-10.621-11.218-13.903-27.568-8.414-42.009s18.737-24.525 34.133-25.897h434.949c15.455 1.313 28.761 11.337 34.251 25.838 5.55 14.5 2.268 30.79-8.354 42.068z"
      :fill="fill"
      p-id="1160"
    ></path>
  </svg>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  name: "IconDropdown",
})
export default class extends Vue {
  @Prop({ default: "14" }) readonly width!: string;

  @Prop({ default: "14" }) readonly height!: string;

  @Prop({ default: "#7D818A" }) readonly fill!: string;
}
</script>

<style lang="scss">
.IconDropdown {
  transform: translateY(-2px);
}
</style>
