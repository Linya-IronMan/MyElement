<template>
  <svg
    t="1615441767868"
    class="IconAdd"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="2619"
    :width="width"
    :height="height"
  >
    <path
      d="M512 42.688a467.2 467.2 0 1 0 332.8 136.832A469.312 469.312 0 0 0 512 42.688zM512 896a384 384 0 1 1 384-384 384 384 0 0 1-384 384z"
      p-id="2620"
      :fill="fill"
    ></path>
    <path
      d="M725.312 469.312H554.688V298.688a42.688 42.688 0 1 0-85.312 0v170.688H298.688a42.688 42.688 0 1 0 0 85.312h170.688v170.688a42.688 42.688 0 0 0 85.312 0V554.688h170.688a42.688 42.688 0 0 0 0-85.312z"
      p-id="2621"
      :fill="fill"
    ></path>
  </svg>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  name: "IconAdd",
})
export default class extends Vue {
  @Prop({ default: "20" }) readonly width!: string;

  @Prop({ default: "20" }) readonly height!: string;

  @Prop({ default: "#000000" }) readonly fill!: string;
}
</script>
