<template>
  <svg
    t="1617346993129"
    class="IconVideo"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="2881"
    :width="width"
    :height="height"
  >
    <path
      d="M964.288 192l-12.8 4.288L725.376 339.2V234.688A42.688 42.688 0 0 0 682.688 192H85.376a42.688 42.688 0 0 0-42.688 42.688v554.688a42.688 42.688 0 0 0 42.688 42.624h597.312a42.688 42.688 0 0 0 42.688-42.688V684.8l226.112 142.912 12.8 4.288c10.688 0 17.088-8.512 17.088-23.488V215.488c0-14.976-6.4-23.488-17.088-23.488zM640 746.688H128V277.312h512z m256-55.488l-170.688-106.688V439.488L896 332.8z"
      p-id="2882"
      :fill="fill"
    ></path>
  </svg>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  name: "IconVideo",
})
export default class extends Vue {
  @Prop({ default: "20" }) readonly width!: string;

  @Prop({ default: "20" }) readonly height!: string;

  @Prop({ default: "#000000" }) readonly fill!: string;
}
</script>
