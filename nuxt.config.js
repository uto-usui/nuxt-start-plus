const path = require('path');
const webpack = require('webpack');

// production or development
const mode = 'development';


const nuxt = {
  // mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    // title: 'field dream',
    htmlAttrs: {
      lang: 'ja',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      //
      // { hid: 'description', name: 'description', content: '...' },
    ],
    link: [
      // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Poppins:400,600,700|Barlow+Condensed:500,700|' }
    ]
  },
  css: [
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#fbc72e' },
  router: {
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        let position = {};
        if (to.matched.length < 2) {
          position = { x: 0, y: 0 }
        } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
          position = { x: 0, y: 0 }
        }
        if (to.hash) {
          position = { selector: to.hash }
        }
        return position;
      }
    },
    /**
     * GitLab CI のデプロイ時に root Url を変更
     */
    base: process.env.BASE_URL || '/',
  },
  /**
   * 初期化時に実行するスクリプト
   */
  plugins: [
    '~plugins/vue-scrollto.js',
    '~plugins/console.js',
    '~plugins/vuex-router-sync.js',
  ],
  /**
   * 遷移トリガー
   */
  transition: {
    css: false,
    enter(el, done) {
      this.$store.commit('naviClose');

      done();
    },
    leave(el, done) {
      done();
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /**
     * 複数箇所でインポートするプラグイン
     */
    vendor: [
      'babel-polyfill',
      // 'gsap',
    ],
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || mode)
      })
    ],
    /**
     * css を外部化する
     */
    // extractCSS: true,
    extend (config, { isDev, isClient }) {
      /**
       * Run ESLint on save
       */
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
      /**
       * import 用の alias
       */
      config.resolve.alias['Sass'] =  path.resolve(__dirname, './assets/sass/');
      config.resolve.alias['Js'] =  path.resolve(__dirname, './assets/js/');
      config.resolve.alias['Images'] =  path.resolve(__dirname, './assets/images/');
      config.resolve.alias['~'] =  path.resolve(__dirname);
      config.resolve.alias['@'] =  path.resolve(__dirname);
    },
    /**
     * ベンダープレフィックス
     */
    postcss: [
      require('postcss-gap-properties')(),
      require('autoprefixer')({
        browsers: ['IE 11', 'last 2 versions' ],
        grid: true
      })
    ]
  },
//  generate: {
//    // 動的なパラメーターを用いたルートを生成させたい場合
//    // 動的なルーティングの配列をセットする
//    routes(callback) {
//
////      const posts = require('./assets/json/filmtalk.json')
////      // post/idの配列を生成
////      let routes = posts.map(post => `/filmtalk/${post.id}`)
////      callback(null, routes)
//
//    }
//  },
  modules: [
    ['nuxt-sass-resources-loader', [
      '@/assets/sass/foundation/variable/_variable.scss',
      '@/assets/sass/foundation/mixin/_mixin.scss',
    ]]
  ],
};

module.exports = nuxt;
