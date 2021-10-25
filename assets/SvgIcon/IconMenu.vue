<template>
  <svg
    t="1619012460133"
    class="IconMenu"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="3937"
    :width="width"
    :height="height"
  >
    <path
      d="M896 224H128c-19.2 0-32-12.8-32-32s12.8-32 32-32h768c19.2 0 32 12.8 32 32s-12.8 32-32 32zM896 544H128c-19.2 0-32-12.8-32-32s12.8-32 32-32h768c19.2 0 32 12.8 32 32s-12.8 32-32 32zM896 864H128c-19.2 0-32-12.8-32-32s12.8-32 32-32h768c19.2 0 32 12.8 32 32s-12.8 32-32 32z"
      p-id="3938"
    ></path>
  </svg>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  name: "IconMenu",
})
export default class extends Vue {
  @Prop({ default: "32" }) readonly width!: string;

  @Prop({ default: "32" }) readonly height!: string;
}
</script>
