<script>
export default {
  name: 'PreloaderProgress',

  computed: {
    ratio() {
      const { preloadProgress, preloadMax } = this.$store.state;

      if (!preloadMax) {
        return 0;
      }

      return Math.min(1, Math.max(0, preloadProgress / preloadMax));
    },

    progressDashOffset() {
      const circumference = 2 * Math.PI * 98;

      return circumference * (1 - this.ratio);
    }
  }
};
</script>

<template lang="pug">
.preloader-progress
  .preloader-progress__inner
    svg(
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      width="252"
      height="252"
      viewBox="0 0 252 252"
    )
      defs
        path#text-circle-path(
          d="M 126,126 m -98,0 a 98,98 0 1,1 196,0 a 98,98 0 1,1 -196,0"
        )

      //- Background circle
      circle(
        cx="126"
        cy="126"
        r="98"
        fill="none"
        stroke="#564e45"
        stroke-width="4"
      )

      //- Loading progress circle
      circle(
        cx="126"
        cy="126"
        r="98"
        fill="none"
        stroke="#dcc5a2"
        stroke-width="4"
        stroke-linecap="butt"
        :stroke-dasharray="2 * Math.PI * 98"
        :stroke-dashoffset="progressDashOffset"
        transform="rotate(-90 126 126)"
      )

      //- Complete circular text
      text(
        fill="#ffffff"
        font-size="10.5"
        font-weight="700"
        letter-spacing="1.8"
        font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
      )
        textPath(
          href="#text-circle-path"
          xlink:href="#text-circle-path"
        )
          | ANAKHA • DEVELOPER • ANAKHA • DESIGNER • ANAKHA • ENGINEER
</template>

<style lang="scss">
.preloader-progress {
  position: absolute;

  animation-name: rotate;
  animation-duration: 20s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;

  @include l-more-than-mobile {
    width: 200px;
    height: 200px;
    top: calc(50% - 100px);
    left: calc(50% - 100px);
  }

  @include l-mobile {
    width: 140px;
    height: 140px;
    top: calc(50% - 70px);
    left: calc(50% - 70px);
  }

  &__inner {
    width: 100%;
    height: 100%;

    //
    // transition
    // ==========

    .preloader-enter & {
      opacity: 0;
      transform: scale(0.6);
    }

    .preloader-enter-to & {
      opacity: 1;
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

    width: 100%;
    height: 100%;

    /*
     * Keep the original 252 × 252 SVG
     * geometry intact and scale it uniformly.
     */
    max-width: 252px;
    max-height: 252px;

    backface-visibility: hidden;
    transform: translate3d(0, 0, 0);
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
