<template>
  <svg
    t="1585278451824"
    class="IconCollection"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="2259"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    :width="width"
    :height="height"
  >
    <path
      d="M687.829333 85.333333c-62.08 0-118.442667 23.253333-165.418666 67.84C475.178667 108.117333 419.754667 85.333333 357.034667 85.333333 207.189333 85.333333 85.333333 215.808 85.333333 376.192c0 93.952 41.898667 159.274667 72.618667 207.189333 71.893333 113.066667 220.714667 230.442667 303.061333 290.346667l3.84 2.773333a92.16 92.16 0 0 0 57.088 19.498667c19.754667 0 39.04-6.4 55.808-18.517333l1.066667-0.810667a291.413333 291.413333 0 0 1 3.968-2.901333c82.304-59.989333 231.168-177.493333 303.786667-290.602667 30.549333-47.701333 72.448-113.066667 72.448-206.933333C959.018667 215.765333 837.376 85.333333 687.786667 85.333333z"
      p-id="2260"
      :fill="iconColor"
    ></path>
  </svg>
</template>

<script>
export default {
  name: "IconCollection",
  props: {
    width: {
      type: [Number, String],
      default: 20,
    },
    height: {
      type: [Number, String],
      default: 20,
    },
    iconColor: {
      type: String,
      default: "#e6e6e6",
    },
  },
};
</script>
