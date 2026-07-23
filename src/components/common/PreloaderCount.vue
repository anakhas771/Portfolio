<script>
const YEAR_PREV = 2019;
const YEAR_NEXT = 2026;

const makeDigitArr = (prev, next, colIdx) => {
  const prevStr = String(prev).padStart(4, '0');
  const nextStr = String(next).padStart(4, '0');
  const startDigit = parseInt(prevStr[colIdx]);
  const endDigit = parseInt(nextStr[colIdx]);
  if (startDigit === endDigit) {
    return [startDigit];
  }
  const arr = [];
  if (endDigit >= startDigit) {
    for (let d = startDigit; d <= endDigit; d++) arr.push(d);
  } else {
    for (let d = startDigit; d <= endDigit + 10; d++) arr.push(d % 10);
  }
  return arr;
};
const makeCounterCol = digit => {
  return [...Array(digit)].map((o, i) => {
    return makeDigitArr(YEAR_PREV, YEAR_NEXT, i);
  });
};

export default {
  name: 'PreloaderCount',
  data() {
    return {
      cols: makeCounterCol(4)
    };
  }
};
</script>

<template lang="pug">
  .preloader-counter
    .preloader-counter__col(
      v-for = 'col in cols'
      )
      .preloader-counter__row(
        v-for = 'row in col'
        )
        |{{ row }}
</template>

<style lang="scss">
.preloader-counter {
  height: 1.5em;
  position: absolute;
  top: calc(50% - 0.75em);
  overflow: hidden;
  @include fontSizeAll(16, 16, 10);
  @include l-more-than-mobile {
    width: 112px;
    left: calc(50% - 56px);
  }
  @include l-mobile {
    width: 68px;
    left: calc(50% - 34px);
  }
  &__col {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    &:nth-of-type(1) {
      left: 0;
    }
    &:nth-of-type(2) {
      left: 1em;
    }
    &:nth-of-type(3) {
      right: 1em;
    }
    &:nth-of-type(4) {
      right: 0;
    }
  }
  &__row {
    width: 1em;
    height: 1.5em;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 1;
  }

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
    transition-delay: 0.1s;
    transition-timing-function: $easeOutCirc;
    transition-property: opacity, transform;
  }
  .preloader-leave-to & {
    opacity: 0;
    transform: scale(1.4);
    transition-duration: 1.4s;
    transition-delay: 0.9s;
    transition-timing-function: $easeInExpo;
    transition-property: opacity, transform;
  }
  &__col {
    transform: translate3d(0, 0, 0);
    .preloader-enter & {
      transform: translate3d(0, 1.5em, 0);
    }
    .preloader-enter-to & {
      transform: translate3d(0, 0, 0);
      transition-duration: 1s;
      @include iterateTransitionDelay(4, 0.08, 0);
    }
    .preloader-leave-to & {
      transform: translate3d(0, calc(-100% + 1.5em), 0);
      transition-duration: 1s;
      transition-timing-function: $easeInOutExpo;
      @include iterateTransitionDelay(4, 0.08, 0);
    }
  }
}
</style>
