<template>
  <svg
    t="1618301764645"
    class="IconPin"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="3911"
    :width="width"
    :height="height"
  >
    <path
      :fill="fill"
      d="M810.688 618.624h-6.4L704 437.312V170.624h21.312a42.688 42.688 0 0 0 0-85.312H298.688a42.688 42.688 0 0 0 0 85.312H320v266.688L219.776 618.624h-6.4a42.688 42.688 0 1 0 0 85.312h256v234.688a42.688 42.688 0 0 0 85.312 0V704h256a42.688 42.688 0 1 0 0-85.312z m-192-448v192H405.376v-192zM405.376 448h213.312l89.6 170.688H315.776z"
      p-id="3912"
    ></path>
  </svg>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  name: "IconPin",
})
export default class extends Vue {
  @Prop({ default: "20" }) readonly width!: string;

  @Prop({ default: "20" }) readonly height!: string;

  @Prop({ default: "#7D818A" }) readonly fill!: string;
}
</script>
