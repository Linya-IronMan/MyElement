<template>
  <svg
    t="1615961022861"
    class="IconResources"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="2459"
    :width="width"
    :height="height"
  >
    <path
      :fill="fill"
      d="M682.688 341.376H341.376v341.312h341.312z m-85.312 256H426.688V426.688h170.688z"
      p-id="2460"
    ></path>
    <path
      :fill="fill"
      d="M938.688 597.376h-85.312V426.688h85.312a42.688 42.688 0 1 0 0-85.312h-85.312v-128a42.688 42.688 0 0 0-42.688-42.688h-128V85.376a42.688 42.688 0 1 0-85.312 0v85.312H426.688V85.376a42.688 42.688 0 1 0-85.312 0v85.312h-128a42.688 42.688 0 0 0-42.688 42.688v128H85.376a42.688 42.688 0 1 0 0 85.312h85.312v170.688H85.376a42.688 42.688 0 1 0 0 85.312h85.312v128a42.688 42.688 0 0 0 42.688 42.688h128v85.312a42.688 42.688 0 1 0 85.312 0v-85.312h170.688v85.312a42.688 42.688 0 1 0 85.312 0v-85.312h128a42.688 42.688 0 0 0 42.688-42.688v-128h85.312a42.688 42.688 0 1 0 0-85.312zM768 768.064H256v-512h512z"
      p-id="2461"
    ></path>
  </svg>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  name: "IconResources",
})
export default class extends Vue {
  @Prop({ default: "16" }) readonly width!: string;

  @Prop({ default: "16" }) readonly height!: string;

  @Prop({ default: "#000000" }) readonly fill!: string;
}
</script>
