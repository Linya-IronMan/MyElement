<template>
  <svg
    t="1615802565592"
    class="IconCode"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="2300"
    :width="width"
    :height="height"
  >
    <path
      :fill="fill"
      d="M682.688 533.376A42.688 42.688 0 0 0 640 490.688H298.688a42.688 42.688 0 1 0 0 85.312H640a42.688 42.688 0 0 0 42.688-42.624z"
      p-id="2301"
    ></path>
    <path
      :fill="fill"
      d="M298.688 661.376a42.688 42.688 0 1 0 0 85.312h170.688a42.688 42.688 0 1 0 0-85.312z"
      p-id="2302"
    ></path>
    <path
      :fill="fill"
      d="M768 896.064H170.624V170.688H384A42.688 42.688 0 0 0 426.688 128 42.688 42.688 0 0 0 384 85.376H128a42.688 42.688 0 0 0-42.688 42.688v810.624a42.688 42.688 0 0 0 42.688 42.688h682.624a42.688 42.688 0 0 0 42.688-42.688V597.376a42.688 42.688 0 0 0-42.688-42.688 42.688 42.688 0 0 0-42.688 42.688z"
      p-id="2303"
    ></path>
    <path
      :fill="fill"
      d="M968.512 482.176l-108.8-108.8A206.912 206.912 0 0 0 896 256a213.376 213.376 0 1 0-426.688 0A211.2 211.2 0 0 0 480 320H298.688a42.688 42.688 0 1 0 0 85.312H531.2a215.488 215.488 0 0 0 151.488 64 206.912 206.912 0 0 0 117.312-36.224l108.8 108.8a42.24 42.24 0 1 0 59.712-59.712zM554.688 256a128 128 0 1 1 128 128 128 128 0 0 1-128-128z"
      p-id="2304"
    ></path>
  </svg>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  name: "IconCode",
})
export default class extends Vue {
  @Prop({ default: "16" }) readonly width!: string;

  @Prop({ default: "16" }) readonly height!: string;

  @Prop({ default: "#000000" }) readonly fill!: string;
}
</script>
