<script>
export default {
  name: 'PreloaderProgress',
  computed: {
    ratio() {
      const { preloadProgress, preloadMax } = this.$store.state;
      return preloadProgress / preloadMax;
    },
    stylesRightRect() {
      return {
        opacity: this.ratio >= 0.5 ? 1 : 0
      };
    },
    stylesLeftRect() {
      return {
        opacity: this.ratio >= 0.5 ? 0 : 1
      };
    },
    stylesRotateRect() {
      return {
        transform: `rotate(${this.ratio * 354}deg)`
      };
    }
  }
};
</script>

<template lang="pug">
  .preloader-progress
    .preloader-progress__inner.
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="252" height="252" viewBox="0 0 252 252">
        <defs>
          <path id="text-circle-path" d="M 126, 126 m -98, 0 a 98,98 0 1,1 196,0 a 98,98 0 1,1 -196,0"/>
        </defs>
        <g mask="url(#mask-text)">
          <mask id="mask-rotate">
            <g class="mask-rotate-group">
              <path class="mask-rotate-rect" :style="stylesRotateRect" fill="#ffffff" d="M0 0h126v252H0z"/>
              <path :style="stylesLeftRect" d="M0 0h126v252H0z"/>
              <path :style="stylesRightRect" fill="#ffffff" d="M126 0h126v252H126z"/>
            </g>
          </mask>
          <path fill="#564e45" d="M0 0h252v252H0z"/>
          <path fill="#dcc5a2" mask="url(#mask-rotate)" d="M0 0h252v252H0z"/>
        </g>
        <mask id="mask-text">
          <path fill="#000000" d="M0 0h252v252H0z"/>
          <text fill="#ffffff" font-size="10.5" font-weight="700" letter-spacing="1.8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif">
            <textPath href="#text-circle-path" xlink:href="#text-circle-path">
              ANAKHA • DEVELOPER • ANAKHA • DESIGNER • ANAKHA • ENGINEER • ANAKHA • CONTENT CREATOR • ANAKHA 
            </textPath>
          </text>
        </mask>
      </svg>
</template>

<style lang="scss">
.preloader-progress {
  position: absolute;
  animation-name: rotate;
  animation-duration: 20s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  @include l-more-than-mobile {
    width: 252px;
    height: 252px;
    top: calc(50% - 126px);
    left: calc(50% - 126px);
  }
  @include l-mobile {
    width: 150px;
    height: 150px;
    top: calc(50% - 75px);
    left: calc(50% - 75px);
  }
  &__inner {
    //
    // transition
    // ==========
    .preloader-enter & {
      opacity: 0;
      transform: scale(0.6);
    }
    .preloader-enter-to & {
      transform: scale(1);
      transition-duration: 1.4s;
      transition-timing-function: $easeOutCirc;
      transition-property: opacity, transform;
    }
    .preloader-leave-to & {
      opacity: 0;
      transform: scale(1.8);
      transition-duration: 1.4s;
      transition-delay: 0.8s;
      transition-timing-function: $easeInExpo;
      transition-property: opacity, transform;
    }
  }
  svg {
    display: block;
    backface-visibility: hidden;
    transform: translate3d(0, 0, 0);

    @include l-more-than-mobile {
      width: 252px;
      height: 252px;
    }
    @include l-mobile {
      width: 150px;
      height: 150px;
    }
  }
  .mask-rotate-group {
    transform: rotate(34deg);
    transform-origin: center center;
  }
  .mask-rotate-rect {
    transform-origin: center center;
  }
}
</style>
