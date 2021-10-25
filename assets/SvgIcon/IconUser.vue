<template>
  <svg
    t="1632733810885"
    class="IconUser"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="5105"
    :width="width"
    :height="height"
  >
    <path
      d="M190.464 659.797333A213.333333 213.333333 0 0 1 341.333333 597.333333h341.333334a213.333333 213.333333 0 0 1 213.333333 213.333334v85.333333a42.666667 42.666667 0 1 1-85.333333 0v-85.333333a128 128 0 0 0-128-128H341.333333a128 128 0 0 0-128 128v85.333333a42.666667 42.666667 0 1 1-85.333333 0v-85.333333a213.333333 213.333333 0 0 1 62.464-150.869334zM512 170.666667a128 128 0 1 0 0 256 128 128 0 0 0 0-256zM298.666667 298.666667a213.333333 213.333333 0 1 1 426.666666 0A213.333333 213.333333 0 0 1 298.666667 298.666667z"
      p-id="5106"
      :fill="fill"
    ></path>
  </svg>
</template>

<script>
export default {
  name: "IconUser",
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
