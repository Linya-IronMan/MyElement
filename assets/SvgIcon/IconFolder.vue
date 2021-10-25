<template>
  <svg
    t="1615961269876"
    class="IconFolder"
    viewBox="0 0 1164 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="2600"
    :width="width"
    :height="height"
  >
    <path
      d="M1163.88435 842.215813H0V0h581.942175a145.485544 145.485544 0 0 1 145.485544 145.485544h349.81999A86.782127 86.782127 0 0 1 1163.88435 232.194928v609.948142z"
      fill="#CE9F06"
      p-id="2601"
    ></path>
    <path
      d="M145.412801 648.138098v-436.456632h872.913263v436.456632z"
      fill="#FFFFFF"
      p-id="2602"
    ></path>
    <path
      d="M1163.88435 934.308162V369.315053a72.742772 72.742772 0 0 0-72.742772-72.742772H72.742772a72.742772 72.742772 0 0 0-72.742772 72.742772v564.847624a89.691838 89.691838 0 0 0 89.691838 89.837323h984.500675A89.400867 89.400867 0 0 0 1163.88435 934.308162z"
      fill="#FFCD2C"
      p-id="2603"
    ></path>
  </svg>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  name: "IconFolder",
})
export default class extends Vue {
  @Prop({ default: "20" }) readonly width!: string;

  @Prop({ default: "20" }) readonly height!: string;
}
</script>
