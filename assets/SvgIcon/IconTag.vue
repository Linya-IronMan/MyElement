<template>
  <svg
    t="1618301892062"
    class="IconTag"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="4191"
    :width="width"
    :height="height"
  >
    <path
      :fill="fill"
      d="M492.736 145.088l360.512 360.512v347.712H505.536L145.024 492.8 492.736 145.088m0-102.4a42.688 42.688 0 0 0-29.888 12.8L55.424 462.976a40.512 40.512 0 0 0 0 59.712l416 416h424.512a42.688 42.688 0 0 0 42.688-42.688V471.488L522.624 55.488a42.688 42.688 0 0 0-29.888-12.8z"
      p-id="4192"
    ></path>
    <path
      :fill="fill"
      d="M661.248 661.312m-85.312 0a85.312 85.312 0 1 0 170.624 0 85.312 85.312 0 1 0-170.624 0Z"
      p-id="4193"
    ></path>
  </svg>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  name: "IconTag",
})
export default class extends Vue {
  @Prop({ default: "20" }) readonly width!: string;

  @Prop({ default: "20" }) readonly height!: string;

  @Prop({ default: "#7D818A" }) readonly fill!: string;
}
</script>
