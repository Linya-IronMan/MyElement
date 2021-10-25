<template>
  <svg
    t="1615441410965"
    class="IconPropertyt"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="2240"
    :width="width"
    :height="height"
  >
    <path
      d="M646.4 128l164.288 164.288V896H213.312V128H646.4m36.288-85.312h-512A42.688 42.688 0 0 0 128 85.376v853.312a42.688 42.688 0 0 0 42.688 42.688h682.624a42.688 42.688 0 0 0 42.688-42.688V256z"
      p-id="2241"
      :fill="fill"
    ></path>
    <path
      d="M341.376 384.064a42.688 42.688 0 0 1-42.688-42.688V256.064a42.688 42.688 0 0 1 85.312 0v85.312a42.688 42.688 0 0 1-42.624 42.688z"
      p-id="2242"
      :fill="fill"
    ></path>
    <path
      d="M469.376 384.064a42.688 42.688 0 0 1-42.688-42.688V256.064a42.688 42.688 0 1 1 85.312 0v85.312a42.688 42.688 0 0 1-42.624 42.688z"
      p-id="2243"
      :fill="fill"
    ></path>
    <path
      d="M597.376 384.064a42.688 42.688 0 0 1-42.688-42.688V256.064a42.688 42.688 0 0 1 85.312 0v85.312a42.688 42.688 0 0 1-42.624 42.688z"
      p-id="2244"
      :fill="fill"
    ></path>
    <path
      d="M682.688 640H341.376a42.688 42.688 0 0 1 0-85.312h341.312a42.688 42.688 0 1 1 0 85.312z"
      p-id="2245"
      :fill="fill"
    ></path>
    <path
      d="M682.688 810.688H341.376a42.688 42.688 0 1 1 0-85.312h341.312a42.688 42.688 0 1 1 0 85.312z"
      p-id="2246"
      :fill="fill"
    ></path>
  </svg>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  name: "IconPropertyt",
})
export default class extends Vue {
  @Prop({ default: "20" }) readonly width!: string;

  @Prop({ default: "20" }) readonly height!: string;

  @Prop({ default: "#7D818A" }) readonly fill!: string;
}
</script>
