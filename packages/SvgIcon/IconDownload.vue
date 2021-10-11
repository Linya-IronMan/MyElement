<template>
  <svg
    t="1615967374065"
    class="IconDownload"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="2430"
    :width="width"
    :height="height"
  >
    <path
      :fill="fill"
      d="M213.3504 896a128 128 0 0 1-128-128v-256a42.6496 42.6496 0 0 1 85.3504 0v256a42.6496 42.6496 0 0 0 42.6496 42.6496h597.3504a42.7008 42.7008 0 0 0 42.6496-42.6496v-256a42.6496 42.6496 0 0 1 85.3504 0v256a128 128 0 0 1-128 128z m268.3392-268.1344L268.3392 414.72a43.0592 43.0592 0 1 1 60.928-60.928l140.0832 139.9808V170.6496a42.6496 42.6496 0 1 1 85.3504 0v323.1232l139.9296-140.1344a43.3152 43.3152 0 0 1 61.44 61.0816l-213.2992 213.1456a43.3152 43.3152 0 0 1-61.0816 0z"
      p-id="2431"
    ></path>
  </svg>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  name: "IconDownload",
})
export default class extends Vue {
  @Prop({ default: "20" }) readonly width!: string;

  @Prop({ default: "20" }) readonly height!: string;

  @Prop({ default: "#7D818A" }) readonly fill!: string;
}
</script>

<style lang="scss">
.IconDownload {
  transform: translateY(-1px);
}
</style>
