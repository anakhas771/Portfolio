<script>
import SplitStr from '@/components/common/SplitStr.vue';

export default {
  name: 'UtilityNavi',
  components: {
    SplitStr
  },
  data() {
    return {
      isOvered: false
    };
  },
  computed: {
    classnames() {
      return {
        'is-shown': this.$store.state.isShownUI === true,
        'is-current': this.$route.name === 'who-i-am'
      };
    },
    classnamesLabel() {
      return {
        'is-shown': this.$store.state.isShownUI === true,
        'is-current': this.$route.name === 'who-i-am',
        'is-overed': this.isOvered === true
      };
    },
    barStyles() {
      return {
        height: `${this.$store.state.scrollProgress * 100}%`
      };
    },
    soundClassnames() {
      return {
        'is-shown': this.$store.state.isShownUI === true,
        'is-playing': this.$store.state.isAudioPlaying === true
      };
    }
  },
  methods: {
    enter() {
      if (this.$store.state.isEnabledTouch === true) return;
      this.isOvered = true;
    },
    leave() {
      this.isOvered = false;
    },
    toggleSound() {
      this.$root.$emit('toggle-audio');
    }
  }
};
</script>

<template lang="pug">
  .p-utility-navi
    button.p-utility-navi__sound(
      type="button"
      @click="toggleSound"
      :class="soundClassnames"
      aria-label="Toggle Spooky Music"
    )
      svg.p-utility-navi__sound-icon(
        v-if="$store.state.isAudioPlaying"
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      )
        path(d="M9 18V5l12-2v13")
        circle(cx="6" cy="18" r="3" fill="currentColor")
        circle(cx="18" cy="16" r="3" fill="currentColor")
        path(d="M21 9a4 4 0 0 1 0 6")
      svg.p-utility-navi__sound-icon(
        v-else
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      )
        path(d="M9 18V5l12-2v13")
        circle(cx="6" cy="18" r="3")
        circle(cx="18" cy="16" r="3")
        line(x1="2" y1="2" x2="22" y2="22")
    router-link.p-utility-navi__label(
      to = '/who-i-am/'
      :class = 'classnames'
      @mouseenter.native = 'enter'
      @mouseleave.native = 'leave'
      )
      SplitStr.p-utility-navi__typos(
        label = 'Who I am'
        :step = '4'
        childClassname = 'p-utility-navi__typo'
        )
    .p-utility-navi__line(
      :class = 'classnamesLabel'
      )
      .p-utility-navi__bar(
        :class = 'classnames'
        :style = 'barStyles'
        )
    .p-utility-navi__point(
      :class = 'classnames'
      )
</template>

<style lang="scss">
.p-utility-navi {
  position: absolute;
  top: 50%;
  left: 0;
  z-index: 100;
  line-height: 1;
  letter-spacing: 0.15em;
  @include fontSizeAll(12, 12, 9);
  text-align: right;
  @include l-more-than-mobile {
    width: 7.5%;
    bottom: 50px;
  }
  @include l-mobile {
    width: 44px;
    bottom: 22px;
  }
  &__label {
    position: absolute;
    bottom: -0.3em;
    right: calc(50% - 0.55em);
    line-height: 1;
    white-space: nowrap;
    text-decoration: none;
    letter-spacing: 0.3em;
    writing-mode: vertical-rl;
    transition-duration: 1.2s;
    transition-timing-function: $easeOutCirc;
    transition-property: bottom;

    // Interaction
    &.is-current {
      bottom: calc(100% - (1em * 7 + 0.3em * 6) / 2);
      pointer-events: none;
    }
  }
  &__typo {
    // Interaction
    transform: translate3d(-1.1em, 0, 0);
    transition-duration: 0.6s;
    transition-property: transform;
    transition-property: $easeOutCirc;
    .is-shown & {
      transform: translate3d(0, 0, 0);
    }
  }
  &__line {
    width: 1px;
    height: 0;
    pointer-events: none;
    position: absolute;
    right: 50%;
    bottom: -10px;
    background-color: rgba($color-text, 0.2);
    transition-duration: 1s;
    transition-timing-function: $easeOutCirc;
    transition-property: height, bottom;
    &.is-shown {
      &.is-overed {
        height: calc(1em * 7 + 0.3em * 6 + 20px);
      }
      &.is-current {
        height: calc(100% + (1em * 7 + 0.3em * 6) / 2 + 10px);
        bottom: 0;
        transition-duration: 1.4s;
      }
    }
  }
  &__bar {
    width: 1px;
    top: 0;
    opacity: 0;
    background-color: rgba($color-text, 0.5);
    transition-duration: 1s;
    transition-property: opacity;
    &.is-current {
      opacity: 1;
    }
  }
  &__point {
    width: 3px;
    height: 3px;
    position: absolute;
    bottom: -1px;
    right: calc(50% - 1px);
    opacity: 0;
    border-radius: 50%;
    background-color: rgba($color-text, 0.5);
    &.is-shown {
      transition-duration: 0.7s;
      transition-property: opacity;
    }

    // Interaction
    &.is-shown {
      &.is-current {
        opacity: 1;
      }
    }
  }
  &__sound {
    position: fixed;
    top: 25px;
    right: 95px;
    z-index: 1000;
    padding: 0;
    margin: 0;
    background: transparent;
    border: none;
    color: $color-text;
    cursor: pointer;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;

    // Transition matching logo and Who I Am typography
    opacity: 0;
    transform: translate3d(-1.1em, 0, 0);
    transition-duration: 0.6s;
    transition-delay: 0.15s;
    transition-property: transform, opacity;
    transition-timing-function: $easeOutCirc;

    &.is-shown {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }

    &:hover {
      transform: scale(1.2);
      opacity: 0.85;
    }

    &.is-playing {
      color: $color-text;
    }

    @include l-mobile {
      top: 16px;
      right: 75px;
    }
  }
  &__sound-icon {
    width: 22px;
    height: 22px;
    display: block;
    pointer-events: none;
    filter: drop-shadow(0 0 6px rgba(220, 197, 162, 0.4));
    @include l-mobile {
      width: 18px;
      height: 18px;
    }
  }
}
</style>
