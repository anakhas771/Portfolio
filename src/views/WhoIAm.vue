<script>
import { MathEx, sleep } from '@ykob/js-util';
import normalizeWheel from 'normalize-wheel';

import store from '@/store';
import WhoIAmSection from '@/components/who-i-am/WhoIAmSection.vue';
import WhoIAmHeading from '@/components/who-i-am/WhoIAmHeading.vue';
import WhoIAmThanks from '@/components/who-i-am/WhoIAmThanks.vue';
import WhoIAmLinks from '@/components/who-i-am/WhoIAmLinks.vue';

export default {
  name: 'WhoIAm',
  metaInfo: {
    title: 'Who I am / '
  },
  components: {
    WhoIAmSection,
    WhoIAmHeading,
    WhoIAmThanks,
    WhoIAmLinks
  },
  data() {
    return {
      scrollY: 0,
      anchorY: 0,
      anchorYPrev: 0,
      clientHeight: 0,
      isRendering: false
    };
  },
  watch: {
    async '$store.state.resolution.y'() {
      await sleep(10);
      this.resize();
    }
  },
  computed: {
    styles() {
      return {
        paddingTop: `${this.$store.state.resolution.y / 2}px`,
        transform: `translate3d(0, ${-this.scrollY}px, 0)`
      };
    }
  },
  beforeRouteEnter(to, from, next) {
    store.commit('transit', {
      globalId: 50
    });
    next();
  },
  created() {
    window.addEventListener('wheel', this.wheel, { passive: false });
    window.addEventListener('touchstart', this.touchstart);
    window.addEventListener('touchmove', this.touchmove);
    this.scrollY = 0;
    this.anchorY = 0;
    this.anchorYPrev = 0;
    this.$store.commit('setScrollProgress', 0);
  },
  async mounted() {
    const { commit } = this.$store;

    commit('changeBackground', {
      isHome: false,
      hasDelay: false
    });
    commit('showHomeObjs', false);
    commit('showWorksObjs', {
      index: 0,
      direction: 1
    });
    commit('showWhoIAmObjs', true);
    await sleep(500);
    commit('showUI');
    this.isRendering = true;
    this.resize();
    this.update();
  },
  destroyed() {
    window.removeEventListener('wheel', this.wheel, { passive: false });
    window.removeEventListener('touchstart', this.touchstart);
    window.removeEventListener('touchmove', this.touchmove);
    this.isRendering = false;
  },
  methods: {
    update() {
      const { state, commit } = this.$store;

      this.scrollY =
        Math.floor((this.scrollY + (this.anchorY - this.scrollY) / 10) * 100) /
        100;
      commit(
        'setScrollProgress',
        this.scrollY / (this.clientHeight - state.resolution.y)
      );
      if (this.isRendering === true) {
        requestAnimationFrame(this.update);
      }
    },
    wheel(e) {
      e.preventDefault();

      const n = normalizeWheel(e);
      const { state, commit } = this.$store;

      if (state.isWheeling === true) return;

      if (this.scrollY < 1 && n.pixelY < 0) {
        // Go to the previous page.
        commit('startWheeling');
        this.$router.push(`/works/${state.works[state.works.length - 1].key}/`);
      } else {
        // Scroll the content of the current page.
        this.anchorY = MathEx.clamp(
          this.anchorY + n.pixelY,
          0,
          this.clientHeight - state.resolution.y
        );
      }
    },
    touchstart() {
      this.anchorYPrev = this.anchorY;
    },
    touchmove() {
      const { state, commit, dispatch } = this.$store;

      if (state.isTouchMoving === true) {
        if (this.scrollY < 1 && state.touchMove.y > 10) {
          // Go to the previous page.
          dispatch(
            'debounceRouterPush',
            `/works/${state.works[state.works.length - 1].key}/`
          );
          commit('touchEnd');
        } else {
          // Scroll the content of the current page.
          this.anchorY = MathEx.clamp(
            this.anchorYPrev - state.touchMove.y * 1.5,
            0,
            this.clientHeight - state.resolution.y
          );
        }
      }
    },
    resize() {
      const { state, commit } = this.$store;

      this.clientHeight = this.$refs['whoiam-wrap'].clientHeight;
      this.anchorY = MathEx.clamp(
        this.anchorY,
        0,
        this.clientHeight - state.resolution.y
      );
      commit(
        'setScrollProgress',
        this.scrollY / (this.clientHeight - state.resolution.y)
      );
    }
  }
};
</script>

<template lang="pug">
.p-view-wrap
  .p-whoiam-wrap(
    :style = 'styles'
    ref = 'whoiam-wrap'
    )
    .p-whoiam-wrap__in
      WhoIAmHeading
      WhoIAmSection(
        :num = '1'
        :scrollY = 'scrollY'
        :parallaxRatio = '0.1'
        )
        h2
          |I'm a Software Developer.
          br
          |Just love World-Wide-Web.
        p
          |My career as a web developer started in 2019.
        p
          |As a teenager, when I discovered coding and thought, "Hmm… this looks interesting. How hard could it be?". Then I discovered web design and, naturally, thought, "Why not make things look good while breaking the code?"
        p
          |Like almost every developer on the planet, I started with YouTube tutorials. One tutorial became ten, ten became a hundred, and somewhere along the way, I realized I wasn't actually terrible at it. So I decided to take this whole thing seriously.
        p
          |I joined the Indira Gandhi Institute of Engineering and Technology, Ernakulam, where I pursued my B.Tech in Computer Science from 2021 to 2025. After surviving college, assignments, deadlines, and the occasional "it works on my machine" moment, I landed my first internship as a Python Full Stack Developer.
        p
          |Good years, honestly.
        p
          |Then burnout showed up uninvited, made itself comfortable, and apparently had no plans of leaving.
      WhoIAmSection(
        :num = '2'
        )
        h2
          |Understanding my identity
          br
          |as a Developer.
        p
          |So I did what any reasonable developer would do: disappeared into the world of code and started learning again. And somewhere along the way, things got interesting again.
        p
          |Now I'm fascinated by the entire process—from design and animation to frontend development,backend logic, databases, APIs, and deployment. Basically, if it involves turning an idea into something that actually works on the internet, I'm probably interested.
        p
          |My current toolkit includes Python, Django, Django REST Framework, React, JavaScript, PostgreSQL, Git, GitHub. I'm also constantly experimenting with GSAP, Framer Motion, smooth scrolling, interactive animations, and modern UI design — because apparently, making a button move slightly when you hover over it is now a personality trait.
        p
          |I enjoy building things that are functional, visually engaging, and a little more interesting than they need to be.
      WhoIAmSection(
        :num = '3'
        :scrollY = 'scrollY'
        :parallaxRatio = '0.1'
        )
        p
          |Anyway, that's me.

        p
          |Still coding. Still creating. Still pretending I know what I'm doing.
        p
          |One project at a time. One bug at a time.

        p
          |One "wait… why is this broken?" at a time.
        p
          |Catch you on the other side of the screen.

      WhoIAmLinks(
        :scrollY = 'scrollY'
        :parallaxRatio = '0.05'
        )
      WhoIAmThanks
</template>

<style lang="scss">
.p-whoiam-wrap {
  @include l-more-than-mobile {
    margin-right: 7.5%;
    margin-left: 7.5%;
    padding-bottom: 300px;
  }
  @include l-mobile {
    margin-right: 44px;
    margin-left: 44px;
    padding-bottom: 44px;
  }
  &__in {
    position: relative;
    margin-top: -25px;
  }
}
</style>
