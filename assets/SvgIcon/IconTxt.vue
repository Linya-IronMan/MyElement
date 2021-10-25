<template>
  <svg
    t="1617346936258"
    class="IconTxt"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="2739"
    :width="width"
    :height="height"
  >
    <path
      d="M917.312 64H106.688A42.688 42.688 0 0 0 64 106.688v810.624a42.688 42.688 0 0 0 42.688 42.688h810.624a42.688 42.688 0 0 0 42.688-42.688V106.688A42.688 42.688 0 0 0 917.312 64z m-42.688 810.688H149.312V149.312h725.376z"
      p-id="2740"
      :fill="fill"
    ></path>
    <path d="M256 320h512v64H256z" p-id="2741" :fill="fill"></path>
    <path d="M544 352v384h-64v-384z" p-id="2742" :fill="fill"></path>
  </svg>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  name: "IconTxt",
})
export default class extends Vue {
  @Prop({ default: "20" }) readonly width!: string;

  @Prop({ default: "20" }) readonly height!: string;

  @Prop({ default: "#000000" }) readonly fill!: string;
}
</script>
