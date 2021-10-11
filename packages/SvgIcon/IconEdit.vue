<template>
  <svg
    t="1610077559522"
    class="IconEdit"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="1459"
    :width="width"
    :height="height"
  >
    <path
      d="M192 640l448-480 192 192L384 832H192v-192z"
      :fill="fill"
      p-id="1460"
    ></path>
  </svg>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  name: "IconEdit",
})
export default class extends Vue {
  @Prop({ default: "16" }) readonly width!: string;

  @Prop({ default: "16" }) readonly height!: string;

  @Prop({ default: "#7D818A" }) readonly fill!: string;
}
</script>
