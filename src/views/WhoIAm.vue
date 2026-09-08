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
          |It started back in 2019 with a dangerously simple thought: "Hmm… this looks interesting. How hard could it be?" Like a moth drawn to the glowing light of a monitor, I discovered coding. Shortly after, I stumbled into the visual side of the web and naturally concluded, "Why not make things look ridiculously good while I’m busy breaking the logic?" I didn't know it yet, but the World Wide Web had just claimed another soul.
        p
          |Like almost every developer on the planet, my initiation involved falling down the endless rabbit hole of YouTube tutorials. One video turned into ten, ten morphed into a hundred, and somewhere amidst the glowing syntax and chaotic browser tabs, a strange realization hit me: I actually wasn't terrible at this. It was time to take it seriously.
        p
          |That ambition led me to the Indira Gandhi Institute of Engineering and Technology for my B.Tech in Computer Science. From 2021 to 2025, I survived the gauntlet of college—the ruthless deadlines, the cryptic assignments, and the classic, soul-crushing "I swear it works on my machine" moments. Emerging from that trial by fire, I landed my first internship as a Python Full Stack Developer. Honestly, those were deeply rewarding years. I was building, shipping, and thriving.

          |And then, burnout showed up. It arrived uninvited, kicked off its shoes, made itself comfortable, and clearly had zero intentions of leaving. Everything ground to a halt. I found myself staring at empty IDEs, completely disconnected, forced to question my entire identity as a developer.
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
          |Today, I am absolutely fascinated by the entire lifecycle of creation. From wireframe designs and buttery-smooth animations to bulletproof backend logic, relational databases, APIs, and deployment—if it involves wrestling an abstract idea into a living, breathing internet experience, I’m in. 
        p
          |My daily arsenal runs on Python, Django, React, and PostgreSQL, backed by Git and GitHub. Lately, I’m constantly experimenting with GSAP, Framer Motion, and the dark art of modern UI design. Because, let’s be honest, making a button do a microscopic, deeply satisfying bounce when you hover over it is basically a personality trait at this point.
        p
          |I build digital experiences that are functional, visually arresting, and just a little more extra than they strictly need to be.
      WhoIAmSection(
        :num = '3'
        :scrollY = 'scrollY'
        :parallaxRatio = '0.1'
        )
        p
          |Anyway, that's me.
        p
          |Still coding. Still creating.
        p
          | Still pretending I know what I'm doing.
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
