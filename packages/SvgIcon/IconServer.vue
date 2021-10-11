<template>
  <svg
    t="1618054363794"
    class="IconServer"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="3229"
    :width="width"
    :height="height"
  >
    <path
      d="M810.688 512.064m-42.688 0a42.688 42.688 0 1 0 85.376 0 42.688 42.688 0 1 0-85.376 0Z"
      p-id="3230"
      :fill="fill"
    ></path>
    <path
      d="M682.688 512.064m-42.688 0a42.688 42.688 0 1 0 85.376 0 42.688 42.688 0 1 0-85.376 0Z"
      p-id="3231"
      :fill="fill"
    ></path>
    <path
      d="M810.688 768.064m-42.688 0a42.688 42.688 0 1 0 85.376 0 42.688 42.688 0 1 0-85.376 0Z"
      p-id="3232"
      :fill="fill"
    ></path>
    <path
      d="M682.688 768.064m-42.688 0a42.688 42.688 0 1 0 85.376 0 42.688 42.688 0 1 0-85.376 0Z"
      p-id="3233"
      :fill="fill"
    ></path>
    <path
      d="M938.688 85.376H85.376A42.688 42.688 0 0 0 42.688 128.064v768a42.688 42.688 0 0 0 42.688 42.688H938.688a42.688 42.688 0 0 0 42.688-42.688v-768A42.688 42.688 0 0 0 938.688 85.376zM128 426.688h768V597.376h-768z m0-256h768V341.376h-768z m768 682.688h-768V682.688h768z"
      p-id="3234"
      :fill="fill"
    ></path>
    <path
      d="M810.688 256.064m-42.688 0a42.688 42.688 0 1 0 85.376 0 42.688 42.688 0 1 0-85.376 0Z"
      p-id="3235"
      :fill="fill"
    ></path>
    <path
      d="M682.688 256.064m-42.688 0a42.688 42.688 0 1 0 85.376 0 42.688 42.688 0 1 0-85.376 0Z"
      p-id="3236"
      :fill="fill"
    ></path>
  </svg>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  name: "IconServer",
})
export default class extends Vue {
  @Prop({ default: "20" }) readonly width!: string;

  @Prop({ default: "20" }) readonly height!: string;

  @Prop({ default: "#000000" }) readonly fill!: string;
}
</script>
