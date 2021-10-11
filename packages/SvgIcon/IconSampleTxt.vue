<template>
  <svg
    t="1606579187533"
    class="IconSampleTxt"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="3125"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    :width="width"
    :height="height"
  >
    <path d="M0 0h1024v1024H0z" fill-opacity="0" p-id="3126"></path>
    <path
      d="M704 0H192c-38.4 0-64 25.6-64 64v320h576c38.4 0 64 25.6 64 64v416c0 38.4-25.6 64-64 64H128v32c0 38.4 25.6 64 64 64h768c38.4 0 64-25.6 64-64V320L704 0z"
      fill="#EAEAEA"
      p-id="3127"
    ></path>
    <path
      d="M704 0v256c0 38.4 25.6 64 64 64h256L704 0z"
      :fill="iconColor"
      p-id="3128"
    ></path>
    <path d="M768 320l256 256V320z" opacity=".1" p-id="3129"></path>
    <path
      d="M704 832c0 19.2-12.8 32-32 32H32c-19.2 0-32-12.8-32-32V480c0-19.2 12.8-32 32-32h640c19.2 0 32 12.8 32 32v352z"
      :fill="iconColor"
      p-id="3130"
    ></path>
    <path
      d="M588.8 544h-128c-6.4 0-12.8 6.4-12.8 19.2s6.4 12.8 12.8 12.8H512v179.2c0 6.4 6.4 12.8 12.8 12.8s12.8-6.4 12.8-12.8V576h51.2c6.4 0 12.8-6.4 12.8-12.8s0-19.2-12.8-19.2z m-211.2 6.4c6.4-6.4 19.2-6.4 25.6-6.4 6.4 0 6.4 6.4 6.4 6.4v12.8l-51.2 83.2L416 736v12.8c0 6.4-6.4 6.4-6.4 12.8-12.8 6.4-19.2 6.4-25.6 0l-51.2-76.8-44.8 76.8c-6.4 6.4-12.8 6.4-25.6 6.4-6.4 0-6.4-6.4-6.4-6.4v-12.8l57.6-89.6-51.2-89.6v-12.8c0-6.4 6.4-6.4 6.4-6.4 6.4-6.4 19.2 0 25.6 6.4l44.8 70.4 38.4-76.8zM204.8 544c6.4 0 12.8 6.4 12.8 12.8s0 19.2-12.8 19.2H160v179.2c0 6.4-6.4 12.8-12.8 12.8s-19.2-6.4-19.2-12.8V576H76.8c-6.4 0-12.8-6.4-12.8-12.8s6.4-12.8 12.8-12.8h128z"
      fill="#FFFFFF"
      p-id="3131"
    ></path>
  </svg>
</template>

<script>
export default {
  name: "IconSampleTxt",
  props: {
    width: {
      type: [Number, String],
      default: 32,
    },
    height: {
      type: [Number, String],
      default: 37,
    },
    iconColor: {
      type: String,
      default: "#98aaf8",
    },
  },
};
</script>
