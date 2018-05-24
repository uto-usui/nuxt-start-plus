<script>
  export default {
    head() {
      return {
        title: this.title,
        titleTemplate: '',
        meta: [
          {hid: 'description', name: 'description', content: this.desc},
          // OGP
          {name: 'og:title', content: this.title},
          {name: 'og:description', content: this.desc},
          {name: 'og:type', content: this.ogType || 'website'},
          {name: 'og:url', content: this.$store.state.data.domain || this.$store.state.productionDomain},
          {
            name: 'og:image',
            content: this.$store.state.data.domain || this.$store.state.productionDomain + '/images/ogp.png',
          },
          // Twitter Card
          {name: 'twitter:card', content: 'summary'},
          {name: 'twitter:title', content: this.title},
          {name: 'twitter:description', content: this.desc},
          {
            name: 'twitter:image',
            content: this.$store.state.data.domain || this.$store.state.productionDomain + '/images/ogp.png',
          },
        ],
      };
    },
    scrollToTop: true,
  };
</script>


