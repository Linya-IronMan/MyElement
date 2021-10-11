<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    :width="width"
    :height="height"
    viewBox="0 0 98 89"
  >
    <defs>
      <linearGradient
        id="linear-gradient"
        x1="0.139"
        y1="0.166"
        x2="0.866"
        y2="0.863"
        gradientUnits="objectBoundingBox"
      >
        <stop offset="0" stop-color="#c8d9f1" />
        <stop offset="1" stop-color="#91addf" />
      </linearGradient>
      <clipPath id="clip-path">
        <circle
          id="椭圆_911"
          data-name="椭圆 911"
          cx="44.5"
          cy="44.5"
          r="44.5"
          transform="translate(-15054 -8430)"
          fill="url(#linear-gradient)"
        />
      </clipPath>
      <linearGradient
        id="linear-gradient-3"
        x1="0.182"
        x2="0.642"
        y2="1"
        gradientUnits="objectBoundingBox"
      >
        <stop offset="0" stop-color="#fff" />
        <stop offset="1" stop-color="#e5eeff" />
      </linearGradient>
      <clipPath id="clip-path-2">
        <rect width="56" height="8" fill="none" />
      </clipPath>
      <linearGradient
        id="linear-gradient-4"
        x1="0.5"
        x2="0.5"
        y2="1"
        gradientUnits="objectBoundingBox"
      >
        <stop offset="0" stop-color="#65e5a4" />
        <stop offset="1" stop-color="#4ad18d" />
      </linearGradient>
    </defs>
    <g id="组_3080" data-name="组 3080" transform="translate(15059 8430)">
      <circle
        id="椭圆_852"
        data-name="椭圆 852"
        cx="44.5"
        cy="44.5"
        r="44.5"
        transform="translate(-15054 -8430)"
        fill="url(#linear-gradient)"
      />
      <g id="蒙版组_11" data-name="蒙版组 11" clip-path="url(#clip-path)">
        <rect
          id="矩形_2647"
          data-name="矩形 2647"
          width="59"
          height="62"
          rx="4"
          transform="translate(-15039 -8403)"
          fill="url(#linear-gradient-3)"
        />
        <rect
          id="矩形_2859"
          data-name="矩形 2859"
          width="16"
          height="2"
          rx="1"
          transform="translate(-15018 -8400)"
          fill="#b7cbec"
        />
      </g>
      <rect
        id="矩形_2648"
        data-name="矩形 2648"
        width="91"
        height="23"
        rx="11.5"
        transform="translate(-15059 -8383)"
        fill="#3c82f1"
      />
      <g
        id="重复网格_282"
        data-name="重复网格 282"
        transform="translate(-15050 -8376)"
        clip-path="url(#clip-path-2)"
      >
        <g transform="translate(15039 8364)">
          <circle
            id="椭圆_909"
            data-name="椭圆 909"
            cx="4"
            cy="4"
            r="4"
            transform="translate(-15039 -8364)"
            fill="#fff"
          />
        </g>
        <g transform="translate(15051 8364)">
          <circle
            id="椭圆_909-2"
            data-name="椭圆 909"
            cx="4"
            cy="4"
            r="4"
            transform="translate(-15039 -8364)"
            fill="#fff"
          />
        </g>
        <g transform="translate(15063 8364)">
          <circle
            id="椭圆_909-3"
            data-name="椭圆 909"
            cx="4"
            cy="4"
            r="4"
            transform="translate(-15039 -8364)"
            fill="#fff"
          />
        </g>
        <g transform="translate(15075 8364)">
          <circle
            id="椭圆_909-4"
            data-name="椭圆 909"
            cx="4"
            cy="4"
            r="4"
            transform="translate(-15039 -8364)"
            fill="#fff"
          />
        </g>
        <g transform="translate(15087 8364)">
          <circle
            id="椭圆_909-5"
            data-name="椭圆 909"
            cx="4"
            cy="4"
            r="4"
            transform="translate(-15039 -8364)"
            fill="#fff"
          />
        </g>
      </g>
      <circle
        id="椭圆_910"
        data-name="椭圆 910"
        cx="15.5"
        cy="15.5"
        r="15.5"
        transform="translate(-14992 -8387)"
        fill="url(#linear-gradient-4)"
      />
      <path
        id="多边形_16"
        data-name="多边形 16"
        d="M7.132,1.519a1,1,0,0,1,1.736,0L15.145,12.5a1,1,0,0,1-.868,1.5H1.723a1,1,0,0,1-.868-1.5Z"
        transform="translate(-14967 -8379) rotate(90)"
        fill="#fff"
      />
    </g>
  </svg>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  name: "IconProjectAdd",
})
export default class extends Vue {
  @Prop({ default: "89" }) readonly width!: string;

  @Prop({ default: "89" }) readonly height!: string;
}
</script>
