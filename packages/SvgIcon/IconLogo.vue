<template>
  <svg
    class="IconLogo"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 667.79 368.04"
    :width="width"
    :height="height"
  >
    <g id="图层_2" data-name="图层 2">
      <g id="图层_1-2" data-name="图层 1">
        <path
          d="M406.46,206.31l47.9,45.85L333.88,368,0,45.78H95.39L333.88,276ZM667.79,45.78H572.36l-73.31,69.61,47.62,47.2Z"
        />
        <path
          d="M264.31,159.25,216.42,113.4,333.85,0,667.58,322.15H572.36L333.85,92.08ZM0,322.15H95.78l71.1-68.64-47.62-47.2Z"
        />
        <rect
          fill="#0075FF"
          x="322.04"
          y="132.81"
          width="21.07"
          height="101.71"
        />
      </g>
    </g>
  </svg>
</template>

<script>
export default {
  name: "IconLogo",
  props: {
    width: {
      type: [Number, String],
      default: 30,
    },
    height: {
      type: [Number, String],
      default: 30,
    },
  },
};
</script>
