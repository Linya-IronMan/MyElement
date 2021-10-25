<template>
  <svg
    t="1599617513627"
    class="IconSampleFolder"
    viewBox="0 0 1109 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="2582"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    :width="width"
    :height="height"
  >
    <path
      d="M596.650667 135.424h466.090666a46.08 46.08 0 0 1 46.592 44.885333v582.229334a46.08 46.08 0 0 1-46.592 44.885333H46.592A46.08 46.08 0 0 1 0 762.538667V84.736S2.816 39.424 54.357333 39.424h416.426667c11.605333 0 23.210667 4.266667 31.573333 11.690667l94.293334 84.309333z"
      fill="#788BE5"
      p-id="2583"
    />
    <path
      d="M0 295.424m85.333333 0l938.666667 0q85.333333 0 85.333333 85.333333l0 512q0 85.333333-85.333333 85.333334l-938.666667 0q-85.333333 0-85.333333-85.333334l0-512q0-85.333333 85.333333-85.333333Z"
      fill="#98AAFB"
      p-id="2584"
    />
  </svg>
</template>

<script>
export default {
  name: "IconSampleFolder",
  props: {
    width: {
      type: [Number, String],
      default: 34,
    },
    height: {
      type: [Number, String],
      default: 28,
    },
    iconColor: {
      type: String,
      default: "#ffffff",
    },
  },
};
</script>
