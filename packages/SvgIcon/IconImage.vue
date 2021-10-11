<template>
  <svg
    t="1617346861770"
    class="IconImage"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="2599"
    :width="width"
    :height="height"
  >
    <path
      d="M938.688 128H85.376a42.688 42.688 0 0 0-42.688 42.688v682.624a42.688 42.688 0 0 0 42.688 42.688h853.312a42.688 42.688 0 0 0 42.688-42.688V170.688A42.688 42.688 0 0 0 938.688 128zM896 810.688H128v-153.6L298.688 486.4 524.8 712.512a40.512 40.512 0 0 0 59.712 0l140.8-140.8L896 742.4zM896 620.8l-140.8-138.688a40.512 40.512 0 0 0-59.712 0L554.688 620.8 328.576 396.8a40.512 40.512 0 0 0-59.712 0l-140.8 138.688V213.312h768z"
      p-id="2600"
      :fill="fill"
    ></path>
  </svg>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  name: "IconImage",
})
export default class extends Vue {
  @Prop({ default: "20" }) readonly width!: string;

  @Prop({ default: "20" }) readonly height!: string;

  @Prop({ default: "#000000" }) readonly fill!: string;
}
</script>
