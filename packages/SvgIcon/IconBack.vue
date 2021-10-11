<template>
  <svg
    t="1615964255064"
    class="IconBack"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="2459"
    :width="width"
    :height="height"
  >
    <path
      d="M762.770286 475.428571H336.457143l154.660571-154.660571a30.317714 30.317714 0 0 0 0-43.885714 30.317714 30.317714 0 0 0-43.885714 0l-209.005714 209.005714a30.317714 30.317714 0 0 0 0 43.885714L447.268571 738.742857c6.253714 6.253714 14.628571 8.374857 22.966858 8.374857 8.374857 0 16.713143-2.121143 23.003428-8.374857a30.317714 30.317714 0 0 0 0-43.885714l-154.660571-154.660572h424.228571c16.713143 0 31.341714-14.628571 31.341714-31.341714 0-16.713143-14.628571-33.426286-31.341714-33.426286z"
      p-id="2460"
      :fill="fill"
    ></path>
  </svg>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  name: "IconBack",
})
export default class extends Vue {
  @Prop({ default: "20" }) readonly width!: string;

  @Prop({ default: "20" }) readonly height!: string;

  @Prop({ default: "#000000" }) readonly fill!: string;
}
</script>
