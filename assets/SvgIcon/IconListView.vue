<template>
  <svg
    t="1620292192766"
    class="IconListView"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="3881"
    :width="width"
    :height="height"
  >
    <path
      :fill="fill"
      d="M452.928 128H157.504A29.504 29.504 0 0 0 128 157.504v295.424a29.568 29.568 0 0 0 29.504 29.568h295.424a29.504 29.504 0 0 0 29.568-29.568V157.504A29.504 29.504 0 0 0 452.928 128z m-29.504 295.424H187.072V187.072h236.352zM866.496 128H571.072a29.504 29.504 0 0 0-29.568 29.504v295.424a29.568 29.568 0 0 0 29.568 29.568h295.424A29.504 29.504 0 0 0 896 452.928V157.504A29.504 29.504 0 0 0 866.496 128z m-29.568 295.424H600.576V187.072h236.352z m-384 118.08H157.504A29.504 29.504 0 0 0 128 571.072v295.424a29.568 29.568 0 0 0 29.504 29.504h295.424a29.504 29.504 0 0 0 29.568-29.504V571.072a29.504 29.504 0 0 0-29.568-29.568z m-29.504 295.424H187.072V600.576h236.352v236.352z m443.072-295.424H571.072a29.504 29.504 0 0 0-29.568 29.568v295.424a29.568 29.568 0 0 0 29.568 29.504h295.424a29.504 29.504 0 0 0 29.504-29.504V571.072a29.504 29.504 0 0 0-29.504-29.568z m-29.568 295.424H600.576V600.576h236.352v236.352z"
      p-id="3882"
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

  @Prop({ default: "#7D818A" }) readonly fill!: string;
}
</script>
