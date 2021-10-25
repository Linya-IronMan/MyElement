<template>
  <svg
    t="1621216434155"
    class="icon"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="9010"
    :width="width"
    :height="height"
  >
    <path
      :fill="fill"
      d="M296.512 938.624a213.312 213.312 0 0 1-149.312-61.888 209.088 209.088 0 0 1 0-298.688l153.6-153.6a209.088 209.088 0 0 1 298.688 0 42.688 42.688 0 0 1-59.712 59.712 128 128 0 0 0-179.2 0l-153.6 153.6a126.72 126.72 0 0 0 179.2 179.2l96-100.288a42.688 42.688 0 0 1 59.712 59.712l-96 100.288a213.312 213.312 0 0 1-149.312 61.888z"
      p-id="9011"
    ></path>
    <path
      :fill="fill"
      d="M573.888 661.312a213.312 213.312 0 0 1-149.312-61.888 42.688 42.688 0 0 1 59.712-59.712 128 128 0 0 0 179.2 0l153.6-153.6a126.72 126.72 0 1 0-179.2-179.2L541.888 307.2a42.688 42.688 0 0 1-59.712-59.712l96-100.288A211.2 211.2 0 1 1 876.8 445.824l-153.6 153.6a213.312 213.312 0 0 1-149.312 61.888z"
      p-id="9012"
    ></path>
  </svg>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  name: "IconListView",
})
export default class extends Vue {
  @Prop({ default: "20" }) readonly width!: string | number;

  @Prop({ default: "20" }) readonly height!: string | number;

  @Prop({ default: "#000" }) readonly fill!: string;
}
</script>
