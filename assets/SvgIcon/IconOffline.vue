<template>
  <svg
    t="1620280272532"
    class="IconOffline"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="3989"
    :width="width"
    :height="height"
  >
    <path
      :fill="fill"
      d="M213.376 170.688a85.312 85.312 0 1 1-85.376 85.376 85.312 85.312 0 0 1 85.376-85.376m0-85.312a170.688 170.688 0 1 0 170.624 170.688A170.688 170.688 0 0 0 213.376 85.376zM810.688 170.688a85.312 85.312 0 1 1-85.312 85.312A85.312 85.312 0 0 1 810.688 170.688M810.688 85.376a170.688 170.688 0 1 0 170.688 170.688A170.688 170.688 0 0 0 810.688 85.376z"
      p-id="3990"
    ></path>
    <path
      :fill="fill"
      d="M682.688 533.376m-85.312 0a85.312 85.312 0 1 0 170.624 0 85.312 85.312 0 1 0-170.624 0Z"
      p-id="3991"
    ></path>
    <path
      :fill="fill"
      d="M341.312 533.376m-85.312 0a85.312 85.312 0 1 0 170.624 0 85.312 85.312 0 1 0-170.624 0Z"
      p-id="3992"
    ></path>
    <path
      :fill="fill"
      d="M512 256m-85.312 0a85.312 85.312 0 1 0 170.624 0 85.312 85.312 0 1 0-170.624 0Z"
      p-id="3993"
    ></path>
    <path
      :fill="fill"
      d="M512.064 704a85.312 85.312 0 1 1-85.312 85.312 85.312 85.312 0 0 1 85.312-85.312m0-85.312A170.688 170.688 0 1 0 682.752 789.376a170.688 170.688 0 0 0-170.688-170.688z"
      p-id="3994"
    ></path>
  </svg>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  name: "IconMoreHorizontal",
})
export default class extends Vue {
  @Prop({ default: "20" }) readonly width!: string;

  @Prop({ default: "20" }) readonly height!: string;

  @Prop({ default: "#707070" }) readonly fill!: string;
}
</script>
