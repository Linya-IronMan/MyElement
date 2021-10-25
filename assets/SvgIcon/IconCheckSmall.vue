<template>
  <svg
    t="1622012173527"
    class="IconCheckSmall"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="9397"
    :width="width"
    :height="height"
  >
    <path
      :fill="fill"
      d="M476.16 704.64a63.936 63.936 0 0 1-90.56 0L287.36 606.4A64 64 0 0 1 377.792 515.84l53.12 53.12 215.232-215.36A63.936 63.936 0 1 1 736.64 444.16L476.16 704.64z"
      p-id="9398"
    ></path>
  </svg>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  name: "IconCheckSmall",
})
export default class extends Vue {
  @Prop({ default: "20" }) readonly width!: string;

  @Prop({ default: "20" }) readonly height!: string;

  @Prop({ default: "#000000" }) readonly fill!: string;
}
</script>
