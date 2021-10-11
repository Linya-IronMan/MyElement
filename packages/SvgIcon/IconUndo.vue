<template>
  <svg
    t="1590670439953"
    class="IconUndo"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="13190"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    :width="width"
    :height="height"
  >
    <path
      d="M630.1 915.6H335.8c-15.3 0-27.7-12.4-27.7-27.7 0-15.3 12.4-27.7 27.7-27.7h294.3c133.2 0 241.6-114.8 241.6-256s-108.4-256-241.6-256H169.6c-15.3 0-27.7-12.4-27.7-27.7 0-15.3 12.4-27.7 27.7-27.7h460.5C793.8 293 927 432.7 927 604.3S793.8 915.6 630.1 915.6z"
      p-id="13191"
      :fill="fill"
    ></path>
    <path
      d="M319.7 546.2c-7.1 0-14.2-2.7-19.6-8.1L106.5 344.4c-10.8-10.8-10.8-28.3 0-39.1l193.7-193.7c10.8-10.8 28.3-10.8 39.1 0s10.8 28.3 0 39.1L165.2 324.8 339.3 499c10.8 10.8 10.8 28.3 0 39.1-5.4 5.4-12.5 8.1-19.6 8.1z"
      p-id="13192"
      :fill="fill"
    ></path>
  </svg>
</template>

<script>
export default {
  name: "IconUndo",
  props: {
    width: {
      type: [Number, String],
      default: 25,
    },
    height: {
      type: [Number, String],
      default: 25,
    },
    fill: {
      type: String,
      default: "#707070",
    },
  },
};
</script>
