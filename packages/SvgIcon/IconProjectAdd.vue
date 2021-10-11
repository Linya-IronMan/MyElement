<template>
  <svg
    t="1618300903972"
    class="IconProjectAdd"
    viewBox="0 0 1029 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="4191"
    :width="width"
    :height="height"
  >
    <path
      :fill="fill"
      d="M567.26336 795.392l-69.056 34.944V506.816l316.864-160.704v45.632a229.12 229.12 0 0 1 90.496-0.768v-142.08a43.136 43.136 0 0 0-24.896-40.768L473.37536 4.48 452.70336 0l-20.352 4.48L25.05536 208.128a43.136 43.136 0 0 0-24.896 40.768v448a43.136 43.136 0 0 0 24.896 40.768l407.296 208.128 20.352 4.544 20.352-4.544 133.248-68.096a312.128 312.128 0 0 1-39.04-82.304z m-159.488 35.008l-316.864-160.704V346.112l316.864 160.704z m45.184-402.816L122.65536 260.096l330.304-165.184 330.368 165.184z"
      p-id="4192"
    ></path>
    <path
      :fill="fill"
      d="M986.27136 661.76h-152.256V509.504a38.08 38.08 0 1 0-76.096 0v152.256h-152.32a38.4 38.4 0 0 0 0 76.16h152.32v152.256a38.08 38.08 0 1 0 76.096 0V737.92h152.256a38.4 38.4 0 1 0 0-76.16z"
      p-id="4193"
    ></path>
  </svg>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  name: "IconProjectAdd",
})
export default class extends Vue {
  @Prop({ default: "20" }) readonly width!: string;

  @Prop({ default: "20" }) readonly height!: string;

  @Prop({ default: "#7D818A" }) readonly fill!: string;
}
</script>
