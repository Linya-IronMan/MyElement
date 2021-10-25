<template>
  <svg
    t="1632468667040"
    class="IconCalendar"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="5500"
    :width="width"
    :height="height"
    :fill="fill"
  >
    <path
      d="M938.688 170.688h-192v-83.2a44.8 44.8 0 0 0-36.288-44.8 42.688 42.688 0 0 0-49.088 42.688v85.312H362.688v-83.2a44.8 44.8 0 0 0-36.288-44.8 42.688 42.688 0 0 0-49.088 42.688v85.312h-192a42.688 42.688 0 0 0-42.624 42.688V896a42.688 42.688 0 0 0 42.688 42.688h853.312a42.688 42.688 0 0 0 42.688-42.688V213.376a42.688 42.688 0 0 0-42.688-42.688zM896 853.376H128V426.688h768z m0-512H128V256h768z"
      p-id="5501"
    ></path>
  </svg>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  name: "IconCalendar",
})
export default class extends Vue {
  @Prop({ default: "20" }) readonly width!: string;

  @Prop({ default: "20" }) readonly height!: string;

  @Prop({ default: "#000000" }) readonly fill!: string;
}
</script>
