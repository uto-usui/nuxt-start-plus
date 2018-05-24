<template>
  <div>
      <div class="wrap"
           id="wrap"
      >
        <nuxt />
      </div>
  </div>
</template>

<style lang="scss">
  /**
    // デフォルトのスタイルとユーティリティ
   */
  @import "~Sass/foundation/_reset";
  @import "~Sass/foundation/animation/_keyframe";
  @import "~Sass/foundation/base/_base";
  @import "~Sass/object/component/framework/_flex";
  @import "~Sass/object/utility/_utility";

</style>

<script>
  import DATA from '~/assets/js/data';

  export default {
    components: {
    },
    data () {
      return {
        timer: 0
      }
    },
    methods: {
    },
    mounted() {

      /**
       * サイトの基本データをセット
       */
      this.$store.commit('pageDataSet', DATA);
      DATA.init();

    },
    updated() {
    },
  };

</script>
