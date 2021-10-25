<template>
  <svg
    t="1618301930386"
    class="IconDatasetReport"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="3800"
    :width="width"
    :height="height"
  >
    <path
      :fill="fill"
      d="M896 853.312H170.624v-177.088l132.288-136.512a136.512 136.512 0 0 0 59.712 14.912 130.112 130.112 0 0 0 70.4-21.312l51.2 44.8a155.712 155.712 0 0 0-14.912 61.888 128 128 0 0 0 256 0 121.6 121.6 0 0 0-19.2-68.288l81.088-89.6a110.912 110.912 0 0 0 44.8 8.512 128 128 0 1 0-128-128 123.712 123.712 0 0 0 17.088 64l-83.2 91.712a123.712 123.712 0 0 0-40.512-6.4 149.312 149.312 0 0 0-53.312 10.688l-59.712-55.488a123.712 123.712 0 0 0 6.4-40.512 128 128 0 1 0-245.312 51.2L170.624 556.8V128a42.688 42.688 0 1 0-85.312 0v810.624H896a42.688 42.688 0 1 0 0-85.312z m-106.688-499.2a44.8 44.8 0 0 1 32-32H832a42.688 42.688 0 1 1-42.688 42.688z m-192 243.2A42.688 42.688 0 0 1 640 640v4.288a44.8 44.8 0 0 1-36.288 38.4h-6.4a42.688 42.688 0 0 1-42.688-40.512 42.688 42.688 0 0 1 42.688-44.864zM362.624 384a42.688 42.688 0 1 1-42.688 42.688A42.688 42.688 0 0 1 362.624 384z"
      p-id="3801"
    ></path>
  </svg>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  name: "IconDatasetReport",
})
export default class extends Vue {
  @Prop({ default: "20" }) readonly width!: string;

  @Prop({ default: "20" }) readonly height!: string;

  @Prop({ default: "#7D818A" }) readonly fill!: string;
}
</script>
