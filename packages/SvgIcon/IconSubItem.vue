<template>
  <svg
    t="1620632259581"
    class="icon"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="3956"
    :width="width"
    :height="height"
  >
    <path
      d="M795.456 603.456a149.184 149.184 0 0 0-142.656 109.696H320a181.056 181.056 0 0 1-182.848-182.848V420.544H652.8a145.92 145.92 0 0 0 142.656 109.696A146.688 146.688 0 0 0 941.696 384a146.688 146.688 0 0 0-146.304-146.304A149.184 149.184 0 0 0 652.8 347.456H137.152V164.608A34.56 34.56 0 0 0 100.544 128 34.56 34.56 0 0 0 64 164.544v365.696a254.4 254.4 0 0 0 256 256h332.8A145.92 145.92 0 0 0 795.456 896a146.688 146.688 0 0 0 146.304-146.304 146.688 146.688 0 0 0-146.304-146.24z m0-292.544A73.344 73.344 0 0 1 868.544 384a73.344 73.344 0 0 1-73.152 73.152A73.344 73.344 0 0 1 722.304 384a73.344 73.344 0 0 1 73.152-73.152z m0 512a73.344 73.344 0 0 1-73.152-73.152 73.344 73.344 0 0 1 73.152-73.152 73.344 73.344 0 0 1 73.152 73.152 73.344 73.344 0 0 1-73.152 73.088z"
      p-id="3957"
      :fill="fill"
    ></path>
  </svg>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  name: "IconSubItem",
})
export default class extends Vue {
  @Prop({ default: "20" }) readonly width!: string;

  @Prop({ default: "20" }) readonly height!: string;

  @Prop({ default: "#7D818A" }) readonly fill!: string;
}
</script>
