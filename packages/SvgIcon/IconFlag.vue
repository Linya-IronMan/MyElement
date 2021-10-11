<template>
  <svg
    t="1622013667873"
    class="IconFlag"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="9524"
    :width="width"
    :height="height"
  >
    <path
      :fill="fill"
      d="M554.688 127.936v-42.624A42.688 42.688 0 0 0 512 42.624H128v896a42.688 42.688 0 0 0 42.688 42.688 42.688 42.688 0 0 0 42.624-42.688v-384h256v42.688A42.688 42.688 0 0 0 512 640h384V128z m256 426.688h-256v-42.688A42.688 42.688 0 0 0 512 469.312H213.312V127.936h256v42.688A42.688 42.688 0 0 0 512 213.312h298.688z"
      p-id="9525"
    ></path>
  </svg>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  name: "IconFlag",
})
export default class extends Vue {
  @Prop({ default: "20" }) readonly width!: string;

  @Prop({ default: "20" }) readonly height!: string;

  @Prop({ default: "#000000" }) readonly fill!: string;
}
</script>
