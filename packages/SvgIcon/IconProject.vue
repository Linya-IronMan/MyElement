<template>
  <svg
    t="1618135971804"
    class="IconProject"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="3339"
    :width="width"
    :height="height"
  >
    <path
      :fill="fill"
      d="M915.2 260.266667l-384-192-19.157333-4.266667-19.2 4.266667-384 192a40.533333 40.533333 0 0 0-23.466667 38.4v422.4a40.533333 40.533333 0 0 0 23.466667 38.4l384 196.266666 19.2 4.266667 19.2-4.266667 384-196.266666a40.533333 40.533333 0 0 0 23.466666-38.4V298.666667a40.533333 40.533333 0 0 0-23.509333-38.4z m-403.157333-106.666667l311.466666 155.733333-311.466666 157.866667-311.466667-157.866667z m-341.333334 236.8l298.666667 151.466667v305.066666l-298.666667-151.466666z m384 456.533333V541.866667l298.666667-151.466667v305.066667z"
      p-id="3340"
    ></path>
  </svg>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  name: "IconProject",
})
export default class extends Vue {
  @Prop({ default: "20" }) readonly width!: string;

  @Prop({ default: "20" }) readonly height!: string;

  @Prop({ default: "#7D818A" }) readonly fill!: string;
}
</script>
