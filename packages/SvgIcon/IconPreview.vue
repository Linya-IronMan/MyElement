<template>
  <svg
    t="1608728524707"
    class="IconPreview"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="1621"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    :width="width"
    :height="height"
  >
    <path
      d="M576 992H128a32 32 0 0 1-32-32V64c0-17.664 14.336-32 32-32h768c17.664 0 32 14.336 32 32V640a32 32 0 1 1-64 0V96H160v832h416a32 32 0 1 1 0 64z"
      p-id="1622"
      :fill="fill"
    ></path>
    <path
      d="M768 288H256a32 32 0 1 1 0-64h512a32 32 0 1 1 0 64z m-320 256H256a32 32 0 1 1 0-64h192a32 32 0 1 1 0 64z m-64 256H256a32 32 0 1 1 0-64h128a32 32 0 1 1 0 64z m256 96a192 192 0 1 1 0-384 192 192 0 0 1 0 384z m0-320a128 128 0 1 0 0 256 128 128 0 0 0 0-256z"
      p-id="1623"
      :fill="fill"
    ></path>
    <path
      d="M896 992a32 32 0 0 1-21.76-8.3456l-138.24-128a32.6144 32.6144 0 0 1 44.1856-47.36l137.5744 128c12.288 12.6976 12.288 32.768 0 45.4656a32 32 0 0 1-21.76 10.24z"
      p-id="1624"
      :fill="fill"
    ></path>
  </svg>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  name: "IconPreview",
})
export default class extends Vue {
  @Prop({ default: "16" }) readonly width!: string;

  @Prop({ default: "16" }) readonly height!: string;

  @Prop({ default: "#7D818A" }) readonly fill!: string;
}
</script>
