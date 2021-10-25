<template>
  <svg
    t="1617960790106"
    class="IconJump"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="3199"
    :width="width"
    :height="height"
  >
    <path
      d="M413.12304687 165.93066406v98.87695313H215.36914062v543.82324219h593.26171875v-197.75390625h98.87695313v296.63085937H116.4921875V166.52392578z m395.50781251 296.63085938V215.36914062H561.43847656V116.4921875l346.06933594 0.59326172V462.56152344h-98.87695313zM804.23083497 158.81152344l60.26550292 64.71496582-498.19152832 474.06555176-60.26550293-64.71496583z"
      p-id="3200"
      :fill="fill"
    ></path>
  </svg>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  name: "IconJump",
})
export default class extends Vue {
  @Prop({ default: "20" }) readonly width!: string;

  @Prop({ default: "20" }) readonly height!: string;

  @Prop({ default: "#2F72FF" }) readonly fill!: string;
}
</script>
