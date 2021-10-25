<template>
  <svg
    t="1620442842921"
    class="IconPlus"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="3925"
    :width="width"
    :height="height"
  >
    <path
      d="M725.312 469.312H554.688V298.688a42.688 42.688 0 1 0-85.312 0v170.688H298.688a42.688 42.688 0 1 0 0 85.312h170.688v170.688a42.688 42.688 0 0 0 85.312 0V554.688h170.688a42.688 42.688 0 0 0 0-85.312z"
      p-id="3926"
      :fill="fill"
    ></path>
  </svg>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  name: "IconPlus",
})
export default class extends Vue {
  @Prop({ default: "20" }) readonly width!: string;

  @Prop({ default: "20" }) readonly height!: string;

  @Prop({ default: "#7D818A" }) readonly fill!: string;
}
</script>
<style lang="scss">
.IconPlus {
  padding: 4px !important;
}
</style>
