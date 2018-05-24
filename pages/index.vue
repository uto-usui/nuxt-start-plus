<template>
  <main class="c-main" id="main">
  </main>
</template>

<script>
  import {mapMutations} from 'vuex';

  import headMixin from '~/mixin/head';

  export default {
    data() {
      return {
        title: 'field dream',
        desc: 'field dream desc',
      };
    },
    components: {
    },
    methods: {
      ...mapMutations([
      ]),
    },
    mounted() {

      console.log('mounted!!!');

      // ビュー全体が再レンダリングされるまで待つフック
      this.$nextTick(() => {
      });

    },
    created() {
    },
    updated() {
      console.log('updateed!!!');
    },
//    transition: {
//      css: false,
//      beforeEnter() {
//        // アニメーションの準備
//        this.$nextTick(() => {
//          splashAnim.hiddenWrap();
//        });
//      },
//      enter(el, done) {
//        // オープニングアニメーション
//        this.$nextTick(() => {
//          this.$store.state.animated ? splashAnim.sub(this.$store.state.data, done) : splashAnim.home(this.$store.state.data, done);
//        })
//      },
//      beforeLeave(el) {
//        // ナビゲーションを閉じる
//        this.$store.commit('naviClose');
//      },
//      leave(el, done) {
//        splashAnim.fillcircle(this.$store.state.data, done);
//        // スプラッシュアニメーションは初回だけ
//        this.$store.commit('animated', true);
//      }
//    },
    mixins: [
      headMixin
    ],
  };
</script>

<style lang="scss">
  main {
  }
</style>
