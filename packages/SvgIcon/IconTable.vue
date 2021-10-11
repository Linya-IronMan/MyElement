<template>
  <svg
    t="1609775240169"
    class="IconTable"
    viewBox="0 0 1075 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="1266"
    :width="width"
    :height="height"
  >
    <path
      d="M92.16 67.072h74.24v890.88H92.16V67.072z m816.64 0h74.24v890.88h-74.24V67.072zM390.144 286.72h74.24v671.232H390.144V286.72z m221.184 0h74.24v671.232h-74.24V286.72z"
      p-id="1267"
      :fill="fill"
    ></path>
    <path
      d="M982.8864 883.6096v74.24h-890.88v-74.24h890.88z m-0.1024-817.2544v74.24h-890.88v-74.24h890.88z m0 220.16v74.24h-890.88v-74.24h890.88z m0.0512 298.5472v74.24h-890.88v-74.24h890.88z"
      p-id="1268"
      :fill="fill"
    ></path>
  </svg>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  name: "IconTable",
})
export default class extends Vue {
  @Prop({ default: "18" }) readonly width!: string;

  @Prop({ default: "18" }) readonly height!: string;

  @Prop({ default: "#5C6975" }) readonly fill!: string;
}
</script>
