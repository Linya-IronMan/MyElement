<template>
  <svg
    t="1615969463786"
    class="IconClose"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="2430"
    :width="width"
    :height="height"
  >
    <path
      :fill="fill"
      d="M549.997714 512l169.069715-169.069714a27.538286 27.538286 0 0 0 0-39.899429 27.538286 27.538286 0 0 0-39.862858 0l-169.106285 169.069714-169.069715-170.971428a27.538286 27.538286 0 0 0-39.899428 0 27.538286 27.538286 0 0 0 0 39.862857l169.069714 169.106286-169.069714 169.069714a27.538286 27.538286 0 0 0 0 39.899429c5.705143 5.705143 13.275429 7.606857 20.882286 7.606857 7.606857 0 15.213714-1.901714 20.918857-7.606857L512 550.034286l169.069714 169.069714c5.705143 5.705143 13.312 7.606857 20.918857 7.606857 7.606857 0 15.177143-1.901714 20.882286-7.606857a27.538286 27.538286 0 0 0 0-39.862857L550.034286 512z"
      p-id="2431"
    ></path>
  </svg>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  name: "IconClose",
})
export default class extends Vue {
  @Prop({ default: "20" }) readonly width!: string;

  @Prop({ default: "20" }) readonly height!: string;

  @Prop({ default: "" }) readonly fill!: string;
}
</script>

<style lang="scss">
.IconClose {
  padding: 4px !important;
}
</style>
