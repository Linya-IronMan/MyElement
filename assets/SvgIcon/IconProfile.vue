<template>
  <svg
    t="1618301688474"
    class="IconProfile"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="3770"
    :width="width"
    :height="height"
  >
    <path
      :fill="fill"
      d="M512.064 213.376a170.688 170.688 0 1 0 170.688 170.688 170.688 170.688 0 0 0-170.688-170.688z m0 256a85.312 85.312 0 1 1 85.312-85.312 85.312 85.312 0 0 1-85.312 85.312z"
      p-id="3771"
    ></path>
    <path
      :fill="fill"
      d="M512 42.688a467.2 467.2 0 1 0 332.8 136.832A469.312 469.312 0 0 0 512 42.688zM251.776 793.6a563.2 563.2 0 0 1 260.288-68.288 563.2 563.2 0 0 1 260.224 68.288 381.888 381.888 0 0 1-520.512 0z m578.112-66.112A654.912 654.912 0 0 0 512 640a654.912 654.912 0 0 0-317.824 87.488A377.6 377.6 0 0 1 128 512a384 384 0 1 1 768 0 377.6 377.6 0 0 1-66.112 215.488z"
      p-id="3772"
    ></path>
  </svg>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  name: "IconProfile",
})
export default class extends Vue {
  @Prop({ default: "20" }) readonly width!: string;

  @Prop({ default: "20" }) readonly height!: string;

  @Prop({ default: "#7D818A" }) readonly fill!: string;
}
</script>
