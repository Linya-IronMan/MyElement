<template>
  <svg
    t="1632468025724"
    class="IconFilter"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="5368"
    :width="width"
    :height="height"
  >
    <path
      :fill="fill"
      d="M64 192h896v128H64V192zM176 448h672v128H176V448zM736 704h-448v128h448v-128z"
      p-id="5369"
    ></path>
  </svg>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  name: "IconFilter",
})
export default class extends Vue {
  @Prop({ default: "20" }) readonly width!: string;

  @Prop({ default: "20" }) readonly height!: string;

  @Prop({ default: "#000000" }) readonly fill!: string;
}
</script>
