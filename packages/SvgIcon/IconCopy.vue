<template>
  <svg
    t="1618301083366"
    class="IconCopy"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="4332"
    :width="width"
    :height="height"
  >
    <path
      :fill="fill"
      d="M384 639.936H298.688a42.688 42.688 0 1 1 0-85.312H384a42.688 42.688 0 1 1 0 85.312zM554.688 469.248h-256a42.688 42.688 0 1 1 0-85.312h256a42.688 42.688 0 0 1 0 85.312zM554.688 298.624h-256a42.688 42.688 0 1 1 0-85.312h256a42.688 42.688 0 0 1 0 85.312z"
      p-id="4333"
    ></path>
    <path
      :fill="fill"
      d="M896 170.624h-128V85.312a42.688 42.688 0 0 0-42.688-42.688H128a42.688 42.688 0 0 0-42.688 42.688v682.624a42.688 42.688 0 0 0 42.688 42.688h85.312v128a42.688 42.688 0 0 0 42.688 42.688h640a42.688 42.688 0 0 0 42.624-42.688V213.312A42.688 42.688 0 0 0 896 170.624zM170.624 127.936h512v597.312h-512z m682.688 768H298.624v-85.312h426.688a42.688 42.688 0 0 0 42.688-42.688v-512h85.312z"
      p-id="4334"
    ></path>
  </svg>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  name: "IconCopy",
})
export default class extends Vue {
  @Prop({ default: "16" }) readonly width!: string;

  @Prop({ default: "16" }) readonly height!: string;

  @Prop({ default: "#7D818A" }) readonly fill!: string;
}
</script>
