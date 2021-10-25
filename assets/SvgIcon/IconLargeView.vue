<template>
  <svg
    t="1620292246508"
    class="IconLargeView"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="4023"
    :width="width"
    :height="height"
  >
    <path
      :fill="fill"
      d="M864 752h-704a32 32 0 0 1-32-32v-576a32 32 0 0 1 32-32h704a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32z m-672-64h640v-512H192z m112 192a32 32 0 0 0-32-32h-128a32 32 0 0 0 0 64h128a32 32 0 0 0 32-32z m304 0a32 32 0 0 0-32-32H448a32 32 0 0 0 0 64h128a32 32 0 0 0 32-32z m304 0a32 32 0 0 0-32-32h-128a32 32 0 0 0 0 64h128a32 32 0 0 0 32-32z"
      p-id="4024"
    ></path>
  </svg>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  name: "IconLargeView",
})
export default class extends Vue {
  @Prop({ default: "20" }) readonly width!: string;

  @Prop({ default: "20" }) readonly height!: string;

  @Prop({ default: "#7D818A" }) readonly fill!: string;
}
</script>
