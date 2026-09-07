<script>
import ParallaxBlock from '@/components/common/ParallaxBlock';
import LinkListItem from '@/components/common/LinkListItem';

export default {
  name: 'WhoIAmLinks',

  components: {
    ParallaxBlock,
    LinkListItem
  },

  props: {
    scrollY: {
      type: Number,
      default: 0
    },

    parallaxRatio: {
      type: Number,
      default: 0
    }
  }
};
</script>

<template lang="pug">
ParallaxBlock.p-whoiam-links(
  :scrollY="scrollY"
  :parallaxRatio="parallaxRatio"
)
  .p-whoiam-links__items
    LinkListItem.p-whoiam-links__item(
      href="https://www.linkedin.com/in/anakha-s-a76081356/"
      target="_blank"
    )
      |LinkedIn

    LinkListItem.p-whoiam-links__item(
      href="https://github.com/anakhas771"
      target="_blank"
    )
      |GitHub

    LinkListItem.p-whoiam-links__item(
      href="/Anakha_S_SoftwareDeveloper_resume.pdf"
      target="_blank"
    )
      |View Resume

    LinkListItem.p-whoiam-links__item(
      href="/Anakha_S_SoftwareDeveloper_resume.pdf"
      download="Anakha_S_Resume.pdf"
    )
      |Download Resume

  .p-whoiam-links__items
    LinkListItem.p-whoiam-links__item.p-whoiam-links__item--email(
      href="mailto:anakhas771@gmail.com"
    )
      |anakhas771@gmail.com
</template>

<style lang="scss">
.p-whoiam-links {
  @include l-more-than-mobile {
    width: math.div(500, 1360) * 100%;
    position: absolute;
    top: 270px;
    left: math.div(180, 1360) * 100%;
  }

  @include l-mobile {
    margin-bottom: 50px;
  }

  &__items {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 30px;

    &:first-child {
      margin-top: 0;
    }
  }

  // Email uses LinkListItem but needs lowercase — EngraversMTPro has no
  // lowercase glyphs, so override only this item's label with a serif font.
  &__item--email {
    .c-link-listitem__label {
      font-family: Georgia, 'Times New Roman', serif;
      font-size: 1.2em;
      text-transform: none !important;
      font-variant: normal !important;
      font-variant-caps: normal !important;
      font-feature-settings: normal !important;
      letter-spacing: normal;
    }
  }

  // Transition
  transition-property: opacity, transform;

  .view-enter &,
  .view-asc-enter & {
    opacity: 0;
  }

  .view-enter &,
  .view-asc-leave-to & {
    transform: translate3d(0, 100px, 0);
  }

  .view-asc-enter &,
  .view-leave-to & {
    transform: translate3d(0, -100px, 0);
  }

  .view-enter-to &,
  .view-asc-enter-to & {
    opacity: 1;
    transition-duration: 1s;
    transition-delay: 1.3s;
    transition-timing-function: $easeOutQuad;
  }

  .view-leave-to &,
  .view-asc-leave-to & {
    opacity: 0;
    transition-duration: 0.6s;
    transition-delay: 0.1s;
    transition-timing-function: $easeInQuad;
  }
}
</style>
